/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { SchemaRowColoring } from '../../../../schema/core/api/row-coloring/schema-row-coloring';
import { SchemaWarehouse } from '../../../../schema/core/api/schema.warehouse';
import { ClassModifier } from '../../../../common/cdk/dom/class/class-modifier';
import { Reactive } from '@generic-ui/hermes';
export class SchemaCssClassManager extends Reactive {
    /**
     * @param {?} schemaReadModelRepository
     */
    constructor(schemaReadModelRepository) {
        super();
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.cssClass = null;
        this.classModifier = new ClassModifier();
    }
    /**
     * @param {?} elementRef
     * @param {?} schemaReadModelRootId
     * @return {?}
     */
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((/**
         * @param {?} classes
         * @return {?}
         */
        (classes) => {
            /** @type {?} */
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        }));
    }
    /**
     * @private
     * @param {?} css
     * @return {?}
     */
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            /** @type {?} */
            const diff = {};
            Object.keys(this.cssClass)
                .forEach((/**
             * @param {?} key
             * @return {?}
             */
            (key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            }));
            this.cssClass = css;
            return diff;
        }
    }
    /**
     * @private
     * @param {?} diff
     * @return {?}
     */
    renderCssClasses(diff) {
        if (diff.hasOwnProperty('verticalGrid')) {
            this.toggleCssClass(diff.verticalGrid, SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('horizontalGrid')) {
            this.toggleCssClass(diff.horizontalGrid, SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME);
        }
        if (diff.hasOwnProperty('theme')) {
            this.removeThemeCssClasses();
            this.addClass(this.resolveThemeClassName(diff.theme));
        }
        if (diff.hasOwnProperty('rowColoring')) {
            this.removeRowColoringClasses();
            this.addClass(this.resolveRowColoringClassName(diff.rowColoring));
        }
    }
    /**
     * @private
     * @param {?} toggle
     * @param {?} cssClassName
     * @return {?}
     */
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaTheme[key]))
            .map((/**
         * @param {?} theme
         * @return {?}
         */
        (theme) => this.resolveThemeClassName(theme)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} theme
     * @return {?}
     */
    resolveThemeClassName(theme) {
        switch (theme) {
            case SchemaTheme.FABRIC:
            case SchemaTheme[SchemaTheme.FABRIC]:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
            case SchemaTheme.MATERIAL:
            case SchemaTheme[SchemaTheme.MATERIAL]:
                return SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
            case SchemaTheme.LIGHT:
            case SchemaTheme[SchemaTheme.LIGHT]:
                return SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
            case SchemaTheme.DARK:
            case SchemaTheme[SchemaTheme.DARK]:
                return SchemaCssClassManager.THEME_DARK_CLASS_NAME;
            case SchemaTheme.GENERIC:
            case SchemaTheme[SchemaTheme.GENERIC]:
                return SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
            default:
                return SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
        }
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    resolveRowColoringClassName(coloring) {
        switch (coloring) {
            case SchemaRowColoring.ODD:
            case SchemaRowColoring[SchemaRowColoring.ODD]:
                return SchemaCssClassManager.ROW_COLORING_ODD;
            case SchemaRowColoring.EVEN:
            case SchemaRowColoring[SchemaRowColoring.EVEN]:
                return SchemaCssClassManager.ROW_COLORING_EVEN;
            default:
                return null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => SchemaRowColoring[key]))
            .map((/**
         * @param {?} coloring
         * @return {?}
         */
        (coloring) => this.resolveRowColoringClassName(coloring)))
            .filter((/**
         * @param {?} className
         * @return {?}
         */
        (className) => !!className))
            .forEach((/**
         * @param {?} className
         * @return {?}
         */
        (className) => {
            this.removeClass(className);
        }));
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    addClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    }
    /**
     * @private
     * @param {?} cssClassName
     * @return {?}
     */
    removeClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).remove(cssClassName);
        }
    }
}
SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME = 'gui-vertical-grid';
SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME = 'gui-horizontal-grid';
SchemaCssClassManager.THEME_FABRIC_CLASS_NAME = 'gui-fabric';
SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME = 'gui-material';
SchemaCssClassManager.THEME_LIGHT_CLASS_NAME = 'gui-light';
SchemaCssClassManager.THEME_DARK_CLASS_NAME = 'gui-dark';
SchemaCssClassManager.THEME_GENERIC_CLASS_NAME = 'gui-generic';
SchemaCssClassManager.ROW_COLORING_ODD = 'gui-rows-odd';
SchemaCssClassManager.ROW_COLORING_EVEN = 'gui-rows-even';
SchemaCssClassManager.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCssClassManager.ctorParameters = () => [
    { type: SchemaWarehouse }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.VERTICAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.HORIZONTAL_GRID_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_FABRIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_MATERIAL_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_LIGHT_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_DARK_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.THEME_GENERIC_CLASS_NAME;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.ROW_COLORING_ODD;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.ROW_COLORING_EVEN;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.classModifier;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssClass;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.cssHostRef;
    /**
     * @type {?}
     * @private
     */
    SchemaCssClassManager.prototype.schemaReadModelRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZ3JpZC9mZWF0dXJlL3NjaGVtYS9zY2hlbWEtY3NzLWNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUUvRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTlDLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxRQUFROzs7O0lBMEJsRCxZQUE2Qix5QkFBMEM7UUFDdEUsS0FBSyxFQUFFLENBQUM7UUFEb0IsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFpQjtRQUovRCxhQUFRLEdBQW1CLElBQUksQ0FBQztRQU12QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFDLFVBQXNCLEVBQUUscUJBQTRDO1FBRXhFLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBRTdCLElBQUksQ0FBQyx5QkFBeUI7YUFDNUIsWUFBWSxDQUFDLHFCQUFxQixDQUFDO2FBQ25DLElBQUksQ0FDSixJQUFJLENBQUMsZUFBZSxFQUFFLENBQ3RCO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsT0FBdUIsRUFBRSxFQUFFOztrQkFFaEMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1lBRXRD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O0FBRWxDLHVDQUFpQixHQUFHLGVBQWUsQ0FBQzs7WUFuQjVELFVBQVU7Ozs7WUFORixlQUFlOzs7Ozs7O0lBU3ZCLCtDQUF1RTs7Ozs7SUFFdkUsaURBQTJFOzs7OztJQUUzRSw4Q0FBK0Q7Ozs7O0lBRS9ELGdEQUFtRTs7Ozs7SUFFbkUsNkNBQTZEOzs7OztJQUU3RCw0Q0FBMkQ7Ozs7O0lBRTNELCtDQUFpRTs7Ozs7SUFFakUsdUNBQTBEOzs7OztJQUUxRCx3Q0FBNEQ7Ozs7O0lBRTVELDhDQUE4Qzs7Ozs7SUFFOUMseUNBQXdDOzs7OztJQUV4QywyQ0FBK0I7Ozs7O0lBRW5CLDBEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NoZW1hQ3NzQ2xhc3MgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvY3NzLWNsYXNzZXMvc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyJztcbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyIGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSA9ICdndWktdmVydGljYWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgSE9SSVpPTlRBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLWhvcml6b250YWwtZ3JpZCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfRkFCUklDX0NMQVNTX05BTUUgPSAnZ3VpLWZhYnJpYyc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRSA9ICdndWktbWF0ZXJpYWwnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0xJR0hUX0NMQVNTX05BTUUgPSAnZ3VpLWxpZ2h0JztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9EQVJLX0NMQVNTX05BTUUgPSAnZ3VpLWRhcmsnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRSA9ICdndWktZ2VuZXJpYyc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgUk9XX0NPTE9SSU5HX09ERCA9ICdndWktcm93cy1vZGQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJPV19DT0xPUklOR19FVkVOID0gJ2d1aS1yb3dzLWV2ZW4nO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2xhc3NNb2RpZmllcjogQ2xhc3NNb2RpZmllcjtcblxuXHRwcml2YXRlIGNzc0NsYXNzOiBTY2hlbWFDc3NDbGFzcyA9IG51bGw7XG5cblx0cHJpdmF0ZSBjc3NIb3N0UmVmOiBFbGVtZW50UmVmO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeTogU2NoZW1hV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIgPSBuZXcgQ2xhc3NNb2RpZmllcigpO1xuXHR9XG5cblx0aW5pdChlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5jc3NIb3N0UmVmID0gZWxlbWVudFJlZjtcblxuXHRcdHRoaXMuc2NoZW1hUmVhZE1vZGVsUmVwb3NpdG9yeVxuXHRcdFx0Lm9uQ3NzQ2xhc3NlcyhzY2hlbWFSZWFkTW9kZWxSb290SWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy5oZXJtZXNUYWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY2xhc3NlczogU2NoZW1hQ3NzQ2xhc3MpID0+IHtcblxuXHRcdFx0XHRjb25zdCBkaWZmID0gdGhpcy51cGRhdGVTdGF0ZShjbGFzc2VzKTtcblxuXHRcdFx0XHR0aGlzLnJlbmRlckNzc0NsYXNzZXMoZGlmZik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgdXBkYXRlU3RhdGUoY3NzOiBTY2hlbWFDc3NDbGFzcyk6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+IHtcblxuXHRcdGlmICghdGhpcy5jc3NDbGFzcykge1xuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblx0XHRcdHJldHVybiB0aGlzLmNzc0NsYXNzO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdGNvbnN0IGRpZmYgPSB7fTtcblxuXHRcdFx0T2JqZWN0LmtleXModGhpcy5jc3NDbGFzcylcblx0XHRcdFx0ICAuZm9yRWFjaCgoa2V5OiBzdHJpbmcpID0+IHtcblx0XHRcdFx0XHQgIGlmIChjc3Nba2V5XSAhPT0gdGhpcy5jc3NDbGFzc1trZXldKSB7XG5cdFx0XHRcdFx0XHQgIGRpZmZba2V5XSA9IGNzc1trZXldO1xuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHQgIH0pO1xuXG5cdFx0XHR0aGlzLmNzc0NsYXNzID0gY3NzO1xuXG5cdFx0XHRyZXR1cm4gZGlmZjtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbmRlckNzc0NsYXNzZXMoZGlmZjogUGFydGlhbDxTY2hlbWFDc3NDbGFzcz4pOiB2b2lkIHtcblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCd2ZXJ0aWNhbEdyaWQnKSkge1xuXHRcdFx0dGhpcy50b2dnbGVDc3NDbGFzcyhkaWZmLnZlcnRpY2FsR3JpZCwgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlZFUlRJQ0FMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ2hvcml6b250YWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi5ob3Jpem9udGFsR3JpZCwgU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLkhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndGhlbWUnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlVGhlbWVDbGFzc05hbWUoZGlmZi50aGVtZSkpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdyb3dDb2xvcmluZycpKSB7XG5cdFx0XHR0aGlzLnJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpO1xuXHRcdFx0dGhpcy5hZGRDbGFzcyh0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShkaWZmLnJvd0NvbG9yaW5nKSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSB0b2dnbGVDc3NDbGFzcyh0b2dnbGU6IGJvb2xlYW4sIGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKHRvZ2dsZSkge1xuXHRcdFx0dGhpcy5hZGRDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVUaGVtZUNzc0NsYXNzZXMoKTogdm9pZCB7XG5cdFx0T2JqZWN0LmtleXMoU2NoZW1hVGhlbWUpXG5cdFx0XHQgIC5tYXAoKGtleTogc3RyaW5nKSA9PiBTY2hlbWFUaGVtZVtrZXldKVxuXHRcdFx0ICAubWFwKCh0aGVtZTogU2NoZW1hVGhlbWUpID0+IHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lKSlcblx0XHRcdCAgLmZpbHRlcigoY2xhc3NOYW1lOiBzdHJpbmcpID0+ICEhY2xhc3NOYW1lKVxuXHRcdFx0ICAuZm9yRWFjaCgoY2xhc3NOYW1lOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0ICB0aGlzLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG5cdFx0XHQgIH0pO1xuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlVGhlbWVDbGFzc05hbWUodGhlbWU6IFNjaGVtYVRoZW1lIHwgc3RyaW5nKTogc3RyaW5nIHtcblxuXHRcdHN3aXRjaCAodGhlbWUpIHtcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5GQUJSSUNdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5NQVRFUklBTF06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfTUFURVJJQUxfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTElHSFRdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0xJR0hUX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuREFSSzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuREFSS106XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfREFSS19DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkdFTkVSSUNdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0dFTkVSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZzogU2NoZW1hUm93Q29sb3JpbmcgfCBzdHJpbmcpOiBzdHJpbmcge1xuXHRcdHN3aXRjaCAoY29sb3JpbmcpIHtcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0Y2FzZSBTY2hlbWFSb3dDb2xvcmluZ1tTY2hlbWFSb3dDb2xvcmluZy5PRERdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlJPV19DT0xPUklOR19PREQ7XG5cblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmcuRVZFTjpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuRVZFTl06XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuUk9XX0NPTE9SSU5HX0VWRU47XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlUm93Q29sb3JpbmdDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVJvd0NvbG9yaW5nKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hUm93Q29sb3Jpbmdba2V5XSlcblx0XHRcdCAgLm1hcCgoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSA9PiB0aGlzLnJlc29sdmVSb3dDb2xvcmluZ0NsYXNzTmFtZShjb2xvcmluZykpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCkuYWRkKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW1vdmVDbGFzcyhjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmIChjc3NDbGFzc05hbWUpIHtcblx0XHRcdHRoaXMuY2xhc3NNb2RpZmllci5nZXRFbGVtZW50KHRoaXMuY3NzSG9zdFJlZi5uYXRpdmVFbGVtZW50KS5yZW1vdmUoY3NzQ2xhc3NOYW1lKTtcblx0XHR9XG5cdH1cblxufVxuIl19