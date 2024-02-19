/// <reference types="react" />
import { ChangePasswordProps } from './types';
declare function ChangePassword({ components, displayText: overrideDisplayText, onError, onSuccess, validators, }: ChangePasswordProps): JSX.Element | null;
declare namespace ChangePassword {
    var CurrentPasswordField: import("../types").PasswordFieldComponent;
    var NewPasswordField: import("../types").PasswordFieldComponent;
    var ConfirmPasswordField: import("../types").PasswordFieldComponent;
    var SubmitButton: import("../types").SubmitButtonComponent;
    var ErrorMessage: import("../types").ErrorMessageComponent;
}
export default ChangePassword;
