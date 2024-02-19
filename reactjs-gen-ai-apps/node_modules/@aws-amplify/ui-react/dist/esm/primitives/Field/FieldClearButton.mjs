import * as React from 'react';
import '../FieldGroupIcon/FieldGroupIcon.mjs';
import { FieldGroupIconButton } from '../FieldGroupIcon/FieldGroupIconButton.mjs';
import '../Icon/Icon.mjs';
import '../Icon/context/IconsContext.mjs';
import { useIcons } from '../Icon/context/useIcons.mjs';
import '@aws-amplify/ui';
import '../View/View.mjs';
import { IconClose } from '../Icon/icons/IconClose.mjs';
import { ComponentText } from '../shared/constants.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const ariaLabelText = ComponentText.Fields.clearButtonLabel;
const FieldClearButtonPrimitive = ({ ariaLabel = ariaLabelText, size, ...rest }, ref) => {
    const icons = useIcons('field');
    return (React.createElement(FieldGroupIconButton, { ariaLabel: ariaLabel, size: size, ref: ref, ...rest }, icons?.clear ?? React.createElement(IconClose, null)));
};
const FieldClearButton = primitiveWithForwardRef(FieldClearButtonPrimitive);
FieldClearButton.displayName = 'FieldClearButton';

export { FieldClearButton };
