import React__default from 'react';
import { isTypedFunction } from '@aws-amplify/ui';

function useTimeout({ callback, delay, }) {
    const storedCallback = React__default.useRef(callback);
    React__default.useLayoutEffect(() => {
        storedCallback.current = callback;
    }, [callback]);
    React__default.useEffect(() => {
        if (!isTypedFunction(storedCallback.current) || !delay) {
            return;
        }
        const timeoutId = setTimeout(() => {
            storedCallback.current?.();
        }, delay);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [delay]);
}

export { useTimeout as default };
