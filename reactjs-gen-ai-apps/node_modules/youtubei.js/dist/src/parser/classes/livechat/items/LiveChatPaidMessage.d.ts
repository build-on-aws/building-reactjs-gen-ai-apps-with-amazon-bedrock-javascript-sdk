import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
export default class LiveChatPaidMessage extends YTNode {
    static type: string;
    message: Text;
    author: Author;
    header_background_color: number;
    header_text_color: number;
    body_background_color: number;
    body_text_color: number;
    purchase_amount: string;
    menu_endpoint: NavigationEndpoint;
    timestamp: number;
    timestamp_text: string;
    id: string;
    constructor(data: RawNode);
}
