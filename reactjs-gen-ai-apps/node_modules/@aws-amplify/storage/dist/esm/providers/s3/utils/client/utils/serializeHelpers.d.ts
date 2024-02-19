/**
 * @internal
 */
export declare const assignStringVariables: (values: Record<string, {
    toString: () => string;
} | undefined>) => Record<string, string>;
interface ObjectConfigs {
    ACL?: string;
    CacheControl?: string;
    ContentDisposition?: string;
    ContentEncoding?: string;
    ContentLanguage?: string;
    ContentType?: string;
    Expires?: Date;
    Tagging?: string;
    Metadata?: Record<string, string>;
}
/**
 * Serailize the parameters for configuring the S3 object. Currently used by
 * `putObject` and `createMultipartUpload` API.
 *
 * @internal
 */
export declare const serializeObjectConfigsToHeaders: (input: ObjectConfigs) => Promise<{
    [x: string]: string;
}>;
/**
 * Serialize the object key to a URL pathname.
 * @see https://github.com/aws/aws-sdk-js-v3/blob/7ed7101dcc4e81038b6c7f581162b959e6b33a04/clients/client-s3/src/protocols/Aws_restXml.ts#L1108
 *
 * @internal
 */
export declare const serializePathnameObjectKey: (url: URL, key: string) => string;
export declare function validateS3RequiredParameter(assertion: boolean, paramName: string): asserts assertion;
export {};
