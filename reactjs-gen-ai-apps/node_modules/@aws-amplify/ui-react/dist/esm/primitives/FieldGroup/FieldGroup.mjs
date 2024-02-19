import * as React from 'react';
import { ComponentClassName, classNames, classNameModifier } from '@aws-amplify/ui';
import { Flex } from '../Flex/Flex.mjs';
import { View } from '../View/View.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const FieldGroupPrimitive = ({ children, className, innerEndComponent, innerStartComponent, orientation = 'horizontal', outerEndComponent, outerStartComponent, variation, ...rest }, ref) => {
    // Don't apply hasInner classnames unless a component was provided
    const hasInnerStartComponent = innerStartComponent != null;
    const hasInnerEndComponent = innerEndComponent != null;
    const fieldGroupHasInnerStartClassName = hasInnerStartComponent
        ? ComponentClassName.FieldGroupHasInnerStart
        : null;
    const fieldGroupHasInnerEndClassName = hasInnerEndComponent
        ? ComponentClassName.FieldGroupHasInnerEnd
        : null;
    const componentClasses = classNames(ComponentClassName.FieldGroup, fieldGroupHasInnerStartClassName, fieldGroupHasInnerEndClassName, classNameModifier(ComponentClassName.FieldGroup, orientation), className);
    return (React.createElement(Flex, { className: componentClasses, ref: ref, ...rest },
        outerStartComponent && (React.createElement(View, { className: classNames(ComponentClassName.FieldGroupOuterStart, classNameModifier(ComponentClassName.FieldGroupOuterStart, variation)) }, outerStartComponent)),
        React.createElement(View, { className: classNames(ComponentClassName.FieldGroupFieldWrapper, classNameModifier(ComponentClassName.FieldGroupFieldWrapper, orientation)) },
            innerStartComponent && (React.createElement(View, { className: ComponentClassName.FieldGroupInnerStart }, innerStartComponent)),
            children,
            innerEndComponent && (React.createElement(View, { className: ComponentClassName.FieldGroupInnerEnd }, innerEndComponent))),
        outerEndComponent && (React.createElement(View, { className: classNames(ComponentClassName.FieldGroupOuterEnd, classNameModifier(ComponentClassName.FieldGroupOuterEnd, variation)) }, outerEndComponent))));
};
const FieldGroup = primitiveWithForwardRef(FieldGroupPrimitive);
FieldGroup.displayName = 'FieldGroup';

export { FieldGroup };
