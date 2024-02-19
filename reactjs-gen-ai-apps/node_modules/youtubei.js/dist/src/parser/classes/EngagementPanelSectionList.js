import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import ContinuationItem from './ContinuationItem.js';
import EngagementPanelTitleHeader from './EngagementPanelTitleHeader.js';
import MacroMarkersList from './MacroMarkersList.js';
import SectionList from './SectionList.js';
import StructuredDescriptionContent from './StructuredDescriptionContent.js';
class EngagementPanelSectionList extends YTNode {
    constructor(data) {
        super();
        this.header = Parser.parseItem(data.header, EngagementPanelTitleHeader);
        this.content = Parser.parseItem(data.content, [SectionList, ContinuationItem, StructuredDescriptionContent, MacroMarkersList]);
        this.panel_identifier = data.panelIdentifier;
        this.target_id = data.targetId;
        this.visibility = data.visibility;
    }
}
EngagementPanelSectionList.type = 'EngagementPanelSectionList';
export default EngagementPanelSectionList;
//# sourceMappingURL=EngagementPanelSectionList.js.map