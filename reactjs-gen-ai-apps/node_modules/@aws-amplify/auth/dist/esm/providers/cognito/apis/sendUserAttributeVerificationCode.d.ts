import { SendUserAttributeVerificationCodeInput, SendUserAttributeVerificationCodeOutput } from '../types';
/**
 * Resends user's confirmation code when updating attributes while authenticated.
 *
 * @param input - The SendUserAttributeVerificationCodeInput object
 * @returns SendUserAttributeVerificationCodeOutput
 * @throws - {@link GetUserAttributeVerificationException}
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 */
export declare const sendUserAttributeVerificationCode: (input: SendUserAttributeVerificationCodeInput) => Promise<SendUserAttributeVerificationCodeOutput>;
