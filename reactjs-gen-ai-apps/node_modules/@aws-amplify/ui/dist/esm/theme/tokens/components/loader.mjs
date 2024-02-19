const loader = {
    width: { value: '{fontSizes.medium.value}' },
    height: { value: '{fontSizes.medium.value}' },
    fontSize: { value: '{fontSizes.xs.value}' },
    strokeEmpty: { value: '{colors.neutral.20.value}' },
    strokeFilled: { value: '{colors.primary.80.value}' },
    strokeLinecap: { value: 'round' },
    animationDuration: { value: '1s' },
    small: {
        width: { value: '{fontSizes.small.value}' },
        height: { value: '{fontSizes.small.value}' },
        fontSize: { value: '{fontSizes.xxs.value}' },
    },
    large: {
        width: { value: '{fontSizes.large.value}' },
        height: { value: '{fontSizes.large.value}' },
        fontSize: { value: '{fontSizes.small.value}' },
    },
    linear: {
        width: { value: '100%' },
        minWidth: { value: '5rem' },
        fontSize: { value: '{fontSizes.xxs.value}' },
        strokeWidth: { value: '{fontSizes.xxs.value}' },
        strokeFilled: { value: '{colors.primary.80.value}' },
        strokeEmpty: { value: '{colors.neutral.20.value}' },
        strokeLinecap: { value: 'round' },
        animationDuration: { value: '1s' },
        small: {
            strokeWidth: { value: '{fontSizes.xxxs.value}' },
            fontSize: { value: '{fontSizes.xxxs.value}' },
        },
        large: {
            strokeWidth: { value: '{fontSizes.xs.value}' },
            fontSize: { value: '{fontSizes.xs.value}' },
        },
    },
    text: {
        fill: { value: '{colors.font.primary.value}' },
    },
};

export { loader };
