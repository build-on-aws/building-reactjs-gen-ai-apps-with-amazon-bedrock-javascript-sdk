import { AceModes } from './ace-modes';
import { findUpUntil } from '../internal/utils/dom';
export const DEFAULT_LIGHT_THEME = 'dawn';
export const DEFAULT_DARK_THEME = 'tomorrow_night_bright';
const KEYBOARD_ACCESSIBILITY_MIN_ACE_VERSION = [1, 23];
export function supportsKeyboardAccessibility(ace) {
    var _a;
    // Split semantic version numbers. We don't need a full semver parser for this.
    const semanticVersion = (_a = ace === null || ace === void 0 ? void 0 : ace.version) === null || _a === void 0 ? void 0 : _a.split('.').map((part) => {
        const parsed = parseInt(part);
        return Number.isNaN(parsed) ? part : parsed;
    });
    return (!!semanticVersion &&
        typeof semanticVersion[0] === 'number' &&
        semanticVersion[0] >= KEYBOARD_ACCESSIBILITY_MIN_ACE_VERSION[0] &&
        typeof semanticVersion[1] === 'number' &&
        semanticVersion[1] >= KEYBOARD_ACCESSIBILITY_MIN_ACE_VERSION[1]);
}
export function getDefaultConfig(ace) {
    return Object.assign({ behavioursEnabled: true }, (supportsKeyboardAccessibility(ace) ? { enableKeyboardAccessibility: true } : {}));
}
export function getDefaultTheme(element) {
    const isDarkMode = !!findUpUntil(element, node => node.classList.contains('awsui-polaris-dark-mode') || node.classList.contains('awsui-dark-mode'));
    return isDarkMode ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME;
}
export function getAceTheme(theme) {
    return `ace/theme/${theme}`;
}
export function getLanguageLabel(language) {
    var _a;
    return ((_a = AceModes.filter((mode) => mode.value === language)[0]) === null || _a === void 0 ? void 0 : _a.label) || language;
}
//# sourceMappingURL=util.js.map