import useForm from './useForm.mjs';

const DEFAULT_ERROR_MESSAGE = '`useField` must be used within a `FormProvider`';
/**
 * `Field` integration hook for usage with React `Field` components.
 *
 * @param params Requires `name`, all additional params optional
 * @returns `Form` aware `Field` event handlers and state values
 */
function useField(params) {
    const { getFieldState, registerField } = useForm({
        errorMessage: DEFAULT_ERROR_MESSAGE,
    });
    return {
        ...registerField(params),
        ...getFieldState(params.name),
    };
}

export { DEFAULT_ERROR_MESSAGE, useField as default };
