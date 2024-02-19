import { ToggleButtonGroupProps } from '../types';
type UseToggleButtonParams = Pick<ToggleButtonGroupProps, 'onChange' | 'value' | 'isExclusive' | 'isSelectionRequired'>;
export declare const useToggleButtonGroup: ({ onChange, value, isExclusive, isSelectionRequired, }: UseToggleButtonParams) => (value: string | undefined) => void;
export {};
