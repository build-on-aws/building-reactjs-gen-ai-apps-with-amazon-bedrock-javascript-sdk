import { Hub } from 'aws-amplify/utils';
import '@aws-amplify/core/internals/utils';
import '../../utils/setUserAgent/constants.mjs';
import { isFunction } from '../../utils/utils.mjs';

/**
 * Handles Amplify JS Auth hub events, by forwarding hub events as appropriate
 * xstate events.
 */
const defaultAuthHubHandler = ({ payload }, service, options) => {
    const { event } = payload;
    const { send } = service;
    const { onSignIn, onSignOut } = options ?? {};
    switch (event) {
        case 'signedIn': {
            if (isFunction(onSignIn)) {
                onSignIn(payload);
            }
            break;
        }
        case 'signInWithRedirect': {
            send('SIGN_IN_WITH_REDIRECT');
            break;
        }
        case 'signedOut':
        case 'tokenRefresh_failure': {
            if (event === 'signedOut' && isFunction(onSignOut)) {
                onSignOut();
            }
            send('SIGN_OUT');
            break;
        }
    }
};
/**
 * Listens to external auth Hub events and sends corresponding event to
 * the `service.send` of interest
 *
 * @param service - contains state machine `send` function
 * @param handler - auth event handler
 * @returns function that unsubscribes to the hub evenmt
 */
const listenToAuthHub = (service, handler = defaultAuthHubHandler) => {
    const eventHandler = (data) => handler(data, service);
    return Hub.listen('auth', eventHandler, 'authenticator-hub-handler');
};

export { defaultAuthHubHandler, listenToAuthHub };
