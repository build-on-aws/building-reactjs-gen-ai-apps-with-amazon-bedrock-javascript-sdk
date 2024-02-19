import { ElementType, PrimitiveProps, BaseViewProps } from './view';
/** @deprecated For internal use only */
export interface BaseVisuallyHiddenProps extends BaseViewProps {
}
export type VisuallyHiddenProps<Element extends ElementType = 'span'> = PrimitiveProps<BaseVisuallyHiddenProps, Element>;
