import { loadAmplifyWebBrowser } from '@aws-amplify/react-native';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const openAuthSession = async (url, redirectUrls, prefersEphemeralSession) => {
    try {
        const redirectUrl = await loadAmplifyWebBrowser().openAuthSessionAsync(url, redirectUrls, prefersEphemeralSession);
        if (!redirectUrl) {
            return { type: 'canceled' };
        }
        return { type: 'success', url: redirectUrl };
    }
    catch (error) {
        return { type: 'error', error };
    }
};

export { openAuthSession };
//# sourceMappingURL=openAuthSession.native.mjs.map
