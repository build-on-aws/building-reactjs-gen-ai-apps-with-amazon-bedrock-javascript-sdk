import * as React from 'react';
import { isFunction, classNames, ComponentClassName } from '@aws-amplify/ui';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { View } from '../View/View.mjs';
import { AccordionContext } from './AccordionContext.mjs';

const AccordionContainerPrimitive = ({ children, className, defaultValue, allowMultiple, preventCollapse, onValueChange, testId, value: controlledValue, ...rest }, ref) => {
    const isControlled = controlledValue !== undefined;
    const [localValue, setLocalValue] = React.useState(() => isControlled ? controlledValue : defaultValue ?? []);
    const value = isControlled ? controlledValue : localValue;
    const setValue = React.useCallback((_value) => {
        let newValue;
        // if the value has the incoming value we try to close it by removing it from the array
        if (value.includes(_value)) {
            // only remove it from the array if preventCollapse is false/undefined OR
            // the number of open accordions is more than 1 (so it won't fully collapse anyways)
            newValue =
                !preventCollapse || value.length > 1
                    ? value.filter((v) => v !== _value)
                    : value;
        }
        else {
            // open the item by adding it to the array if allowMultiple is true
            // or make it the whole array
            newValue = allowMultiple ? [...value, _value] : [_value];
        }
        if (isFunction(onValueChange)) {
            onValueChange(newValue);
        }
        if (!isControlled) {
            setLocalValue(newValue);
        }
    }, [onValueChange, value, isControlled, allowMultiple, preventCollapse]);
    const contextValue = React.useMemo(() => {
        return {
            value,
            setValue,
        };
    }, [value, setValue]);
    return (React.createElement(AccordionContext.Provider, { value: contextValue },
        React.createElement(View, { ...rest, className: classNames(ComponentClassName.Accordion, className), "data-testid": testId, ref: ref }, children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/accordion)
 */
const AccordionContainer = primitiveWithForwardRef(AccordionContainerPrimitive);
AccordionContainer.displayName = 'Accordion.Container';

export { AccordionContainer };
