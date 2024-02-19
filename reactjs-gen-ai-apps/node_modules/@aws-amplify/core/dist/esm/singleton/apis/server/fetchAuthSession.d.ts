import { AmplifyServer } from '../../../adapterCore';
import { AuthSession, FetchAuthSessionOptions } from '../../Auth/types';
export declare const fetchAuthSession: (contextSpec: AmplifyServer.ContextSpec, options?: FetchAuthSessionOptions) => Promise<AuthSession>;
