import * as React from 'react';
import { classNames, ComponentClassName, classNameModifierByFlag, classNameModifier } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import '../Field/FieldClearButton.mjs';
import '../Field/FieldDescription.mjs';
import { FieldErrorMessage } from '../Field/FieldErrorMessage.mjs';
import '../Field/Field.mjs';
import { Input } from '../Input/Input.mjs';
import { Label } from '../Label/Label.mjs';
import { useStableId } from '../utils/useStableId.mjs';
import { useSwitch } from './useSwitch.mjs';
import { View } from '../View/View.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import { useFieldset } from '../Fieldset/useFieldset.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const SwitchFieldPrimitive = ({ className, defaultChecked, id, isChecked, isDisabled, isLabelHidden, label, labelPosition, name, onChange, size, thumbColor, trackCheckedColor, trackColor, value, hasError, errorMessage, ...rest }, ref) => {
    const { isOn, changeHandler, isFocused, setIsFocused } = useSwitch({
        onChange,
        isChecked,
        defaultChecked,
        isDisabled,
    });
    const { isFieldsetDisabled } = useFieldset();
    const shouldBeDisabled = isFieldsetDisabled ? isFieldsetDisabled : isDisabled;
    const fieldId = useStableId(id);
    const wrapperClasses = classNames(ComponentClassName.SwitchTrack, classNameModifierByFlag(ComponentClassName.SwitchTrack, 'checked', isOn), classNameModifierByFlag(ComponentClassName.SwitchTrack, 'disabled', shouldBeDisabled), classNameModifierByFlag(ComponentClassName.SwitchTrack, 'focused', isFocused), classNameModifierByFlag(ComponentClassName.SwitchTrack, 'error', hasError));
    const componentClasses = classNames(ComponentClassName.SwitchThumb, classNameModifierByFlag(ComponentClassName.SwitchThumb, 'checked', isOn), classNameModifierByFlag(ComponentClassName.SwitchThumb, 'disabled', shouldBeDisabled));
    return (React.createElement(Flex, { className: classNames(ComponentClassName.SwitchField, classNameModifier(ComponentClassName.SwitchField, size), labelPosition ? `amplify-label-${labelPosition}` : null, className), ref: ref, ...rest },
        React.createElement(VisuallyHidden, null,
            React.createElement(Input, { role: "switch", type: "checkbox", id: fieldId, onChange: changeHandler, disabled: isDisabled, name: name, checked: isOn, value: value, onFocus: () => {
                    setIsFocused(true);
                }, onBlur: () => {
                    setIsFocused(false);
                } })),
        React.createElement(Label, { htmlFor: fieldId, className: classNames(ComponentClassName.SwitchWrapper, classNameModifier(ComponentClassName.SwitchWrapper, labelPosition)) },
            isLabelHidden ? (React.createElement(VisuallyHidden, { as: "span", className: ComponentClassName.SwitchLabel }, label)) : (React.createElement(View, { as: "span", className: ComponentClassName.SwitchLabel }, label)),
            React.createElement(View, { as: "span", className: wrapperClasses, backgroundColor: isOn ? trackCheckedColor : trackColor },
                React.createElement(View, { as: "span", className: componentClasses, "data-checked": isOn, "data-disabled": shouldBeDisabled, backgroundColor: thumbColor }))),
        React.createElement(FieldErrorMessage, { hasError: hasError, errorMessage: errorMessage })));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/switchfield)
 */
const SwitchField = primitiveWithForwardRef(SwitchFieldPrimitive);
SwitchField.displayName = 'SwitchField';

export { SwitchField };
