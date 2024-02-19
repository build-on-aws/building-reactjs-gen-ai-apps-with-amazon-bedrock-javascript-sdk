import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { Button } from '../Button/Button.mjs';
import { FieldGroupIcon } from './FieldGroupIcon.mjs';
import { primitiveWithForwardRef } from '../utils/primitiveWithForwardRef.mjs';

const FieldGroupIconButtonPrimitive = ({ children, className, ...rest }, ref) => (React.createElement(FieldGroupIcon, { as: Button, className: classNames(ComponentClassName.FieldGroupIconButton, className), ref: ref, ...rest }, children));
const FieldGroupIconButton = primitiveWithForwardRef(FieldGroupIconButtonPrimitive);
FieldGroupIconButton.displayName = 'FieldGroupIconButton';

export { FieldGroupIconButton };
