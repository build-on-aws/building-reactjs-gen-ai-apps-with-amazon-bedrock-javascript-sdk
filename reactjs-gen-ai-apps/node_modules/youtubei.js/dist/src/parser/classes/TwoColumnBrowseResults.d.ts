import { YTNode, type SuperParsedResult } from '../helpers.js';
import { type RawNode } from '../index.js';
export default class TwoColumnBrowseResults extends YTNode {
    static type: string;
    tabs: SuperParsedResult<YTNode>;
    secondary_contents: SuperParsedResult<YTNode>;
    constructor(data: RawNode);
}
