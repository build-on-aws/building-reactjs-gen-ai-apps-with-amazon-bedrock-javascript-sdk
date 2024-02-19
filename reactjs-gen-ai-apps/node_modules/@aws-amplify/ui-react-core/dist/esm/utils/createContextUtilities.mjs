import React__default from 'react';
import { isUndefined, isString } from '@aws-amplify/ui';

const INVALID_OPTIONS_MESSAGE = 'an `errorMessage` or a `defaultValue` must be provided in `options`';
/**
 * Uses `ContextType`/`Name` generics and `options` to create:
 * - `${Name}Context`: React Context of type `ContextType`
 * - `Provider${Name}`: React Context `Provider` component exposing the `ContextType`
 *   as optional props
 * - `use${Name}`: Utility Hook exposing the values of `ContextType`. Allows
 *   params with `errorMessage` for granular error messaging
 *
 * @template ContextType Type definition of the Context.
 * > For most use cases the keys of `ContextType` should not be optional in
 * preference of explicit `undefined` to avoid optional types on the
 * Utility Hook return
 *
 * @param options Context utility options. Requires a `contextName`, and
 * either a `defaultValue` of `ContextType` **or** an `errorMessage`
 * allowing for differing behaviors of the Utility Hook when used outside a
 * parent `Provider`:
 *
 * - `defaultValue`: Ensures the Utility Hook returns a default value for
 *   scenarios **where the missing context values should not impact usage**
 * - `errorMessage`: Ensures the Utility Hook throws an error for
 *   scenarios **where the missing context values should prevent** usage
 *
 * @returns `Context`, `Provider` Component and `useContext` Utility Hook
 *
 * @usage
 * ```ts
 * interface StuffContextType {
 *   things: number;
 * }
 *
 * // with `defaultValue`
 * const defaultValue: StuffContextType = { things: 7 };
 *
 * const { StuffProvider, useStuff } = createContextUtilities({
 *   contextName: 'Stuff',
 *   defaultValue,
 * });
 *
 * // with `errorMessage`
 * const { StuffProvider, useStuff } = createContextUtilities<StuffContextType>({
 *   contextName: 'Stuff',
 *   errorMessage: '`useStuff` must be used in a `StuffProvider`'
 * });
 * ```
 */
function createContextUtilities(options) {
    const { contextName, defaultValue, errorMessage } = options ?? {};
    if (isUndefined(defaultValue) && !isString(errorMessage)) {
        throw new Error(INVALID_OPTIONS_MESSAGE);
    }
    const Context = React__default.createContext(defaultValue);
    function Provider(props) {
        const { children, ...context } = props;
        const value = React__default.useMemo(() => context, 
        // Unpack `context` for the dep array; using `[context]` results in
        // evaluation on every render
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Object.values(context));
        return React__default.createElement(Context.Provider, { value: value }, children);
    }
    Provider.displayName = `${contextName}Provider`;
    return {
        [`use${contextName}`]: function (params) {
            const context = React__default.useContext(Context);
            if (isUndefined(context)) {
                throw new Error(params?.errorMessage ?? errorMessage);
            }
            return context;
        },
        [`${contextName}Provider`]: Provider,
        [`${contextName}Context`]: Context,
    };
}

export { INVALID_OPTIONS_MESSAGE, createContextUtilities as default };
