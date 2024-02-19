/**
 * This file contains helpers that lets you easily access current actor's state
 * and context.
 */
/**
 * Get the state of current actor. This is useful for checking which screen
 * to render: e.g. `getActorState(state).matches('confirmSignUp.edit').
 */
const getActorState = (state) => {
    return state.context.actorRef?.getSnapshot();
};
/**
 * Get the context of current actor. Useful for getting any nested context
 * like remoteError.
 */
const getActorContext = (state) => {
    return getActorState(state)?.context;
};

export { getActorContext, getActorState };
