import * as React from 'react';

const CustomComponentsContext = 
// @ts-ignore
React.createContext(null);
const useCustomComponents = () => {
    const context = React.useContext(CustomComponentsContext);
    if (!context) {
        throw new Error('`useCustomComponents` cannot be used outside of a `CustomComponentsContext.Provider`');
    }
    return context;
};

export { CustomComponentsContext, useCustomComponents };
