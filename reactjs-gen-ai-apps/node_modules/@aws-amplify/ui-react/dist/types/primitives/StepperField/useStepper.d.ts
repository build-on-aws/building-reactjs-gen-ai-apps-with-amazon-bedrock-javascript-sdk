import * as React from 'react';
import { StepperFieldProps } from '../types/stepperField';
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;
type FocusHandler = React.FocusEventHandler<HTMLInputElement>;
type WheelHandler = React.WheelEventHandler<HTMLInputElement>;
type InputValue = number | string;
interface UseStepper extends Required<Pick<StepperFieldProps, 'step' | 'value'>> {
    inputValue: InputValue;
    handleDecrease: ClickHandler;
    handleIncrease: ClickHandler;
    handleOnBlur: FocusHandler;
    handleOnChange: ChangeHandler;
    handleOnWheel: WheelHandler;
    setInputValue: React.Dispatch<React.SetStateAction<InputValue>>;
    shouldDisableDecreaseButton: boolean;
    shouldDisableIncreaseButton: boolean;
}
export declare const useStepper: ({ defaultValue, value: controlledValue, step, max, min, isDisabled, isReadOnly, onChange, onDecrease, onIncrease, onStepChange, }: Omit<import("..").PrimitivePropsWithAs<import("../types/stepperField").BaseStepperFieldProps, "input">, "ref"> & React.RefAttributes<HTMLInputElement> & Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "as" | keyof React.RefAttributes<React.ComponentRef<Element_1>> | keyof import("../types/stepperField").BaseStepperFieldProps> & {
    onChange?: ChangeHandler | undefined;
}) => UseStepper;
export {};
