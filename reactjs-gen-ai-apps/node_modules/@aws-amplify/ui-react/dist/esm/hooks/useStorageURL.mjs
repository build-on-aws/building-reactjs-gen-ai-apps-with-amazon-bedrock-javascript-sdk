import * as React from 'react';
import * as Storage from 'aws-amplify/storage';
import { isFunction } from '@aws-amplify/ui';
import { useHasValueUpdated } from '@aws-amplify/ui-react-core';

const useStorageURL = ({ key, options, fallbackURL, onStorageGetError, }) => {
    const [url, setURL] = React.useState();
    const hasKeyUpdated = useHasValueUpdated(key);
    React.useEffect(() => {
        if (!hasKeyUpdated) {
            return;
        }
        let ignore = false;
        const input = { key, options };
        Storage.getUrl(input)
            .then(({ url }) => {
            if (ignore) {
                return;
            }
            setURL(url.toString());
        })
            .catch((error) => {
            if (ignore) {
                return;
            }
            if (isFunction(onStorageGetError)) {
                onStorageGetError(error);
            }
            if (fallbackURL) {
                setURL(fallbackURL);
            }
            return () => {
                ignore = true;
            };
        });
    }, [key, options, fallbackURL, onStorageGetError, hasKeyUpdated]);
    return url;
};

export { useStorageURL };
