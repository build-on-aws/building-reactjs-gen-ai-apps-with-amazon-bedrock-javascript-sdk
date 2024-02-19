import * as React from 'react';
interface FieldsetContextType {
    isFieldsetDisabled?: boolean;
}
export declare const FieldsetContext: React.Context<FieldsetContextType>;
/**
 * @description Fieldsets in HTML can be disabled, which disables all child
 * fieldsets and input controls. `useFieldset` passes the disabled state down
 * via context.
 */
export declare const useFieldset: () => FieldsetContextType;
export {};
