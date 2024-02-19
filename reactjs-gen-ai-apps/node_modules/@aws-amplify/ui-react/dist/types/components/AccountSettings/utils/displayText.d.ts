import { DisplayTextTemplate } from '@aws-amplify/ui';
export type ChangePasswordDisplayText = DisplayTextTemplate<{
    confirmPasswordFieldLabel?: string;
    currentPasswordFieldLabel?: string;
    newPasswordFieldLabel?: string;
    updatePasswordButtonText?: string;
}>;
type ChangePasswordDisplayTextDefault = Required<ChangePasswordDisplayText>;
export declare const defaultChangePasswordDisplayText: ChangePasswordDisplayTextDefault;
export type DeleteUserDisplayText = DisplayTextTemplate<{
    cancelButtonText?: string;
    confirmDeleteButtonText?: string;
    deleteAccountButtonText?: string;
    warningText?: string;
}>;
type DeleteUserDisplayTextDefault = Required<DeleteUserDisplayText>;
export declare const defaultDeleteUserDisplayText: DeleteUserDisplayTextDefault;
export {};
