import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { useReactiveContext } from '../../../../../../feature/common/src/cdk/component/lib';
import { StructureSelectCustomService } from './structure.select-custom.service';
import * as i0 from "@angular/core";
import * as i1 from "./structure.select-custom.service";
import * as i2 from "../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../../core/structure/formation/src/api/formation.publisher";
import * as i4 from "../../../../../../core/structure/formation/src/api/formation.warehouse";
import * as i5 from "../../../../../../feature/common/src/icons/menu/structure.column-menu-icon.component";
export class SelectCustomComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureSelectCustomService, structureId, formationCommandDispatcher, formationWarehouse) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureSelectCustomService = structureSelectCustomService;
        this.structureId = structureId;
        this.formationCommandDispatcher = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.options = ['a', 'b'];
        this.context = useReactiveContext();
    }
    ngOnInit() {
    }
    openConfigDialog() {
        this.structureSelectCustomService.open(this.headerDialogContainer);
    }
    getSelectorName() {
        return 'gui-select-custom';
    }
}
SelectCustomComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectCustomComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureSelectCustomService }, { token: i2.StructureId }, { token: i3.FormationPublisher }, { token: i4.FormationWarehouse }], target: i0.ɵɵFactoryTarget.Component });
SelectCustomComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: SelectCustomComponent, selector: "gui-select-custom", providers: [
        StructureSelectCustomService
    ], usesInheritance: true, ngImport: i0, template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n", dependencies: [{ kind: "component", type: i5.StructureColumnMenuIconComponent, selector: "div[gui-structure-menu-icon]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: SelectCustomComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-select-custom', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        StructureSelectCustomService
                    ], template: "<div #selectCustomContainer\n\t (click)=\"openConfigDialog()\"\n>\n\t<div gui-structure-menu-icon></div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureSelectCustomService }, { type: i2.StructureId }, { type: i3.FormationPublisher }, { type: i4.FormationWarehouse }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9jb2x1bW4vc2VsZWN0LWN1c3RvbS9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL2NvbHVtbi9zZWxlY3QtY3VzdG9tL3NlbGVjdC1jdXN0b20uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWlDLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXhJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0RUFBNEUsQ0FBQztBQUU1RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7OztBQVdqRixNQUFNLE9BQU8scUJBQXNCLFNBQVEsY0FBYztJQVN4RCxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCw0QkFBMEQsRUFDMUQsV0FBd0IsRUFDeEIsMEJBQThDLEVBQzlDLGtCQUFzQztRQUN6RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFOVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFvQjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBVDFELFlBQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUVyQixZQUFPLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztJQVMvQixDQUFDO0lBRUQsUUFBUTtJQUVSLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUM7SUFDNUIsQ0FBQzs7a0hBNUJXLHFCQUFxQjtzR0FBckIscUJBQXFCLDRDQUp0QjtRQUNWLDRCQUE0QjtLQUM1QixpRENqQkYsb0hBS0E7MkZEY2EscUJBQXFCO2tCQVRqQyxTQUFTOytCQUNDLG1CQUFtQixtQkFFWix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJLGFBQzFCO3dCQUNWLDRCQUE0QjtxQkFDNUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IHVzZVJlYWN0aXZlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbWVudS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlbGVjdEN1c3RvbVNlcnZpY2UgfSBmcm9tICcuL3N0cnVjdHVyZS5zZWxlY3QtY3VzdG9tLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktc2VsZWN0LWN1c3RvbScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zZWxlY3QtY3VzdG9tLmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdHByb3ZpZGVyczogW1xuXHRcdFN0cnVjdHVyZVNlbGVjdEN1c3RvbVNlcnZpY2Vcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21Db21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0Ly8gQFZpZXdDaGlsZCgnc2VsZWN0Q3VzdG9tQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSlcblx0aGVhZGVyRGlhbG9nQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuXG5cdG9wdGlvbnMgPSBbJ2EnLCAnYiddO1xuXG5cdGNvbnRleHQgPSB1c2VSZWFjdGl2ZUNvbnRleHQoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlOiBTdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0fVxuXG5cdG9wZW5Db25maWdEaWFsb2coKTogdm9pZCB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWxlY3RDdXN0b21TZXJ2aWNlLm9wZW4odGhpcy5oZWFkZXJEaWFsb2dDb250YWluZXIpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXNlbGVjdC1jdXN0b20nO1xuXHR9XG5cbn1cbiIsIjxkaXYgI3NlbGVjdEN1c3RvbUNvbnRhaW5lclxuXHQgKGNsaWNrKT1cIm9wZW5Db25maWdEaWFsb2coKVwiXG4+XG5cdDxkaXYgZ3VpLXN0cnVjdHVyZS1tZW51LWljb24+PC9kaXY+XG48L2Rpdj5cbiJdfQ==