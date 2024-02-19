import * as React from 'react';
import { Primitive } from '../types';
/**
 * These are syntactic sugar components that make it easy to compose children
 * in DropZone without having to expose the DropZoneContext.
 */
/**
 * This component renders when the user is dragging ONLY accepted files on the DropZone.
 */
declare const Accepted: Primitive<{
    children?: React.ReactNode;
}, 'div'>;
/**
 * This component renders when the user is dragging ANY rejected files on the DropZone.
 */
declare const Rejected: Primitive<{
    children?: React.ReactNode;
}, 'div'>;
/**
 * This component renders by default when the user is not dragging.
 */
declare const Default: Primitive<{
    children?: React.ReactNode;
}, 'div'>;
export { Accepted, Rejected, Default };
