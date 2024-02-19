import { LiveChatMessageBase } from './LiveChatTextMessage.js';
import type { RawNode } from '../../../index.js';
import type { YTNode } from '../../../helpers.js';
export default class LiveChatViewerEngagementMessage extends LiveChatMessageBase {
    static type: string;
    icon_type?: string;
    action_button: YTNode;
    constructor(data: RawNode);
}
