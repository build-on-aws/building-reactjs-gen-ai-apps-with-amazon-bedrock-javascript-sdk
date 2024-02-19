import { YTNode, observe } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
// XXX (LuanRT): This is not a real YTNode, but we treat it as one to keep things clean.
export class HeaderLink extends YTNode {
    constructor(data) {
        super();
        this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
        this.icon = Thumbnail.fromResponse(data.icon);
        this.title = new Text(data.title);
    }
}
HeaderLink.type = 'HeaderLink';
class ChannelHeaderLinks extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.primary = observe(((_a = data.primaryLinks) === null || _a === void 0 ? void 0 : _a.map((link) => new HeaderLink(link))) || []);
        this.secondary = observe(((_b = data.secondaryLinks) === null || _b === void 0 ? void 0 : _b.map((link) => new HeaderLink(link))) || []);
    }
}
ChannelHeaderLinks.type = 'ChannelHeaderLinks';
export default ChannelHeaderLinks;
//# sourceMappingURL=ChannelHeaderLinks.js.map