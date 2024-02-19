import { FirehoseExtensionConfiguration } from "./extensionConfiguration";
export interface RuntimeExtension {
  configure(clientConfiguration: FirehoseExtensionConfiguration): void;
}
export interface RuntimeExtensionsConfig {
  extensions: RuntimeExtension[];
}
export declare const resolveRuntimeExtensions: (
  runtimeConfig: any,
  extensions: RuntimeExtension[]
) => any;
