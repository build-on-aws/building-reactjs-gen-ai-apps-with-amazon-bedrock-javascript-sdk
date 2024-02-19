import Parser from '../index.js';
import ChildElement from './misc/ChildElement.js';
import { YTNode, observe } from '../helpers.js';
class Element extends YTNode {
    constructor(data) {
        var _a;
        super();
        if (Reflect.has(data, 'elementRenderer')) {
            return Parser.parseItem(data, Element);
        }
        const type = data.newElement.type.componentType;
        this.model = Parser.parseItem(type === null || type === void 0 ? void 0 : type.model);
        if (Reflect.has(data, 'newElement') && Reflect.has(data.newElement, 'childElements')) {
            this.child_elements = observe(((_a = data.newElement.childElements) === null || _a === void 0 ? void 0 : _a.map((el) => new ChildElement(el))) || []);
        }
    }
}
Element.type = 'Element';
export default Element;
//# sourceMappingURL=Element.js.map