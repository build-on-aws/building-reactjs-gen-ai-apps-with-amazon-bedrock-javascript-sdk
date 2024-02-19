import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import ExpandableVideoDescriptionBody from './ExpandableVideoDescriptionBody.js';
import HorizontalCardList from './HorizontalCardList.js';
import VideoDescriptionHeader from './VideoDescriptionHeader.js';
import VideoDescriptionInfocardsSection from './VideoDescriptionInfocardsSection.js';
import VideoDescriptionMusicSection from './VideoDescriptionMusicSection.js';
class StructuredDescriptionContent extends YTNode {
    constructor(data) {
        super();
        this.items = Parser.parseArray(data.items, [VideoDescriptionHeader, ExpandableVideoDescriptionBody, VideoDescriptionMusicSection, VideoDescriptionInfocardsSection, HorizontalCardList]);
    }
}
StructuredDescriptionContent.type = 'StructuredDescriptionContent';
export default StructuredDescriptionContent;
//# sourceMappingURL=StructuredDescriptionContent.js.map