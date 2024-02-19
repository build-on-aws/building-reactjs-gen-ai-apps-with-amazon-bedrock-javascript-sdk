import type { UpdateVideoMetadataOptions, UploadedVideoMetadataOptions } from '../../types/Clients.js';
import type { ApiResponse } from '../Actions.js';
import type Session from '../Session.js';
export default class Studio {
    #private;
    constructor(session: Session);
    /**
     * Uploads a custom thumbnail and sets it for a video.
     * @example
     * ```ts
     * const buffer = fs.readFileSync('./my_awesome_thumbnail.jpg');
     * const response = await yt.studio.setThumbnail(video_id, buffer);
     * ```
     */
    setThumbnail(video_id: string, buffer: Uint8Array): Promise<ApiResponse>;
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
    updateVideoMetadata(video_id: string, metadata: UpdateVideoMetadataOptions): Promise<ApiResponse>;
    /**
     * Uploads a video to YouTube.
     * @example
     * ```ts
     * const file = fs.readFileSync('./my_awesome_video.mp4');
     * const response = await yt.studio.upload(file.buffer, { title: 'Wow!' });
     * ```
     */
    upload(file: BodyInit, metadata?: UploadedVideoMetadataOptions): Promise<ApiResponse>;
}
