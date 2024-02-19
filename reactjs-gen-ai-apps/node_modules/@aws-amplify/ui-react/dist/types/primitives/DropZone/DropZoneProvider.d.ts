import * as React from 'react';
import { DragState } from './types';
declare const DropZoneContext: React.Context<DragState>;
declare const DropZoneProvider: ({ value, children, }: {
    value: DragState;
    children?: React.ReactNode;
}) => JSX.Element;
export { DropZoneProvider, DropZoneContext };
