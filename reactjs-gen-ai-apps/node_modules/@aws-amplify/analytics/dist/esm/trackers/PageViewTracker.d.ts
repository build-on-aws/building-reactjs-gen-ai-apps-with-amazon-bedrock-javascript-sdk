import { PageViewTrackingOptions, TrackerEventRecorder, TrackerInterface } from '../types/trackers';
export declare class PageViewTracker implements TrackerInterface {
    private trackerActive;
    private options;
    private eventRecorder;
    private spaTrackingActive;
    private pushStateProxy?;
    private replaceStateProxy?;
    private originalPushState;
    private originalReplaceState;
    constructor(eventRecorder: TrackerEventRecorder, options?: PageViewTrackingOptions);
    configure(eventRecorder: TrackerEventRecorder, options?: PageViewTrackingOptions): void;
    cleanup(): void;
    private setupSPATracking;
    private setupMPATracking;
    private handleLocationChange;
    private urlHasChanged;
}
