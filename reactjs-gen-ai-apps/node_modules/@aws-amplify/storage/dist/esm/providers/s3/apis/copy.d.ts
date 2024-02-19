import { CopyInput, CopyOutput } from '../types';
/**
 * Copy an object from a source object to a new object within the same bucket. Can optionally copy files across
 * different level or identityId (if source object's level is 'protected').
 *
 * @param input - The CopyInput object.
 * @returns Output containing the destination key.
 * @throws service: {@link S3Exception} - Thrown when checking for existence of the object
 * @throws validation: {@link StorageValidationErrorCode } - Thrown when
 * source or destination key are not defined.
 */
export declare const copy: (input: CopyInput) => Promise<CopyOutput>;
