'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.I18nErrorCode = void 0;
const errors_1 = require("../errors");
var I18nErrorCode;
(function (I18nErrorCode) {
    I18nErrorCode["NotConfigured"] = "NotConfigured";
})(I18nErrorCode = exports.I18nErrorCode || (exports.I18nErrorCode = {}));
const i18nErrorMap = {
    [I18nErrorCode.NotConfigured]: {
        message: 'i18n is not configured.',
    },
};
exports.assert = (0, errors_1.createAssertionFunction)(i18nErrorMap);
//# sourceMappingURL=errorHelpers.js.map
