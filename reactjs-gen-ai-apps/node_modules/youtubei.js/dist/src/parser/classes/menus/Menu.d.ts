import type { ObservedArray } from '../../helpers.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
export default class Menu extends YTNode {
    static type: string;
    items: ObservedArray<YTNode>;
    top_level_buttons: ObservedArray<YTNode>;
    label?: string;
    constructor(data: RawNode);
    get contents(): ObservedArray<YTNode>;
}
