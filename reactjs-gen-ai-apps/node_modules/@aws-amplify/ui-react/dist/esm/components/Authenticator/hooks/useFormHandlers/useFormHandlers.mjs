import { useCallback } from 'react';
import { getFormDataFromEvent } from '../../../../helpers/utils.mjs';
import { useAuthenticator } from '@aws-amplify/ui-react-core';

function useFormHandlers() {
    const { submitForm, updateBlur, updateForm } = useAuthenticator((context) => [
        context.submitForm,
        context.updateBlur,
        context.updateForm,
    ]);
    const handleBlur = useCallback(({ target: { name } }) => {
        updateBlur({ name });
    }, [updateBlur]);
    // @TODO: align multiple input type handling with react docs example for 3.0 release
    // example: https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const handleChange = useCallback(({ target: { checked, name, type, value }, }) => {
        const isUncheckedCheckbox = type === 'checkbox' && !checked;
        updateForm({
            name,
            value: isUncheckedCheckbox ? undefined : value,
        });
    }, [updateForm]);
    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        submitForm(getFormDataFromEvent(event));
    }, [submitForm]);
    return { handleBlur, handleChange, handleSubmit };
}

export { useFormHandlers };
