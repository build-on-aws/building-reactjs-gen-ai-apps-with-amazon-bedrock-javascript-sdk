import { FocusHandler, UseControlledField, UseControlledFieldParams } from './types';
export declare const DEFAULT_ERROR_MESSAGE = "`useControlledField` must be used within a `FormProvider`";
/**
 * `Field` integration hook for usage with React Native `Field` components
 *
 * @param params Requires `name`, all additional params optional
 * @returns `Form` aware `Field` handlers and state values
 */
export default function useControlledField<OnBlur extends FocusHandler>({ onBlur: _onBlur, onChangeText: _onChangeText, ...rest }: UseControlledFieldParams<OnBlur>): UseControlledField;
