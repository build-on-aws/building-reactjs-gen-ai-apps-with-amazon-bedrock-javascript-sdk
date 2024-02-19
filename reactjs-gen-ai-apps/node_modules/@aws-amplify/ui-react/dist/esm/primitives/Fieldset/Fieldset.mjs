import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { Flex } from '../Flex/Flex.mjs';
import { View } from '../View/View.mjs';
import { VisuallyHidden } from '../VisuallyHidden/VisuallyHidden.mjs';
import { useFieldset, FieldsetContext } from './useFieldset.mjs';

const FieldsetPrimitive = ({ children, className, isDisabled, legend, legendHidden, size, testId, variation = 'plain', ...rest }, ref) => {
    const { isFieldsetDisabled } = useFieldset();
    // Fieldsets that are nested within a disabled Fieldset should
    // also be disabled.
    const shouldBeDisabled = isFieldsetDisabled ? isFieldsetDisabled : isDisabled;
    const value = React.useMemo(() => ({
        isFieldsetDisabled: shouldBeDisabled,
    }), [shouldBeDisabled]);
    const fieldsetClasses = classNames(ComponentClassName.Fieldset, classNameModifier(ComponentClassName.Fieldset, variation), classNameModifier(ComponentClassName.Fieldset, size), className);
    const legendClasses = classNames(ComponentClassName.FieldsetLegend, classNameModifier(ComponentClassName.FieldsetLegend, size), {
        [ComponentClassName.VisuallyHidden]: legendHidden,
    });
    return (React.createElement(FieldsetContext.Provider, { value: value },
        React.createElement(Flex, { as: "fieldset", className: fieldsetClasses, ref: ref, disabled: shouldBeDisabled, testId: testId, ...rest },
            React.createElement(VisuallyHidden, { as: "legend" }, legend),
            React.createElement(View, { as: "div", "aria-hidden": "true", className: legendClasses }, legend),
            children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/fieldset)
 */
const Fieldset = primitiveWithForwardRef(FieldsetPrimitive);
Fieldset.displayName = 'Fieldset';

export { Fieldset };
