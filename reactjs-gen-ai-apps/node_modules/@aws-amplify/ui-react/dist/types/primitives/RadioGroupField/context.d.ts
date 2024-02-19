import React from 'react';
import { LabelPositions } from '../types/field';
export interface RadioGroupContextType {
    name: string;
    currentValue?: string;
    size?: string;
    defaultValue?: string;
    hasError?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isGroupDisabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    labelPosition?: LabelPositions;
}
export declare const RadioGroupContext: React.Context<RadioGroupContextType>;
export declare const useRadioGroupContext: () => RadioGroupContextType;
