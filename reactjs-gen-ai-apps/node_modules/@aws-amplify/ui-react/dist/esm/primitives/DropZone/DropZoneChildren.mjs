import * as React from 'react';
import { DropZoneContext } from './DropZoneProvider.mjs';

/**
 * These are syntactic sugar components that make it easy to compose children
 * in DropZone without having to expose the DropZoneContext.
 */
/**
 * This component renders when the user is dragging ONLY accepted files on the DropZone.
 */
const Accepted = ({ children, }) => {
    const dragState = React.useContext(DropZoneContext);
    if (!dragState) {
        throw new Error('`DropZone.Accept` must be used inside a DropZone');
    }
    return dragState === 'accept' ? React.createElement(React.Fragment, null, children) : null;
};
/**
 * This component renders when the user is dragging ANY rejected files on the DropZone.
 */
const Rejected = ({ children, }) => {
    const dragState = React.useContext(DropZoneContext);
    if (!dragState) {
        throw new Error('`DropZone.Rejected` must be used inside a DropZone');
    }
    return dragState === 'reject' ? React.createElement(React.Fragment, null, children) : null;
};
/**
 * This component renders by default when the user is not dragging.
 */
const Default = ({ children, }) => {
    const dragState = React.useContext(DropZoneContext);
    if (!dragState) {
        throw new Error('`DropZone.Default` must be used inside a DropZone');
    }
    return dragState === 'inactive' ? React.createElement(React.Fragment, null, children) : null;
};

export { Accepted, Default, Rejected };
