import { AmplifyServer } from './types';
export declare const serverContextRegistry: {
    register(context: AmplifyServer.Context): AmplifyServer.ContextSpec;
    deregister(contextSpec: AmplifyServer.ContextSpec): boolean;
    get(contextSpec: AmplifyServer.ContextSpec): AmplifyServer.Context | undefined;
};
