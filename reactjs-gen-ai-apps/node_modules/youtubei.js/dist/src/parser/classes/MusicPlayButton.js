import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
class MusicPlayButton extends YTNode {
    constructor(data) {
        var _a, _b;
        super();
        this.endpoint = new NavigationEndpoint(data.playNavigationEndpoint);
        this.play_icon_type = data.playIcon.iconType;
        this.pause_icon_type = data.pauseIcon.iconType;
        if (Reflect.has(data, 'accessibilityPlayData')) {
            this.play_label = (_a = data.accessibilityPlayData.accessibilityData) === null || _a === void 0 ? void 0 : _a.label;
        }
        if (Reflect.has(data, 'accessibilityPauseData')) {
            this.pause_label = (_b = data.accessibilityPauseData.accessibilityData) === null || _b === void 0 ? void 0 : _b.label;
        }
        this.icon_color = data.iconColor;
    }
}
MusicPlayButton.type = 'MusicPlayButton';
export default MusicPlayButton;
//# sourceMappingURL=MusicPlayButton.js.map