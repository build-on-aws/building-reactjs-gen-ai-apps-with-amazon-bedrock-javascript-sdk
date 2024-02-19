import { GetPropertiesOutput, GetPropertiesInput } from '../types';
/**
 * Gets the properties of a file. The properties include S3 system metadata and
 * the user metadata that was provided when uploading the file.
 *
 * @param input - The GetPropertiesInput object.
 * @returns Requested object properties.
 * @throws A {@link S3Exception} when the underlying S3 service returned error.
 * @throws A {@link StorageValidationErrorCode} when API call parameters are invalid.
 */
export declare const getProperties: (input: GetPropertiesInput) => Promise<GetPropertiesOutput>;
