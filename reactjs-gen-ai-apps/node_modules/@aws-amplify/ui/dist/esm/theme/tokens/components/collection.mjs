//we are reusing the types from the nested components but new tokens need to be created that reference the previous tokens so that they can inherit the needed values but can be overwritten and only effect the collection component.
//only a subset of the design tokens of the nested components are being exposed, this can be expanded later.
const collection = {
    pagination: {
        current: {
            color: { value: '{components.pagination.current.color}' },
            backgroundColor: {
                value: '{components.pagination.current.backgroundColor}',
            },
        },
        button: {
            color: { value: '{components.pagination.button.color}' },
            _hover: {
                backgroundColor: {
                    value: '{components.pagination.button.hover.backgroundColor}',
                },
                color: { value: '{components.pagination.button.hover.color}' },
            },
            _disabled: {
                color: { value: '{components.pagination.button.disabled.color}' },
            },
        },
    },
    search: {
        input: {
            color: { value: '{components.searchfield.color}' },
        },
        button: {
            color: { value: '{components.searchfield.button.color}' },
            _active: {
                backgroundColor: {
                    value: '{components.searchfield.button._active.backgroundColor}',
                },
                borderColor: {
                    value: '{components.searchfield.button._active.borderColor}',
                },
                color: { value: '{components.searchfield.button._active.color}' },
            },
            _disabled: {
                backgroundColor: {
                    value: '{components.searchfield.button._disabled.backgroundColor}',
                },
                borderColor: {
                    value: '{components.searchfield.button._disabled.borderColor}',
                },
                color: {
                    value: '{components.searchfield.button._disabled.color}',
                },
            },
            _focus: {
                backgroundColor: {
                    value: '{components.searchfield.button._focus.backgroundColor}',
                },
                borderColor: {
                    value: '{components.searchfield.button._focus.borderColor}',
                },
                color: { value: '{components.searchfield.button._focus.color}' },
            },
            _hover: {
                backgroundColor: {
                    value: '{components.searchfield.button._hover.backgroundColor}',
                },
                borderColor: {
                    value: '{components.searchfield.button._hover.borderColor}',
                },
                color: { value: '{components.searchfield.button._hover.color}' },
            },
        },
    },
};

export { collection };
