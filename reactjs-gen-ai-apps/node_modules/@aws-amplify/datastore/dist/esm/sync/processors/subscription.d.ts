import { Observable } from 'rxjs';
import { InternalSchema, PersistentModel, SchemaModel, ModelPredicate, AuthModeStrategy, ErrorHandler, AmplifyContext } from '../../types';
import { TransformerMutationType } from '../utils';
export declare enum CONTROL_MSG {
    CONNECTED = "CONNECTED"
}
export declare enum USER_CREDENTIALS {
    'none' = 0,
    'unauth' = 1,
    'auth' = 2
}
declare class SubscriptionProcessor {
    private readonly schema;
    private readonly syncPredicates;
    private readonly amplifyConfig;
    private readonly authModeStrategy;
    private readonly errorHandler;
    private readonly amplifyContext;
    private readonly typeQuery;
    private buffer;
    private dataObserver;
    private runningProcesses;
    constructor(schema: InternalSchema, syncPredicates: WeakMap<SchemaModel, ModelPredicate<any> | null>, amplifyConfig: Record<string, any>, authModeStrategy: AuthModeStrategy, errorHandler: ErrorHandler, amplifyContext?: AmplifyContext);
    private buildSubscription;
    private getAuthorizationInfo;
    private hubQueryCompletionListener;
    start(): [
        Observable<CONTROL_MSG>,
        Observable<[TransformerMutationType, SchemaModel, PersistentModel]>
    ];
    stop(): Promise<void>;
    private passesPredicateValidation;
    private pushToBuffer;
    private drainBuffer;
    /**
     * @returns true if the service returned an RTF subscription error
     * @remarks logs a warning with remediation instructions
     *
     */
    private catchRTFError;
}
export { SubscriptionProcessor };
