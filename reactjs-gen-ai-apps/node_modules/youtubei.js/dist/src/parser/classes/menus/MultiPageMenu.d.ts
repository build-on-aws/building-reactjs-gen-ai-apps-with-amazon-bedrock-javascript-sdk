import { YTNode, type SuperParsedResult } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class MultiPageMenu extends YTNode {
    static type: string;
    header: SuperParsedResult<YTNode>;
    sections: SuperParsedResult<YTNode>;
    style: string;
    constructor(data: RawNode);
}
