import { classNameModifier, classNameModifierByFlag, WebTheme } from '@aws-amplify/ui';
export declare const strHasLength: (str: unknown) => str is string;
export declare const isEmptyString: (value: unknown) => boolean;
export declare const isNullOrEmptyString: (value: unknown) => boolean;
/**
 * Create a consecutive integer array from start value to end value.
 * @param start start value
 * @param end end value
 * @returns an integer array with elements from start to end consecutively
 */
export declare const getConsecutiveIntArray: (start: number, end: number) => number[];
/**
 * TS helper function to make using Object.keys more typesafe
 */
export declare const objectKeys: <Obj extends object>(obj: Obj) => (keyof Obj)[];
export declare const getCSSVariableIfValueIsThemeKey: <Value = unknown>(propKey: string, value: string, tokens: WebTheme['tokens']) => string | Value | null;
export { classNameModifier, classNameModifierByFlag };
