import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Button from './Button.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
class ChannelAboutFullMetadata extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.id = data.channelId;
        this.name = new Text(data.title);
        this.avatar = Thumbnail.fromResponse(data.avatar);
        this.canonical_channel_url = data.canonicalChannelUrl;
        this.primary_links = (_b = (_a = data.primaryLinks) === null || _a === void 0 ? void 0 : _a.map((link) => ({
            endpoint: new NavigationEndpoint(link.navigationEndpoint),
            icon: Thumbnail.fromResponse(link.icon),
            title: new Text(link.title)
        }))) !== null && _b !== void 0 ? _b : [];
        this.view_count = new Text(data.viewCountText);
        this.joined_date = new Text(data.joinedDateText);
        this.description = new Text(data.description);
        this.email_reveal = new NavigationEndpoint(data.onBusinessEmailRevealClickCommand);
        this.can_reveal_email = !data.signInForBusinessEmail;
        this.country = new Text(data.country);
        this.buttons = Parser.parseArray(data.actionButtons, Button);
    }
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link Channel.view_count} instead.
     */
    get views() {
        return this.view_count;
    }
    /**
     * @deprecated
     * This will be removed in a future release.
     * Please use {@link Channel.joined_date} instead.
     */
    get joined() {
        return this.joined_date;
    }
}
ChannelAboutFullMetadata.type = 'ChannelAboutFullMetadata';
export default ChannelAboutFullMetadata;
//# sourceMappingURL=ChannelAboutFullMetadata.js.map