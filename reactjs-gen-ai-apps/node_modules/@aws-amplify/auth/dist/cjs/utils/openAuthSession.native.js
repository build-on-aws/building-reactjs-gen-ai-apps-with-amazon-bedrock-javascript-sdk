'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.openAuthSession = void 0;
const react_native_1 = require("@aws-amplify/react-native");
const openAuthSession = async (url, redirectUrls, prefersEphemeralSession) => {
    try {
        const redirectUrl = await (0, react_native_1.loadAmplifyWebBrowser)().openAuthSessionAsync(url, redirectUrls, prefersEphemeralSession);
        if (!redirectUrl) {
            return { type: 'canceled' };
        }
        return { type: 'success', url: redirectUrl };
    }
    catch (error) {
        return { type: 'error', error };
    }
};
exports.openAuthSession = openAuthSession;
//# sourceMappingURL=openAuthSession.native.js.map
