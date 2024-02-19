import { ConfigureAutoTrackInput } from '../types';
/**
 * Configures automatic event tracking for Pinpoint. This API will automatically transmit an analytic event when
 * configured events are detected within your application. This can include: DOM element events (via the `event`
 * tracker), session events (via the `session` tracker), and page view events (via the `pageView` tracker).
 *
 * @remark Only session tracking is currently supported on React Native.
 *
 * @param {ConfigureAutoTrackInput} params The input object to configure auto track behavior.
 *
 * @throws service: {@link UpdateEndpointException} - Thrown when the underlying Pinpoint service returns an error.
 * @throws validation: {@link AnalyticsValidationErrorCode} - Thrown when the provided parameters or library
 *  configuration is incorrect.
 */
export declare const configureAutoTrack: (input: ConfigureAutoTrackInput) => void;
