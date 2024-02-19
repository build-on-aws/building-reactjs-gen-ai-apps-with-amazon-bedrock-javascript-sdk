import * as React from 'react';
import { classNames, ComponentClassName, countryDialCodes } from '@aws-amplify/ui';
import { SelectField } from '../SelectField/SelectField.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const DialCodeSelectPrimitive = ({ className, dialCodeList, isReadOnly, ...props }, ref) => {
    const dialList = dialCodeList ?? countryDialCodes;
    const dialCodeOptions = React.useMemo(() => dialList.map((dialCode) => (
    // Regarding the `disabled` attribute, see comment in SelectField below
    React.createElement("option", { key: dialCode, value: dialCode, disabled: isReadOnly }, dialCode))), [dialList, isReadOnly]);
    return (React.createElement(SelectField
    /*
        Since <select> elements do not support the `readonly` html attribute, it is suggested to use the `disabled` html attribute
        so that a screen reader will announce something to the user about the interactivity of the options list ( https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly)
      */
    , { "aria-disabled": isReadOnly, autoComplete: "tel-country-code", className: classNames(ComponentClassName.CountryCodeSelect, ComponentClassName.DialCodeSelect, className), labelHidden: true, ref: ref, ...props }, dialCodeOptions));
};
const DialCodeSelect = primitiveWithForwardRef(DialCodeSelectPrimitive);
DialCodeSelect.displayName = 'DialCodeSelect';

export { DialCodeSelect };
