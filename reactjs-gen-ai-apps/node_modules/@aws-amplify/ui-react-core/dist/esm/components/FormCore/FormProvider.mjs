import React__default from 'react';
import { useForm, FormProvider as FormProvider$1 } from 'react-hook-form';

const DEFAULT_MODE = 'onTouched';
const FormProvider = React__default.forwardRef(function FormProvider({ children, defaultValues, mode = DEFAULT_MODE }, ref) {
    const formProviderProps = useForm({
        defaultValues,
        mode,
    });
    const { getValues, reset } = formProviderProps;
    React__default.useImperativeHandle(ref, () => ({ getValues, reset: () => reset(defaultValues) }), [defaultValues, getValues, reset]);
    return (React__default.createElement(FormProvider$1, { ...formProviderProps }, children));
});

export { FormProvider as default };
