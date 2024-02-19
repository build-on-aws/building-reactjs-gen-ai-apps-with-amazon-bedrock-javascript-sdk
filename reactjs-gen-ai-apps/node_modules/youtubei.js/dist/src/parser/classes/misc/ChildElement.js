import { YTNode } from '../../helpers.js';
class ChildElement extends YTNode {
    constructor(data) {
        var _a;
        super();
        if (Reflect.has(data, 'type') && Reflect.has(data.type, 'textType')) {
            this.text = (_a = data.type.textType.text) === null || _a === void 0 ? void 0 : _a.content;
        }
        this.properties = data.properties;
        if (Reflect.has(data, 'childElements')) {
            this.child_elements = data.childElements.map((el) => new ChildElement(el));
        }
    }
}
ChildElement.type = 'ChildElement';
export default ChildElement;
//# sourceMappingURL=ChildElement.js.map