import { AuthModeStrategy, AmplifyContext } from '../types';
/**
 * Returns an array of auth modes to try based on the schema, model, and
 * authenticated user (or lack thereof). Rules are sourced from `getAuthRules`
 * and returned in the order they ought to be attempted.
 *
 * @see sortAuthRulesWithPriority
 * @see getAuthRules
 *
 * @param param0 The `{schema, modelName}` to inspect.
 * @returns A sorted array of auth modes to attempt.
 */
export declare const multiAuthStrategy: (amplifyContext: AmplifyContext) => AuthModeStrategy;
