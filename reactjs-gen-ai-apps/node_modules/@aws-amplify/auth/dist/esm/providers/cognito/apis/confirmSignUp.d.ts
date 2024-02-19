import { ConfirmSignUpInput, ConfirmSignUpOutput } from '../types';
/**
 * Confirms a new user account.
 *
 * @param input -  The ConfirmSignUpInput object.
 * @returns ConfirmSignUpOutput
 * @throws -{@link ConfirmSignUpException }
 * Thrown due to an invalid confirmation code.
 * @throws -{@link AuthValidationErrorCode }
 * Thrown due to an empty confirmation code
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function confirmSignUp(input: ConfirmSignUpInput): Promise<ConfirmSignUpOutput>;
