import * as React from 'react';
import { ToggleButtonProps } from '../types';
type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;
type UseToggleButton = {
    handleClick: ClickHandler;
    isPressed?: boolean;
};
export declare const useToggleButton: ({ isPressed, defaultPressed, onClick, onChange, value, }: ToggleButtonProps) => UseToggleButton;
export {};
