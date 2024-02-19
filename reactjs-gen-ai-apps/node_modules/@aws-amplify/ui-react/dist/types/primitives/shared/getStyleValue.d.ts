import { WebTheme } from '@aws-amplify/ui';
interface GetStyleValueProps {
    value: unknown;
    propKey?: string;
    tokens: WebTheme['tokens'];
}
/**
 * This takes an unknown value, which could be a:
 * - design token: `color={tokens.colors.font.primary}`
 * - string, which could be a:
 *   - theme key: `color='font.primary'`
 *   - plain style: `color='red'`
 * - or a number: `padding={10}`
 * and returns the appropriate and resolved value
 */
export declare const getStyleValue: ({ value, propKey, tokens, }: GetStyleValueProps) => string | null;
export {};
