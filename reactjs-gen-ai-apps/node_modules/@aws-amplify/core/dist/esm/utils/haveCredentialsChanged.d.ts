import { AWSCredentials } from '../libraryUtils';
/**
 * Utility for determining if credentials have changed.
 *
 * @internal
 */
export declare const haveCredentialsChanged: (cachedCredentials: AWSCredentials, credentials: AWSCredentials) => boolean;
