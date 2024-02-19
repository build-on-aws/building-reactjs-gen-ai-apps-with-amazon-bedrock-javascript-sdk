type BreakpointKey = 'base' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
export interface Breakpoints {
    values: Record<BreakpointKey, number>;
    defaultBreakpoint: BreakpointKey;
}
export declare const breakpoints: Breakpoints;
export {};
