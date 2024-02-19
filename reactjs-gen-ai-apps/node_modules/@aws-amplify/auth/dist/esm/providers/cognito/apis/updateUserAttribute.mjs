import { updateUserAttributes } from './updateUserAttributes.mjs';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
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
    const output = await updateUserAttributes({
        userAttributes: { [attributeKey]: value },
        options,
    });
    return Object.values(output)[0];
};

export { updateUserAttribute };
//# sourceMappingURL=updateUserAttribute.mjs.map
