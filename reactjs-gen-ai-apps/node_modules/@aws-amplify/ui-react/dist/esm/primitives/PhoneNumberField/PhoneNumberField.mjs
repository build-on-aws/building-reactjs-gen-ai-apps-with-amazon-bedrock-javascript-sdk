import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { DialCodeSelect } from './DialCodeSelect.mjs';
import { ComponentText } from '../shared/constants.mjs';
import { TextField } from '../TextField/TextField.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const PhoneNumberFieldPrimitive = ({ autoComplete = 'tel-national', className, defaultDialCode, dialCodeLabel = ComponentText.PhoneNumberField.countryCodeLabel, dialCodeList, dialCodeName, dialCodeRef, hasError, isDisabled, isReadOnly, onDialCodeChange, onInput, size, variation, ...rest }, ref) => {
    return (React.createElement(TextField, { outerStartComponent: React.createElement(DialCodeSelect, { defaultValue: defaultDialCode, dialCodeList: dialCodeList, className: className, hasError: hasError, isDisabled: isDisabled, isReadOnly: isReadOnly, label: dialCodeLabel, name: dialCodeName, onChange: onDialCodeChange, ref: dialCodeRef, size: size, variation: variation }), autoComplete: autoComplete, className: classNames(ComponentClassName.PhoneNumberField, className), hasError: hasError, isDisabled: isDisabled, isReadOnly: isReadOnly, onInput: onInput, ref: ref, size: size, type: "tel", variation: variation, ...rest }));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/phonenumberfield)
 */
const PhoneNumberField = primitiveWithForwardRef(PhoneNumberFieldPrimitive);
PhoneNumberField.displayName = 'PhoneNumberField';

export { PhoneNumberField };
