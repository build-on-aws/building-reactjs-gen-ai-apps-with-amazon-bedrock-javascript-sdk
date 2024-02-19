import { TrackerEventRecorder, TrackerInterface, TrackerType } from '../types/trackers';
import { ConfigureAutoTrackInput } from '../providers/pinpoint';
/**
 * Updates a provider's trackers as appropriate for the provided auto-track configuration.
 *
 * @remark
 * This utility will mutate the provider's configured trackers via `providerTrackers`.
 */
export declare const updateProviderTrackers: (input: ConfigureAutoTrackInput, providerEventRecorder: TrackerEventRecorder, providerTrackers: Partial<Record<TrackerType, TrackerInterface>>) => void;
