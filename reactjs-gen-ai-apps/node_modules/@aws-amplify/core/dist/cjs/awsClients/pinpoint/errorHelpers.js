'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.PinpointValidationErrorCode = void 0;
const errors_1 = require("../../errors");
var PinpointValidationErrorCode;
(function (PinpointValidationErrorCode) {
    PinpointValidationErrorCode["NoAppId"] = "NoAppId";
})(PinpointValidationErrorCode = exports.PinpointValidationErrorCode || (exports.PinpointValidationErrorCode = {}));
const pinpointValidationErrorMap = {
    [PinpointValidationErrorCode.NoAppId]: {
        message: 'Missing application id.',
    },
};
exports.assert = (0, errors_1.createAssertionFunction)(pinpointValidationErrorMap);
//# sourceMappingURL=errorHelpers.js.map
