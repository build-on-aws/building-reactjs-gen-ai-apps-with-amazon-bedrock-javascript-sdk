import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier, classNameModifierByFlag } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { useFieldset } from '../Fieldset/useFieldset.mjs';
import { Flex } from '../Flex/Flex.mjs';
import { Loader } from '../Loader/Loader.mjs';
import { View } from '../View/View.mjs';

// These variations support colorThemes. 'undefined' accounts for our
// 'default' variation which is not named.
const supportedVariations = ['link', 'primary', undefined];
const ButtonPrimitive = ({ className, children, colorTheme, isFullWidth = false, isDisabled, isLoading, loadingText = '', size, type = 'button', variation, ...rest }, ref) => {
    // Creates our colorTheme modifier string based on if the variation
    // supports colorThemes and a colorTheme is used.
    const colorThemeModifier = supportedVariations.includes(variation) && colorTheme
        ? `${variation ?? 'outlined'}--${colorTheme}`
        : undefined;
    const { isFieldsetDisabled } = useFieldset();
    const shouldBeDisabled = isFieldsetDisabled
        ? isFieldsetDisabled
        : isDisabled ?? isLoading ?? rest['disabled'];
    const componentClasses = classNames(ComponentClassName.Button, ComponentClassName.FieldGroupControl, classNameModifier(ComponentClassName.Button, variation), classNameModifier(ComponentClassName.Button, colorThemeModifier), classNameModifier(ComponentClassName.Button, size), classNameModifierByFlag(ComponentClassName.Button, 'disabled', shouldBeDisabled), classNameModifierByFlag(ComponentClassName.Button, 'loading', isLoading), classNameModifierByFlag(ComponentClassName.Button, 'fullwidth', isFullWidth), className);
    return (React.createElement(View, { ref: ref, as: "button", className: componentClasses, isDisabled: shouldBeDisabled, type: type, ...rest }, isLoading ? (React.createElement(Flex, { as: "span", className: ComponentClassName.ButtonLoaderWrapper },
        React.createElement(Loader, { size: size }),
        loadingText ? loadingText : null)) : (children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/button)
 */
const Button = primitiveWithForwardRef(ButtonPrimitive);
Button.displayName = 'Button';

export { Button };
