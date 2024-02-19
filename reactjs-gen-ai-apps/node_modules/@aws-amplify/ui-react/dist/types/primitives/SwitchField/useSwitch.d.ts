import React from 'react';
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
interface UseSwitchProps {
    onChange?: ChangeHandler;
    isChecked?: boolean;
    defaultChecked?: boolean;
    isDisabled?: boolean;
}
interface UseSwitch {
    isOn: boolean;
    changeHandler: ChangeHandler;
    isFocused: boolean;
    setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const useSwitch: (props: UseSwitchProps) => UseSwitch;
export {};
