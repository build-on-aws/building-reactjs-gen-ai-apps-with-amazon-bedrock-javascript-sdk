'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWebWorker = void 0;
const isWebWorker = () => {
    if (typeof self === 'undefined') {
        return false;
    }
    const selfContext = self;
    return (typeof selfContext.WorkerGlobalScope !== 'undefined' &&
        self instanceof selfContext.WorkerGlobalScope);
};
exports.isWebWorker = isWebWorker;
//# sourceMappingURL=isWebWorker.js.map
