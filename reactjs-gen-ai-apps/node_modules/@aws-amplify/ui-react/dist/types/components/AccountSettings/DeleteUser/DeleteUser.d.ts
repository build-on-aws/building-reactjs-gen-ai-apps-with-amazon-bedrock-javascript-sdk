/// <reference types="react" />
import { DeleteUserProps } from './types';
declare function DeleteUser({ components, displayText: overrideDisplayText, handleDelete, onError, onSuccess, }: DeleteUserProps): JSX.Element | null;
declare namespace DeleteUser {
    var ErrorMessage: import("../types").ErrorMessageComponent;
    var DeleteButton: import("../types").ButtonComponent;
    var WarningView: import("./types").WarningViewComponent<{}>;
}
export default DeleteUser;
