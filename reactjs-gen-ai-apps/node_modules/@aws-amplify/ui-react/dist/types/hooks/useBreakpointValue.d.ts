import { Breakpoint } from '../primitives/types/responsive';
interface UseBreakpointValue<T = unknown> {
    (values: Record<string, T> | T[], defaultBreakpoint?: Breakpoint, propKey?: string): T | string | number | null;
}
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/theming/responsive#usebreakpointvalue)
 */
export declare const useBreakpointValue: UseBreakpointValue;
export {};
