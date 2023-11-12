import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../feature/common/component/src/pure-component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ListViewCardItemComponent extends PureComponent {
    item;
    template;
    context = 'Template not provided';
    hasTemplateRef;
    constructor(elementRef) {
        super(elementRef);
        this.addClassToHost('gui-cursor-pointer');
        this.addClassToHost('gui-block');
        this.addClassToHost('gui-m-0');
        this.addClassToHost('gui-p-0');
        this.addClassToHost('gui-relative');
    }
    ngOnChanges() {
        if (this.template && this.item) {
            this.hasTemplateRef = this.template.hasTemplateRef();
            if (!this.hasTemplateRef) {
                this.context = this.template.getTemplateMethod()(this.item);
            }
        }
    }
    getSelectorName() {
        return 'gui-list-card';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewCardItemComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: ListViewCardItemComponent, selector: "div[gui-list-card-item][item][template]", inputs: { item: "item", template: "template" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\"></div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: ListViewCardItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-list-card-item][item][template]', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"hasTemplateRef; else templateMethod\">\n\t<div class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\">\n\t\t<ng-template *ngTemplateOutlet=\"template.getTemplateRef(); context: {item: item}\"></ng-template>\n\t</div>\n</ng-container>\n\n<ng-template #templateMethod>\n\t<div [innerHTML]=\"context\"\n\t\t class=\"gui-list-card-wrapper gui-h-full gui-m-0 gui-py-0 gui-px-8 gui-relative\"></div>\n</ng-template>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { item: [{
                type: Input
            }], template: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNhcmQtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9saXN0LXZpZXcvc3JjL2NhcmQvY2FyZC1pdGVtL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvbGlzdC12aWV3L3NyYy9jYXJkL2NhcmQtaXRlbS9saXN0LXZpZXcuY2FyZC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWMsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0REFBNEQsQ0FBQzs7O0FBVTNGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxhQUFhO0lBRzNELElBQUksQ0FBTTtJQUdWLFFBQVEsQ0FBdUI7SUFFL0IsT0FBTyxHQUFXLHVCQUF1QixDQUFDO0lBRTFDLGNBQWMsQ0FBVTtJQUV4QixZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVsQixJQUFJLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVztRQUNWLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBRS9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVEO1NBRUQ7SUFDRixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDO3VHQXBDVyx5QkFBeUI7MkZBQXpCLHlCQUF5QiwyS0NadEMsOGNBVUE7OzJGREVhLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDQyx5Q0FBeUMsaUJBRXBDLGlCQUFpQixDQUFDLElBQUksbUJBQ3BCLHVCQUF1QixDQUFDLE1BQU07K0VBSy9DLElBQUk7c0JBREgsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvcHVyZS1jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdDYXJkVGVtcGxhdGUgfSBmcm9tICcuLi90ZW1wbGF0ZS9saXN0LXZpZXcuY2FyZC10ZW1wbGF0ZSc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1saXN0LWNhcmQtaXRlbV1baXRlbV1bdGVtcGxhdGVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jYXJkLWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NhcmRJdGVtQ29tcG9uZW50IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0aXRlbTogYW55O1xuXG5cdEBJbnB1dCgpXG5cdHRlbXBsYXRlOiBMaXN0Vmlld0NhcmRUZW1wbGF0ZTtcblxuXHRjb250ZXh0OiBzdHJpbmcgPSAnVGVtcGxhdGUgbm90IHByb3ZpZGVkJztcblxuXHRoYXNUZW1wbGF0ZVJlZjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cdFx0c3VwZXIoZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktY3Vyc29yLXBvaW50ZXInKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktYmxvY2snKTtcblx0XHR0aGlzLmFkZENsYXNzVG9Ib3N0KCdndWktbS0wJyk7XG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLXAtMCcpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1yZWxhdGl2ZScpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoKSB7XG5cdFx0aWYgKHRoaXMudGVtcGxhdGUgJiYgdGhpcy5pdGVtKSB7XG5cblx0XHRcdHRoaXMuaGFzVGVtcGxhdGVSZWYgPSB0aGlzLnRlbXBsYXRlLmhhc1RlbXBsYXRlUmVmKCk7XG5cblx0XHRcdGlmICghdGhpcy5oYXNUZW1wbGF0ZVJlZikge1xuXHRcdFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLnRlbXBsYXRlLmdldFRlbXBsYXRlTWV0aG9kKCkodGhpcy5pdGVtKTtcblx0XHRcdH1cblxuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1saXN0LWNhcmQnO1xuXHR9XG5cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJoYXNUZW1wbGF0ZVJlZjsgZWxzZSB0ZW1wbGF0ZU1ldGhvZFwiPlxuXHQ8ZGl2IGNsYXNzPVwiZ3VpLWxpc3QtY2FyZC13cmFwcGVyIGd1aS1oLWZ1bGwgZ3VpLW0tMCBndWktcHktMCBndWktcHgtOCBndWktcmVsYXRpdmVcIj5cblx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJ0ZW1wbGF0ZS5nZXRUZW1wbGF0ZVJlZigpOyBjb250ZXh0OiB7aXRlbTogaXRlbX1cIj48L25nLXRlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48bmctdGVtcGxhdGUgI3RlbXBsYXRlTWV0aG9kPlxuXHQ8ZGl2IFtpbm5lckhUTUxdPVwiY29udGV4dFwiXG5cdFx0IGNsYXNzPVwiZ3VpLWxpc3QtY2FyZC13cmFwcGVyIGd1aS1oLWZ1bGwgZ3VpLW0tMCBndWktcHktMCBndWktcHgtOCBndWktcmVsYXRpdmVcIj48L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=