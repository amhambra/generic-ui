/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe } from '@angular/core';
import { TranslationService } from '../core/api/translation.service';
export class TranslationPipe {
    /**
     * @param {?} changeDetectorRef
     * @param {?} translationService
     */
    constructor(changeDetectorRef, translationService) {
        this.changeDetectorRef = changeDetectorRef;
        this.translationService = translationService;
        this.actualTranslationValue = '';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    transform(key) {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.subscription =
            this.translationService
                .onTranslation()
                .subscribe((/**
             * @param {?} translation
             * @return {?}
             */
            (translation) => {
                /** @type {?} */
                const value = translation[key];
                if (!value) {
                    this.actualTranslationValue = key;
                }
                this.actualTranslationValue = value;
                this.changeDetectorRef.markForCheck();
            }));
        return this.actualTranslationValue;
    }
}
TranslationPipe.decorators = [
    { type: Pipe, args: [{
                name: 'guiTranslate',
                pure: false
            },] }
];
/** @nocollapse */
TranslationPipe.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: TranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.actualTranslationValue;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TranslationPipe.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibDEwbi9mZWF0dXJlL3RyYW5zbGF0aW9uLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBYSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBUXJFLE1BQU0sT0FBTyxlQUFlOzs7OztJQU0zQixZQUE2QixpQkFBb0MsRUFDN0Msa0JBQXNDO1FBRDdCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUxsRCwyQkFBc0IsR0FBVyxFQUFFLENBQUM7SUFNNUMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoQztJQUNGLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEdBQVc7UUFFcEIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDaEM7UUFFRCxJQUFJLENBQUMsWUFBWTtZQUNoQixJQUFJLENBQUMsa0JBQWtCO2lCQUNyQixhQUFhLEVBQUU7aUJBQ2YsU0FBUzs7OztZQUFDLENBQUMsV0FBd0IsRUFBRSxFQUFFOztzQkFDakMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7Z0JBRTlCLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ1gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztpQkFDbEM7Z0JBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLENBQUMsRUFBQyxDQUFDO1FBRUwsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEMsQ0FBQzs7O1lBekNELElBQUksU0FBQztnQkFDTCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsSUFBSSxFQUFFLEtBQUs7YUFDWDs7OztZQVZRLGlCQUFpQjtZQUdqQixrQkFBa0I7Ozs7Ozs7SUFVMUIsaURBQTRDOzs7OztJQUU1Qyx1Q0FBbUM7Ozs7O0lBRXZCLDRDQUFxRDs7Ozs7SUFDOUQsNkNBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvcmUvYXBpL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb24gfSBmcm9tICcuLi9jb3JlL2FwaS90cmFuc2xhdGlvbic7XG5cblxuQFBpcGUoe1xuXHRuYW1lOiAnZ3VpVHJhbnNsYXRlJyxcblx0cHVyZTogZmFsc2Vcbn0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcblxuXHRwcml2YXRlIGFjdHVhbFRyYW5zbGF0aW9uVmFsdWU6IHN0cmluZyA9ICcnO1xuXG5cdHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UpIHtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuXHRcdFx0dGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblx0XHR9XG5cdH1cblxuXHR0cmFuc2Zvcm0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuXG5cdFx0aWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG5cdFx0XHR0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3Vic2NyaXB0aW9uID1cblx0XHRcdHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG5cdFx0XHRcdC5vblRyYW5zbGF0aW9uKClcblx0XHRcdFx0LnN1YnNjcmliZSgodHJhbnNsYXRpb246IFRyYW5zbGF0aW9uKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsdWUgPSB0cmFuc2xhdGlvbltrZXldO1xuXG5cdFx0XHRcdFx0aWYgKCF2YWx1ZSkge1xuXHRcdFx0XHRcdFx0dGhpcy5hY3R1YWxUcmFuc2xhdGlvblZhbHVlID0ga2V5O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuYWN0dWFsVHJhbnNsYXRpb25WYWx1ZSA9IHZhbHVlO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuYWN0dWFsVHJhbnNsYXRpb25WYWx1ZTtcblx0fVxuXG59XG4iXX0=