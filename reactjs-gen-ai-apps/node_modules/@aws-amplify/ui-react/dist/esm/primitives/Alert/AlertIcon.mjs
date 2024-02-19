import * as React from 'react';
import { ComponentClassName } from '@aws-amplify/ui';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import '../View/View.mjs';
import { IconCheckCircle } from '../Icon/icons/IconCheckCircle.mjs';
import { IconError } from '../Icon/icons/IconError.mjs';
import { IconInfo } from '../Icon/icons/IconInfo.mjs';
import { IconWarning } from '../Icon/icons/IconWarning.mjs';

/**
 * @internal For internal Amplify UI use only. May be removed in a future release.
 */
const AlertIcon = ({ variation, ariaHidden, ariaLabel, role, }) => {
    const icons = useIcons('alert');
    let icon;
    switch (variation) {
        case 'info':
            icon = icons?.info ?? (React.createElement(IconInfo, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, role: role }));
            break;
        case 'error':
            icon = icons?.error ?? (React.createElement(IconError, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, role: role }));
            break;
        case 'warning':
            icon = icons?.warning ?? (React.createElement(IconWarning, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, role: role }));
            break;
        case 'success':
            icon = icons?.success ?? (React.createElement(IconCheckCircle, { "aria-hidden": ariaHidden, "aria-label": ariaLabel, role: role }));
            break;
    }
    return icon ? (React.createElement("span", { className: ComponentClassName.AlertIcon }, icon)) : null;
};
AlertIcon.displayName = 'AlertIcon';

export { AlertIcon };
