import { Cache } from '@aws-amplify/core';
import { amplifyUuid, isBrowser } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const PERSONALIZE_CACHE_USERID = '_awsct_uid';
const PERSONALIZE_CACHE_SESSIONID = '_awsct_sid';
const DEFAULT_CACHE_PREFIX = 'personalize';
const DELIMITER = '.';
const CACHE_EXPIRY_IN_DAYS = 7;
const normalize = (key) => [key, isBrowser() ? window.location.host : DEFAULT_CACHE_PREFIX].join(DELIMITER);
const getCache = (key) => Cache.getItem(normalize(key));
const setCache = (key, value) => {
    const expiredAt = new Date(Date.now() + 3600000 * 24 * CACHE_EXPIRY_IN_DAYS);
    Cache.setItem(normalize(key), value, {
        expires: expiredAt.getTime(),
    });
};
const resolveCachedSession = async () => {
    let sessionId = await getCache(PERSONALIZE_CACHE_SESSIONID);
    if (!sessionId) {
        sessionId = amplifyUuid();
        setCache(PERSONALIZE_CACHE_SESSIONID, sessionId);
    }
    const userId = await getCache(PERSONALIZE_CACHE_USERID);
    return {
        sessionId,
        userId,
    };
};
const updateCachedSession = (newUserId, currentSessionId, currentUserId) => {
    const isNoCachedSession = !currentSessionId;
    const isSignOutCase = !newUserId && !currentUserId;
    const isSwitchUserCase = !!newUserId && !!currentUserId && newUserId !== currentUserId;
    const isRequireNewSession = isNoCachedSession || isSignOutCase || isSwitchUserCase;
    const isRequireUpdateSession = !!currentSessionId && !currentUserId && !!newUserId;
    if (isRequireNewSession) {
        const newSessionId = amplifyUuid();
        setCache(PERSONALIZE_CACHE_SESSIONID, newSessionId);
        setCache(PERSONALIZE_CACHE_USERID, newUserId);
    }
    else if (isRequireUpdateSession) {
        setCache(PERSONALIZE_CACHE_USERID, newUserId);
    }
};

export { resolveCachedSession, updateCachedSession };
//# sourceMappingURL=cachedSession.mjs.map
