import { createAssertionFunction } from '../../errors/createAssertionFunction.mjs';
import '../../types/errors.mjs';
import '../../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var PinpointValidationErrorCode;
(function (PinpointValidationErrorCode) {
    PinpointValidationErrorCode["NoAppId"] = "NoAppId";
})(PinpointValidationErrorCode || (PinpointValidationErrorCode = {}));
const pinpointValidationErrorMap = {
    [PinpointValidationErrorCode.NoAppId]: {
        message: 'Missing application id.',
    },
};
const assert = createAssertionFunction(pinpointValidationErrorMap);

export { PinpointValidationErrorCode, assert };
//# sourceMappingURL=errorHelpers.mjs.map
