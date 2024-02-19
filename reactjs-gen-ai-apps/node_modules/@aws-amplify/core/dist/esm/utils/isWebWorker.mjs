// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const isWebWorker = () => {
    if (typeof self === 'undefined') {
        return false;
    }
    const selfContext = self;
    return (typeof selfContext.WorkerGlobalScope !== 'undefined' &&
        self instanceof selfContext.WorkerGlobalScope);
};

export { isWebWorker };
//# sourceMappingURL=isWebWorker.mjs.map
