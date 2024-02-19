import { AmplifyError } from '@aws-amplify/core/internals/utils';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * @internal
 */
class InAppMessagingError extends AmplifyError {
    constructor(params) {
        super(params);
        // Hack for making the custom error class work when transpiled to es5
        // TODO: Delete the following 2 lines after we change the build target to >= es2015
        this.constructor = InAppMessagingError;
        Object.setPrototypeOf(this, InAppMessagingError.prototype);
    }
}

export { InAppMessagingError };
//# sourceMappingURL=InAppMessagingError.mjs.map
