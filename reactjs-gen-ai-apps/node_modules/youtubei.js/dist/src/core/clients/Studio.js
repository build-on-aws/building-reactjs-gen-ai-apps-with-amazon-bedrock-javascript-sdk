var _Studio_instances, _Studio_session, _Studio_getInitialUploadData, _Studio_uploadVideo, _Studio_setVideoMetadata;
import { __awaiter, __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import Proto from '../../proto/index.js';
import * as Constants from '../../utils/Constants.js';
import { InnertubeError, MissingParamError, Platform } from '../../utils/Utils.js';
import { CreateVideoEndpoint } from '../endpoints/upload/index.js';
class Studio {
    constructor(session) {
        _Studio_instances.add(this);
        _Studio_session.set(this, void 0);
        __classPrivateFieldSet(this, _Studio_session, session, "f");
    }
    /**
     * Uploads a custom thumbnail and sets it for a video.
     * @example
     * ```ts
     * const buffer = fs.readFileSync('./my_awesome_thumbnail.jpg');
     * const response = await yt.studio.setThumbnail(video_id, buffer);
     * ```
     */
    setThumbnail(video_id, buffer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            if (!video_id || !buffer)
                throw new MissingParamError('One or more parameters are missing.');
            const payload = Proto.encodeCustomThumbnailPayload(video_id, buffer);
            const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute('/video_manager/metadata_update', {
                protobuf: true,
                serialized_data: payload
            });
            return response;
        });
    }
    /**
     * Updates a given video's metadata.
     * @example
     * ```ts
     * const response = await yt.studio.updateVideoMetadata('videoid', {
     *   tags: [ 'astronomy', 'NASA', 'APOD' ],
     *   title: 'Artemis Mission',
     *   description: 'A nicely written description...',
     *   category: 27,
     *   license: 'creative_commons'
     *   // ...
     * });
     * ```
     */
    updateVideoMetadata(video_id, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const payload = Proto.encodeVideoMetadataPayload(video_id, metadata);
            const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute('/video_manager/metadata_update', {
                protobuf: true,
                serialized_data: payload
            });
            return response;
        });
    }
    /**
     * Uploads a video to YouTube.
     * @example
     * ```ts
     * const file = fs.readFileSync('./my_awesome_video.mp4');
     * const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
     * ```
     */
    upload(file, metadata = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!__classPrivateFieldGet(this, _Studio_session, "f").logged_in)
                throw new InnertubeError('You must be signed in to perform this operation.');
            const initial_data = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_getInitialUploadData).call(this);
            const upload_result = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_uploadVideo).call(this, initial_data.upload_url, file);
            if (upload_result.status !== 'STATUS_SUCCESS')
                throw new InnertubeError('Could not process video.');
            const response = yield __classPrivateFieldGet(this, _Studio_instances, "m", _Studio_setVideoMetadata).call(this, initial_data, upload_result, metadata);
            return response;
        });
    }
}
_Studio_session = new WeakMap(), _Studio_instances = new WeakSet(), _Studio_getInitialUploadData = function _Studio_getInitialUploadData() {
    return __awaiter(this, void 0, void 0, function* () {
        const frontend_upload_id = `innertube_android:${Platform.shim.uuidv4()}:0:v=3,api=1,cf=3`;
        const payload = {
            frontendUploadId: frontend_upload_id,
            deviceDisplayName: 'Pixel 6 Pro',
            fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${Platform.shim.uuidv4()}`,
            mp4MoovAtomRelocationStatus: 'UNSUPPORTED',
            transcodeResult: 'DISABLED',
            connectionType: 'WIFI'
        };
        const response = yield __classPrivateFieldGet(this, _Studio_session, "f").http.fetch('/upload/youtubei', {
            baseURL: Constants.URLS.YT_UPLOAD,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-goog-upload-command': 'start',
                'x-goog-upload-protocol': 'resumable'
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok)
            throw new InnertubeError('Could not get initial upload data');
        return {
            frontend_upload_id,
            upload_id: response.headers.get('x-guploader-uploadid'),
            upload_url: response.headers.get('x-goog-upload-url'),
            scotty_resource_id: response.headers.get('x-goog-upload-header-scotty-resource-id'),
            chunk_granularity: response.headers.get('x-goog-upload-chunk-granularity')
        };
    });
}, _Studio_uploadVideo = function _Studio_uploadVideo(upload_url, file) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield __classPrivateFieldGet(this, _Studio_session, "f").http.fetch_function(upload_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-goog-upload-command': 'upload, finalize',
                'x-goog-upload-file-name': `file-${Date.now()}`,
                'x-goog-upload-offset': '0'
            },
            body: file
        });
        if (!response.ok)
            throw new InnertubeError('Could not upload video');
        const data = yield response.json();
        return data;
    });
}, _Studio_setVideoMetadata = function _Studio_setVideoMetadata(initial_data, upload_result, metadata) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield __classPrivateFieldGet(this, _Studio_session, "f").actions.execute(CreateVideoEndpoint.PATH, CreateVideoEndpoint.build({
            resource_id: {
                scotty_resource_id: {
                    id: upload_result.scottyResourceId
                }
            },
            frontend_upload_id: initial_data.frontend_upload_id,
            initial_metadata: {
                title: {
                    new_title: metadata.title || new Date().toDateString()
                },
                description: {
                    new_description: metadata.description || '',
                    should_segment: true
                },
                privacy: {
                    new_privacy: metadata.privacy || 'PRIVATE'
                },
                draft_state: {
                    is_draft: metadata.is_draft
                }
            },
            client: 'ANDROID'
        }));
        return response;
    });
};
export default Studio;
//# sourceMappingURL=Studio.js.map