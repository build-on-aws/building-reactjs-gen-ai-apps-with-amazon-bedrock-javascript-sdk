export declare const AUTO_GENERATED_ID_PREFIX = "amplify-id";
export type UseStableId = (id?: string) => string;
/**
 * Create a uuid to use with amplify fields unless
 * an id is provided
 * @param id user specified id
 * @returns string
 */
export declare const useStableId: UseStableId;
