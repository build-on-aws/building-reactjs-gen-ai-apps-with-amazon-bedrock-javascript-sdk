import React__default from 'react';
import { classNames, classNameModifierByFlag, ComponentClassName } from '@aws-amplify/ui';
import { View } from '../View/View.mjs';
import { DropZoneContext } from './DropZoneProvider.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const Container = ({ className, children, testId, isDisabled, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, ...rest }, ref) => {
    const dragState = React__default.useContext(DropZoneContext);
    // Don't add drag event handlers if it is disabled.
    const dragProps = isDisabled
        ? {}
        : { onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop };
    return (React__default.createElement(View, { ...rest, ...dragProps, isDisabled: isDisabled, className: classNames(className, classNameModifierByFlag(ComponentClassName.DropZone, 'rejected', dragState === 'reject'), classNameModifierByFlag(ComponentClassName.DropZone, 'accepted', dragState === 'accept'), classNameModifierByFlag(ComponentClassName.DropZone, 'disabled', isDisabled), ComponentClassName.DropZone), "data-testid": testId, ref: ref }, children));
};
const DropZoneContainer = primitiveWithForwardRef(Container);
DropZoneContainer.displayName = 'DropZoneContainer';

export { DropZoneContainer };
