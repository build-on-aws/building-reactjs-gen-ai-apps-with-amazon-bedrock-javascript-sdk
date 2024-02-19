import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeStreamCommandInput } from "../commands/DescribeStreamCommand";
import { KinesisClient } from "../KinesisClient";
/**
 *
 *  @deprecated Use waitUntilStreamNotExists instead. waitForStreamNotExists does not throw error in non-success cases.
 */
export declare const waitForStreamNotExists: (params: WaiterConfiguration<KinesisClient>, input: DescribeStreamCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeStreamCommand for polling.
 */
export declare const waitUntilStreamNotExists: (params: WaiterConfiguration<KinesisClient>, input: DescribeStreamCommandInput) => Promise<WaiterResult>;
