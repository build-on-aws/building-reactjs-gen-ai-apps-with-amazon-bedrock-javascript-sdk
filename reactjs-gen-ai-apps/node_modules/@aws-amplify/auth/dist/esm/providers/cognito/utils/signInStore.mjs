// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const signInReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SIGN_IN_SESSION':
            return {
                ...state,
                signInSession: action.value,
            };
        case 'SET_SIGN_IN_STATE':
            return {
                ...action.value,
            };
        case 'SET_CHALLENGE_NAME':
            return {
                ...state,
                challengeName: action.value,
            };
        case 'SET_USERNAME':
            return {
                ...state,
                username: action.value,
            };
        case 'SET_INITIAL_STATE':
            return defaultState();
        default:
            return state;
    }
};
function defaultState() {
    return {
        username: undefined,
        challengeName: undefined,
        signInSession: undefined,
    };
}
const createStore = reducer => {
    let currentState = reducer(defaultState(), { type: 'SET_INITIAL_STATE' });
    return {
        getState: () => currentState,
        dispatch: action => {
            currentState = reducer(currentState, action);
        },
    };
};
const signInStore = createStore(signInReducer);
function setActiveSignInState(state) {
    signInStore.dispatch({
        type: 'SET_SIGN_IN_STATE',
        value: state,
    });
}
function cleanActiveSignInState() {
    signInStore.dispatch({ type: 'SET_INITIAL_STATE' });
}

export { cleanActiveSignInState, setActiveSignInState, signInStore };
//# sourceMappingURL=signInStore.mjs.map
