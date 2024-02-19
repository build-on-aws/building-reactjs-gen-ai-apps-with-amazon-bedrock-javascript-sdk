import { AmplifyClassV6 } from '@aws-amplify/core';
/**
 * Infer the signing service and region from the given URL, and for REST API only, from the Amplify configuration.
 * It supports raw API Gateway endpoint and AppSync endpoint.
 *
 * @internal
 */
export declare const parseSigningInfo: (url: URL, restApiOptions?: {
    amplify: AmplifyClassV6;
    apiName: string;
}) => {
    service: string;
    region: string;
};
