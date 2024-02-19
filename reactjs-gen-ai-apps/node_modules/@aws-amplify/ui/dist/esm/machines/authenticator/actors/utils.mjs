const getFederatedSignInState = (target) => ({
    entry: ['sendUpdate', 'clearError'],
    invoke: {
        src: 'signInWithRedirect',
        onDone: { target },
        onError: { actions: 'setRemoteError', target },
    },
});

export { getFederatedSignInState };
