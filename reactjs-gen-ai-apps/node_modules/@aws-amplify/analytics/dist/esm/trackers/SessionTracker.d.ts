import { SessionTrackingOptions, TrackerEventRecorder, TrackerInterface } from '../types/trackers';
export declare class SessionTracker implements TrackerInterface {
    private options;
    private eventRecorder;
    private sessionTrackingActive;
    private initialEventSent;
    constructor(eventRecorder: TrackerEventRecorder, options?: SessionTrackingOptions);
    configure(eventRecorder: TrackerEventRecorder, options?: SessionTrackingOptions): void;
    cleanup(): void;
    private handleStateChange;
    private sessionStarted;
    private sessionStopped;
}
