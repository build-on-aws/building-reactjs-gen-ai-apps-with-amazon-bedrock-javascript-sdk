import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { FieldDescription } from './FieldDescription.mjs';
import { FieldErrorMessage } from './FieldErrorMessage.mjs';
import { Label } from '../Label/Label.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const FieldPrimitive = (props, ref) => {
    const { className, size, testId, children, label, labelHidden, errorMessage, hasError, descriptiveText, ...rest } = props;
    return (React.createElement(Flex, { className: classNames(ComponentClassName.Field, classNameModifier(ComponentClassName.Field, size), className), testId: testId, ref: ref, ...rest },
        label ? React.createElement(Label, { visuallyHidden: labelHidden }, label) : null,
        React.createElement(FieldDescription, { labelHidden: labelHidden, descriptiveText: descriptiveText }),
        children,
        errorMessage ? (React.createElement(FieldErrorMessage, { hasError: hasError, errorMessage: errorMessage })) : null));
};
const Field = primitiveWithForwardRef(FieldPrimitive);
Field.displayName = 'Field';

export { Field };
