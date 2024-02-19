import { type ObservedArray, YTNode } from '../../../helpers.js';
import type { RawNode } from '../../../index.js';
import Button from '../../Button.js';
import NavigationEndpoint from '../../NavigationEndpoint.js';
import Author from '../../misc/Author.js';
import Text from '../../misc/Text.js';
export declare class LiveChatMessageBase extends YTNode {
    static type: string;
    message: Text;
    inline_action_buttons: ObservedArray<Button>;
    timestamp: number;
    id: string;
    constructor(data: RawNode);
}
export default class LiveChatTextMessage extends LiveChatMessageBase {
    static type: string;
    author: Author;
    menu_endpoint: NavigationEndpoint;
    constructor(data: RawNode);
}
