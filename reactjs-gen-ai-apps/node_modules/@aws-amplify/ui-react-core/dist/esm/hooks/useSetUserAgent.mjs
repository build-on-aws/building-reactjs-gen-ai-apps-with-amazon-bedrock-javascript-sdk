import { useEffect } from 'react';
import { setUserAgent } from '@aws-amplify/ui';

function useSetUserAgent({ componentName, packageName, version, }) {
    useEffect(() => {
        const clearUserAgent = setUserAgent({
            componentName,
            packageName,
            version,
        });
        return clearUserAgent;
    }, [componentName, packageName, version]);
}

export { useSetUserAgent as default };
