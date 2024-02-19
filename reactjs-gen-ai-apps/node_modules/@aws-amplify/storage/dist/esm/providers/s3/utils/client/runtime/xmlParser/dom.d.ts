/**
 * Drop-in replacement for fast-xml-parser's XmlParser class used in the AWS SDK S3 client XML deserializer. This
 * implementation is not tested against the full xml conformance test suite. It is only tested against the XML responses
 * from S3. This implementation requires the `DOMParser` class in the runtime.
 */
export declare const parser: {
    parse: (xmlStr: string) => any;
};
