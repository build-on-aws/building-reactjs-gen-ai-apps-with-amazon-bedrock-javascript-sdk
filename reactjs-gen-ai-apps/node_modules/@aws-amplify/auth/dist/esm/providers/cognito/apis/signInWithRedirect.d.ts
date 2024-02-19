import '../utils/oauth/enableOAuthListener';
import { SignInWithRedirectInput } from '../types';
/**
 * Signs in a user with OAuth. Redirects the application to an Identity Provider.
 *
 * @param input - The SignInWithRedirectInput object, if empty it will redirect to Cognito HostedUI
 *
 * @throws AuthTokenConfigException - Thrown when the user pool config is invalid.
 * @throws OAuthNotConfigureException - Thrown when the oauth config is invalid.
 */
export declare function signInWithRedirect(input?: SignInWithRedirectInput): Promise<void>;
