export declare const flowCancelledMessage = "`signInWithRedirect` has been canceled.";
export declare const validationFailedMessage = "An error occurred while validating the state.";
export declare const validationRecoverySuggestion = "Try to initiate an OAuth flow from Amplify";
export declare const validateState: (state?: string | null) => Promise<string>;
