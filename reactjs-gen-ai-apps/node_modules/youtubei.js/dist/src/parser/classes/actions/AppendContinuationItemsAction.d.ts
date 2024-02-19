import type { RawNode } from '../../index.js';
import { type SuperParsedResult, YTNode } from '../../helpers.js';
export default class AppendContinuationItemsAction extends YTNode {
    static type: string;
    items: SuperParsedResult<YTNode>;
    target: string;
    constructor(data: RawNode);
}
