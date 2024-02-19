import React__default from 'react';
import useAuthenticator from '../useAuthenticator/useAuthenticator.mjs';

// only select `route` from machine context
const routeSelector = ({ route }) => [route];
function useAuthenticatorInitMachine(data) {
    const { route, initializeMachine } = useAuthenticator(routeSelector);
    const hasInitialized = React__default.useRef(false);
    React__default.useEffect(() => {
        if (!hasInitialized.current && route === 'setup') {
            initializeMachine(data);
            hasInitialized.current = true;
        }
    }, [initializeMachine, route, data]);
}

export { useAuthenticatorInitMachine as default, routeSelector };
