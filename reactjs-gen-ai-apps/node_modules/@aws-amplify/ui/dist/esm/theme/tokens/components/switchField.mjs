const switchfield = {
    // States
    _disabled: {
        opacity: { value: '{opacities.60.value}' },
    },
    _focused: {
        shadow: {
            value: '{components.fieldcontrol._focus.boxShadow.value}',
        },
    },
    // Sizes
    fontSize: { value: '{fontSizes.medium.value}' },
    large: {
        fontSize: { value: '{fontSizes.large.value}' },
    },
    small: {
        fontSize: { value: '{fontSizes.small.value}' },
    },
    // Child elements
    label: {
        padding: { value: '{space.xs.value}' },
    },
    thumb: {
        backgroundColor: { value: '{colors.background.primary.value}' },
        borderColor: { value: 'transparent' },
        borderWidth: { value: '{borderWidths.small.value}' },
        borderStyle: { value: 'solid' },
        borderRadius: { value: '{radii.xxxl.value}' },
        checked: {
            transform: { value: '{transforms.slideX.medium.value}' },
        },
        transition: {
            duration: { value: '{time.medium.value}' },
        },
        width: { value: '{space.relative.medium.value}' },
    },
    track: {
        backgroundColor: { value: '{colors.background.quaternary.value}' },
        borderRadius: { value: '{radii.xxxl.value}' },
        checked: {
            backgroundColor: { value: '{colors.primary.80.value}' },
        },
        height: { value: '{space.relative.medium.value}' },
        padding: { value: '{outlineWidths.medium.value}' },
        transition: {
            duration: { value: '{time.short.value}' },
        },
        width: { value: '{space.relative.xl.value}' },
        _error: {
            backgroundColor: { value: '{colors.background.error.value}' },
        },
    },
};

export { switchfield };
