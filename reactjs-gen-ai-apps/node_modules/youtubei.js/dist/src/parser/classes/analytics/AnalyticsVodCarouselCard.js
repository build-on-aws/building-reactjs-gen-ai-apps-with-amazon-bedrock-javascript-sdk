import Video from './AnalyticsVideo.js';
import { YTNode } from '../../helpers.js';
class AnalyticsVodCarouselCard extends YTNode {
    constructor(data) {
        super();
        this.title = data.title;
        if (Reflect.has(data, 'noDataMessage')) {
            this.no_data_message = data.noDataMessage;
        }
        if (Reflect.has(data, 'videoCarouselData') && Reflect.has(data.videoCarouselData, 'videos')) {
            this.videos = data.videoCarouselData.videos.map((video) => new Video(video));
        }
    }
}
AnalyticsVodCarouselCard.type = 'AnalyticsVodCarouselCard';
export default AnalyticsVodCarouselCard;
//# sourceMappingURL=AnalyticsVodCarouselCard.js.map