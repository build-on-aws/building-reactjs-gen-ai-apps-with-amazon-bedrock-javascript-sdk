import * as React from 'react';
import { sanitizeNamespaceImport, classNames, ComponentClassName } from '@aws-amplify/ui';
import * as Dropdown from '@radix-ui/react-dropdown-menu';
import { MenuButton } from './MenuButton.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

// Radix packages don't support ESM in Node, in some scenarios(e.g. SSR)
// We have to use namespace import and sanitize it to ensure the interoperablity between ESM and CJS
const { DropdownMenuItem } = sanitizeNamespaceImport(Dropdown);
const MENU_ITEM_TEST_ID = 'amplify-menu-item-test-id';
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/menu)
 */
const MenuItemPrimitive = ({ children, className, ...rest }, ref) => {
    return (React.createElement(DropdownMenuItem, { asChild: true, ref: ref },
        React.createElement(MenuButton, { className: classNames(ComponentClassName.MenuItem, className), testId: MENU_ITEM_TEST_ID, ...rest, variation: "menu" // ensures `menu` variation is not overwritten
         }, children)));
};
const MenuItem = primitiveWithForwardRef(MenuItemPrimitive);
MenuItem.displayName = 'MenuItem';

export { MENU_ITEM_TEST_ID, MenuItem };
