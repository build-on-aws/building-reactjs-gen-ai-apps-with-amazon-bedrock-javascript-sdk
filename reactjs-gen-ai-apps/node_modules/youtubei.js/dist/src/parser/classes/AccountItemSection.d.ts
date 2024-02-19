import AccountItemSectionHeader from './AccountItemSectionHeader.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
/**
 * Not a real renderer but we treat it as one to keep things organized.
 */
export declare class AccountItem extends YTNode {
    static type: string;
    account_name: Text;
    account_photo: Thumbnail[];
    is_selected: boolean;
    is_disabled: boolean;
    has_channel: boolean;
    endpoint: NavigationEndpoint;
    account_byline: Text;
    constructor(data: RawNode);
}
export default class AccountItemSection extends YTNode {
    static type: string;
    contents: ObservedArray<AccountItem>;
    header: AccountItemSectionHeader | null;
    constructor(data: RawNode);
}
