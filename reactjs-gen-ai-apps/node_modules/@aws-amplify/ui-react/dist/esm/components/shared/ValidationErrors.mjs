import React__default from 'react';
import { translate } from '@aws-amplify/ui';
import { View } from '../../primitives/View/View.mjs';
import { Text } from '../../primitives/Text/Text.mjs';

const ValidationErrors = ({ errors, id, dataAttr, }) => {
    if (!(errors?.length > 0))
        return null;
    const dataAttrProp = dataAttr ? { [dataAttr]: true } : {};
    return (React__default.createElement(View, { ...dataAttrProp, id: id }, errors.map((error) => {
        return (React__default.createElement(Text, { key: error, role: "alert", variation: "error" }, translate(error)));
    })));
};

export { ValidationErrors };
