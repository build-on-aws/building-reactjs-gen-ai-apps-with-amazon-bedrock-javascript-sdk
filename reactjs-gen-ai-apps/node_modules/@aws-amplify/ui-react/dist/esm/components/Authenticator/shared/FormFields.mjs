import * as React from 'react';
import { FormField } from './FormField.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';

function FormFields() {
    const { fields } = useAuthenticator(({ route }) => [route]);
    const formFields = React.useRef(fields.map((field, index) => (React.createElement(FormField
    // use index for key, field order is static
    , { 
        // use index for key, field order is static
        key: index, ...field })))).current;
    return React.createElement(React.Fragment, null, formFields);
}

export { FormFields };
