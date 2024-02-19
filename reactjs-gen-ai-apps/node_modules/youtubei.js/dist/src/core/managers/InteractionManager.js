var _InteractionManager_actions;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Proto from '../../proto/index.js';
import { throwIfMissing } from '../../utils/Utils.js';
import { LikeEndpoint, DislikeEndpoint, RemoveLikeEndpoint } from '../endpoints/like/index.js';
import { SubscribeEndpoint, UnsubscribeEndpoint } from '../endpoints/subscription/index.js';
import { CreateCommentEndpoint, PerformCommentActionEndpoint } from '../endpoints/comment/index.js';
import { ModifyChannelPreferenceEndpoint } from '../endpoints/notification/index.js';
class InteractionManager {
    constructor(actions) {
        _InteractionManager_actions.set(this, void 0);
        __classPrivateFieldSet(this, _InteractionManager_actions, actions, "f");
    }
    /**
     * Likes a given video.
     * @param video_id - The video ID
     */
    like(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(LikeEndpoint.PATH, LikeEndpoint.build({
                client: 'ANDROID',
                target: { video_id }
            }));
            return action;
        });
    }
    /**
     * Dislikes a given video.
     * @param video_id - The video ID
     */
    dislike(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(DislikeEndpoint.PATH, DislikeEndpoint.build({
                client: 'ANDROID',
                target: { video_id }
            }));
            return action;
        });
    }
    /**
     * Removes a like/dislike.
     * @param video_id - The video ID
     */
    removeRating(video_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(RemoveLikeEndpoint.PATH, RemoveLikeEndpoint.build({
                client: 'ANDROID',
                target: { video_id }
            }));
            return action;
        });
    }
    /**
     * Subscribes to a given channel.
     * @param channel_id - The channel ID
     */
    subscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(SubscribeEndpoint.PATH, SubscribeEndpoint.build({
                client: 'ANDROID',
                channel_ids: [channel_id],
                params: 'EgIIAhgA'
            }));
            return action;
        });
    }
    /**
     * Unsubscribes from a given channel.
     * @param channel_id - The channel ID
     */
    unsubscribe(channel_id) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(UnsubscribeEndpoint.PATH, UnsubscribeEndpoint.build({
                client: 'ANDROID',
                channel_ids: [channel_id],
                params: 'CgIIAhgA'
            }));
            return action;
        });
    }
    /**
     * Posts a comment on a given video.
     * @param video_id - The video ID
     * @param text - The comment text
     */
    comment(video_id, text) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ video_id, text });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(CreateCommentEndpoint.PATH, CreateCommentEndpoint.build({
                comment_text: text,
                create_comment_params: Proto.encodeCommentParams(video_id),
                client: 'ANDROID'
            }));
            return action;
        });
    }
    /**
     * Translates a given text using YouTube's comment translate feature.
     *
     * @param target_language - an ISO language code
     * @param args - optional arguments
     */
    translate(text, target_language, args = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ text, target_language });
            const target_action = Proto.encodeCommentActionParams(22, Object.assign({ text, target_language }, args));
            const response = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(PerformCommentActionEndpoint.PATH, PerformCommentActionEndpoint.build({
                client: 'ANDROID',
                actions: [target_action]
            }));
            const mutation = response.data.frameworkUpdates.entityBatchUpdate.mutations[0].payload.commentEntityPayload;
            return {
                success: response.success,
                status_code: response.status_code,
                translated_content: mutation.translatedContent.content,
                data: response.data
            };
        });
    }
    /**
     * Changes notification preferences for a given channel.
     * Only works with channels you are subscribed to.
     * @param channel_id - The channel ID.
     * @param type - The notification type.
     */
    setNotificationPreferences(channel_id, type) {
        return __awaiter(this, void 0, void 0, function* () {
            throwIfMissing({ channel_id, type });
            if (!__classPrivateFieldGet(this, _InteractionManager_actions, "f").session.logged_in)
                throw new Error('You must be signed in to perform this operation.');
            const pref_types = {
                PERSONALIZED: 1,
                ALL: 2,
                NONE: 3
            };
            if (!Object.keys(pref_types).includes(type.toUpperCase()))
                throw new Error(`Invalid notification preference type: ${type}`);
            const action = yield __classPrivateFieldGet(this, _InteractionManager_actions, "f").execute(ModifyChannelPreferenceEndpoint.PATH, ModifyChannelPreferenceEndpoint.build({
                client: 'WEB',
                params: Proto.encodeNotificationPref(channel_id, pref_types[type.toUpperCase()])
            }));
            return action;
        });
    }
}
_InteractionManager_actions = new WeakMap();
export default InteractionManager;
//# sourceMappingURL=InteractionManager.js.map