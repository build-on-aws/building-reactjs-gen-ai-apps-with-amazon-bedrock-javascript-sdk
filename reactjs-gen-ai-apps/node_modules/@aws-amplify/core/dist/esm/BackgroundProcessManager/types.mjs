// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * All possible states a `BackgroundProcessManager` instance can be in.
 */
var BackgroundProcessManagerState;
(function (BackgroundProcessManagerState) {
    /**
     * Accepting new jobs.
     */
    BackgroundProcessManagerState["Open"] = "Open";
    /**
     * Not accepting new jobs. Waiting for submitted jobs to complete.
     */
    BackgroundProcessManagerState["Closing"] = "Closing";
    /**
     * Not accepting new jobs. All submitted jobs are complete.
     */
    BackgroundProcessManagerState["Closed"] = "Closed";
})(BackgroundProcessManagerState || (BackgroundProcessManagerState = {}));

export { BackgroundProcessManagerState };
//# sourceMappingURL=types.mjs.map
