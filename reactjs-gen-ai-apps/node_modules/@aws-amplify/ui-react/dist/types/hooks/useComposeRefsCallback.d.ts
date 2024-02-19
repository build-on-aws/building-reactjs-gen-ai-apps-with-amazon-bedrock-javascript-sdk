import * as React from 'react';
export interface UseComposeRefsCallbackProps<RefType> {
    externalRef?: React.ForwardedRef<RefType>;
    internalRef: React.MutableRefObject<RefType>;
}
export type UseComposeRefsCallback<RefType> = (node: RefType) => void;
/**
 *  Creates ref callback to compose together external and internal refs
 */
export declare function useComposeRefsCallback<RefType>({ externalRef, internalRef, }: UseComposeRefsCallbackProps<RefType>): UseComposeRefsCallback<RefType>;
