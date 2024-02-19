import Parser from '../index.js';
import { YTNode } from '../helpers.js';
class MusicEditablePlaylistDetailHeader extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parseItem(data.header);
        // TODO: Parse data.editHeader.musicPlaylistEditHeaderRenderer.
    }
}
MusicEditablePlaylistDetailHeader.type = 'MusicEditablePlaylistDetailHeader';
export default MusicEditablePlaylistDetailHeader;
//# sourceMappingURL=MusicEditablePlaylistDetailHeader.js.map