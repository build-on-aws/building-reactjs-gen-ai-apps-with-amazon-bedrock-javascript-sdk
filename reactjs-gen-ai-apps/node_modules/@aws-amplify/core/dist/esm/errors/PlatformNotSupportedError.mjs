import { AmplifyErrorCode } from '../types/errors.mjs';
import { AmplifyError } from './AmplifyError.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
class PlatformNotSupportedError extends AmplifyError {
    constructor() {
        super({
            name: AmplifyErrorCode.PlatformNotSupported,
            message: 'Function not supported on current platform',
        });
    }
}

export { PlatformNotSupportedError };
//# sourceMappingURL=PlatformNotSupportedError.mjs.map
