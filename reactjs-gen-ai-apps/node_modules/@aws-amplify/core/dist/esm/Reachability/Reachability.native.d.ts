import { Observable } from 'rxjs';
import { loadNetInfo } from '@aws-amplify/react-native';
import { NetworkStatus } from './types';
export declare class Reachability {
    networkMonitor(netInfo?: ReturnType<typeof loadNetInfo>): Observable<NetworkStatus>;
}
