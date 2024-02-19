import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { GetCurrentUserOutput } from '../../types';
/**
 * Gets the current user from the idToken.
 *
 * @returns GetCurrentUserOutput
 * @throws - {@link InitiateAuthException} - Thrown when the service fails to refresh the tokens.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare const getCurrentUser: (contextSpec: AmplifyServer.ContextSpec) => Promise<GetCurrentUserOutput>;
