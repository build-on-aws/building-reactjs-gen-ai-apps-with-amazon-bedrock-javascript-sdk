import { AmplifyClassV6 } from '@aws-amplify/core';
/**
 * @internal
 */
export declare const resolveConfig: (amplify: AmplifyClassV6) => {
    apiKey: string | undefined;
    customEndpoint: string | undefined;
    customEndpointRegion: string | undefined;
    defaultAuthMode: import("@aws-amplify/core/internals/utils").GraphQLAuthMode | undefined;
    endpoint: string | undefined;
    region: string | undefined;
};
