import { Observable } from 'rxjs';
import { NetworkStatus } from './types';
export declare class Reachability {
    private static _observers;
    networkMonitor(_?: unknown): Observable<NetworkStatus>;
    private static _observerOverride;
}
