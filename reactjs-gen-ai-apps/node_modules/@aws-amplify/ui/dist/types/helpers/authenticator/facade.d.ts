/**
 * This file contains helpers that translates xstate internals to more
 * understandable authenticator contexts. We provide these contexts with
 * `useAuthenticator` hook/composable/service.
 */
import { Sender } from 'xstate';
import { AuthUser } from 'aws-amplify/auth';
import { FederatedProvider, LoginMechanism, SocialProvider, UnverifiedUserAttributes, ValidationError } from '../../types';
import { AuthEvent, AuthEventData, AuthMachineState, ChallengeName, NavigableRoute, V5CodeDeliveryDetails } from '../../machines/authenticator/types';
export type AuthenticatorRoute = 'authenticated' | 'confirmResetPassword' | 'confirmSignIn' | 'confirmSignUp' | 'confirmVerifyUser' | 'forceNewPassword' | 'idle' | 'forgotPassword' | 'setup' | 'signOut' | 'setupTotp' | 'signIn' | 'signUp' | 'transition' | 'verifyUser';
type AuthenticatorValidationErrors = ValidationError;
export type AuthStatus = 'configuring' | 'authenticated' | 'unauthenticated';
interface AuthenticatorServiceContextFacade {
    authStatus: AuthStatus;
    challengeName: ChallengeName | undefined;
    codeDeliveryDetails: V5CodeDeliveryDetails;
    error: string;
    hasValidationErrors: boolean;
    isPending: boolean;
    route: AuthenticatorRoute;
    socialProviders: SocialProvider[];
    totpSecretCode: string | null;
    unverifiedUserAttributes: UnverifiedUserAttributes;
    user: AuthUser;
    username: string;
    validationErrors: AuthenticatorValidationErrors;
}
type SendEventAlias = 'initializeMachine' | 'resendCode' | 'signOut' | 'submitForm' | 'updateForm' | 'updateBlur' | 'toFederatedSignIn' | 'toForgotPassword' | 'toSignIn' | 'toSignUp' | 'skipVerification';
type AuthenticatorSendEventAliases = Record<SendEventAlias, (data?: AuthEventData) => void>;
export interface AuthenticatorServiceFacade extends AuthenticatorSendEventAliases, AuthenticatorServiceContextFacade {
}
interface NextAuthenticatorServiceContextFacade {
    challengeName: ChallengeName | undefined;
    codeDeliveryDetails: V5CodeDeliveryDetails | undefined;
    errorMessage: string | undefined;
    federatedProviders: FederatedProvider[] | undefined;
    loginMechanism: LoginMechanism | undefined;
    isPending: boolean;
    route: AuthenticatorRoute;
    totpSecretCode: string | undefined;
    username: string | undefined;
    unverifiedUserAttributes: UnverifiedUserAttributes | undefined;
}
interface NextAuthenticatorSendEventAliases extends Pick<AuthenticatorSendEventAliases, 'toFederatedSignIn'> {
    handleSubmit: AuthenticatorSendEventAliases['submitForm'];
    resendConfirmationCode: () => void;
    setRoute: (route: NavigableRoute) => void;
    skipAttributeVerification: () => void;
}
export interface NextAuthenticatorServiceFacade extends NextAuthenticatorSendEventAliases, NextAuthenticatorServiceContextFacade {
}
/**
 * Creates public facing auth helpers that abstracts out xstate implementation
 * detail. Each framework implementation can export these helpers so that
 * developers can send events without having to learn internals.
 *
 * ```
 * const [state, send] = useActor(...);
 * const { submit } = getSendEventAliases(send);
 * submit({ username, password})
 * ```
 */
export declare const getSendEventAliases: (send: Sender<AuthEvent>) => AuthenticatorSendEventAliases;
export declare const getServiceContextFacade: (state: AuthMachineState) => AuthenticatorServiceContextFacade;
export declare const getNextServiceContextFacade: (state: AuthMachineState) => NextAuthenticatorServiceContextFacade;
export declare const getServiceFacade: ({ send, state, }: {
    send: Sender<AuthEvent>;
    state: AuthMachineState;
}) => AuthenticatorServiceFacade;
export declare const getNextServiceFacade: ({ send, state, }: {
    send: Sender<AuthEvent>;
    state: AuthMachineState;
}) => NextAuthenticatorServiceFacade;
export {};
