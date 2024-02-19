import '../../types/authenticator/user.mjs';
import { authFieldsWithDefaults } from '../../types/authenticator/attributes.mjs';

const getFormDataFromEvent = (event) => {
    const formData = new FormData(event.target);
    return Object.fromEntries(formData);
};
const setFormOrder = (formOverrides, fieldNames) => {
    let orderedKeys = [];
    if (formOverrides) {
        orderedKeys = Object.keys(formOverrides)
            .reduce((prev, key) => {
            // reduce to array that can be sorted
            prev.push([key, formOverrides[key]?.order]);
            return prev;
        }, [])
            .sort((a, b) => 
        //sort them based on order
        a[1] - b[1]) // returned just key
            .filter((a) => a[1] !== undefined)
            .map((a) => a[0]);
    }
    // remove duplicates
    return Array.from(new Set([...orderedKeys, ...fieldNames]));
};
const isAuthFieldWithDefaults = (field) => {
    return authFieldsWithDefaults.includes(field);
};
const isArray = (val) => {
    return Array.isArray(val);
};
const getErrors = (errors) => {
    if (!errors)
        return null;
    if (isArray(errors)) {
        return errors;
    }
    else {
        return [errors];
    }
};

export { getErrors, getFormDataFromEvent, isAuthFieldWithDefaults, setFormOrder };
