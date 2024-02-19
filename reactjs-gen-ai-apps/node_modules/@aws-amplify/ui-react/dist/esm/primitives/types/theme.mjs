import { stylePropsToThemeKeys } from '../shared/constants.mjs';

const isThemeStylePropKey = (key) => {
    return key in stylePropsToThemeKeys;
};

export { isThemeStylePropKey };
