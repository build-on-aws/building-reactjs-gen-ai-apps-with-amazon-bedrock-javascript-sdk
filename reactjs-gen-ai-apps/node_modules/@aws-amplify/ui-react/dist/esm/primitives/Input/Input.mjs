import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { useFieldset } from '../Fieldset/useFieldset.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const InputPrimitive = ({ autoComplete, checked, className, defaultChecked, defaultValue, id, isDisabled, isReadOnly, isRequired, size, type = 'text', hasError = false, value, variation, ...rest }, ref) => {
    const componentClasses = classNames(ComponentClassName.Input, ComponentClassName.FieldGroupControl, classNameModifier(ComponentClassName.Input, variation), classNameModifierByFlag(ComponentClassName.Input, 'error', hasError), classNameModifier(ComponentClassName.Input, size), className);
    const { isFieldsetDisabled } = useFieldset();
    return (React.createElement(View, { "aria-invalid": hasError, as: "input", autoComplete: autoComplete, checked: checked, className: componentClasses, defaultChecked: defaultChecked, defaultValue: defaultValue, isDisabled: isFieldsetDisabled ? isFieldsetDisabled : isDisabled, id: id, readOnly: isReadOnly, ref: ref, required: isRequired, type: type, value: value, ...rest }));
};
const Input = primitiveWithForwardRef(InputPrimitive);
Input.displayName = 'Input';

export { Input };
