// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
/**
 * Transforms a user attributes object into an array of AttributeType objects.
 * @param attributes user attributes to be mapped to AttributeType objects.
 * @returns an array of AttributeType objects.
 */
function toAttributeType(attributes) {
    return Object.entries(attributes).map(([key, value]) => ({
        Name: key,
        Value: value,
    }));
}
/**
 * Transforms an array of AttributeType objects into a user attributes object.
 *
 * @param attributes - an array of AttributeType objects.
 * @returns AuthUserAttributes object.
 */
function toAuthUserAttribute(attributes) {
    const userAttributes = {};
    attributes?.forEach(attribute => {
        if (attribute.Name)
            userAttributes[attribute.Name] = attribute.Value;
    });
    return userAttributes;
}

export { toAttributeType, toAuthUserAttribute };
//# sourceMappingURL=apiHelpers.mjs.map
