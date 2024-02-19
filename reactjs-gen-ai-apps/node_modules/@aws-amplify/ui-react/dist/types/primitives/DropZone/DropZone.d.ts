import { ForwardRefPrimitive } from '../types';
import { BaseDropZoneProps } from './types';
import { Accepted, Default, Rejected } from './DropZoneChildren';
type DropZoneType = ForwardRefPrimitive<BaseDropZoneProps, 'div'> & {
    Accepted: typeof Accepted;
    Rejected: typeof Rejected;
    Default: typeof Default;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/dropzone)
 */
declare const DropZone: DropZoneType;
export { DropZone };
