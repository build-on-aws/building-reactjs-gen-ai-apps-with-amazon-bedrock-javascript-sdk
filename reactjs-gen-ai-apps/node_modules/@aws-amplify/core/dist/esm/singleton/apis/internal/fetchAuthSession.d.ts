import { AmplifyClass } from '../../Amplify';
import { AuthSession, FetchAuthSessionOptions } from '../../Auth/types';
export declare const fetchAuthSession: (amplify: AmplifyClass, options?: FetchAuthSessionOptions) => Promise<AuthSession>;
