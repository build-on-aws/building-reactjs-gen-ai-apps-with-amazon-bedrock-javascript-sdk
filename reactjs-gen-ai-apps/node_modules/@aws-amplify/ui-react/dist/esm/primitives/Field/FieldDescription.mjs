import * as React from 'react';
import { classNames, ComponentClassName } from '@aws-amplify/ui';
import { Text } from '../Text/Text.mjs';

const QA_FIELD_DESCRIPTION = 'qa-field-description';
const FieldDescription = ({ descriptiveText, labelHidden, ...rest }) => descriptiveText ? (React.createElement(Text, { "data-testid": QA_FIELD_DESCRIPTION, className: classNames(ComponentClassName.FieldDescription, {
        [ComponentClassName.VisuallyHidden]: labelHidden,
    }), ...rest }, descriptiveText)) : null;
FieldDescription.displayName = 'FieldDescription';

export { FieldDescription, QA_FIELD_DESCRIPTION };
