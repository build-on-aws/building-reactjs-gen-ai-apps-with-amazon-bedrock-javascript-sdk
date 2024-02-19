import * as React from 'react';
import { UseSearchFieldProps } from '../types';
type ClearHandler = React.MouseEventHandler<HTMLButtonElement>;
type ClickHandler = React.MouseEventHandler<HTMLButtonElement>;
type KeyDownHandler = React.KeyboardEventHandler<HTMLInputElement>;
type ChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
interface UseSearchField {
    composedValue: string;
    onClearHandler: ClearHandler;
    onClick: ClickHandler;
    onKeyDown: KeyDownHandler;
    handleOnChange: ChangeHandler;
    composedRefs: React.Ref<HTMLInputElement>;
}
export declare const useSearchField: ({ defaultValue, value, onChange, onClear, onSubmit, externalRef, }: UseSearchFieldProps) => UseSearchField;
export {};
