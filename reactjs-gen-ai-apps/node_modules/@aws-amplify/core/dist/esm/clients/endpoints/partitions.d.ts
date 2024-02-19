/**
 * Default partition for AWS services. This is used when the region is not provided or the region is not recognized.
 *
 * @internal
 */
export declare const defaultPartition: {
    id: string;
    outputs: {
        dnsSuffix: string;
    };
    regionRegex: string;
    regions: string[];
};
/**
 * This data is adapted from the partition file from AWS SDK shared utilities but remove some contents for bundle size
 * concern. Information removed are `dualStackDnsSuffix`, `supportDualStack`, `supportFIPS`, restricted partitions, and
 * list of regions for each partition other than global regions.
 *
 * * Ref: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints
 * * Ref: https://github.com/aws/aws-sdk-js-v3/blob/0201baef03c2379f1f6f7150b9d401d4b230d488/packages/util-endpoints/src/lib/aws/partitions.json#L1
 *
 * @internal
 */
export declare const partitionsInfo: {
    partitions: {
        id: string;
        outputs: {
            dnsSuffix: string;
        };
        regionRegex: string;
        regions: string[];
    }[];
};
