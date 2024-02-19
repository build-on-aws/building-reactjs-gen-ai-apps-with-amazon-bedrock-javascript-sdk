import { YTNode } from '../../../helpers.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
class LiveChatMembershipItem extends YTNode {
    constructor(data) {
        super();
        this.id = data.id;
        this.timestamp = Math.floor(parseInt(data.timestampUsec) / 1000);
        this.header_subtext = new Text(data.headerSubtext);
        this.author = new Author(data.authorName, data.authorBadges, data.authorPhoto, data.authorExternalChannelId);
        this.menu_endpoint = new NavigationEndpoint(data.contextMenuEndpoint);
    }
}
LiveChatMembershipItem.type = 'LiveChatMembershipItem';
export default LiveChatMembershipItem;
//# sourceMappingURL=LiveChatMembershipItem.js.map