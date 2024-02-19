'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackgroundProcessManagerState = void 0;
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
})(exports.BackgroundProcessManagerState || (exports.BackgroundProcessManagerState = {}));
//# sourceMappingURL=types.js.map
