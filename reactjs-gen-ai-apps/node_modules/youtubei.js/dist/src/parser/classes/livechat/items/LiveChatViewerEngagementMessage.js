import Parser from '../../../index.js';
import { LiveChatMessageBase } from './LiveChatTextMessage.js';
class LiveChatViewerEngagementMessage extends LiveChatMessageBase {
    constructor(data) {
        super(data);
        if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
            this.icon_type = data.icon.iconType;
        }
        this.action_button = Parser.parseItem(data.actionButton);
    }
}
LiveChatViewerEngagementMessage.type = 'LiveChatViewerEngagementMessage';
export default LiveChatViewerEngagementMessage;
//# sourceMappingURL=LiveChatViewerEngagementMessage.js.map