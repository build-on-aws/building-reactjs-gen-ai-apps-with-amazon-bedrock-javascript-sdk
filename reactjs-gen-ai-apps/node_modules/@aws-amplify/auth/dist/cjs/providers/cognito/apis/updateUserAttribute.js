'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserAttribute = void 0;
const updateUserAttributes_1 = require("./updateUserAttributes");
/**
 * Updates user's attribute while authenticated.
 *
 * @param input - The UpdateUserAttributeInput object
 * @returns UpdateUserAttributeOutput
 * @throws - {@link UpdateUserAttributesException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
const updateUserAttribute = async (input) => {
    const { userAttribute: { attributeKey, value }, options, } = input;
    const output = await (0, updateUserAttributes_1.updateUserAttributes)({
        userAttributes: { [attributeKey]: value },
        options,
    });
    return Object.values(output)[0];
};
exports.updateUserAttribute = updateUserAttribute;
//# sourceMappingURL=updateUserAttribute.js.map
