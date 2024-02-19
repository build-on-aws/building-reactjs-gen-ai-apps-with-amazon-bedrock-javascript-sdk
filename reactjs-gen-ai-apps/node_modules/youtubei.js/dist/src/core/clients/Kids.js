var _Kids_session;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Channel from '../../parser/ytkids/Channel.js';
import HomeFeed from '../../parser/ytkids/HomeFeed.js';
import Search from '../../parser/ytkids/Search.js';
import VideoInfo from '../../parser/ytkids/VideoInfo.js';
import { generateRandomString } from '../../utils/Utils.js';
import { BrowseEndpoint, NextEndpoint, PlayerEndpoint, SearchEndpoint } from '../endpoints/index.js';
class Kids {
    constructor(session) {
        _Kids_session.set(this, void 0);
        __classPrivateFieldSet(this, _Kids_session, session, "f");
    }
    /**
     * Searches the given query.
     * @param query - The query.
     */
    search(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(SearchEndpoint.PATH, SearchEndpoint.build({ client: 'YTKIDS', query }));
            return new Search(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
    /**
     * Retrieves video info.
     * @param video_id - The video id.
     */
    getInfo(video_id) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const player_payload = PlayerEndpoint.build({
                sts: (_a = __classPrivateFieldGet(this, _Kids_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts,
                client: 'YTKIDS',
                video_id
            });
            const next_payload = NextEndpoint.build({
                video_id,
                client: 'YTKIDS'
            });
            const player_response = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(PlayerEndpoint.PATH, player_payload);
            const next_response = __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(NextEndpoint.PATH, next_payload);
            const response = yield Promise.all([player_response, next_response]);
            const cpn = generateRandomString(16);
            return new VideoInfo(response, __classPrivateFieldGet(this, _Kids_session, "f").actions, cpn);
        });
    }
    /**
     * Retrieves the contents of the given channel.
    * @param channel_id - The channel id.
     */
    getChannel(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: channel_id,
                client: 'YTKIDS'
            }));
            return new Channel(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
    /**
     * Retrieves the home feed.
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Kids_session, "f").actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: 'FEkids_home',
                client: 'YTKIDS'
            }));
            return new HomeFeed(__classPrivateFieldGet(this, _Kids_session, "f").actions, response);
        });
    }
}
_Kids_session = new WeakMap();
export default Kids;
//# sourceMappingURL=Kids.js.map