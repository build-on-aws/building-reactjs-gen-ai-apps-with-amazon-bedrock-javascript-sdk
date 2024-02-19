import AccountInfo from '../../parser/youtube/AccountInfo.js';
import Analytics from '../../parser/youtube/Analytics.js';
import Settings from '../../parser/youtube/Settings.js';
import TimeWatched from '../../parser/youtube/TimeWatched.js';
import type Actions from '../Actions.js';
import type { ApiResponse } from '../Actions.js';
export default class AccountManager {
    #private;
    channel: {
        editName: (new_name: string) => Promise<ApiResponse>;
        editDescription: (new_description: string) => Promise<ApiResponse>;
        getBasicAnalytics: () => Promise<Analytics>;
    };
    constructor(actions: Actions);
    /**
     * Retrieves channel info.
     */
    getInfo(): Promise<AccountInfo>;
    /**
     * Retrieves time watched statistics.
     */
    getTimeWatched(): Promise<TimeWatched>;
    /**
     * Opens YouTube settings.
     */
    getSettings(): Promise<Settings>;
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics(): Promise<Analytics>;
}
