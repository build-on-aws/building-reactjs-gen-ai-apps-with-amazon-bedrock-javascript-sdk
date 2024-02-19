import { UpdateUserAttributeInput, UpdateUserAttributeOutput } from '../types';
/**
 * Updates user's attribute while authenticated.
 *
 * @param input - The UpdateUserAttributeInput object
 * @returns UpdateUserAttributeOutput
 * @throws - {@link UpdateUserAttributesException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare const updateUserAttribute: (input: UpdateUserAttributeInput) => Promise<UpdateUserAttributeOutput>;
