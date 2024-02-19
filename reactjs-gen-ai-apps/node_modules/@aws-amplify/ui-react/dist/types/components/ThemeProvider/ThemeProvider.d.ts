import * as React from 'react';
import { Theme, WebTheme } from '@aws-amplify/ui';
export type ColorMode = 'system' | 'light' | 'dark';
export type Direction = 'ltr' | 'rtl';
interface ThemeProviderProps {
    children: React.ReactNode;
    /**
     * Changes the color mode applied to the theme
     */
    colorMode?: ColorMode;
    /**
     * Controls the language direction in the app
     * @default: 'ltr'
     */
    direction?: Direction;
    /**
     * Provide a server generated nonce which matches your CSP `style-src` rule.
     * This will be attached to the generated <style> tag.
     * @see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
     */
    nonce?: string;
    /**
     * Custom theme
     */
    theme?: Theme | WebTheme;
}
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming)
 */
export declare function ThemeProvider({ children, colorMode, direction, nonce, theme, }: ThemeProviderProps): JSX.Element;
export {};
