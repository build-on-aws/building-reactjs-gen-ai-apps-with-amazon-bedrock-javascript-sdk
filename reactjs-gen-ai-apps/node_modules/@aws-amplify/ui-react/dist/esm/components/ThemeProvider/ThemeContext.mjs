import * as React from 'react';
import { createTheme } from '@aws-amplify/ui';

const ThemeContext = React.createContext({
    theme: createTheme(),
    colorMode: undefined,
});

export { ThemeContext };
