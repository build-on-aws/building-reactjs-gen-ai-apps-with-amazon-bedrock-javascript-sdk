import { PinpointServiceOptions } from '@aws-amplify/core/internals/providers/pinpoint';
/**
 * Options specific to Pinpoint identityUser.
 */
export type IdentifyUserOptions = Pick<PinpointServiceOptions, 'userAttributes'>;
