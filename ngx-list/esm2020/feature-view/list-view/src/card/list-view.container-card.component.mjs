import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/component/src/smart-component';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i2 from "../../../../core/structure/source/src/api/source.warehouse";
import * as i3 from "./template/list-view.card-template.archive";
import * as i4 from "@angular/common";
import * as i5 from "../../../../feature/structure/source/src/empty/empty-source.component";
import * as i6 from "./card-item/list-view.card-item.component";
export class ListViewContainerCardComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureId, structureSourceWarehouse, listCardTemplateArchive) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureId = structureId;
        this.structureSourceWarehouse = structureSourceWarehouse;
        this.listCardTemplateArchive = listCardTemplateArchive;
        this.items = [];
        this.addClassToHost('gui-flex');
        this.addClassToHost('gui-flex-wrap');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-rounded');
    }
    ngOnInit() {
        this.subscribe(this.structureSourceWarehouse.onItems(this.structureId), (items) => {
            this.items = items.map(i => i.getSourceItem());
        });
        this.subscribe(this.listCardTemplateArchive.on(), (template) => {
            this.cardTemplate = template;
            this.changeDetectorRef.detectChanges();
        });
    }
    getSelectorName() {
        return 'gui-list-container-card';
    }
}
ListViewContainerCardComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListViewContainerCardComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureId }, { token: i2.SourceWarehouse }, { token: i3.ListViewCardTemplateArchive }], target: i0.ɵɵFactoryTarget.Component });
ListViewContainerCardComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: ListViewContainerCardComponent, selector: "div[gui-list-container-card]", usesInheritance: true, ngImport: i0, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i5.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i6.ListViewCardItemComponent, selector: "div[gui-list-card-item][item][template]", inputs: ["item", "template"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListViewContainerCardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-container-card]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div *ngFor=\"let element of items\" [item]=\"element\"\n\t [template]=\"cardTemplate\"\n\t gui-list-card-item>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureId }, { type: i2.SourceWarehouse }, { type: i3.ListViewCardTemplateArchive }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbnRhaW5lci1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2xpc3Qtdmlldy9zcmMvY2FyZC9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9jYXJkL2xpc3Qtdmlldy5jb250YWluZXItY2FyZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBc0IsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDOzs7Ozs7OztBQWExRixNQUFNLE9BQU8sOEJBQStCLFNBQVEsY0FBYztJQU1qRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxXQUF3QixFQUN4Qix3QkFBeUMsRUFDekMsdUJBQW9EO1FBQ3ZFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUxULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFpQjtRQUN6Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQTZCO1FBUnhFLFVBQUssR0FBZSxFQUFFLENBQUM7UUFXdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRCxRQUFRO1FBRVAsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDdkQsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUNELENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsRUFDakMsQ0FBQyxRQUE4QixFQUFFLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7WUFDN0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5QkFBeUIsQ0FBQztJQUNsQyxDQUFDOzs0SEF6Q1csOEJBQThCO2dIQUE5Qiw4QkFBOEIsMkZDaEIzQywrS0FPQTs0RkRTYSw4QkFBOEI7a0JBTjFDLFNBQVM7K0JBQ0MsOEJBQThCLGlCQUV6QixpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zb3VyY2Uvc3JjL2FwaS9pdGVtL2l0ZW0nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuL3RlbXBsYXRlL2xpc3Qtdmlldy5jYXJkLXRlbXBsYXRlJztcbmltcG9ydCB7IExpc3RWaWV3Q2FyZFRlbXBsYXRlQXJjaGl2ZSB9IGZyb20gJy4vdGVtcGxhdGUvbGlzdC12aWV3LmNhcmQtdGVtcGxhdGUuYXJjaGl2ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LWNvbnRhaW5lci1jYXJkXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9saXN0LXZpZXcuY29udGFpbmVyLWNhcmQuY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbnRhaW5lckNhcmRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0aXRlbXM6IEFycmF5PGFueT4gPSBbXTtcblxuXHRjYXJkVGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBsaXN0Q2FyZFRlbXBsYXRlQXJjaGl2ZTogTGlzdFZpZXdDYXJkVGVtcGxhdGVBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWZsZXgnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktZmxleC13cmFwJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLW0tMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1wLTAnKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktcm91bmRlZCcpO1xuXG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2Uub25JdGVtcyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChpdGVtczogQXJyYXk8SXRlbT4pID0+IHtcblx0XHRcdFx0dGhpcy5pdGVtcyA9IGl0ZW1zLm1hcChpID0+IGkuZ2V0U291cmNlSXRlbSgpKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLmxpc3RDYXJkVGVtcGxhdGVBcmNoaXZlLm9uKCksXG5cdFx0XHQodGVtcGxhdGU6IExpc3RWaWV3Q2FyZFRlbXBsYXRlKSA9PiB7XG5cdFx0XHRcdHRoaXMuY2FyZFRlbXBsYXRlID0gdGVtcGxhdGU7XG5cdFx0XHRcdHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXHRcdFx0fVxuXHRcdCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgZ2V0U2VsZWN0b3JOYW1lKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuICdndWktbGlzdC1jb250YWluZXItY2FyZCc7XG5cdH1cblxufVxuIiwiPGRpdiAqbmdGb3I9XCJsZXQgZWxlbWVudCBvZiBpdGVtc1wiIFtpdGVtXT1cImVsZW1lbnRcIlxuXHQgW3RlbXBsYXRlXT1cImNhcmRUZW1wbGF0ZVwiXG5cdCBndWktbGlzdC1jYXJkLWl0ZW0+XG48L2Rpdj5cblxuPGRpdiBbaXRlbXNdPVwiaXRlbXNcIiBndWktZW1wdHktc291cmNlPlxuPC9kaXY+XG4iXX0=