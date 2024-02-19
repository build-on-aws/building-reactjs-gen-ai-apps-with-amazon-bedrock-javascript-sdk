import { WaiterConfiguration, WaiterResult } from "@smithy/util-waiter";
import { DescribeStreamCommandInput } from "../commands/DescribeStreamCommand";
import { KinesisClient } from "../KinesisClient";
export declare const waitForStreamNotExists: (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
) => Promise<WaiterResult>;
export declare const waitUntilStreamNotExists: (
  params: WaiterConfiguration<KinesisClient>,
  input: DescribeStreamCommandInput
) => Promise<WaiterResult>;
