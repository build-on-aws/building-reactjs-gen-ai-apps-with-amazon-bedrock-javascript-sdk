import { ResendSignUpCodeInput, ResendSignUpCodeOutput } from '../types';
/**
 * Resend the confirmation code while signing up
 *
 * @param input -  The ResendSignUpCodeInput object
 * @returns ResendSignUpCodeOutput
 * @throws service: {@link ResendConfirmationException } - Cognito service errors thrown when resending the code.
 * @throws validation: {@link AuthValidationErrorCode } - Validation errors thrown either username are not defined.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare function resendSignUpCode(input: ResendSignUpCodeInput): Promise<ResendSignUpCodeOutput>;
