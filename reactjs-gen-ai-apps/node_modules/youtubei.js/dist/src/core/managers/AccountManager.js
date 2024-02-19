var _AccountManager_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import AccountInfo from '../../parser/youtube/AccountInfo.js';
import Analytics from '../../parser/youtube/Analytics.js';
import Settings from '../../parser/youtube/Settings.js';
import TimeWatched from '../../parser/youtube/TimeWatched.js';
import Proto from '../../proto/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { Account, BrowseEndpoint, Channel } from '../endpoints/index.js';
class AccountManager {
    constructor(actions) {
        _AccountManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _AccountManager_actions, actions, "f");
        this.channel = {
            /**
             * Edits channel name.
             * @param new_name - The new channel name.
             */
            editName: (new_name) => {
                if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                    throw new InnertubeError('You must be signed in to perform this operation.');
                return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(Channel.EditNameEndpoint.PATH, Channel.EditNameEndpoint.build({
                    given_name: new_name
                }));
            },
            /**
             * Edits channel description.
             * @param new_description - The new description.
             */
            editDescription: (new_description) => {
                if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                    throw new InnertubeError('You must be signed in to perform this operation.');
                return __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(Channel.EditDescriptionEndpoint.PATH, Channel.EditDescriptionEndpoint.build({
                    given_description: new_description
                }));
            },
            /**
             * Retrieves basic channel analytics.
             */
            getBasicAnalytics: () => this.getAnalytics()
        };
    }
    /**
     * Retrieves channel info.
     */
    getInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _AccountManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(Account.AccountListEndpoint.PATH, Account.AccountListEndpoint.build());
            return new AccountInfo(response);
        });
    }
    /**
     * Retrieves time watched statistics.
     */
    getTimeWatched() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: 'SPtime_watched',
                client: 'ANDROID'
            }));
            return new TimeWatched(response);
        });
    }
    /**
     * Opens YouTube settings.
     */
    getSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: 'SPaccount_overview'
            }));
            return new Settings(__classPrivateFieldGet(this, _AccountManager_actions, "f"), response);
        });
    }
    /**
     * Retrieves basic channel analytics.
     */
    getAnalytics() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getInfo();
            const response = yield __classPrivateFieldGet(this, _AccountManager_actions, "f").execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: 'FEanalytics_screen',
                params: Proto.encodeChannelAnalyticsParams((_a = info.footers) === null || _a === void 0 ? void 0 : _a.endpoint.payload.browseId),
                client: 'ANDROID'
            }));
            return new Analytics(response);
        });
    }
}
_AccountManager_actions = new WeakMap();
export default AccountManager;
//# sourceMappingURL=AccountManager.js.map