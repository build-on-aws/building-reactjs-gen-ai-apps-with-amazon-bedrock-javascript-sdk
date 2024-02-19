import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class ChannelThumbnailWithLink extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.label = (_b = (_a = data.accessibility) === null || _a === void 0 ? void 0 : _a.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
    }
}
ChannelThumbnailWithLink.type = 'ChannelThumbnailWithLink';
export default ChannelThumbnailWithLink;
//# sourceMappingURL=ChannelThumbnailWithLink.js.map