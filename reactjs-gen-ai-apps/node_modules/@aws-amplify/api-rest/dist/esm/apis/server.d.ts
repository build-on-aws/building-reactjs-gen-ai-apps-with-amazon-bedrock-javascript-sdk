import { AmplifyServer } from '@aws-amplify/core/internals/adapter-core';
import { DeleteInput, DeleteOperation, GetInput, GetOperation, HeadInput, HeadOperation, PatchInput, PatchOperation, PostInput, PostOperation, PutInput, PutOperation } from '../types';
/**
 * GET HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {GetInput} input - Input for GET operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a GET request
 * ```js
 * import { get } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { body } = await get(contextSpec, input).response;
 *       return await body.json();
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 * @see {@link clientGet}
 */
export declare const get: (contextSpec: AmplifyServer.ContextSpec, input: GetInput) => GetOperation;
/**
 * POST HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {PostInput} input - Input for POST operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a POST request
 * ```js
 * import { post } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { body } = await post(contextSpec, input).response;
 *       return await body.json();
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 */
export declare const post: (contextSpec: AmplifyServer.ContextSpec, input: PostInput) => PostOperation;
/**
 * PUT HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {PutInput} input - Input for PUT operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a PUT request
 * ```js
 * import { put } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { body } = await put(contextSpec, input).response;
 *       return await body.json();
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 */
export declare const put: (contextSpec: AmplifyServer.ContextSpec, input: PutInput) => PutOperation;
/**
 * DELETE HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {DeleteInput} input - Input for DELETE operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a DELETE request
 * ```js
 * import { del } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { headers } = await del(contextSpec, input).response;
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 */
export declare const del: (contextSpec: AmplifyServer.ContextSpec, input: DeleteInput) => DeleteOperation;
/**
 * HEAD HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {HeadInput} input - Input for HEAD operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a HEAD request
 * ```js
 * import { head } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { headers } = await head(contextSpec, input).response;
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 */
export declare const head: (contextSpec: AmplifyServer.ContextSpec, input: HeadInput) => HeadOperation;
/**
 * PATCH HTTP request (server-side)
 * @param {AmplifyServer.ContextSpec} contextSpec - The context spec used to get the Amplify server context.
 * @param {PatchInput} input - Input for PATCH operation.
 * @throws - {@link RestApiError}
 * @example
 * Send a PATCH request
 * ```js
 * import { patch } from 'aws-amplify/api/server';
 * //...
 * const restApiResponse = await runWithAmplifyServerContext({
 *   nextServerContext: { request, response },
 *   operation: async (contextSpec) => {
 *     try {
 *       const { body } = await patch(contextSpec, input).response;
 *       return await body.json();
 *     } catch (error) {
 *       console.log(error);
 *       return false;
 *     }
 *   },
 * });
 * ```
 */
export declare const patch: (contextSpec: AmplifyServer.ContextSpec, input: PatchInput) => PatchOperation;
