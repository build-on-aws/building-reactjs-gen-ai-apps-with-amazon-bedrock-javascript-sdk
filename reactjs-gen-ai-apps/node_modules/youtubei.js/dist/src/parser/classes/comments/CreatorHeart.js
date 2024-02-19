import { YTNode } from '../../helpers.js';
import Thumbnail from '../misc/Thumbnail.js';
class CreatorHeart extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.creator_thumbnail = Thumbnail.fromResponse(data.creatorThumbnail);
        if (Reflect.has(data, 'heartIcon') && Reflect.has(data.heartIcon, 'iconType')) {
            this.heart_icon_type = data.heartIcon.iconType;
        }
        this.heart_color = {
            basic_color_palette_data: {
                foreground_title_color: (_b = (_a = data.heartColor) === null || _a === void 0 ? void 0 : _a.basicColorPaletteData) === null || _b === void 0 ? void 0 : _b.foregroundTitleColor
            }
        };
        this.hearted_tooltip = data.heartedTooltip;
        this.is_hearted = data.isHearted;
        this.is_enabled = data.isEnabled;
        this.kennedy_heart_color_string = data.kennedyHeartColorString;
    }
}
CreatorHeart.type = 'CreatorHeart';
export default CreatorHeart;
//# sourceMappingURL=CreatorHeart.js.map