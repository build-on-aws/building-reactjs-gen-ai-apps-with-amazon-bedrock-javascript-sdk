import { SetUpTOTPOutput } from '../types';
/**
 * Sets up TOTP for the user.
 *
 * @returns SetUpTOTPOutput
 * @throws -{@link AssociateSoftwareTokenException}
 * Thrown if a service occurs while setting up TOTP.
 * @throws AuthTokenConfigException - Thrown when the token provider config is invalid.
 **/
export declare function setUpTOTP(): Promise<SetUpTOTPOutput>;
