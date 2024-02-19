import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class CompactLink extends YTNode {
    static type: string;
    title: string;
    endpoint: NavigationEndpoint;
    style: string;
    constructor(data: RawNode);
}
