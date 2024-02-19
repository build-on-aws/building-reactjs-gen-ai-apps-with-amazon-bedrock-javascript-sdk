import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class ChannelVideoPlayer extends YTNode {
    static type: string;
    id: string;
    title: Text;
    description: Text;
    view_count: Text;
    published_time: Text;
    constructor(data: RawNode);
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link ChannelVideoPlayer.view_count} instead.
     */
    get views(): Text;
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link ChannelVideoPlayer.published_time} instead.
     */
    get published(): Text;
}
