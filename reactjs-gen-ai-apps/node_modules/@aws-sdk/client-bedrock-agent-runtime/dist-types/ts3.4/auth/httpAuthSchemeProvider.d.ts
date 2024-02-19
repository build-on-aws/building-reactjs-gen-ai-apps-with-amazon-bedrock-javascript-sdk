import {
  AwsSdkSigV4AuthInputConfig,
  AwsSdkSigV4AuthResolvedConfig,
  AwsSdkSigV4PreviouslyResolved,
} from "@aws-sdk/core";
import {
  HandlerExecutionContext,
  HttpAuthScheme,
  HttpAuthSchemeParameters,
  HttpAuthSchemeParametersProvider,
  HttpAuthSchemeProvider,
} from "@smithy/types";
import { BedrockAgentRuntimeClientResolvedConfig } from "../BedrockAgentRuntimeClient";
export interface BedrockAgentRuntimeHttpAuthSchemeParameters
  extends HttpAuthSchemeParameters {
  region?: string;
}
export interface BedrockAgentRuntimeHttpAuthSchemeParametersProvider
  extends HttpAuthSchemeParametersProvider<
    BedrockAgentRuntimeClientResolvedConfig,
    HandlerExecutionContext,
    BedrockAgentRuntimeHttpAuthSchemeParameters,
    object
  > {}
export declare const defaultBedrockAgentRuntimeHttpAuthSchemeParametersProvider: (
  config: BedrockAgentRuntimeClientResolvedConfig,
  context: HandlerExecutionContext,
  input: object
) => Promise<BedrockAgentRuntimeHttpAuthSchemeParameters>;
export interface BedrockAgentRuntimeHttpAuthSchemeProvider
  extends HttpAuthSchemeProvider<BedrockAgentRuntimeHttpAuthSchemeParameters> {}
export declare const defaultBedrockAgentRuntimeHttpAuthSchemeProvider: BedrockAgentRuntimeHttpAuthSchemeProvider;
export interface HttpAuthSchemeInputConfig extends AwsSdkSigV4AuthInputConfig {
  httpAuthSchemes?: HttpAuthScheme[];
  httpAuthSchemeProvider?: BedrockAgentRuntimeHttpAuthSchemeProvider;
}
export interface HttpAuthSchemeResolvedConfig
  extends AwsSdkSigV4AuthResolvedConfig {
  readonly httpAuthSchemes: HttpAuthScheme[];
  readonly httpAuthSchemeProvider: BedrockAgentRuntimeHttpAuthSchemeProvider;
}
export declare const resolveHttpAuthSchemeConfig: <T>(
  config: T & HttpAuthSchemeInputConfig & AwsSdkSigV4PreviouslyResolved
) => T & HttpAuthSchemeResolvedConfig;
