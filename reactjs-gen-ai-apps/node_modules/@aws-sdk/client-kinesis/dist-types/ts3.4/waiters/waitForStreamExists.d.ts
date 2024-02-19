import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeStreamCommandInput } from "../commands/DescribeStreamCommand";
import { KinesisClient } from "../KinesisClient";
export declare const waitForStreamExists: (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilStreamExists: (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
) => Promise<WaiterResult>;
