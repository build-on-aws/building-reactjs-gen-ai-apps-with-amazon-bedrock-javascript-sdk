import { SignOutInput } from '../types';
/**
 * Signs a user out
 *
 * @param input - The SignOutInput object
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function signOut(input?: SignOutInput): Promise<void>;
