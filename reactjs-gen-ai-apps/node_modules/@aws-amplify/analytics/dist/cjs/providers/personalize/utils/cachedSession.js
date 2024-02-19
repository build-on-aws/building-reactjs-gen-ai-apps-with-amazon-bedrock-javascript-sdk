'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCachedSession = exports.resolveCachedSession = void 0;
const core_1 = require("@aws-amplify/core");
const utils_1 = require("@aws-amplify/core/internals/utils");
const PERSONALIZE_CACHE_USERID = '_awsct_uid';
const PERSONALIZE_CACHE_SESSIONID = '_awsct_sid';
const DEFAULT_CACHE_PREFIX = 'personalize';
const DELIMITER = '.';
const CACHE_EXPIRY_IN_DAYS = 7;
const normalize = (key) => [key, (0, utils_1.isBrowser)() ? window.location.host : DEFAULT_CACHE_PREFIX].join(DELIMITER);
const getCache = (key) => core_1.Cache.getItem(normalize(key));
const setCache = (key, value) => {
    const expiredAt = new Date(Date.now() + 3600000 * 24 * CACHE_EXPIRY_IN_DAYS);
    core_1.Cache.setItem(normalize(key), value, {
        expires: expiredAt.getTime(),
    });
};
const resolveCachedSession = async () => {
    let sessionId = await getCache(PERSONALIZE_CACHE_SESSIONID);
    if (!sessionId) {
        sessionId = (0, utils_1.amplifyUuid)();
        setCache(PERSONALIZE_CACHE_SESSIONID, sessionId);
    }
    const userId = await getCache(PERSONALIZE_CACHE_USERID);
    return {
        sessionId,
        userId,
    };
};
exports.resolveCachedSession = resolveCachedSession;
const updateCachedSession = (newUserId, currentSessionId, currentUserId) => {
    const isNoCachedSession = !currentSessionId;
    const isSignOutCase = !newUserId && !currentUserId;
    const isSwitchUserCase = !!newUserId && !!currentUserId && newUserId !== currentUserId;
    const isRequireNewSession = isNoCachedSession || isSignOutCase || isSwitchUserCase;
    const isRequireUpdateSession = !!currentSessionId && !currentUserId && !!newUserId;
    if (isRequireNewSession) {
        const newSessionId = (0, utils_1.amplifyUuid)();
        setCache(PERSONALIZE_CACHE_SESSIONID, newSessionId);
        setCache(PERSONALIZE_CACHE_USERID, newUserId);
    }
    else if (isRequireUpdateSession) {
        setCache(PERSONALIZE_CACHE_USERID, newUserId);
    }
};
exports.updateCachedSession = updateCachedSession;
//# sourceMappingURL=cachedSession.js.map
