import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { useFieldset } from '../Fieldset/useFieldset.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const TextAreaPrimitive = ({ className, isDisabled, isReadOnly, isRequired, size, hasError = false, variation, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Textarea, ComponentClassName.FieldGroupControl, classNameModifier(ComponentClassName.Textarea, variation), classNameModifier(ComponentClassName.Textarea, size), classNameModifierByFlag(ComponentClassName.Textarea, 'error', hasError), className);
    const { isFieldsetDisabled } = useFieldset();
    return (React.createElement(View, { "aria-invalid": hasError, as: "textarea", className: componentClasses, disabled: isFieldsetDisabled ? isFieldsetDisabled : isDisabled, readOnly: isReadOnly, ref: ref, required: isRequired, ...rest }));
};
const TextArea = primitiveWithForwardRef(TextAreaPrimitive);
TextArea.displayName = 'TextArea';

export { TextArea };
