import { BaseCallbackConfig, CallbackManagerForRetrieverRun, Callbacks } from "./callbacks/manager.js";
import type { DocumentInterface } from "./documents/document.js";
import { Runnable, type RunnableInterface } from "./runnables/base.js";
import { RunnableConfig } from "./runnables/config.js";
/**
 * Base Retriever class. All indexes should extend this class.
 */
export interface BaseRetrieverInput {
    callbacks?: Callbacks;
    tags?: string[];
    metadata?: Record<string, unknown>;
    verbose?: boolean;
}
export interface BaseRetrieverInterface extends RunnableInterface<string, DocumentInterface[]> {
    getRelevantDocuments(query: string, config?: Callbacks | BaseCallbackConfig): Promise<DocumentInterface[]>;
}
/**
 * Abstract base class for a Document retrieval system. A retrieval system
 * is defined as something that can take string queries and return the
 * most 'relevant' Documents from some source.
 */
export declare abstract class BaseRetriever extends Runnable<string, DocumentInterface[]> implements BaseRetrieverInterface {
    callbacks?: Callbacks;
    tags?: string[];
    metadata?: Record<string, unknown>;
    verbose?: boolean;
    constructor(fields?: BaseRetrieverInput);
    /**
     * TODO: This should be an abstract method, but we'd like to avoid breaking
     * changes to people currently using subclassed custom retrievers.
     * Change it on next major release.
     */
    _getRelevantDocuments(_query: string, _callbacks?: CallbackManagerForRetrieverRun): Promise<DocumentInterface[]>;
    invoke(input: string, options?: RunnableConfig): Promise<DocumentInterface[]>;
    /**
     * Main method used to retrieve relevant documents. It takes a query
     * string and an optional configuration object, and returns a promise that
     * resolves to an array of `Document` objects. This method handles the
     * retrieval process, including starting and ending callbacks, and error
     * handling.
     * @param query The query string to retrieve relevant documents for.
     * @param config Optional configuration object for the retrieval process.
     * @returns A promise that resolves to an array of `Document` objects.
     */
    getRelevantDocuments(query: string, config?: Callbacks | BaseCallbackConfig): Promise<DocumentInterface[]>;
}
