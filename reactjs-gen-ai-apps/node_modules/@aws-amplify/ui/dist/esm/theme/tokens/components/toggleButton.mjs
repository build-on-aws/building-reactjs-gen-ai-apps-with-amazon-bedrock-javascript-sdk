const togglebutton = {
    borderColor: { value: '{colors.border.primary.value}' },
    color: { value: '{colors.font.primary.value}' },
    _hover: {
        backgroundColor: { value: '{colors.overlay.10.value}' },
    },
    _focus: {
        borderColor: { value: '{colors.border.focus.value}' },
        color: { value: '{colors.font.primary.value}' },
    },
    _active: {
        backgroundColor: { value: '{colors.transparent.value}' },
    },
    _disabled: {
        backgroundColor: { value: '{colors.transparent.value}' },
        borderColor: { value: '{colors.border.disabled.value}' },
        color: { value: '{colors.font.disabled.value}' },
    },
    _pressed: {
        borderColor: { value: '{colors.border.pressed.value}' },
        color: { value: '{colors.font.primary.value}' },
        backgroundColor: { value: '{colors.overlay.20.value}' },
        _hover: {
            backgroundColor: { value: '{colors.overlay.30.value}' },
        },
    },
    primary: {
        backgroundColor: { value: '{colors.transparent.value}' },
        borderWidth: { value: '{borderWidths.small.value}' },
        _focus: {
            borderColor: { value: '{colors.border.focus.value}' },
            backgroundColor: { value: '{colors.transparent.value}' },
            boxShadow: { value: '{components.fieldcontrol._focus.boxShadow.value}' },
            color: { value: '{colors.font.primary.value}' },
        },
        _hover: {
            backgroundColor: { value: '{colors.overlay.10.value}' },
            color: { value: '{colors.font.primary.value}' },
        },
        _disabled: {
            borderColor: { value: '{colors.border.disabled.value}' },
            backgroundColor: { value: '{colors.background.disabled.value}' },
            color: { value: '{colors.font.disabled.value}' },
        },
        _pressed: {
            backgroundColor: { value: '{colors.primary.80.value}' },
            borderColor: { value: '{colors.primary.80.value}' },
            color: { value: '{colors.background.primary.value}' },
            _focus: {
                backgroundColor: {
                    value: '{colors.border.focus.value}',
                },
                borderColor: { value: '{colors.border.focus.value}' },
                color: { value: '{colors.background.primary.value}' },
            },
            _hover: {
                borderColor: { value: '{colors.primary.60.value}' },
                backgroundColor: {
                    value: '{colors.primary.60.value}',
                },
                boxShadow: { value: '{colors.primary.60.value}' },
                color: { value: '{colors.background.primary.value}' },
            },
        },
    },
    link: {
        backgroundColor: { value: '{colors.transparent.value}' },
        color: { value: '{colors.overlay.50.value}' },
        _hover: {
            backgroundColor: { value: '{colors.transparent.value}' },
            color: { value: '{colors.overlay.50.value}' },
        },
        _focus: {
            backgroundColor: { value: '{colors.transparent.value}' },
            color: { value: '{colors.overlay.50.value}' },
        },
        _disabled: {
            backgroundColor: { value: '{colors.transparent.value}' },
            color: { value: '{colors.font.disabled.value}' },
        },
        _pressed: {
            backgroundColor: { value: '{colors.transparent.value}' },
            color: { value: '{colors.overlay.90.value}' },
            _focus: {
                backgroundColor: { value: '{colors.transparent.value}' },
                color: { value: '{colors.overlay.90.value}' },
            },
            _hover: {
                color: { value: '{colors.overlay.90.value}' },
                backgroundColor: { value: '{colors.transparent.value}' },
            },
        },
    },
};

export { togglebutton };
