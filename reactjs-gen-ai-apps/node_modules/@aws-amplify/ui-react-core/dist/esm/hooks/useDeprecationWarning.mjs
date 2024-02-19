import * as React from 'react';

/**
 * Logs a deprecation warning message.
 *
 * @important Please use the React/React Native specific platform implementations.
 * This version of the hook is a base implementation that the others extend from due
 * to env differences between running in RN or the browser
 */
const useDeprecationWarning = ({ shouldWarn, message, }) => {
    React.useEffect(() => {
        if (shouldWarn) {
            // eslint-disable-next-line no-console
            console.warn(message);
        }
    }, [shouldWarn, message]);
};

export { useDeprecationWarning as default };
