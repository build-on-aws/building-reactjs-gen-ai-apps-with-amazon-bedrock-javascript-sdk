'use strict';

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanActiveSignInState = exports.setActiveSignInState = exports.signInStore = void 0;
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
exports.signInStore = createStore(signInReducer);
function setActiveSignInState(state) {
    exports.signInStore.dispatch({
        type: 'SET_SIGN_IN_STATE',
        value: state,
    });
}
exports.setActiveSignInState = setActiveSignInState;
function cleanActiveSignInState() {
    exports.signInStore.dispatch({ type: 'SET_INITIAL_STATE' });
}
exports.cleanActiveSignInState = cleanActiveSignInState;
//# sourceMappingURL=signInStore.js.map
