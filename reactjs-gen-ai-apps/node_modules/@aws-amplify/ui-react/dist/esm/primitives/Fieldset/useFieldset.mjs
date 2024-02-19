import * as React from 'react';

const FieldsetContext = React.createContext({
    isFieldsetDisabled: false,
});
/**
 * @description Fieldsets in HTML can be disabled, which disables all child
 * fieldsets and input controls. `useFieldset` passes the disabled state down
 * via context.
 */
const useFieldset = () => React.useContext(FieldsetContext);

export { FieldsetContext, useFieldset };
