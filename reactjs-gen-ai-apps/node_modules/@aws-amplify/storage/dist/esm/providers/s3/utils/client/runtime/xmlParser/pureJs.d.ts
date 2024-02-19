/**
 * Pure JS XML parser that can be used in Non-browser environments, like React Native and Node.js. This is the same
 * XML parser implementation as used in AWS SDK S3 client. It depends on pure JavaScript XML parser library
 * `fast-xml-parser`.
 *
 * Ref: https://github.com/aws/aws-sdk-js-v3/blob/1e806ba3f4a83c9e3eb0b41a3a7092da93826b8f/clients/client-s3/src/protocols/Aws_restXml.ts#L12938-L12959
 */
export declare const parser: {
    parse: (xmlStr: string) => any;
};
