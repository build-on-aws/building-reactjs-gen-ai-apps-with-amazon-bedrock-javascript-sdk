import React__default, { useContext } from 'react';

const defaultValue = { name: 'default' };
const RadioGroupContext = React__default.createContext(defaultValue);
const useRadioGroupContext = () => {
    return useContext(RadioGroupContext);
};

export { RadioGroupContext, useRadioGroupContext };
