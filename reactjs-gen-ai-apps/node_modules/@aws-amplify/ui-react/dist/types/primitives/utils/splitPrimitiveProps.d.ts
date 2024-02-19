import { AllStyleProps, BaseStyleProps, FlexContainerStyleProps } from '../types';
interface SplitProps<PrimitiveProps> {
    styleProps: AllStyleProps;
    rest: Partial<Omit<PrimitiveProps, keyof FlexContainerStyleProps | keyof BaseStyleProps>>;
}
/**
 * This function splits props into style props and non-style props. This is used
 * on Field primitives so we can apply style props on the wrapper element and
 * the rest on the input.
 * @param props this should be a destructured `rest` from the component's props
 */
export declare const splitPrimitiveProps: <PrimitiveProps extends Record<string, unknown>>(props: PrimitiveProps) => SplitProps<PrimitiveProps>;
export {};
