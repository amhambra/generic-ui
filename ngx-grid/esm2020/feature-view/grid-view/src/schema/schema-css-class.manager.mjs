import { Injectable } from '@angular/core';
import { SchemaTheme } from '../../../../core/schema/src/api/theme/schema-theme';
import { SchemaRowColoring } from '../../../../core/schema/src/api/row-coloring/schema-row-coloring';
import { ClassModifier } from '../../../../feature/common/src/cdk/dom/class/class-modifier';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/schema/src/api/schema.warehouse";
export class SchemaCssClassManager extends Reactive {
    constructor(schemaReadModelRepository) {
        super();
        this.schemaReadModelRepository = schemaReadModelRepository;
        this.cssClass = null;
        this.classModifier = new ClassModifier();
    }
    init(elementRef, schemaReadModelRootId) {
        this.cssHostRef = elementRef;
        this.schemaReadModelRepository
            .onCssClasses(schemaReadModelRootId)
            .pipe(this.hermesTakeUntil())
            .subscribe((classes) => {
            const diff = this.updateState(classes);
            this.renderCssClasses(diff);
        });
    }
    updateState(css) {
        if (!this.cssClass) {
            this.cssClass = css;
            return this.cssClass;
        }
        else {
            const diff = {};
            Object.keys(this.cssClass)
                .forEach((key) => {
                if (css[key] !== this.cssClass[key]) {
                    diff[key] = css[key];
                }
            });
            this.cssClass = css;
            return diff;
        }
    }
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
    toggleCssClass(toggle, cssClassName) {
        if (toggle) {
            this.addClass(cssClassName);
        }
        else {
            this.removeClass(cssClassName);
        }
    }
    removeThemeCssClasses() {
        Object.keys(SchemaTheme)
            .map((key) => SchemaTheme[key])
            .map((theme) => this.resolveThemeClassName(theme))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
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
    removeRowColoringClasses() {
        Object.keys(SchemaRowColoring)
            .map((key) => SchemaRowColoring[key])
            .map((coloring) => this.resolveRowColoringClassName(coloring))
            .filter((className) => !!className)
            .forEach((className) => {
            this.removeClass(className);
        });
    }
    addClass(cssClassName) {
        if (cssClassName) {
            this.classModifier.getElement(this.cssHostRef.nativeElement).add(cssClassName);
        }
    }
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
SchemaCssClassManager.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager, deps: [{ token: i1.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Injectable });
SchemaCssClassManager.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SchemaCssClassManager, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.SchemaWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9zY2hlbWEvc2NoZW1hLWNzcy1jbGFzcy5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdkQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBR3JHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUM1RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUk5QyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsUUFBUTtJQTBCbEQsWUFBNkIseUJBQTBDO1FBQ3RFLEtBQUssRUFBRSxDQUFDO1FBRG9CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBaUI7UUFKL0QsYUFBUSxHQUFtQixJQUFJLENBQUM7UUFNdkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLENBQUMsVUFBc0IsRUFBRSxxQkFBNEM7UUFFeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFN0IsSUFBSSxDQUFDLHlCQUF5QjthQUM1QixZQUFZLENBQUMscUJBQXFCLENBQUM7YUFDbkMsSUFBSSxDQUNKLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FDdEI7YUFDQSxTQUFTLENBQUMsQ0FBQyxPQUF1QixFQUFFLEVBQUU7WUFFdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV2QyxJQUFJLENBQUMsZ0JBQWdCLENB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QVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL2dsb2JhbC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IENsYXNzTW9kaWZpZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjaGVtYUNzc0NsYXNzTWFuYWdlciBleHRlbmRzIFJlYWN0aXZlIHtcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBWRVJUSUNBTF9HUklEX0NMQVNTX05BTUUgPSAnZ3VpLXZlcnRpY2FsLWdyaWQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IEhPUklaT05UQUxfR1JJRF9DTEFTU19OQU1FID0gJ2d1aS1ob3Jpem9udGFsLWdyaWQnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX0ZBQlJJQ19DTEFTU19OQU1FID0gJ2d1aS1mYWJyaWMnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUUgPSAnZ3VpLW1hdGVyaWFsJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9MSUdIVF9DTEFTU19OQU1FID0gJ2d1aS1saWdodCc7XG5cblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEhFTUVfREFSS19DTEFTU19OQU1FID0gJ2d1aS1kYXJrJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBUSEVNRV9HRU5FUklDX0NMQVNTX05BTUUgPSAnZ3VpLWdlbmVyaWMnO1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFJPV19DT0xPUklOR19PREQgPSAnZ3VpLXJvd3Mtb2RkJztcblxuXHRwcml2YXRlIHN0YXRpYyByZWFkb25seSBST1dfQ09MT1JJTkdfRVZFTiA9ICdndWktcm93cy1ldmVuJztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsYXNzTW9kaWZpZXI6IENsYXNzTW9kaWZpZXI7XG5cblx0cHJpdmF0ZSBjc3NDbGFzczogU2NoZW1hQ3NzQ2xhc3MgPSBudWxsO1xuXG5cdHByaXZhdGUgY3NzSG9zdFJlZjogRWxlbWVudFJlZjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnk6IFNjaGVtYVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIoKTtcblx0fVxuXG5cdGluaXQoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY3NzSG9zdFJlZiA9IGVsZW1lbnRSZWY7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFJlcG9zaXRvcnlcblx0XHRcdC5vbkNzc0NsYXNzZXMoc2NoZW1hUmVhZE1vZGVsUm9vdElkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHRoaXMuaGVybWVzVGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNsYXNzZXM6IFNjaGVtYUNzc0NsYXNzKSA9PiB7XG5cblx0XHRcdFx0Y29uc3QgZGlmZiA9IHRoaXMudXBkYXRlU3RhdGUoY2xhc3Nlcyk7XG5cblx0XHRcdFx0dGhpcy5yZW5kZXJDc3NDbGFzc2VzKGRpZmYpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHVwZGF0ZVN0YXRlKGNzczogU2NoZW1hQ3NzQ2xhc3MpOiBQYXJ0aWFsPFNjaGVtYUNzc0NsYXNzPiB7XG5cblx0XHRpZiAoIXRoaXMuY3NzQ2xhc3MpIHtcblx0XHRcdHRoaXMuY3NzQ2xhc3MgPSBjc3M7XG5cdFx0XHRyZXR1cm4gdGhpcy5jc3NDbGFzcztcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zdCBkaWZmID0ge307XG5cblx0XHRcdE9iamVjdC5rZXlzKHRoaXMuY3NzQ2xhc3MpXG5cdFx0XHRcdCAgLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0ICBpZiAoY3NzW2tleV0gIT09IHRoaXMuY3NzQ2xhc3Nba2V5XSkge1xuXHRcdFx0XHRcdFx0ICBkaWZmW2tleV0gPSBjc3Nba2V5XTtcblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0ICB9KTtcblxuXHRcdFx0dGhpcy5jc3NDbGFzcyA9IGNzcztcblxuXHRcdFx0cmV0dXJuIGRpZmY7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZW5kZXJDc3NDbGFzc2VzKGRpZmY6IFBhcnRpYWw8U2NoZW1hQ3NzQ2xhc3M+KTogdm9pZCB7XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgndmVydGljYWxHcmlkJykpIHtcblx0XHRcdHRoaXMudG9nZ2xlQ3NzQ2xhc3MoZGlmZi52ZXJ0aWNhbEdyaWQsIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5WRVJUSUNBTF9HUklEX0NMQVNTX05BTUUpO1xuXHRcdH1cblxuXHRcdGlmIChkaWZmLmhhc093blByb3BlcnR5KCdob3Jpem9udGFsR3JpZCcpKSB7XG5cdFx0XHR0aGlzLnRvZ2dsZUNzc0NsYXNzKGRpZmYuaG9yaXpvbnRhbEdyaWQsIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5IT1JJWk9OVEFMX0dSSURfQ0xBU1NfTkFNRSk7XG5cdFx0fVxuXG5cdFx0aWYgKGRpZmYuaGFzT3duUHJvcGVydHkoJ3RoZW1lJykpIHtcblx0XHRcdHRoaXMucmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk7XG5cdFx0XHR0aGlzLmFkZENsYXNzKHRoaXMucmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKGRpZmYudGhlbWUpKTtcblx0XHR9XG5cblx0XHRpZiAoZGlmZi5oYXNPd25Qcm9wZXJ0eSgncm93Q29sb3JpbmcnKSkge1xuXHRcdFx0dGhpcy5yZW1vdmVSb3dDb2xvcmluZ0NsYXNzZXMoKTtcblx0XHRcdHRoaXMuYWRkQ2xhc3ModGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoZGlmZi5yb3dDb2xvcmluZykpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgdG9nZ2xlQ3NzQ2xhc3ModG9nZ2xlOiBib29sZWFuLCBjc3NDbGFzc05hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh0b2dnbGUpIHtcblx0XHRcdHRoaXMuYWRkQ2xhc3MoY3NzQ2xhc3NOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVDbGFzcyhjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlVGhlbWVDc3NDbGFzc2VzKCk6IHZvaWQge1xuXHRcdE9iamVjdC5rZXlzKFNjaGVtYVRoZW1lKVxuXHRcdFx0ICAubWFwKChrZXk6IHN0cmluZykgPT4gU2NoZW1hVGhlbWVba2V5XSlcblx0XHRcdCAgLm1hcCgodGhlbWU6IFNjaGVtYVRoZW1lKSA9PiB0aGlzLnJlc29sdmVUaGVtZUNsYXNzTmFtZSh0aGVtZSkpXG5cdFx0XHQgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiAhIWNsYXNzTmFtZSlcblx0XHRcdCAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdCAgdGhpcy5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuXHRcdFx0ICB9KTtcblx0fVxuXG5cdHByaXZhdGUgcmVzb2x2ZVRoZW1lQ2xhc3NOYW1lKHRoZW1lOiBTY2hlbWFUaGVtZSB8IHN0cmluZyk6IHN0cmluZyB7XG5cblx0XHRzd2l0Y2ggKHRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuRkFCUklDXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9GQUJSSUNfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5NQVRFUklBTDpcblx0XHRcdGNhc2UgU2NoZW1hVGhlbWVbU2NoZW1hVGhlbWUuTUFURVJJQUxdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX01BVEVSSUFMX0NMQVNTX05BTUU7XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkxJR0hUXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9MSUdIVF9DTEFTU19OQU1FO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lW1NjaGVtYVRoZW1lLkRBUktdOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlRIRU1FX0RBUktfQ0xBU1NfTkFNRTtcblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5HRU5FUklDOlxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZVtTY2hlbWFUaGVtZS5HRU5FUklDXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5USEVNRV9HRU5FUklDX0NMQVNTX05BTUU7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBTY2hlbWFDc3NDbGFzc01hbmFnZXIuVEhFTUVfRkFCUklDX0NMQVNTX05BTUU7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSByZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nIHwgc3RyaW5nKTogc3RyaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLk9ERDpcblx0XHRcdGNhc2UgU2NoZW1hUm93Q29sb3JpbmdbU2NoZW1hUm93Q29sb3JpbmcuT0REXTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYUNzc0NsYXNzTWFuYWdlci5ST1dfQ09MT1JJTkdfT0REO1xuXG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRjYXNlIFNjaGVtYVJvd0NvbG9yaW5nW1NjaGVtYVJvd0NvbG9yaW5nLkVWRU5dOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hQ3NzQ2xhc3NNYW5hZ2VyLlJPV19DT0xPUklOR19FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZVJvd0NvbG9yaW5nQ2xhc3NlcygpOiB2b2lkIHtcblx0XHRPYmplY3Qua2V5cyhTY2hlbWFSb3dDb2xvcmluZylcblx0XHRcdCAgLm1hcCgoa2V5OiBzdHJpbmcpID0+IFNjaGVtYVJvd0NvbG9yaW5nW2tleV0pXG5cdFx0XHQgIC5tYXAoKGNvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykgPT4gdGhpcy5yZXNvbHZlUm93Q29sb3JpbmdDbGFzc05hbWUoY29sb3JpbmcpKVxuXHRcdFx0ICAuZmlsdGVyKChjbGFzc05hbWU6IHN0cmluZykgPT4gISFjbGFzc05hbWUpXG5cdFx0XHQgIC5mb3JFYWNoKChjbGFzc05hbWU6IHN0cmluZykgPT4ge1xuXHRcdFx0XHQgIHRoaXMucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcblx0XHRcdCAgfSk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzKGNzc0NsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0aWYgKGNzc0NsYXNzTmFtZSkge1xuXHRcdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQodGhpcy5jc3NIb3N0UmVmLm5hdGl2ZUVsZW1lbnQpLmFkZChjc3NDbGFzc05hbWUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgcmVtb3ZlQ2xhc3MoY3NzQ2xhc3NOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRpZiAoY3NzQ2xhc3NOYW1lKSB7XG5cdFx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudCh0aGlzLmNzc0hvc3RSZWYubmF0aXZlRWxlbWVudCkucmVtb3ZlKGNzc0NsYXNzTmFtZSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==