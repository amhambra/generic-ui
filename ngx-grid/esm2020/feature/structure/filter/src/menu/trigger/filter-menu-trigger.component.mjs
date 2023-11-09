import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FilterMenuComponent } from '../filter-menu.component';
import { SmartComponent } from '../../../../../common/component/src/smart-component';
import { hermesMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../../core/structure/filter/src/api/filter.warehouse";
import * as i4 from "@angular/common";
import * as i5 from "../../../../../gui-angular/template/let/gui.let.directive";
import * as i6 from "../icon/filter-icon.component";
export class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, fabricDialogService, structureId, filterWarehouse) {
        super(detector, elementRef);
        this.injector = injector;
        this.fabricDialogService = fabricDialogService;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.activeFiltersExist$ = this.selectActiveFiltersExist();
    }
    openDrawer() {
        this.fabricDialogService.open({ component: FilterMenuComponent, injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
    selectActiveFiltersExist() {
        return this.filterWarehouse
            .onActiveFilters(this.structureId)
            .pipe(hermesMap((activeFilters) => {
            return activeFilters.length > 0;
        }));
    }
}
FilterMenuTriggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuTriggerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Injector }, { token: i1.FabricDialogService }, { token: i2.StructureId }, { token: i3.FilterWarehouse }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuTriggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FilterMenuTriggerComponent, selector: "div[gui-filter-menu-trigger]", usesInheritance: true, ngImport: i0, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<ng-container *guiLet=\"activeFiltersExist$; let activeFiltersExist\">\n\t\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\t</ng-container>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{height:19px;margin-right:24px;position:relative;width:19px}.gui-filter-active{border:2px solid #aaa!important;border-radius:50%;height:27px;left:-6px;position:absolute;top:-6px;width:27px}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"], dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "directive", type: i5.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i6.FilterIconComponent, selector: "div[gui-filter-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FilterMenuTriggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu-trigger]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<ng-container *guiLet=\"activeFiltersExist$; let activeFiltersExist\">\n\t\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\t</ng-container>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{height:19px;margin-right:24px;position:relative;width:19px}.gui-filter-active{border:2px solid #aaa!important;border-radius:50%;height:27px;left:-6px;position:absolute;top:-6px;width:27px}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.FabricDialogService }, { type: i2.StructureId }, { type: i3.FilterWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvbWVudS90cmlnZ2VyL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvdHJpZ2dlci9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFnQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUl2SSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFJckYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7OztBQVcvQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBYztJQUk3RCxZQUFZLFFBQTJCLEVBQ3BDLFVBQXNCLEVBQ0wsUUFBa0IsRUFDbEIsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFKVCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUHBELHdCQUFtQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBU3RELENBQUM7SUFFRCxVQUFVO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDO0lBRU8sd0JBQXdCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGVBQWU7YUFDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLGFBQStDLEVBQUUsRUFBRTtZQUM3RCxPQUFPLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDOzt3SEE3QlcsMEJBQTBCOzRHQUExQiwwQkFBMEIsMkZDcEJ2QywwVEFVQTs0RkRVYSwwQkFBMEI7a0JBVHRDLFNBQVM7K0JBQ0MsOEJBQThCLGlCQUt6QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vZmlsdGVyLW1lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9hY3RpdmUvYWN0aXZlLWZpbHRlci5tb2RlbCc7XG5pbXBvcnQgeyBoZXJtZXNNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1tZW51LXRyaWdnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi4vLi4vc3R5bGUvZmlsdGVyLnNjc3MnXG5cdF0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZpbHRlck1lbnVUcmlnZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdGFjdGl2ZUZpbHRlcnNFeGlzdCQgPSB0aGlzLnNlbGVjdEFjdGl2ZUZpbHRlcnNFeGlzdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGRldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRvcGVuRHJhd2VyKCk6IHZvaWQge1xuXHRcdHRoaXMuZmFicmljRGlhbG9nU2VydmljZS5vcGVuKHsgY29tcG9uZW50OiBGaWx0ZXJNZW51Q29tcG9uZW50LCBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudS10cmlnZ2VyJztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0QWN0aXZlRmlsdGVyc0V4aXN0KCkge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0XHQgICAub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBhY3RpdmVGaWx0ZXJzLmxlbmd0aCA+IDA7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIiwiPGRpdiAoY2xpY2spPVwib3BlbkRyYXdlcigpXCJcblx0IFtndWktdG9vbHRpcF09XCInRmlsdGVycydcIlxuXHQgY2xhc3M9XCJndWktZmlsdGVyLWljb24td3JhcHBlclwiPlxuXG5cdDxuZy1jb250YWluZXIgKmd1aUxldD1cImFjdGl2ZUZpbHRlcnNFeGlzdCQ7IGxldCBhY3RpdmVGaWx0ZXJzRXhpc3RcIj5cblx0XHQ8ZGl2ICpuZ0lmPVwiYWN0aXZlRmlsdGVyc0V4aXN0XCIgY2xhc3M9XCJndWktZmlsdGVyLWFjdGl2ZVwiPjwvZGl2PlxuXHQ8L25nLWNvbnRhaW5lcj5cblxuXHQ8ZGl2IGd1aS1maWx0ZXItaWNvbj48L2Rpdj5cbjwvZGl2PlxuIl19