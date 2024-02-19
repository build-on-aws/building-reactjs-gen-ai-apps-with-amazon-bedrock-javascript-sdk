var _Innertube_session;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Session from './core/Session.js';
import NavigationEndpoint from './parser/classes/NavigationEndpoint.js';
import Channel from './parser/youtube/Channel.js';
import Comments from './parser/youtube/Comments.js';
import Guide from './parser/youtube/Guide.js';
import HashtagFeed from './parser/youtube/HashtagFeed.js';
import History from './parser/youtube/History.js';
import HomeFeed from './parser/youtube/HomeFeed.js';
import Library from './parser/youtube/Library.js';
import NotificationsMenu from './parser/youtube/NotificationsMenu.js';
import Playlist from './parser/youtube/Playlist.js';
import Search from './parser/youtube/Search.js';
import VideoInfo from './parser/youtube/VideoInfo.js';
import { Kids, Music, Studio } from './core/clients/index.js';
import { AccountManager, InteractionManager, PlaylistManager } from './core/managers/index.js';
import { Feed, TabbedFeed } from './core/mixins/index.js';
import Proto from './proto/index.js';
import * as Constants from './utils/Constants.js';
import { InnertubeError, generateRandomString, throwIfMissing } from './utils/Utils.js';
import { BrowseEndpoint, GetNotificationMenuEndpoint, GuideEndpoint, NextEndpoint, PlayerEndpoint, ResolveURLEndpoint, SearchEndpoint } from './core/endpoints/index.js';
import { GetUnseenCountEndpoint } from './core/endpoints/notification/index.js';
/**
 * Provides access to various services and modules in the YouTube API.
 */
