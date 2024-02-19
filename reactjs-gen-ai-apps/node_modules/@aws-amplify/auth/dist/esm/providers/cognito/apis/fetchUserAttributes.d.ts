import { FetchUserAttributesOutput } from '../types';
/**
 * Fetches the current user attributes while authenticated.
 *
 * @throws - {@link GetUserException} - Cognito service errors thrown when the service is not able to get the user.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare const fetchUserAttributes: () => Promise<FetchUserAttributesOutput>;
