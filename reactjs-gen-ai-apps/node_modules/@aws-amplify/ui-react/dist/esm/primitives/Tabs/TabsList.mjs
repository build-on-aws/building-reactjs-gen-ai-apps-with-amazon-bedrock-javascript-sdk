import * as React from 'react';
import { classNames, ComponentClassName, classNameModifier } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { TabsContext } from './TabsContext.mjs';

const isValidTab = (child) => React.isValidElement(child);
const TabListPrimitive = ({ className, children, indicatorPosition, spacing, role = 'tablist', ...rest }, ref) => {
    const internalRef = React.useRef(null);
    const { activeTab, setActiveTab } = React.useContext(TabsContext);
    React.useImperativeHandle(ref, () => internalRef.current);
    const values = React.useMemo(() => React.Children.toArray(children)
        .map((child) => {
        if (child && isValidTab(child)) {
            return child.props.value;
        }
    })
        .filter((child) => !!child), [children]);
    const currentIndex = values.indexOf(activeTab);
    const nextTab = React.useCallback(() => {
        let nextIndex = currentIndex === values.length - 1 ? 0 : currentIndex + 1;
        const elems = internalRef.current?.querySelectorAll('button') ?? [];
        while (elems[nextIndex].disabled) {
            if (nextIndex === values.length - 1) {
                nextIndex = 0;
            }
            else {
                nextIndex++;
            }
        }
        const value = values[nextIndex];
        if (value) {
            setActiveTab(value);
            const elem = elems[nextIndex];
            elem?.focus();
            elem?.click();
        }
    }, [currentIndex, setActiveTab, values]);
    const prevTab = React.useCallback(() => {
        let prevIndex = currentIndex === 0 ? values.length - 1 : currentIndex - 1;
        const elems = internalRef.current?.querySelectorAll('button') ?? [];
        while (elems[prevIndex].disabled) {
            if (prevIndex === 0) {
                prevIndex = values.length - 1;
            }
            else {
                prevIndex--;
            }
        }
        const value = values[prevIndex];
        if (value) {
            setActiveTab(value);
            const elem = elems[prevIndex];
            elem?.focus();
            elem?.click();
        }
    }, [currentIndex, setActiveTab, values]);
    const onKeyDown = React.useCallback((event) => {
        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                event.stopPropagation();
                prevTab();
                break;
            case 'ArrowUp':
            case 'ArrowRight':
                event.preventDefault();
                event.stopPropagation();
                nextTab();
                break;
        }
    }, [prevTab, nextTab]);
    return (React.createElement(View, { ...rest, role: role, onKeyDown: onKeyDown, className: classNames(ComponentClassName.TabsList, indicatorPosition
            ? classNameModifier(ComponentClassName.TabsList, indicatorPosition)
            : null, spacing
            ? classNameModifier(ComponentClassName.TabsList, spacing)
            : null, className), ref: internalRef }, children));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/tabs)
 */
const TabList = primitiveWithForwardRef(TabListPrimitive);
TabList.displayName = 'Tabs.List';

export { TabList };
