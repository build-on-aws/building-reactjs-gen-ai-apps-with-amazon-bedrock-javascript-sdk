import { Runnable } from "@langchain/core/runnables";
import { Client, Feedback } from "langsmith";
import type { RunEvalConfig } from "./config.js";
export type ChainOrFactory = Runnable | (() => Runnable) | ((obj: any) => any) | ((obj: any) => Promise<any>) | (() => (obj: unknown) => unknown) | (() => (obj: unknown) => Promise<unknown>);
export type RunOnDatasetParams = {
    evaluationConfig?: RunEvalConfig;
    projectMetadata?: Record<string, unknown>;
    projectName?: string;
    client?: Client;
    maxConcurrency?: number;
};
export type EvalResults = {
    projectName: string;
    results: {
        [key: string]: {
            execution_time?: number;
            run_id: string;
            feedback: Feedback[];
        };
    };
};
/**
 * Evaluates a given model or chain against a specified LangSmith dataset.
 *
 * This function fetches example records from the specified dataset,
 * runs the model or chain against each example, and returns the evaluation
 * results.
 *
 * @param chainOrFactory - A model or factory/constructor function to be evaluated. It can be a
 * Runnable instance, a factory function that returns a Runnable, or a user-defined
 * function or factory.
 *
 * @param datasetName - The name of the dataset against which the evaluation will be
 * performed. This dataset should already be defined and contain the relevant data
 * for evaluation.
 *
 * @param options - (Optional) Additional parameters for the evaluation process:
 *   - `evaluationConfig` (RunEvalConfig): Configuration for the evaluation, including
 *     standard and custom evaluators.
 *   - `projectName` (string): Name of the project for logging and tracking.
 *   - `projectMetadata` (Record<string, unknown>): Additional metadata for the project.
 *   - `client` (Client): Client instance for LangChain service interaction.
 *   - `maxConcurrency` (number): Maximum concurrency level for dataset processing.
 *
 * @returns A promise that resolves to an `EvalResults` object. This object includes
 * detailed results of the evaluation, such as execution time, run IDs, and feedback
 * for each entry in the dataset.
 *
 * @example
 * ```typescript
 * // Example usage for evaluating a model on a dataset
 * async function evaluateModel() {
 *   const chain = /* ...create your model or chain...*\//
 *   const datasetName = 'example-dataset';
 *   const client = new Client(/* ...config... *\//);
 *
 *   const evaluationConfig = {
 *     evaluators: [/* ...evaluators... *\//],
 *     customEvaluators: [/* ...custom evaluators... *\//],
 *   };
 *
 *   const results = await runOnDataset(chain, datasetName, {
 *     evaluationConfig,
 *     client,
 *   });
 *
 *   console.log('Evaluation Results:', results);
 * }
 *
 * evaluateModel();
 * ```
 * In this example, `runOnDataset` is used to evaluate a language model (or a chain of models) against
 * a dataset named 'example-dataset'. The evaluation process is configured using `RunEvalConfig`, which can
 * include both standard and custom evaluators. The `Client` instance is used to interact with LangChain services.
 * The function returns the evaluation results, which can be logged or further processed as needed.
 */
export declare const runOnDataset: (chainOrFactory: ChainOrFactory, datasetName: string, { evaluationConfig, projectName, projectMetadata, client, maxConcurrency, }: RunOnDatasetParams) => Promise<EvalResults>;
