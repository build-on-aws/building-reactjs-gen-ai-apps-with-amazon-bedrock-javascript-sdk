import { ShadowValue, WebDesignToken } from './tokens/types/designToken';
export declare const CSS_VARIABLE_PREFIX = "amplify";
export declare function cssValue(token: BaseDesignToken): string | number;
interface NameTransformProps {
    path?: Array<string>;
}
export declare function cssNameTransform({ path }: NameTransformProps): string;
/**
 * Helper function to test if something is a design token or not.
 * Used in the React component style props.
 *
 * @param value - thing to test if it is a design token or not
 * @returns boolean
 */
export declare function isDesignToken(value: unknown): value is WebDesignToken;
export declare function isShadowTokenObject(value: unknown): value is ShadowValue & object;
type SetupTokensProps = {
    tokens?: Record<string | number, any>;
    path?: Array<string>;
    setupToken: SetupToken;
};
export type SetupToken<ReturnType = any> = (args: {
    token: BaseDesignToken;
    path: Array<string>;
}) => ReturnType;
type BaseDesignToken = {
    value: string | number;
};
/**
 * Recursive function that will walk down the token object
 * and perform the setupToken function on each token.
 * Similar to what Style Dictionary does.
 */
export declare function setupTokens({ tokens, path, setupToken, }: SetupTokensProps): any;
export {};
