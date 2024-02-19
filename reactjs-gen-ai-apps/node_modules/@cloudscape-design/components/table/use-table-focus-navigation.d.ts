import { RefObject } from 'react';
import { TableProps } from './interfaces';
/**
 * This hook is used to navigate between table cells using the keyboard arrow keys.
 * All the functionality is implemented in the hook, so the table component does not
 * need to implement any keyboard event handlers.
 * @param enable - Toggle functionality of the hook
 * @param tableRoot - A ref to a table container. Ideally the root element of the table (<table>); tbody is also acceptable.
 * @param columnDefinitions - The column definitions for the table.
 * @param numRows - The number of rows in the table.
 */
declare function useTableFocusNavigation<T extends {
    editConfig?: TableProps.EditConfig<any>;
}>(selectionType: TableProps['selectionType'], tableRoot: RefObject<HTMLTableElement>, columnDefinitions: Readonly<T[]>, numRows: number): void;
export default useTableFocusNavigation;
//# sourceMappingURL=use-table-focus-navigation.d.ts.map