import { classNames, ComponentClassName, classNameModifierByFlag } from '@aws-amplify/ui';
import * as React from 'react';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const AutocompleteOptionPrimitive = ({ children, className, isActive, ...rest }, ref) => {
    return (React.createElement(View, { "aria-selected": isActive, as: "li", role: "option", className: classNames(ComponentClassName.AutocompleteMenuOption, classNameModifierByFlag(ComponentClassName.AutocompleteMenuOption, 'active', isActive), className), ref: ref, ...rest }, children));
};
const AutocompleteOption = primitiveWithForwardRef(AutocompleteOptionPrimitive);
AutocompleteOption.displayName = 'AutocompleteOption';

export { AutocompleteOption };
