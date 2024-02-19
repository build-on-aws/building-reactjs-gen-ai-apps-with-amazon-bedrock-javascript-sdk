import * as React from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import { ComponentText } from '../shared/constants.mjs';
import '../FieldGroupIcon/FieldGroupIcon.mjs';
import { FieldGroupIconButton } from '../FieldGroupIcon/FieldGroupIconButton.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import '../View/View.mjs';
import { IconSearch } from '../Icon/icons/IconSearch.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ariaLabelText = ComponentText.SearchField.searchButtonLabel;
const SearchFieldButtonPrimitive = ({ size, ...props }, ref) => {
    const icons = useIcons('searchField');
    return (React.createElement(FieldGroupIconButton, { ariaLabel: ariaLabelText, className: ComponentClassName.SearchFieldSearch, size: size, ref: ref, type: "submit", ...props }, icons?.search ?? React.createElement(IconSearch, null)));
};
const SearchFieldButton = primitiveWithForwardRef(SearchFieldButtonPrimitive);
SearchFieldButton.displayName = 'SearchFieldButton';

export { SearchFieldButton };
