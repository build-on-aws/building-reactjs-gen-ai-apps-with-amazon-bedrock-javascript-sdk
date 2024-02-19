import * as React from 'react';
import { createTheme } from '@aws-amplify/ui';
import { ThemeContext } from '../components/ThemeProvider/ThemeContext.mjs';

/**
 * Get current Theme object value from Amplify context.
 * Returns a default theme if context is not available
 */
const getThemeFromContext = (context) => {
    if (typeof context === 'undefined' || typeof context.theme === 'undefined') {
        return createTheme();
    }
    return context.theme;
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming)
 */
const useTheme = () => {
    const context = React.useContext(ThemeContext);
    return getThemeFromContext(context);
};
/**
 * Internal use only
 */
const useColorMode = () => {
    const context = React.useContext(ThemeContext);
    return context.colorMode;
};

export { getThemeFromContext, useColorMode, useTheme };
