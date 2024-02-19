import { Theme, DefaultTheme, WebTheme } from './types';
/**
 * This will be used like `const myTheme = createTheme({})`
 * `myTheme` can then be passed to a Provider or the generated CSS
 * can be passed to a stylesheet at build-time or run-time.
 * const myTheme = createTheme({})
 * const myOtherTheme = createTheme({}, myTheme);
 */
export declare function createTheme(theme?: Theme | WebTheme, DefaultTheme?: DefaultTheme | WebTheme): WebTheme;