class Innertube {
    constructor(session) {
        _Innertube_session.set(this, void 0);
        __classPrivateFieldSet(this, _Innertube_session, session, "f");
    }
    static create(config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Innertube(yield Session.create(config));
        });
    }
    /**
     * Retrieves video info.
     * @param target - The video id or `NavigationEndpoint`.
     * @param client - The client to use.
     */
    getInfo(target, client) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ target });
            let next_payload;
            if (target instanceof NavigationEndpoint) {
                next_payload = NextEndpoint.build({
                    video_id: (_a = target.payload) === null || _a === void 0 ? void 0 : _a.videoId,
                    playlist_id: (_b = target.payload) === null || _b === void 0 ? void 0 : _b.playlistId,
                    params: (_c = target.payload) === null || _c === void 0 ? void 0 : _c.params,
                    playlist_index: (_d = target.payload) === null || _d === void 0 ? void 0 : _d.index
                });
            }
            else if (typeof target === 'string') {
                next_payload = NextEndpoint.build({
                    video_id: target
                });
            }
            else {
                throw new InnertubeError('Invalid target, expected either a video id or a valid NavigationEndpoint', target);
            }
            if (!next_payload.videoId)
                throw new InnertubeError('Video id cannot be empty', next_payload);
            const player_payload = PlayerEndpoint.build({
                video_id: next_payload.videoId,
                playlist_id: next_payload === null || next_payload === void 0 ? void 0 : next_payload.playlistId,
                client: client,
                sts: (_e = __classPrivateFieldGet(this, _Innertube_session, "f").player) === null || _e === void 0 ? void 0 : _e.sts
            });
            const player_response = this.actions.execute(PlayerEndpoint.PATH, player_payload);
            const next_response = this.actions.execute(NextEndpoint.PATH, next_payload);
            const response = yield Promise.all([player_response, next_response]);
            const cpn = generateRandomString(16);
            return new VideoInfo(response, this.actions, cpn);
        });
    }
    /**
     * Retrieves basic video info.
     * @param video_id - The video id.
     * @param client - The client to use.
     */
    getBasicInfo(video_id, client) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const response = yield this.actions.execute(PlayerEndpoint.PATH, PlayerEndpoint.build({
                video_id: video_id,
                client: client,
                sts: (_a = __classPrivateFieldGet(this, _Innertube_session, "f").player) === null || _a === void 0 ? void 0 : _a.sts
            }));
            const cpn = generateRandomString(16);
            return new VideoInfo([response], this.actions, cpn);
        });
    }
    /**
     * Searches a given query.
     * @param query - The search query.
     * @param filters - Search filters.
     */
    search(query, filters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ query });
            const response = yield this.actions.execute(SearchEndpoint.PATH, SearchEndpoint.build({
                query, params: filters ? Proto.encodeSearchFilters(filters) : undefined
            }));
            return new Search(this.actions, response);
        });
    }
    /**
     * Retrieves search suggestions for a given query.
     * @param query - The search query.
     */
    getSearchSuggestions(query) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ query });
            const url = new URL(`${Constants.URLS.YT_SUGGESTIONS}search`);
            url.searchParams.set('q', query);
            url.searchParams.set('hl', __classPrivateFieldGet(this, _Innertube_session, "f").context.client.hl);
            url.searchParams.set('gl', __classPrivateFieldGet(this, _Innertube_session, "f").context.client.gl);
            url.searchParams.set('ds', 'yt');
            url.searchParams.set('client', 'youtube');
            url.searchParams.set('xssi', 't');
            url.searchParams.set('oe', 'UTF');
            const response = yield __classPrivateFieldGet(this, _Innertube_session, "f").http.fetch(url);
            const response_data = yield response.text();
            const data = JSON.parse(response_data.replace(')]}\'', ''));
            const suggestions = data[1].map((suggestion) => suggestion[0]);
            return suggestions;
        });
    }
    /**
     * Retrieves comments for a video.
     * @param video_id - The video id.
     * @param sort_by - Sorting options.
     */
    getComments(video_id, sort_by) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            const response = yield this.actions.execute(NextEndpoint.PATH, NextEndpoint.build({
                continuation: Proto.encodeCommentsSectionParams(video_id, {
                    sort_by: sort_by || 'TOP_COMMENTS'
                })
            }));
            return new Comments(this.actions, response.data);
        });
    }
    /**
     * Retrieves YouTube's home feed (aka recommendations).
     */
    getHomeFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FEwhat_to_watch' }));
            return new HomeFeed(this.actions, response);
        });
    }
    /**
     * Retrieves YouTube's content guide.
     */
    getGuide() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(GuideEndpoint.PATH);
            return new Guide(response.data);
        });
    }
    /**
     * Returns the account's library.
     */
    getLibrary() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FElibrary' }));
            return new Library(this.actions, response);
        });
    }
    /**
     * Retrieves watch history.
     * Which can also be achieved with {@link getLibrary}.
     */
    getHistory() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: 'FEhistory' }));
            return new History(this.actions, response);
        });
    }
    /**
     * Retrieves trending content.
     */
    getTrending() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(BrowseEndpoint.PATH, Object.assign(Object.assign({}, BrowseEndpoint.build({ browse_id: 'FEtrending' })), { parse: true }));
            return new TabbedFeed(this.actions, response);
        });
    }
    /**
     * Retrieves subscriptions feed.
     */
    getSubscriptionsFeed() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(BrowseEndpoint.PATH, Object.assign(Object.assign({}, BrowseEndpoint.build({ browse_id: 'FEsubscriptions' })), { parse: true }));
            return new Feed(this.actions, response);
        });
    }
    /**
     * Retrieves contents for a given channel.
     * @param id - Channel id
     */
    getChannel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ id });
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: id }));
            return new Channel(this.actions, response);
        });
    }
    /**
     * Retrieves notifications.
     */
    getNotifications() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(GetNotificationMenuEndpoint.PATH, GetNotificationMenuEndpoint.build({
                notifications_menu_request_type: 'NOTIFICATIONS_MENU_REQUEST_TYPE_INBOX'
            }));
            return new NotificationsMenu(this.actions, response);
        });
    }
    /**
     * Retrieves unseen notifications count.
     */
    getUnseenNotificationsCount() {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(GetUnseenCountEndpoint.PATH);
            // TODO: properly parse this
            return ((_a = response.data) === null || _a === void 0 ? void 0 : _a.unseenCount) || ((_d = (_c = (_b = response.data) === null || _b === void 0 ? void 0 : _b.actions) === null || _c === void 0 ? void 0 : _c[0].updateNotificationsUnseenCountAction) === null || _d === void 0 ? void 0 : _d.unseenCount) || 0;
        });
    }
    /**
     * Retrieves playlist contents.
     * @param id - Playlist id
     */
    getPlaylist(id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ id });
            if (!id.startsWith('VL')) {
                id = `VL${id}`;
            }
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({ browse_id: id }));
            return new Playlist(this.actions, response);
        });
    }
    /**
     * Retrieves a given hashtag's page.
     * @param hashtag - The hashtag to fetch.
     */
    getHashtag(hashtag) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ hashtag });
            const response = yield this.actions.execute(BrowseEndpoint.PATH, BrowseEndpoint.build({
                browse_id: 'FEhashtag',
                params: Proto.encodeHashtag(hashtag)
            }));
            return new HashtagFeed(this.actions, response);
        });
    }
    /**
     * An alternative to {@link download}.
     * Returns deciphered streaming data.
     *
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Format options.
     */
    getStreamingData(video_id, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id);
            return info.chooseFormat(options);
        });
    }
    /**
     * Downloads a given video. If you only need the direct download link see {@link getStreamingData}.
     * If you wish to retrieve the video info too, have a look at {@link getBasicInfo} or {@link getInfo}.
     * @param video_id - The video id.
     * @param options - Download options.
     */
    download(video_id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield this.getBasicInfo(video_id, options === null || options === void 0 ? void 0 : options.client);
            return info.download(options);
        });
    }
    /**
     * Resolves the given URL.
     * @param url - The URL.
     */
    resolveURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.actions.execute(ResolveURLEndpoint.PATH, Object.assign(Object.assign({}, ResolveURLEndpoint.build({ url })), { parse: true }));
            return response.endpoint;
        });
    }
    call(endpoint, args) {
        return endpoint.call(this.actions, args);
    }
    /**
     * An interface for interacting with YouTube Music.
     */
    get music() {
        return new Music(__classPrivateFieldGet(this, _Innertube_session, "f"));
    }
    /**
     * An interface for interacting with YouTube Studio.
     */
    get studio() {
        return new Studio(__classPrivateFieldGet(this, _Innertube_session, "f"));
    }
    /**
     * An interface for interacting with YouTube Kids.
     */
    get kids() {
        return new Kids(__classPrivateFieldGet(this, _Innertube_session, "f"));
    }
    /**
     * An interface for managing and retrieving account information.
     */
    get account() {
        return new AccountManager(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
    }
    /**
     * An interface for managing playlists.
     */
    get playlist() {
        return new PlaylistManager(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
    }
    /**
     * An interface for directly interacting with certain YouTube features.
     */
    get interact() {
        return new InteractionManager(__classPrivateFieldGet(this, _Innertube_session, "f").actions);
    }
    /**
     * An internal class used to dispatch requests.
     */
    get actions() {
        return __classPrivateFieldGet(this, _Innertube_session, "f").actions;
    }
    /**
     * The session used by this instance.
     */
    get session() {
        return __classPrivateFieldGet(this, _Innertube_session, "f");
    }
}
_Innertube_session = new WeakMap();
export default Innertube;
//# sourceMappingURL=Innertube.js.map