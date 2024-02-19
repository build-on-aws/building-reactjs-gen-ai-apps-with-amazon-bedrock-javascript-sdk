import { UpdateUserAttributesInput, UpdateUserAttributesOutput } from '../types';
/**
 * Updates user's attributes while authenticated.
 *
 * @param input - The UpdateUserAttributesInput object
 * @returns UpdateUserAttributesOutput
 * @throws - {@link UpdateUserAttributesException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare const updateUserAttributes: (input: UpdateUserAttributesInput) => Promise<UpdateUserAttributesOutput>;
