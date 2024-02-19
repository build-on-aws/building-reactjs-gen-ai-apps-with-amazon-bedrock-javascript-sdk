import { YTNode } from '../helpers.js';
class DynamicTextView extends YTNode {
    constructor(data) {
        super();
        this.text = data.text.content;
    }
}
DynamicTextView.type = 'DynamicTextView';
export default DynamicTextView;
//# sourceMappingURL=DynamicTextView.js.map