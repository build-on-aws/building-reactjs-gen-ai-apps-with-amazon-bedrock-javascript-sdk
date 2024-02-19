import { AuthenticationHelper } from './AuthenticationHelper';
/**
 * Returns a new {@link AuthenticationHelper} instance with randomly generated BigInteger seed
 *
 * @param userPoolName Cognito user pool name.
 * @returns An {@link AuthenticationHelper} instance.
 *
 * @internal
 */
export declare const getAuthenticationHelper: (userPoolName: string) => Promise<AuthenticationHelper>;
