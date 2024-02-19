import { createAssertionFunction } from '../errors/createAssertionFunction.mjs';
import '../types/errors.mjs';
import '../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var ServiceWorkerErrorCode;
(function (ServiceWorkerErrorCode) {
    ServiceWorkerErrorCode["UndefinedInstance"] = "UndefinedInstance";
    ServiceWorkerErrorCode["UndefinedRegistration"] = "UndefinedRegistration";
    ServiceWorkerErrorCode["Unavailable"] = "Unavailable";
})(ServiceWorkerErrorCode || (ServiceWorkerErrorCode = {}));
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
const assert = createAssertionFunction(serviceWorkerErrorMap);

export { ServiceWorkerErrorCode, assert };
//# sourceMappingURL=errorHelpers.mjs.map
