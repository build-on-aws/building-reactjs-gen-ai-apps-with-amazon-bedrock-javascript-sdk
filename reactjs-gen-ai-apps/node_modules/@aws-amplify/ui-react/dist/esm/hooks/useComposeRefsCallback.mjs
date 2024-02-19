import * as React from 'react';
import { isFunction } from '@aws-amplify/ui';

/**
 *  Creates ref callback to compose together external and internal refs
 */
function useComposeRefsCallback({ externalRef, internalRef, }) {
    return React.useCallback((node) => {
        // Handle callback ref
        if (isFunction(externalRef)) {
            externalRef(node);
        }
        else if (externalRef) {
            externalRef.current = node;
        }
        internalRef.current = node;
    }, [externalRef, internalRef]);
}

export { useComposeRefsCallback };
