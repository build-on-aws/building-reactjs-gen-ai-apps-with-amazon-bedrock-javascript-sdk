import { KinesisExtensionConfiguration } from "./extensionConfiguration";
export interface RuntimeExtension {
  configure(clientConfiguration: KinesisExtensionConfiguration): void;
}
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}
export declare const resolveRuntimeExtensions: (
  runtimeConfig: any,
  extensions: RuntimeExtension[]
) => any;
