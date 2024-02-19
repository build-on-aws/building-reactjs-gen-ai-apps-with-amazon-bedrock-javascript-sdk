/// <reference types="react" />
import { InternalBaseComponentProps } from '../internal/hooks/use-base-component';
import { ModalProps } from './interfaces';
import { SomeRequired } from '../internal/types';
type InternalModalProps = SomeRequired<ModalProps, 'size'> & InternalBaseComponentProps;
export default function InternalModal({ modalRoot, ...rest }: InternalModalProps): JSX.Element;
export {};
//# sourceMappingURL=internal.d.ts.map