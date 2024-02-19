import * as React from 'react';
import { WebTheme } from '@aws-amplify/ui';
import { ColorMode } from './ThemeProvider';
export interface ThemeContextType {
    theme: WebTheme;
    colorMode?: ColorMode;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
