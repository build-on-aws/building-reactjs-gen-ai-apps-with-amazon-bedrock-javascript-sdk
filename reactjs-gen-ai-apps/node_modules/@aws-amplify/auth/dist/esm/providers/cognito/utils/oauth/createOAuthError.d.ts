import { AuthError } from '../../../../errors/AuthError';
export declare const createOAuthError: (message: string, recoverySuggestion?: string) => AuthError;
