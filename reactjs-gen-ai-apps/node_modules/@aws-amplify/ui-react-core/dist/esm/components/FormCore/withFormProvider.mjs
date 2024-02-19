import React__default from 'react';
import FormProvider from './FormProvider.mjs';

/**
 * @param Child `Form` base component wrapped inside `FormProvider`
 * @returns Composed `Form` component exposing `FormContext` values to descendents
 */
function withFormProvider(Child) {
    return React__default.forwardRef(function Form({ defaultValues, mode, ...props }, ref) {
        return (React__default.createElement(FormProvider, { defaultValues: defaultValues, mode: mode, ref: ref },
            React__default.createElement(Child, { ...props })));
    });
}

export { withFormProvider as default };
