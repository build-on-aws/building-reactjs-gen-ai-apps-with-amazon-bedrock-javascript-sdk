import { AuthActorContext } from './types';
import { SignUpInput } from 'aws-amplify/auth';
import { LoginMechanism, UserAttributes } from '../../types';
export declare const sanitizePhoneNumber: (dialCode: string, phoneNumber: string) => string;
export declare const getUserAttributes: (formValues: AuthActorContext['formValues']) => UserAttributes;
export declare const getSignUpInput: (username: string, formValues: AuthActorContext['formValues'], loginMechanism: LoginMechanism) => SignUpInput;
export declare const getUsernameSignUp: ({ formValues, loginMechanisms, }: AuthActorContext) => string;
