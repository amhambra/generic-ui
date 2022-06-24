import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { FilterMenuComponent } from './filter-menu.component';
import { filterContainerToken } from '../../../../core/structure/filter/api/config/filter-container-token';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../core/structure/core/api/global/structure.id";
import * as i3 from "../../../../core/structure/filter/api/filter.warehouse";
import * as i4 from "./icon/filter-icon.component";
import * as i5 from "@angular/common";
export class FilterMenuTriggerComponent extends SmartComponent {
    constructor(detector, elementRef, injector, drawerService, fabricDialogService, structureId, filterWarehouse, filterContainerRef) {
        super(detector, elementRef);
        this.injector = injector;
        this.drawerService = drawerService;
        this.fabricDialogService = fabricDialogService;
        this.structureId = structureId;
        this.filterWarehouse = filterWarehouse;
        this.filterContainerRef = filterContainerRef;
        this.activeFiltersExist = false;
    }
    ngOnInit() {
        this.subscribe(this.filterWarehouse.onActiveFilters(this.structureId), (activeFilters) => {
            this.activeFiltersExist = activeFilters.length > 0;
        });
    }
    openDrawer() {
        const elementRef = this.filterContainerRef.getElementRef();
        this.fabricDialogService.open({ component: FilterMenuComponent, injector: this.injector });
        // this.drawerService.open(elementRef, FilterMenuComponent, { injector: this.injector });
    }
    getSelectorName() {
        return 'gui-filter-menu-trigger';
    }
}
FilterMenuTriggerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuTriggerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Injector }, { token: i1.FabricDrawerService }, { token: i1.FabricDialogService }, { token: i2.StructureId }, { token: i3.FilterWarehouse }, { token: filterContainerToken }], target: i0.ɵɵFactoryTarget.Component });
FilterMenuTriggerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: FilterMenuTriggerComponent, selector: "div[gui-filter-menu-trigger]", usesInheritance: true, ngImport: i0, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{margin-right:24px;position:relative;width:19px;height:19px}.gui-filter-active{position:absolute;top:-6px;left:-6px;border:2px solid #aaa!important;width:27px;height:27px;border-radius:50%}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"], components: [{ type: i4.FilterIconComponent, selector: "div[gui-filter-icon]" }], directives: [{ type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { type: i5.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FilterMenuTriggerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu-trigger]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div (click)=\"openDrawer()\"\n\t [gui-tooltip]=\"'Filters'\"\n\t class=\"gui-filter-icon-wrapper\">\n\n\t<div *ngIf=\"activeFiltersExist\" class=\"gui-filter-active\"></div>\n\n\t<div gui-filter-icon></div>\n</div>\n", styles: [".gui-filter-icon-wrapper{margin-right:24px;position:relative;width:19px;height:19px}.gui-filter-active{position:absolute;top:-6px;left:-6px;border:2px solid #aaa!important;width:27px;height:27px;border-radius:50%}.gui-filter-menu{width:600px}.gui-filter-icon svg{height:16px;width:16px}.gui-filter-icon svg .cls-1{fill:none;stroke:#aaa;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;transition:stroke .3s ease-in-out}.gui-filter-icon:hover .cls-1{stroke:#464646}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.FabricDrawerService }, { type: i1.FabricDialogService }, { type: i2.StructureId }, { type: i3.FilterWarehouse }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [filterContainerToken]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUtdHJpZ2dlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvc3RydWN0dXJlL2ZpbHRlci9tZW51L2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvbWVudS9maWx0ZXItbWVudS10cmlnZ2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLE1BQU0sRUFBb0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJL0ksT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUVBQXFFLENBQUM7QUFFM0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7Ozs7O0FBYy9FLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxjQUFjO0lBSTdELFlBQVksUUFBMkIsRUFDcEMsVUFBc0IsRUFDTCxRQUFrQixFQUNsQixhQUFrQyxFQUNsQyxtQkFBd0MsRUFDeEMsV0FBd0IsRUFDeEIsZUFBZ0MsRUFDRixrQkFBc0M7UUFDdkYsS0FBSyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQXFCO1FBQ2xDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ0YsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQVR4Rix1QkFBa0IsR0FBWSxLQUFLLENBQUM7SUFXcEMsQ0FBQztJQUVELFFBQVE7UUFFUCxJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDdEQsQ0FBQyxhQUErQyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDVCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFM0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0YseUZBQXlGO0lBQzFGLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7d0hBbENXLDBCQUEwQixxT0FXM0Isb0JBQW9COzRHQVhuQiwwQkFBMEIsMkZDckJ2QywyTkFRQTs0RkRhYSwwQkFBMEI7a0JBVHRDLFNBQVM7K0JBQ0MsOEJBQThCLGlCQUV6QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzswQkFnQjNDLE1BQU07MkJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgSW5qZWN0b3IsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nU2VydmljZSwgRmFicmljRHJhd2VyU2VydmljZSB9IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEZpbHRlck1lbnVDb21wb25lbnQgfSBmcm9tICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBmaWx0ZXJDb250YWluZXJUb2tlbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvY29uZmlnL2ZpbHRlci1jb250YWluZXItdG9rZW4nO1xuaW1wb3J0IHsgRmlsdGVyQ29udGFpbmVyUmVmIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2FwaS9jb25maWcvZmlsdGVyLWNvbnRhaW5lci1yZWYnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLWZpbHRlci1tZW51LXRyaWdnZXJdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LXRyaWdnZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4uL3N0eWxlL2ZpbHRlci5uZ3guc2Nzcydcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJNZW51VHJpZ2dlckNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRhY3RpdmVGaWx0ZXJzRXhpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjb25zdHJ1Y3RvcihkZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaW5qZWN0b3I6IEluamVjdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRyYXdlclNlcnZpY2U6IEZhYnJpY0RyYXdlclNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmFicmljRGlhbG9nU2VydmljZTogRmFicmljRGlhbG9nU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlOiBGaWx0ZXJXYXJlaG91c2UsXG5cdFx0XHRcdEBJbmplY3QoZmlsdGVyQ29udGFpbmVyVG9rZW4pIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyQ29udGFpbmVyUmVmOiBGaWx0ZXJDb250YWluZXJSZWYpIHtcblx0XHRzdXBlcihkZXRlY3RvciwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGFjdGl2ZUZpbHRlcnM6IFJlYWRvbmx5QXJyYXk8QWN0aXZlRmlsdGVyTW9kZWw+KSA9PiB7XG5cdFx0XHRcdHRoaXMuYWN0aXZlRmlsdGVyc0V4aXN0ID0gYWN0aXZlRmlsdGVycy5sZW5ndGggPiAwO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRvcGVuRHJhd2VyKCk6IHZvaWQge1xuXHRcdGNvbnN0IGVsZW1lbnRSZWYgPSB0aGlzLmZpbHRlckNvbnRhaW5lclJlZi5nZXRFbGVtZW50UmVmKCk7XG5cblx0XHR0aGlzLmZhYnJpY0RpYWxvZ1NlcnZpY2Uub3Blbih7IGNvbXBvbmVudDogRmlsdGVyTWVudUNvbXBvbmVudCwgaW5qZWN0b3I6IHRoaXMuaW5qZWN0b3IgfSk7XG5cdFx0Ly8gdGhpcy5kcmF3ZXJTZXJ2aWNlLm9wZW4oZWxlbWVudFJlZiwgRmlsdGVyTWVudUNvbXBvbmVudCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudS10cmlnZ2VyJztcblx0fVxufVxuIiwiPGRpdiAoY2xpY2spPVwib3BlbkRyYXdlcigpXCJcblx0IFtndWktdG9vbHRpcF09XCInRmlsdGVycydcIlxuXHQgY2xhc3M9XCJndWktZmlsdGVyLWljb24td3JhcHBlclwiPlxuXG5cdDxkaXYgKm5nSWY9XCJhY3RpdmVGaWx0ZXJzRXhpc3RcIiBjbGFzcz1cImd1aS1maWx0ZXItYWN0aXZlXCI+PC9kaXY+XG5cblx0PGRpdiBndWktZmlsdGVyLWljb24+PC9kaXY+XG48L2Rpdj5cbiJdfQ==