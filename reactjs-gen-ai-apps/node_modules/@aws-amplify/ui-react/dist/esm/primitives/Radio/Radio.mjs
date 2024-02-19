import * as React from 'react';
import { classNames, ComponentClassName, classNameModifierByFlag, classNameModifier } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { Input } from '../Input/Input.mjs';
import { Text } from '../Text/Text.mjs';
import { useRadioGroupContext } from '../RadioGroupField/context.mjs';
import { useFieldset } from '../Fieldset/useFieldset.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const RadioPrimitive = ({ children, className, id, isDisabled = false, testId, value, labelPosition: radioLabelPosition, ...rest }, ref) => {
    const { currentValue, defaultValue, name, hasError, isGroupDisabled = false, isRequired, isReadOnly, onChange, size, labelPosition: groupLabelPosition, } = useRadioGroupContext();
    const { isFieldsetDisabled } = useFieldset();
    const shouldBeDisabled = isFieldsetDisabled
        ? isFieldsetDisabled
        : isGroupDisabled || isDisabled || (isReadOnly && defaultValue !== value);
    // for controlled component
    const checked = currentValue !== undefined ? value === currentValue : undefined;
    // for uncontrolled component
    const defaultChecked = defaultValue !== undefined ? value === defaultValue : undefined;
    const labelPosition = radioLabelPosition
        ? radioLabelPosition
        : groupLabelPosition;
    return (React.createElement(Flex, { as: "label", className: classNames(ComponentClassName.Radio, classNameModifierByFlag(ComponentClassName.Radio, `disabled`, shouldBeDisabled), labelPosition ? `amplify-label-${labelPosition}` : null, className) },
        children && (React.createElement(Text, { as: "span", className: classNames(ComponentClassName.RadioLabel, classNameModifierByFlag(ComponentClassName.RadioLabel, `disabled`, shouldBeDisabled)) }, children)),
        React.createElement(Input, { checked: checked, className: classNames(ComponentClassName.VisuallyHidden, ComponentClassName.RadioInput), defaultChecked: defaultChecked, hasError: hasError, id: id, isDisabled: shouldBeDisabled, isReadOnly: isReadOnly, isRequired: isRequired, onChange: onChange, ref: ref, type: "radio", name: name, value: value, ...rest }),
        React.createElement(Flex, { "aria-hidden": "true", as: "span", className: classNames(ComponentClassName.RadioButton, classNameModifier(ComponentClassName.RadioButton, size)), testId: testId })));
};
const Radio = primitiveWithForwardRef(RadioPrimitive);
Radio.displayName = 'Radio';

export { Radio, RadioPrimitive };
