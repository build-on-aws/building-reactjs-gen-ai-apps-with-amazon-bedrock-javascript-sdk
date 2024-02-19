import { EventTrackingOptions, TrackerEventRecorder, TrackerInterface } from '../types/trackers';
export declare class EventTracker implements TrackerInterface {
    private trackerActive;
    private options;
    private eventRecorder;
    constructor(eventRecorder: TrackerEventRecorder, options?: EventTrackingOptions);
    configure(eventRecorder: TrackerEventRecorder, options?: EventTrackingOptions): void;
    cleanup(): void;
    private handleDocEvent;
}
