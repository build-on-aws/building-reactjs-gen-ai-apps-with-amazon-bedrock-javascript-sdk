import { COMPONENT_ROUTE_KEYS, COMPONENT_ROUTE_NAMES } from './constants.mjs';

const isComponentRouteKey = (route) => COMPONENT_ROUTE_KEYS.some((componentRoute) => componentRoute === route);
function resolveAuthenticatorComponents(defaults, overrides) {
    if (!overrides) {
        return defaults;
    }
    return COMPONENT_ROUTE_NAMES.reduce((components, route) => {
        const Default = defaults[route];
        const Override = overrides[route];
        if (typeof Override !== 'function') {
            return { ...components, [route]: Default };
        }
        const { Footer, FormFields, Header } = Default;
        // cast to allow assigning of component slots
        const Component = Override;
        Component.Footer = Footer;
        Component.FormFields = FormFields;
        Component.Header = Header;
        return { ...components, [route]: Component };
    }, {});
}

export { isComponentRouteKey, resolveAuthenticatorComponents };
