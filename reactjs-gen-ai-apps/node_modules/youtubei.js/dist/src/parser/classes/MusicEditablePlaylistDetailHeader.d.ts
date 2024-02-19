import { type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
export default class MusicEditablePlaylistDetailHeader extends YTNode {
    static type: string;
    header: YTNode;
    constructor(data: RawNode);
}
