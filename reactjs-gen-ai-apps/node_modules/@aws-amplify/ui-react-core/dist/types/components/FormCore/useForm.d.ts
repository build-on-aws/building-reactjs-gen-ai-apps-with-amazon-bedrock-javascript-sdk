import { FormValues, SubmitHandler, UseForm, UseFormParams } from './types';
export declare const DEFAULT_ERROR_MESSAGE = "`useForm` must be called inside a `FormProvider`";
/**
 * Utility hook corresponding to `FormProvider`, must be used within a `FormProvider`
 *
 * @internal Extend for public export. `useForm` and `UseForm` are an abstraction layer
 * on top of `useFormContext` and `UseFormReturn`, imported from `react-hook-form`
 *
 * @param options optional parameters
 * @returns `Form` utilities
 */
export default function useForm<Values extends FormValues = FormValues, OnSubmit extends SubmitHandler = SubmitHandler>(options?: UseFormParams<Values, OnSubmit>): UseForm<Values>;
