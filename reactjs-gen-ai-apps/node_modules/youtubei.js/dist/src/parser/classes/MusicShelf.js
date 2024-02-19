import { YTNode } from '../helpers.js';
import Parser from '../index.js';
import Button from './Button.js';
import MusicResponsiveListItem from './MusicResponsiveListItem.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Text from './misc/Text.js';
class MusicShelf extends YTNode {
    constructor(data) {
        var _a, _b, _c, _d;
        super();
        this.title = new Text(data.title);
        this.contents = Parser.parseArray(data.contents, MusicResponsiveListItem);
        if (Reflect.has(data, 'bottomEndpoint')) {
            this.endpoint = new NavigationEndpoint(data.bottomEndpoint);
        }
        if (Reflect.has(data, 'continuations')) {
            this.continuation =
                ((_b = (_a = data.continuations) === null || _a === void 0 ? void 0 : _a[0].nextContinuationData) === null || _b === void 0 ? void 0 : _b.continuation) ||
                    ((_d = (_c = data.continuations) === null || _c === void 0 ? void 0 : _c[0].reloadContinuationData) === null || _d === void 0 ? void 0 : _d.continuation);
        }
        if (Reflect.has(data, 'bottomText')) {
            this.bottom_text = new Text(data.bottomText);
        }
        if (Reflect.has(data, 'bottomButton')) {
            this.bottom_button = Parser.parseItem(data.bottomButton, Button);
        }
        if (Reflect.has(data, 'subheaders')) {
            this.subheaders = Parser.parseArray(data.subheaders);
        }
    }
}
MusicShelf.type = 'MusicShelf';
export default MusicShelf;
//# sourceMappingURL=MusicShelf.js.map