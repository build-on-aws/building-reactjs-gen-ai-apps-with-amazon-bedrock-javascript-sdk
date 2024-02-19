import React__default from 'react';
import { translate } from '@aws-amplify/ui';
import { useAuthenticator } from '@aws-amplify/ui-react-core';
import { Alert } from '../../../primitives/Alert/Alert.mjs';

const RemoteErrorMessage = () => {
    const { error } = useAuthenticator((context) => [context.error]);
    return (React__default.createElement(React__default.Fragment, null, error ? (React__default.createElement(Alert, { variation: "error", isDismissible: true }, translate(error))) : null));
};

export { RemoteErrorMessage };
