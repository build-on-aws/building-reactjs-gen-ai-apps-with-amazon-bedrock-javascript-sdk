import { AmplifyClassV6 } from '@aws-amplify/core';
/**
 * Resolve the REST API request URL by:
 * 1. Loading the REST API endpoint from the Amplify configuration with corresponding API name.
 * 2. Appending the path to the endpoint.
 * 3. Merge the query parameters from path and the queryParameter argument which is taken from the public REST API
 *   options.
 * 4. Validating the resulting URL string.
 *
 * @internal
 */
export declare const resolveApiUrl: (amplify: AmplifyClassV6, apiName: string, path: string, queryParams?: Record<string, string>) => URL;
