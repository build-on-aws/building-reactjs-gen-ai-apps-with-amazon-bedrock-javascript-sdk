import { BaseRun, KVMap } from "./schemas.js";
import { Client } from "./client.js";
export declare function convertToDottedOrderFormat(epoch: number, runId: string): string;
export interface RunTreeConfig {
    name: string;
    run_type: string;
    id?: string;
    project_name?: string;
    parent_run?: RunTree;
    child_runs?: RunTree[];
    start_time?: number;
    end_time?: number;
    extra?: KVMap;
    error?: string;
    serialized?: object;
    inputs?: KVMap;
    outputs?: KVMap;
    reference_example_id?: string;
    client?: Client;
}
export declare class RunTree implements BaseRun {
    id: string;
    name: RunTreeConfig["name"];
    run_type: RunTreeConfig["run_type"];
    project_name: string;
    parent_run?: RunTree;
    child_runs: RunTree[];
    start_time: number;
    end_time?: number;
    extra: KVMap;
    error?: string;
    serialized: object;
    inputs: KVMap;
    outputs?: KVMap;
    reference_example_id?: string;
    client: Client;
    events?: KVMap[] | undefined;
    trace_id: string;
    dotted_order: string;
    constructor(config: RunTreeConfig);
    private static getDefaultConfig;
    createChild(config: RunTreeConfig): Promise<RunTree>;
    end(outputs?: KVMap, error?: string, endTime?: number): Promise<void>;
    private _convertToCreate;
    postRun(excludeChildRuns?: boolean): Promise<void>;
    patchRun(): Promise<void>;
}
