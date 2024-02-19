import { YTNode, type SuperParsedResult } from '../helpers.js';
import { type RawNode } from '../index.js';
export default class TwoColumnSearchResults extends YTNode {
    static type: string;
    primary_contents: SuperParsedResult<YTNode>;
    secondary_contents: SuperParsedResult<YTNode>;
    constructor(data: RawNode);
}
