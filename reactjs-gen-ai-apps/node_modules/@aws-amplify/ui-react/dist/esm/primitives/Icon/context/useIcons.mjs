import * as React from 'react';
import { IconsContext } from './IconsContext.mjs';

function useIcons(component) {
    const context = React.useContext(IconsContext);
    if (component && context) {
        return context[component];
    }
    return undefined;
}

export { useIcons };
