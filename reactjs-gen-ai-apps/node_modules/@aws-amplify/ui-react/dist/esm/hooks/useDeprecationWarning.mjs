import { useDeprecationWarning as useDeprecationWarning$1 } from '@aws-amplify/ui-react-core';

/**
 * Logs a deprecation warning `message` to the console.
 */
const useDeprecationWarning = ({ message, shouldWarn: _shouldWarn, }) => {
    const shouldWarn = _shouldWarn &&
        // show message on builds without Node `process` polyfill
        // or with process.env.NODE_ENV not production
        (typeof process === 'undefined' ||
            (process && process.env.NODE_ENV !== 'production'));
    useDeprecationWarning$1({ message, shouldWarn });
};

export { useDeprecationWarning };
