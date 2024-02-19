import { WebTheme } from '@aws-amplify/ui';
import { ColorMode } from '../components/ThemeProvider/ThemeProvider';
import { ThemeContextType } from '../components/ThemeProvider/ThemeContext';
/**
 * Get current Theme object value from Amplify context.
 * Returns a default theme if context is not available
 */
export declare const getThemeFromContext: (context: ThemeContextType) => ThemeContextType['theme'];
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming)
 */
export declare const useTheme: () => WebTheme;
/**
 * Internal use only
 */
export declare const useColorMode: () => ColorMode | undefined;
