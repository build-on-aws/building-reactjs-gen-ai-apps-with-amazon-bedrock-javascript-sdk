import { DeleteUserAttributesInput } from '../types';
/**
 * Deletes user attributes.
 *
 * @param input -  The DeleteUserAttributesInput object
 * @throws  -{@link DeleteUserAttributesException } - Thrown due to invalid attribute.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function deleteUserAttributes(input: DeleteUserAttributesInput): Promise<void>;
