'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.ServiceWorkerErrorCode = void 0;
const errors_1 = require("../errors");
var ServiceWorkerErrorCode;
(function (ServiceWorkerErrorCode) {
    ServiceWorkerErrorCode["UndefinedInstance"] = "UndefinedInstance";
    ServiceWorkerErrorCode["UndefinedRegistration"] = "UndefinedRegistration";
    ServiceWorkerErrorCode["Unavailable"] = "Unavailable";
})(ServiceWorkerErrorCode = exports.ServiceWorkerErrorCode || (exports.ServiceWorkerErrorCode = {}));
const serviceWorkerErrorMap = {
    [ServiceWorkerErrorCode.UndefinedInstance]: {
        message: 'Service Worker instance is undefined.',
    },
    [ServiceWorkerErrorCode.UndefinedRegistration]: {
        message: 'Service Worker registration is undefined.',
    },
    [ServiceWorkerErrorCode.Unavailable]: {
        message: 'Service Worker not available.',
    },
};
exports.assert = (0, errors_1.createAssertionFunction)(serviceWorkerErrorMap);
//# sourceMappingURL=errorHelpers.js.map
