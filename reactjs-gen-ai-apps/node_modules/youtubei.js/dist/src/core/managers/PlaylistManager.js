var _PlaylistManager_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Playlist from '../../parser/youtube/Playlist.js';
import { InnertubeError, throwIfMissing } from '../../utils/Utils.js';
import { EditPlaylistEndpoint } from '../endpoints/browse/index.js';
import { BrowseEndpoint } from '../endpoints/index.js';
import { CreateEndpoint, DeleteEndpoint } from '../endpoints/playlist/index.js';
class PlaylistManager {
    constructor(actions) {
        _PlaylistManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _PlaylistManager_actions, actions, "f");
    }
    /**
     * Creates a playlist.
     * @param title - The title of the playlist.
     * @param video_ids - An array of video IDs to add to the playlist.
     */
    create(title, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ title, video_ids });
            if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(CreateEndpoint.PATH, CreateEndpoint.build({
                ids: video_ids,
                title
            }));
            return {
                success: response.success,
                status_code: response.status_code,
                playlist_id: response.data.playlistId,
                data: response.data
            };
        });
    }
    /**
     * Deletes a given playlist.
     * @param playlist_id - The playlist ID.
     */
    delete(playlist_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ playlist_id });
            if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(DeleteEndpoint.PATH, DeleteEndpoint.build({
                playlist_id
            }));
            return {
                playlist_id,
                success: response.success,
                status_code: response.status_code,
                data: response.data
            };
        });
    }
    /**
     * Adds videos to a given playlist.
     * @param playlist_id - The playlist ID.
     * @param video_ids - An array of video IDs to add to the playlist.
     */
    addVideos(playlist_id, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ playlist_id, video_ids });
            if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint.PATH, EditPlaylistEndpoint.build({
                actions: video_ids.map((id) => ({
                    action: 'ACTION_ADD_VIDEO',
                    added_video_id: id
                })),
                playlist_id
            }));
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
    /**
     * Removes videos from a given playlist.
     * @param playlist_id - The playlist ID.
     * @param video_ids - An array of video IDs to remove from the playlist.
     */
    removeVideos(playlist_id, video_ids) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ playlist_id, video_ids });
            if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint.PATH, Object.assign(Object.assign({}, BrowseEndpoint.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
            const playlist = new Playlist(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
            if (!playlist.info.is_editable)
                throw new InnertubeError('This playlist cannot be edited.', playlist_id);
            const payload = { playlist_id, actions: [] };
            const getSetVideoIds = (pl) => __awaiter(this, void 0, void 0, function* () {
                const videos = pl.videos.filter((video) => video_ids.includes(video.key('id').string()));
                videos.forEach((video) => payload.actions.push({
                    action: 'ACTION_REMOVE_VIDEO',
                    set_video_id: video.key('set_video_id').string()
                }));
                if (payload.actions.length < video_ids.length) {
                    const next = yield pl.getContinuation();
                    return getSetVideoIds(next);
                }
            });
            yield getSetVideoIds(playlist);
            if (!payload.actions.length)
                throw new InnertubeError('Given video ids were not found in this playlist.', video_ids);
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint.PATH, EditPlaylistEndpoint.build(payload));
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
    /**
     * Moves a video to a new position within a given playlist.
     * @param playlist_id - The playlist ID.
     * @param moved_video_id - The video ID to move.
     * @param predecessor_video_id - The video ID to move the moved video before.
     */
    moveVideo(playlist_id, moved_video_id, predecessor_video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ playlist_id, moved_video_id, predecessor_video_id });
            if (!__classPrivateFieldGet(this, _PlaylistManager_actions, "f").session.logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const info = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(BrowseEndpoint.PATH, Object.assign(Object.assign({}, BrowseEndpoint.build({ browse_id: `VL${playlist_id}` })), { parse: true }));
            const playlist = new Playlist(__classPrivateFieldGet(this, _PlaylistManager_actions, "f"), info, true);
            if (!playlist.info.is_editable)
                throw new InnertubeError('This playlist cannot be edited.', playlist_id);
            const payload = { playlist_id, actions: [] };
            let set_video_id_0, set_video_id_1;
            const getSetVideoIds = (pl) => __awaiter(this, void 0, void 0, function* () {
                const video_0 = pl.videos.find((video) => moved_video_id === video.key('id').string());
                const video_1 = pl.videos.find((video) => predecessor_video_id === video.key('id').string());
                set_video_id_0 = set_video_id_0 || (video_0 === null || video_0 === void 0 ? void 0 : video_0.key('set_video_id').string());
                set_video_id_1 = set_video_id_1 || (video_1 === null || video_1 === void 0 ? void 0 : video_1.key('set_video_id').string());
                if (!set_video_id_0 || !set_video_id_1) {
                    const next = yield pl.getContinuation();
                    return getSetVideoIds(next);
                }
            });
            yield getSetVideoIds(playlist);
            payload.actions.push({
                action: 'ACTION_MOVE_VIDEO_AFTER',
                set_video_id: set_video_id_0,
                moved_set_video_id_predecessor: set_video_id_1
            });
            const response = yield __classPrivateFieldGet(this, _PlaylistManager_actions, "f").execute(EditPlaylistEndpoint.PATH, EditPlaylistEndpoint.build(payload));
            return {
                playlist_id,
                action_result: response.data.actions // TODO: implement actions in the parser
            };
        });
    }
}
_PlaylistManager_actions = new WeakMap();
export default PlaylistManager;
//# sourceMappingURL=PlaylistManager.js.map