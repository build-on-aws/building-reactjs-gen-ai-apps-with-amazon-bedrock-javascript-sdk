import { type SuperParsedResult, YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class MultiPageMenuNotificationSection extends YTNode {
    static type: string;
    items: SuperParsedResult<YTNode>;
    constructor(data: RawNode);
    get contents(): SuperParsedResult<YTNode>;
}
