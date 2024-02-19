import { AsyncCaller, AsyncCallerParams } from "@langchain/core/utils/async_caller";
import type { EmbeddingsInterface } from "@langchain/core/embeddings";
import { VectorStore, MaxMarginalRelevanceSearchOptions } from "@langchain/core/vectorstores";
import { Document } from "@langchain/core/documents";
import { CassandraClientArgs } from "../utils/cassandra.js";
export interface Column {
    type: string;
    name: string;
    partition?: boolean;
}
export interface Index {
    name: string;
    value: string;
    options?: string;
}
export interface Filter {
    name: string;
    value: unknown | [unknown, ...unknown[]];
    operator?: string;
}
export type WhereClause = Filter[] | Filter | Record<string, unknown>;
export type SupportedVectorTypes = "cosine" | "dot_product" | "euclidean";
export interface CassandraLibArgs extends CassandraClientArgs, AsyncCallerParams {
    table: string;
    keyspace: string;
    vectorType?: SupportedVectorTypes;
    dimensions: number;
    primaryKey: Column | Column[];
    metadataColumns: Column[];
    withClause?: string;
    indices?: Index[];
    batchSize?: number;
}
/**
 * Class for interacting with the Cassandra database. It extends the
 * VectorStore class and provides methods for adding vectors and
 * documents, searching for similar vectors, and creating instances from
 * texts or documents.
 */
export declare class CassandraStore extends VectorStore {
    FilterType: WhereClause;
    private client;
    private readonly vectorType;
    private readonly dimensions;
    private readonly keyspace;
    private primaryKey;
    private metadataColumns;
    private withClause;
    private selectColumns;
    private readonly table;
    private indices;
    private initializationPromise;
    asyncCaller: AsyncCaller;
    private readonly batchSize;
    private readonly embeddingColumnAlias;
    private constructorArgs;
    _vectorstoreType(): string;
    constructor(embeddings: EmbeddingsInterface, args: CassandraLibArgs);
    /**
     * Method to save vectors to the Cassandra database.
     * @param vectors Vectors to save.
     * @param documents The documents associated with the vectors.
     * @returns Promise that resolves when the vectors have been added.
     */
    addVectors(vectors: number[][], documents: Document[]): Promise<void>;
    /**
     * Method to add documents to the Cassandra database.
     * @param documents The documents to add.
     * @returns Promise that resolves when the documents have been added.
     */
    addDocuments(documents: Document[]): Promise<void>;
    /**
     * Helper method to search for vectors that are similar to a given query vector.
     * @param query The query vector.
     * @param k The number of similar Documents to return.
     * @param filter Optional filter to be applied as a WHERE clause.
     * @param includeEmbedding Whether to include the embedding vectors in the results.
     * @returns Promise that resolves with an array of tuples, each containing a Document and a score.
     */
    search(query: number[], k: number, filter?: WhereClause, includeEmbedding?: boolean): Promise<[Document, number][]>;
    /**
     * Method to search for vectors that are similar to a given query vector.
     * @param query The query vector.
     * @param k The number of similar Documents to return.
     * @param filter Optional filter to be applied as a WHERE clause.
     * @returns Promise that resolves with an array of tuples, each containing a Document and a score.
     */
    similaritySearchVectorWithScore(query: number[], k: number, filter?: WhereClause): Promise<[Document, number][]>;
    /**
     * Method to search for vectors that are similar to a given query vector, but with
     * the results selected using the maximal marginal relevance.
     * @param query The query string.
     * @param options.k The number of similar Documents to return.
     * @param options.fetchK=4*k The number of records to fetch before passing to the MMR algorithm.
     * @param options.lambda=0.5 The degree of diversity among the results between 0 (maximum diversity) and 1 (minimum diversity).
     * @param options.filter Optional filter to be applied as a WHERE clause.
     * @returns List of documents selected by maximal marginal relevance.
     */
    maxMarginalRelevanceSearch(query: string, options: MaxMarginalRelevanceSearchOptions<this["FilterType"]>): Promise<Document[]>;
    /**
     * Static method to create an instance of CassandraStore from texts.
     * @param texts The texts to use.
     * @param metadatas The metadata associated with the texts.
     * @param embeddings The embeddings to use.
     * @param args The arguments for the CassandraStore.
     * @returns Promise that resolves with a new instance of CassandraStore.
     */
    static fromTexts(texts: string[], metadatas: object | object[], embeddings: EmbeddingsInterface, args: CassandraLibArgs): Promise<CassandraStore>;
    /**
     * Static method to create an instance of CassandraStore from documents.
     * @param docs The documents to use.
     * @param embeddings The embeddings to use.
     * @param args The arguments for the CassandraStore.
     * @returns Promise that resolves with a new instance of CassandraStore.
     */
    static fromDocuments(docs: Document[], embeddings: EmbeddingsInterface, args: CassandraLibArgs): Promise<CassandraStore>;
    /**
     * Static method to create an instance of CassandraStore from an existing
     * index.
     * @param embeddings The embeddings to use.
     * @param args The arguments for the CassandraStore.
     * @returns Promise that resolves with a new instance of CassandraStore.
     */
    static fromExistingIndex(embeddings: EmbeddingsInterface, args: CassandraLibArgs): Promise<CassandraStore>;
    /**
     * Method to initialize the Cassandra database.
     * @returns Promise that resolves when the database has been initialized.
     */
    private initialize;
    /**
     * Method to perform the initialization tasks
     */
    private performInitialization;
    /**
     * Method to build the PRIMARY KEY clause for CREATE TABLE.
     * @param columns: list of Column to include in the key
     * @returns The clause, including PRIMARY KEY
     */
    private buildPrimaryKey;
    /**
     * Type guard to check if an object is a Filter.
     * @param obj: the object to check
     * @returns boolean indicating if the object is a Filter
     */
    private isFilter;
    /**
     * Helper to convert Record<string,unknown> to a Filter[]
     * @param record: a key-value Record collection
     * @returns Record as a Filter[]
     */
    private convertToFilters;
    /**
     * Input santisation method for filters, as FilterType is not required to be
     * Filter[], but we want to use Filter[] internally.
     * @param record: the proposed filter
     * @returns A Filter[], which may be empty
     */
    private asFilters;
    /**
     * Method to build the WHERE clause of a CQL query, using bind variable ?
     * @param filters list of filters to include in the WHERE clause
     * @returns The WHERE clause
     */
    private buildWhereClause;
    /**
     * Method to build an CQL query for searching for similar vectors in the
     * Cassandra database.
     * @param query The query vector.
     * @param k The number of similar vectors to return.
     * @param filters Optional filters to be applied as a WHERE clause.
     * @param includeEmbedding Whether to include the embedding vectors in the results.
     * @returns The CQL query string.
     */
    private buildSearchQuery;
    /**
     * Method for inserting vectors and documents into the Cassandra database in a batch.
     * @param batchVectors The list of vectors to insert.
     * @param batchDocuments The list of documents to insert.
     * @returns Promise that resolves when the batch has been inserted.
     */
    private executeInsert;
    /**
     * Method for inserting vectors and documents into the Cassandra database in
     * parallel, keeping within maxConcurrency number of active insert statements.
     * @param vectors The vectors to insert.
     * @param documents The documents to insert.
     * @returns Promise that resolves when the documents have been added.
     */
    private insertAll;
}
