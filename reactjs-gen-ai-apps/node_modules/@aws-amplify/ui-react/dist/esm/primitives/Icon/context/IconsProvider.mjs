import * as React from 'react';
import { IconsContext } from './IconsContext.mjs';

function IconsProvider({ children, icons, }) {
    return (React.createElement(IconsContext.Provider, { value: icons }, children));
}

export { IconsProvider };
