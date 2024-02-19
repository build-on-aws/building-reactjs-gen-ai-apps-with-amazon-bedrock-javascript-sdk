import * as React from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { Loader } from '../Loader/Loader.mjs';
import { ScrollView } from '../ScrollView/ScrollView.mjs';
import { View } from '../View/View.mjs';
import { ComponentText } from '../shared/constants.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const MenuHeader = ({ children }) => {
    if (!children) {
        return null;
    }
    return (React.createElement(View, { className: ComponentClassName.AutocompleteMenuHeader }, children));
};
const MenuFooter = ({ children }) => {
    if (!children) {
        return null;
    }
    return (React.createElement(View, { className: ComponentClassName.AutocompleteMenuFooter }, children));
};
const MenuLoading = ({ children }) => {
    return (React.createElement(View, { className: ComponentClassName.AutocompleteMenuLoading }, children ?? (React.createElement(React.Fragment, null,
        React.createElement(Loader, null),
        ComponentText.Autocomplete.loadingText))));
};
const MenuEmpty = ({ children }) => (React.createElement(View, { className: ComponentClassName.AutocompleteMenuEmpty }, children ?? ComponentText.Autocomplete.emptyText));
const AutocompleteMenuPrimitive = ({ ariaLabel, children, Header = null, Footer = null, LoadingIndicator = null, Empty = null, isLoading, listboxId, ...rest }, ref) => {
    return (React.createElement(ScrollView, { className: ComponentClassName.AutocompleteMenu, ref: ref, ...rest }, isLoading ? (React.createElement(MenuLoading, null, LoadingIndicator)) : (React.createElement(React.Fragment, null,
        React.createElement(MenuHeader, null, Header),
        children.length > 0 ? (React.createElement(ScrollView, { as: "ul", ariaLabel: ariaLabel, className: ComponentClassName.AutocompleteMenuOptions, id: listboxId, role: "listbox" }, children)) : (React.createElement(MenuEmpty, null, Empty)),
        React.createElement(MenuFooter, null, Footer)))));
};
const AutocompleteMenu = primitiveWithForwardRef(AutocompleteMenuPrimitive);
AutocompleteMenu.displayName = 'AutocompleteMenu';

export { AutocompleteMenu };
