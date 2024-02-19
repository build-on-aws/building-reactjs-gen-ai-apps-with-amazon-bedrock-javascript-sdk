import { YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
export default class LiveChatMembershipItem extends YTNode {
    static type: string;
    id: string;
    timestamp: number;
    header_subtext: Text;
    author: Author;
    menu_endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
