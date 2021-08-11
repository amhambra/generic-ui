/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
var ListViewL10nGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewL10nGate, _super);
    function ListViewL10nGate(translationService) {
        var _this = _super.call(this) || this;
        _this.translationService = translationService;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ListViewL10nGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('localization', changes)) {
            if (this.localization.translationResolver) {
                this.translationService.setResolver(this.localization.translationResolver);
            }
            if (this.localization.translation) {
                this.translationService.changeTranslation(this.localization.translation);
            }
        }
    };
    ListViewL10nGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[localization]'
                },] }
    ];
    /** @nocollapse */
    ListViewL10nGate.ctorParameters = function () { return [
        { type: TranslationService }
    ]; };
    ListViewL10nGate.propDecorators = {
        localization: [{ type: Input }]
    };
    return ListViewL10nGate;
}(Gate));
export { ListViewL10nGate };
if (false) {
    /** @type {?} */
    ListViewL10nGate.prototype.localization;
    /**
     * @type {?}
     * @private
     */
    ListViewL10nGate.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWwxMG4uZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L2wxMG4vbGlzdC12aWV3LWwxMG4uZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRzVELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUl0RjtJQUdzQyw0Q0FBSTtJQUt6QywwQkFBNkIsa0JBQXNDO1FBQW5FLFlBQ0MsaUJBQU8sU0FDUDtRQUY0Qix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COztJQUVuRSxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFvQztRQUUvQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBRTVDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDM0U7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN6RTtTQUNEO0lBQ0YsQ0FBQzs7Z0JBeEJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUsNkJBQTZCO2lCQUN2Qzs7OztnQkFOUSxrQkFBa0I7OzsrQkFTekIsS0FBSzs7SUFxQlAsdUJBQUM7Q0FBQSxBQTFCRCxDQUdzQyxJQUFJLEdBdUJ6QztTQXZCWSxnQkFBZ0I7OztJQUU1Qix3Q0FDa0M7Ozs7O0lBRXRCLDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9nYXRlJztcbmltcG9ydCB7IEd1aUxpc3RMb2NhbGl6YXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9ndWkvbGlzdC9jb3JlL2FwaS9ndWkubGlzdC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2wxMG4vY29yZS9hcGkvdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W2xvY2FsaXphdGlvbl0nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TDEwbkdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRsb2NhbGl6YXRpb246IEd1aUxpc3RMb2NhbGl6YXRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBOZ0NoYW5nZXM8TGlzdFZpZXdMMTBuR2F0ZT4pIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbG9jYWxpemF0aW9uJywgY2hhbmdlcykpIHtcblxuXHRcdFx0aWYgKHRoaXMubG9jYWxpemF0aW9uLnRyYW5zbGF0aW9uUmVzb2x2ZXIpIHtcblx0XHRcdFx0dGhpcy50cmFuc2xhdGlvblNlcnZpY2Uuc2V0UmVzb2x2ZXIodGhpcy5sb2NhbGl6YXRpb24udHJhbnNsYXRpb25SZXNvbHZlcik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbikge1xuXHRcdFx0XHR0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5jaGFuZ2VUcmFuc2xhdGlvbih0aGlzLmxvY2FsaXphdGlvbi50cmFuc2xhdGlvbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==