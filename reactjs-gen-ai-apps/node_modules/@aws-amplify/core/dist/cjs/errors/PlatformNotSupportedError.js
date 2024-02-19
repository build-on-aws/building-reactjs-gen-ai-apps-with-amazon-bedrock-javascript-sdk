'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformNotSupportedError = void 0;
const types_1 = require("../types");
const AmplifyError_1 = require("./AmplifyError");
class PlatformNotSupportedError extends AmplifyError_1.AmplifyError {
    constructor() {
        super({
            name: types_1.AmplifyErrorCode.PlatformNotSupported,
            message: 'Function not supported on current platform',
        });
    }
}
exports.PlatformNotSupportedError = PlatformNotSupportedError;
//# sourceMappingURL=PlatformNotSupportedError.js.map
