import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
export default class Alert extends YTNode {
    static type: string;
    text: Text;
    alert_type: string;
    constructor(data: RawNode);
}
