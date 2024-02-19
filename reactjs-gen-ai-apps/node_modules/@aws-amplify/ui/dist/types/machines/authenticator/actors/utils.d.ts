export declare const getFederatedSignInState: (target: 'signIn' | 'signUp') => {
    entry: string[];
    invoke: {
        src: string;
        onDone: {
            target: "signIn" | "signUp";
        };
        onError: {
            actions: string;
            target: "signIn" | "signUp";
        };
    };
};
