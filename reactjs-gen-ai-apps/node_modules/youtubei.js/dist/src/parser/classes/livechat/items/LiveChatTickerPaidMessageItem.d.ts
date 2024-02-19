import Author from '../../misc/Author.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Text from '../../misc/Text.js';
import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
export default class LiveChatTickerPaidMessageItem extends YTNode {
    static type: string;
    author: Author;
    amount: Text;
    duration_sec: string;
    full_duration_sec: string;
    show_item: YTNode;
    show_item_endpoint: NavigationEndpoint;
    id: string;
    constructor(data: RawNode);
}
