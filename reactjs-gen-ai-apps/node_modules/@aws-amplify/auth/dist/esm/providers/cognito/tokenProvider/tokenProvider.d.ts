import { CognitoUserPoolsTokenProvider } from './CognitoUserPoolsTokenProvider';
/**
 * The default provider for the JWT access token and ID token issued from the configured Cognito user pool. It manages
 * the refresh and storage of the tokens. It stores the tokens in `window.localStorage` if available, and falls back to
 * in-memory storage if not.
 */
export declare const cognitoUserPoolsTokenProvider: CognitoUserPoolsTokenProvider;
export declare const tokenOrchestrator: import("./TokenOrchestrator").TokenOrchestrator;
