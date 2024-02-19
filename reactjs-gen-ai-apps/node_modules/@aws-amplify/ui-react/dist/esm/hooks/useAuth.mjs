import * as React from 'react';
import { Hub } from '@aws-amplify/core';
import { getCurrentUser } from 'aws-amplify/auth';

/**
 * Amplify Auth React hook
 * @internal
 */
const useAuth = () => {
    const [result, setResult] = React.useState({
        error: undefined,
        isLoading: true,
        user: undefined,
    });
    /**
     * Hub events like `tokenRefresh` will not give back the user object.
     * This util will be used to get current user after those events.
     */
    const fetchCurrentUser = React.useCallback(async () => {
        setResult((prevResult) => ({ ...prevResult, isLoading: true }));
        try {
            const user = await getCurrentUser();
            setResult({ user, isLoading: false });
        }
        catch (e) {
            const error = e;
            setResult({ error, isLoading: false });
        }
    }, []);
    const handleAuth = React.useCallback(({ payload }) => {
        switch (payload.event) {
            // success events
            case 'signedIn':
            case 'signUp':
            case 'autoSignIn': {
                setResult({ user: payload.data, isLoading: false });
                break;
            }
            case 'signedOut': {
                setResult({ user: undefined, isLoading: false });
                break;
            }
            // failure events
            case 'tokenRefresh_failure':
            case 'signIn_failure': {
                setResult({ error: payload.data, isLoading: false });
                break;
            }
            case 'autoSignIn_failure': {
                // autoSignIn just returns error message. Wrap it to an Error object
                setResult({ error: new Error(payload.message), isLoading: false });
                break;
            }
            // events that need another fetch
            case 'tokenRefresh': {
                fetchCurrentUser();
                break;
            }
        }
    }, [fetchCurrentUser]);
    React.useEffect(() => {
        const unsubscribe = Hub.listen('auth', handleAuth, 'useAuth');
        fetchCurrentUser(); // on init, see if user is already logged in
        return unsubscribe;
    }, [handleAuth, fetchCurrentUser]);
    return {
        ...result,
        /** @deprecated Fetch is handled automatically, do not use this directly */
        fetch: fetchCurrentUser,
    };
};

export { useAuth };
