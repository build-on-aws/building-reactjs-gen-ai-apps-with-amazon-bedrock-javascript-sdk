import { useRef, useEffect } from 'react';

function usePreviousValue(value) {
    const previous = useRef();
    // update ref post render
    useEffect(() => {
        previous.current = value;
    }, [value]);
    // return previous ref
    return previous.current;
}

export { usePreviousValue as default };
