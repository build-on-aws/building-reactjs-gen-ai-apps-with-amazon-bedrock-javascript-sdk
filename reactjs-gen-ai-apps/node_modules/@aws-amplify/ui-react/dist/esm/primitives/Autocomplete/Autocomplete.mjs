import { isFunction, classNames, ComponentClassName } from '@aws-amplify/ui';
import * as React from 'react';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';
import { AutocompleteOption } from './AutocompleteOption.mjs';
import { AutocompleteMenu } from './AutocompleteMenu.mjs';
import { useAutocomplete } from './useAutocomplete.mjs';
import { HighlightMatch } from '../HighlightMatch/HighlightMatch.mjs';
import { SearchField } from '../SearchField/SearchField.mjs';
import { View } from '../View/View.mjs';

const AutocompletePrimitive = ({ className, defaultValue, value, isLoading = false, menuSlots = {}, options, optionFilter, onBlur, onChange, onClear, onClick, onSelect, onSubmit, renderOption, testId, ...rest }, ref) => {
    const { activeOptionId, autocompleteId, composedValue, filteredOptions, handleOnBlur, handleOnClear, handleOnClick, handleOnChange, handleOnKeyDown, isControlled, isCustomFiltering, isMenuOpen, listboxId, menuId, optionBaseId, setActiveOption, setIsMenuOpen, setInternalValue, } = useAutocomplete({
        defaultValue,
        value,
        options,
        optionFilter,
        onBlur,
        onChange,
        onClear,
        onClick,
        onSelect,
        onSubmit,
    });
    const comboboxProps = {
        role: 'combobox',
        'aria-activedescendant': activeOptionId,
        'aria-autocomplete': 'list',
        'aria-controls': isMenuOpen ? menuId : undefined,
        'aria-expanded': isMenuOpen,
        'aria-haspopup': 'listbox',
        'aria-owns': isMenuOpen ? menuId : undefined,
    };
    const Options = filteredOptions.map((option, idx) => {
        const { id, label, ...rest } = option;
        const handleOnClick = () => {
            setIsMenuOpen(false);
            setActiveOption(null);
            if (!isControlled) {
                setInternalValue(label);
            }
            if (isFunction(onSelect)) {
                onSelect(option);
            }
        };
        // This is required. Mousedown event will fire a blur event by default
        // and so the menu will close before the click event on an option gets a chance to fire
        const handleOnMouseDown = (event) => {
            event.preventDefault();
        };
        const handleOnMouseMove = () => {
            setActiveOption(option);
        };
        const optionId = id ?? `${optionBaseId}-option-${idx}`;
        const isActive = optionId === activeOptionId;
        return (React.createElement(AutocompleteOption, { isActive: isActive, id: optionId, key: optionId, onClick: handleOnClick, onMouseDown: handleOnMouseDown, onMouseMove: handleOnMouseMove, ...rest }, isFunction(renderOption) ? (renderOption(option, composedValue)) : isCustomFiltering ? (label) : (React.createElement(HighlightMatch, { query: composedValue }, label))));
    });
    return (React.createElement(View, { className: classNames(ComponentClassName.Autocomplete, className), id: autocompleteId, testId: testId },
        React.createElement(SearchField, { hasSearchButton: false, hasSearchIcon: true, onBlur: handleOnBlur, onChange: handleOnChange, onClear: handleOnClear, onClick: handleOnClick, onKeyDown: handleOnKeyDown, ref: ref, value: composedValue, ...comboboxProps, ...rest }),
        isMenuOpen ? (React.createElement(AutocompleteMenu, { id: menuId, isLoading: isLoading, listboxId: listboxId, ...menuSlots }, Options)) : null));
};
/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/autocomplete)
 */
const Autocomplete = primitiveWithForwardRef(AutocompletePrimitive);
Autocomplete.displayName = 'Autocomplete';

export { Autocomplete, AutocompletePrimitive };
