import { YTNode, type ObservedArray } from '../helpers.js';
import { type RawNode } from '../index.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
export default class MusicPlaylistShelf extends YTNode {
    static type: string;
    playlist_id: string;
    contents: ObservedArray<MusicResponsiveListItem>;
    collapsed_item_count: number;
    continuation: string | null;
    constructor(data: RawNode);
}
