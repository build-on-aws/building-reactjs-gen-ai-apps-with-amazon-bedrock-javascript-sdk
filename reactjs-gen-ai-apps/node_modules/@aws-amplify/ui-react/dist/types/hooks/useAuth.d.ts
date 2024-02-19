import { AuthUser } from 'aws-amplify/auth';
export interface UseAuthResult {
    user?: AuthUser;
    isLoading: boolean;
    error?: Error;
    /** @deprecated Fetch is handled automatically, do not use this directly */
    fetch?: () => Promise<void>;
}
/**
 * Amplify Auth React hook
 * @internal
 */
export declare const useAuth: () => UseAuthResult;
