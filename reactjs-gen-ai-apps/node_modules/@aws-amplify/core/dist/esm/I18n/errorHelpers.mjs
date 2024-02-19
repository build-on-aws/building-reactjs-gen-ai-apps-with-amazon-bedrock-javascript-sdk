import { createAssertionFunction } from '../errors/createAssertionFunction.mjs';
import '../types/errors.mjs';
import '../errors/errorHelpers.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
var I18nErrorCode;
(function (I18nErrorCode) {
    I18nErrorCode["NotConfigured"] = "NotConfigured";
})(I18nErrorCode || (I18nErrorCode = {}));
const i18nErrorMap = {
    [I18nErrorCode.NotConfigured]: {
        message: 'i18n is not configured.',
    },
};
const assert = createAssertionFunction(i18nErrorMap);

export { I18nErrorCode, assert };
//# sourceMappingURL=errorHelpers.mjs.map
