import { ForwardRefPrimitive, FlexContainerStyleProps, BaseViewProps, BaseInputProps, BaseFieldProps } from '../types';
interface FieldPrimitiveProps extends BaseFieldProps, BaseInputProps, FlexContainerStyleProps, BaseViewProps {
}
export declare const Field: ForwardRefPrimitive<FieldPrimitiveProps, 'div'>;
export {};
