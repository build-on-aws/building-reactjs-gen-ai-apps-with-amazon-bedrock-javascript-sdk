import { DesignTokenProperties, OutputVariantKey } from '../types/designToken';
export type PhoneNumberFieldTokens<Output extends OutputVariantKey> = DesignTokenProperties<'color' | 'borderColor' | 'fontSize', Output> & {
    _focus?: DesignTokenProperties<'borderColor', Output>;
};
export declare const phonenumberfield: {
    color: {
        value: string;
    };
    borderColor: {
        value: string;
    };
    fontSize: {
        value: string;
    };
    _focus: {
        borderColor: {
            value: string;
        };
    };
};
