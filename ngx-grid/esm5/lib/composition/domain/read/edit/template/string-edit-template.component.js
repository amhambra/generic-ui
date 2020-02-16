/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Override } from '../../../../../../common/cdk/decorators';
import { InputEditTemplateComponent } from './input-edit-template.component';
var StringEditTemplateComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StringEditTemplateComponent, _super);
    function StringEditTemplateComponent(fb) {
        return _super.call(this, fb) || this;
    }
    /**
     * @param {?} inputElement
     * @return {?}
     */
    StringEditTemplateComponent.prototype.focusField = /**
     * @param {?} inputElement
     * @return {?}
     */
    function (inputElement) {
        if (this.focus) {
            inputElement.focus();
            inputElement.setSelectionRange(0, inputElement.value.length);
        }
    };
    StringEditTemplateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-string-edit',
                    template: "\n\n\t\t<form [formGroup]=\"filterForm\" >\n\t\t\t<input #input [formControlName]=\"filterFieldName\" type=\"type\" class=\"gui-input\" />\n\t\t</form>\n\n\t",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None
                }] }
    ];
    /** @nocollapse */
    StringEditTemplateComponent.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], StringEditTemplateComponent.prototype, "focusField", null);
    return StringEditTemplateComponent;
}(InputEditTemplateComponent));
export { StringEditTemplateComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL3JlYWQvZWRpdC90ZW1wbGF0ZS9zdHJpbmctZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0U7SUFZaUQsdURBQWtDO0lBRWxGLHFDQUFZLEVBQWU7ZUFDMUIsa0JBQU0sRUFBRSxDQUFDO0lBQ1YsQ0FBQzs7Ozs7SUFHRCxnREFBVTs7OztJQUFWLFVBQVcsWUFBaUI7UUFFM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2YsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3JCLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3RDtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsUUFBUSxFQUFFLCtKQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDckM7Ozs7Z0JBbEJRLFdBQVc7O0lBMEJuQjtRQURDLFFBQVE7Ozs7aUVBT1I7SUFDRixrQ0FBQztDQUFBLEFBMUJELENBWWlELDBCQUEwQixHQWMxRTtTQWRZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuXG5pbXBvcnQgeyBJbnB1dEVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vaW5wdXQtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJpbmctZWRpdCcsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8Zm9ybSBbZm9ybUdyb3VwXT1cImZpbHRlckZvcm1cIiA+XG5cdFx0XHQ8aW5wdXQgI2lucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiZmlsdGVyRmllbGROYW1lXCIgdHlwZT1cInR5cGVcIiBjbGFzcz1cImd1aS1pbnB1dFwiIC8+XG5cdFx0PC9mb3JtPlxuXG5cdGAsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCBleHRlbmRzIElucHV0RWRpdFRlbXBsYXRlQ29tcG9uZW50PHN0cmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuXHRcdHN1cGVyKGZiKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRmb2N1c0ZpZWxkKGlucHV0RWxlbWVudDogYW55KTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5mb2N1cykge1xuXHRcdFx0aW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cdFx0XHRpbnB1dEVsZW1lbnQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgaW5wdXRFbGVtZW50LnZhbHVlLmxlbmd0aCk7XG5cdFx0fVxuXHR9XG59XG4iXX0=