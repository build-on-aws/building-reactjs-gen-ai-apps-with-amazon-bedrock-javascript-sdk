import * as React from 'react';
import { useDropZone } from './useDropZone.mjs';
import { DropZoneProvider } from './DropZoneProvider.mjs';
import { DropZoneContainer } from './DropZoneContainer.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { Accepted, Rejected, Default } from './DropZoneChildren.mjs';

const DropZonePrimitive = ({ children, testId, isDisabled, acceptedFileTypes, onDropComplete, ...rest }, ref) => {
    const { dragState, onDragEnter, onDragLeave, onDragOver, onDragStart, onDrop, } = useDropZone({
        acceptedFileTypes,
        onDropComplete,
        ...rest,
    });
    return (React.createElement(DropZoneProvider, { value: dragState },
        React.createElement(DropZoneContainer, { ...rest, testId: testId, isDisabled: isDisabled, onDragStart: onDragStart, onDragEnter: onDragEnter, onDragLeave: onDragLeave, onDrop: onDrop, onDragOver: onDragOver, ref: ref }, children)));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/dropzone)
 */
const DropZone = Object.assign(primitiveWithForwardRef(DropZonePrimitive), {
    Accepted,
    Rejected,
    Default,
});
DropZone.displayName = 'DropZone';

export { DropZone };
