import type { SuperParsedResult } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Text from '../misc/Text.js';
export default class SimpleMenuHeader extends YTNode {
    static type: string;
    title: Text;
    buttons: SuperParsedResult<YTNode>;
    constructor(data: RawNode);
}
