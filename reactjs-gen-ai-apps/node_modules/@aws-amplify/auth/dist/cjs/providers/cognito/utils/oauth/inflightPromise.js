'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveAndClearInflightPromises = exports.addInflightPromise = void 0;
const inflightPromises = [];
const addInflightPromise = (resolver) => {
    inflightPromises.push(resolver);
};
exports.addInflightPromise = addInflightPromise;
const resolveAndClearInflightPromises = () => {
    while (inflightPromises.length) {
        inflightPromises.pop()?.();
    }
};
exports.resolveAndClearInflightPromises = resolveAndClearInflightPromises;
//# sourceMappingURL=inflightPromise.js.map
