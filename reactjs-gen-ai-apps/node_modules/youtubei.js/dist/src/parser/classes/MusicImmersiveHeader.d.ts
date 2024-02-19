import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';
export default class MusicImmersiveHeader extends YTNode {
    static type: string;
    title: Text;
    description: Text;
    thumbnail: MusicThumbnail | null;
    constructor(data: RawNode);
}
