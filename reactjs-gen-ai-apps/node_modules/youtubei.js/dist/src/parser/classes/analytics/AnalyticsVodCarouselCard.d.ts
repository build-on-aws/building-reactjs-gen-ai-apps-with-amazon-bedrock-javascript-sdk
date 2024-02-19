import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class AnalyticsVodCarouselCard extends YTNode {
    static type: string;
    title: string;
    videos?: Video[];
    no_data_message?: string;
    constructor(data: RawNode);
}
