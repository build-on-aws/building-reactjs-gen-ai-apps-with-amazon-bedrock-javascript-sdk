const stepperfield = {
    borderColor: { value: '{components.fieldcontrol.borderColor}' },
    flexDirection: { value: 'column' },
    input: {
        color: { value: '{components.fieldcontrol.color}' },
        fontSize: { value: '{components.fieldcontrol.fontSize}' },
        textAlign: { value: 'center' },
    },
    button: {
        color: { value: '{components.button.color}' },
        backgroundColor: { value: '{colors.transparent}' },
        _active: {
            color: { value: '{components.button._active.color}' },
            backgroundColor: { value: '{components.button._active.backgroundColor}' },
        },
        _focus: {
            color: { value: '{components.button._focus.color}' },
            backgroundColor: { value: '{components.button._focus.backgroundColor}' },
        },
        _disabled: {
            color: { value: '{components.button._disabled.color}' },
            backgroundColor: {
                value: '{components.fieldcontrol._disabled.backgroundColor}',
            },
        },
        _hover: {
            color: { value: '{components.button._hover.color}' },
            backgroundColor: { value: '{components.button._hover.backgroundColor}' },
        },
    },
};

export { stepperfield };
