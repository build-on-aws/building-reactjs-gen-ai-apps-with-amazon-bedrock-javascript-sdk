import { PaginationConfiguration } from "@smithy/types";
import { KinesisClient } from "../KinesisClient";
export interface KinesisPaginationConfiguration
  extends PaginationConfiguration {
  client: KinesisClient;
}
