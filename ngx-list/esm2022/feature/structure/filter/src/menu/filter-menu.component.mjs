import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { FieldWarehouse } from '../../../../../core/structure/field/src/api/field.warehouse';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FilterWarehouse } from '../../../../../core/structure/filter/src/api/filter.warehouse';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/structure/filter/src/api/filter.publisher";
import * as i2 from "@angular/common";
import * as i3 from "@generic-ui/fabric";
import * as i4 from "./filter-selector/filter-type-selector.component";
import * as i5 from "./value/filter-value.component";
import * as i6 from "./field-selector/field-selector.component";
import * as i7 from "./active-filters/filter-menu-active-filters.component";
import * as i8 from "../../../../gui-angular/template/push/gui.push.pipe";
export class FilterMenuComponent extends SmartComponent {
    filterCommandInvoker;
    structureId = inject(StructureId);
    fieldWarehouse = inject(FieldWarehouse);
    filterWarehouse = inject(FilterWarehouse);
    selectedColumn;
    selectedField;
    filterTypes;
    selectedFilterTypeId;
    selectedValue;
    fields$ = this.fieldWarehouse.onFields(this.structureId);
    activeFilters$ = this.filterWarehouse.onActiveFilters(this.structureId);
    constructor(changeDetectorRef, elementRef, filterCommandInvoker) {
        super(changeDetectorRef, elementRef);
        this.filterCommandInvoker = filterCommandInvoker;
        this.addClassToHost('gui-block');
    }
    onFieldSelect(field) {
        this.selectedField = field;
        const filterTypeMapOpt = this.filterWarehouse.findFilterTypes(this.structureId);
        filterTypeMapOpt.ifPresent(filterTypeMap => {
            this.filterTypes = filterTypeMap.getFilterTypes(this.selectedField.getFieldId());
            this.reRender();
        });
    }
    onFilterTypeSelect(filterTypeId) {
        this.selectedFilterTypeId = filterTypeId;
        this.reRender();
    }
    removeAllFilters() {
        this.filterCommandInvoker.removeAll(this.structureId);
    }
    onValueChanged(value) {
        this.selectedValue = value;
    }
    addFilter() {
        const fieldId = this.selectedField.getFieldId(), filterTypeId = this.selectedFilterTypeId, value = this.selectedValue;
        this.filterCommandInvoker.add(fieldId, filterTypeId, value, this.structureId);
        this.clearAddFilterForm();
    }
    onRemovedFilter(filterId) {
        event.preventDefault();
        this.filterCommandInvoker.remove(filterId, this.structureId);
    }
    removeFilter() {
    }
    clearAddFilterForm() {
        this.selectedColumn = null;
        this.selectedField = null;
        this.selectedFilterTypeId = null;
        this.selectedValue = null;
        this.reRender();
    }
    getSelectorName() {
        return 'gui-filter-menu';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FilterMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.FilterPublisher }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FilterMenuComponent, selector: "div[gui-filter-menu]", usesInheritance: true, ngImport: i0, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters$ | guiPush\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields$ | guiPush\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i4.FilterTypeSelectorComponent, selector: "div[gui-filter-type-selector][filterTypes]", inputs: ["filterTypes"], outputs: ["filterTypeSelected"] }, { kind: "component", type: i5.FilterValueComponent, selector: "div[gui-filter-value]", outputs: ["valueChanged"] }, { kind: "component", type: i6.FieldSelectorComponent, selector: "div[gui-field-selector][fields]", inputs: ["fields"], outputs: ["fieldSelected"] }, { kind: "component", type: i7.FilterMenuActiveFiltersComponent, selector: "div[gui-filter-menu-active-filters][activeFilters]", inputs: ["activeFilters"], outputs: ["removedFilter"] }, { kind: "pipe", type: i8.GuiPushPipe, name: "guiPush" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FilterMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-filter-menu]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!--<div>-->\n<!--\t<div gui-active-filter-list></div>-->\n<!--</div>-->\n\n<!--\t\t<div>--><!--\t\t\t<div gui-column-selector--><!--\t\t\t\t\t[columns]=\"columns\"--><!--\t\t\t\t\t(columnSelected)\n=\"onColumnSelect($event)\">--><!--\t\t\t</div>-->\n\n<!--\t\t\t<ng-container *ngIf=\"selectedColumn\">--><!--\t\t\t\t{{selectedColumn.getFieldId()}}--><!--\t\t\t</ng-container>--><!--\t\t</div>-->\n\n<!--<div>-->\n<!--\t<div (fieldSelected)=\"onFieldSelect($event)\"-->\n<!--\t\t [fields]=\"fields\" gui-field-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedColumn\">-->\n<!--\t\t{{selectedColumn.getFieldId()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n<!--\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"-->\n<!--\t\t [filterTypes]=\"filterTypes\" gui-filter-type-selector></div>-->\n\n<!--\t<ng-container *ngIf=\"selectedFilterTypeId\">-->\n<!--\t\t{{selectedFilterTypeId.toString()}}-->\n<!--\t</ng-container>-->\n<!--</div>-->\n\n<!--<div>-->\n\n<!--\t<div (valueChanged)=\"onValueChanged($event)\" *ngIf=\"selectedFilterTypeId\" gui-filter-value></div>-->\n\n<!--</div>-->\n\n<h1>Filter menu</h1>\n\n\n<div (removedFilter)=\"onRemovedFilter($event)\"\n\t [activeFilters]=\"activeFilters$ | guiPush\"\n\t gui-filter-menu-active-filters>\n</div>\n\n<div class=\"gui-flex gui-flex-row gui-pb-12\">\n\n\t<div (fieldSelected)=\"onFieldSelect($event)\"\n\t\t [fields]=\"fields$ | guiPush\"\n\t\t gui-field-selector>\n\t</div>\n\n\t<div (filterTypeSelected)=\"onFilterTypeSelect($event)\"\n\t\t [filterTypes]=\"filterTypes\"\n\t\t gui-filter-type-selector>\n\t</div>\n\n\t<div (valueChanged)=\"onValueChanged($event)\"\n\t\t *ngIf=\"selectedFilterTypeId\"\n\t\t gui-filter-value>\n\t</div>\n\n\t<button (click)=\"addFilter()\">Filter</button>\n\t<button (click)=\"removeFilter()\">Remove</button>\n\n</div>\n\n<br/>\n<br/>\n<br/>\n\n<button\n\t[primary]=\"true\" gui-button>\n\tAdd filter\n</button>\n\n<br/>\n<br/>\n<br/>\n\n<div class=\"gui-flex gui-flex-row gui-justify-between gui-pt-12\">\n\n\t<button (click)=\"removeAllFilters()\"\n\t\t\t[outline]=\"false\"\n\t\t\tgui-button>\n\t\tClear filters\n\t</button>\n\n\t<!--\t<div>-->\n\t<!--\t\t<button (click)=\"close()\"-->\n\t<!--\t\t\t\t[outline]=\"false\" gui-button>-->\n\t<!--\t\t\tCancel-->\n\t<!--\t\t</button>-->\n\t<!--\t</div>-->\n</div>\n\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.FilterPublisher }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL21lbnUvZmlsdGVyLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQXNCLGlCQUFpQixFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNySSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUV2RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0RBQStELENBQUM7Ozs7Ozs7Ozs7QUFtQmhHLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxjQUFjO0lBc0JsQztJQXBCSCxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDeEMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUzRCxjQUFjLENBQTJCO0lBRXpDLGFBQWEsQ0FBYTtJQUUxQixXQUFXLENBQXlCO0lBRXBDLG9CQUFvQixDQUFlO0lBRW5DLGFBQWEsQ0FBUztJQUViLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFekQsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUVqRixZQUFZLGlCQUFvQyxFQUM3QyxVQUFzQixFQUNMLG9CQUFxQztRQUN4RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFEbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFpQjtRQUV4RCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBaUI7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFaEYsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFFakYsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGtCQUFrQixDQUFDLFlBQTBCO1FBRTVDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxZQUFZLENBQUM7UUFFekMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELFNBQVM7UUFFUixNQUFNLE9BQU8sR0FBWSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxFQUN2RCxZQUFZLEdBQWlCLElBQUksQ0FBQyxvQkFBb0IsRUFDdEQsS0FBSyxHQUFRLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFakMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWUsQ0FBQyxRQUFrQjtRQUNqQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxZQUFZO0lBQ1osQ0FBQztJQUVELGtCQUFrQjtRQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7dUdBbkZXLG1CQUFtQjsyRkFBbkIsbUJBQW1CLG1GQ3hCaEMseXlFQTRGQTs7MkZEcEVhLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDQyxzQkFBc0IsbUJBRWYsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IEZpZWxkV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2FwaS9maWVsZC53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9hcGkvbW9kZWwvZmllbGQubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvdHlwZS9maWx0ZXItdHlwZS1jb2xsZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlclR5cGVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL3R5cGUvZmlsdGVyLXR5cGUubW9kZWwnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9maWx0ZXIucHVibGlzaGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXIubW9kZWwnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS9pZC9maWx0ZXIuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS5tb2RlbCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS13YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktZmlsdGVyLW1lbnVdJyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZpbHRlci1tZW51LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRmlsdGVyTWVudUNvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkID0gaW5qZWN0KFN0cnVjdHVyZUlkKTtcblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZFdhcmVob3VzZSA9IGluamVjdChGaWVsZFdhcmVob3VzZSk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyV2FyZWhvdXNlID0gaW5qZWN0KEZpbHRlcldhcmVob3VzZSk7XG5cblx0c2VsZWN0ZWRDb2x1bW46IENvbXBvc2l0aW9uVGVtcGxhdGVNb2RlbDtcblxuXHRzZWxlY3RlZEZpZWxkOiBGaWVsZE1vZGVsO1xuXG5cdGZpbHRlclR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+O1xuXG5cdHNlbGVjdGVkRmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0c2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuXG5cdHJlYWRvbmx5IGZpZWxkcyQgPSB0aGlzLmZpZWxkV2FyZWhvdXNlLm9uRmllbGRzKHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdHJlYWRvbmx5IGFjdGl2ZUZpbHRlcnMkID0gdGhpcy5maWx0ZXJXYXJlaG91c2Uub25BY3RpdmVGaWx0ZXJzKHRoaXMuc3RydWN0dXJlSWQpO1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kSW52b2tlcjogRmlsdGVyUHVibGlzaGVyKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXHRcdHRoaXMuYWRkQ2xhc3NUb0hvc3QoJ2d1aS1ibG9jaycpO1xuXHR9XG5cblx0b25GaWVsZFNlbGVjdChmaWVsZDogRmllbGRNb2RlbCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0ZWRGaWVsZCA9IGZpZWxkO1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZU1hcE9wdCA9IHRoaXMuZmlsdGVyV2FyZWhvdXNlLmZpbmRGaWx0ZXJUeXBlcyh0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRcdGZpbHRlclR5cGVNYXBPcHQuaWZQcmVzZW50KGZpbHRlclR5cGVNYXAgPT4ge1xuXHRcdFx0dGhpcy5maWx0ZXJUeXBlcyA9IGZpbHRlclR5cGVNYXAuZ2V0RmlsdGVyVHlwZXModGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSk7XG5cblx0XHRcdHRoaXMucmVSZW5kZXIoKTtcblx0XHR9KTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZVNlbGVjdChmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblxuXHRcdHRoaXMucmVSZW5kZXIoKTtcblx0fVxuXG5cdHJlbW92ZUFsbEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5yZW1vdmVBbGwodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblZhbHVlQ2hhbmdlZCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRhZGRGaWx0ZXIoKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gdGhpcy5zZWxlY3RlZEZpZWxkLmdldEZpZWxkSWQoKSxcblx0XHRcdGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkID0gdGhpcy5zZWxlY3RlZEZpbHRlclR5cGVJZCxcblx0XHRcdHZhbHVlOiBhbnkgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG5cblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLmFkZChmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblxuXHRcdHRoaXMuY2xlYXJBZGRGaWx0ZXJGb3JtKCk7XG5cdH1cblxuXHRvblJlbW92ZWRGaWx0ZXIoZmlsdGVySWQ6IEZpbHRlcklkKTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLmZpbHRlckNvbW1hbmRJbnZva2VyLnJlbW92ZShmaWx0ZXJJZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRyZW1vdmVGaWx0ZXIoKTogdm9pZCB7XG5cdH1cblxuXHRjbGVhckFkZEZpbHRlckZvcm0oKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RlZENvbHVtbiA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZEZpZWxkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkRmlsdGVyVHlwZUlkID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkVmFsdWUgPSBudWxsO1xuXHRcdHRoaXMucmVSZW5kZXIoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1maWx0ZXItbWVudSc7XG5cdH1cbn1cbiIsIjwhLS08ZGl2Pi0tPlxuPCEtLVx0PGRpdiBndWktYWN0aXZlLWZpbHRlci1saXN0PjwvZGl2Pi0tPlxuPCEtLTwvZGl2Pi0tPlxuXG48IS0tXHRcdDxkaXY+LS0+PCEtLVx0XHRcdDxkaXYgZ3VpLWNvbHVtbi1zZWxlY3Rvci0tPjwhLS1cdFx0XHRcdFx0W2NvbHVtbnNdPVwiY29sdW1uc1wiLS0+PCEtLVx0XHRcdFx0XHQoY29sdW1uU2VsZWN0ZWQpXG49XCJvbkNvbHVtblNlbGVjdCgkZXZlbnQpXCI+LS0+PCEtLVx0XHRcdDwvZGl2Pi0tPlxuXG48IS0tXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkQ29sdW1uXCI+LS0+PCEtLVx0XHRcdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fS0tPjwhLS1cdFx0XHQ8L25nLWNvbnRhaW5lcj4tLT48IS0tXHRcdDwvZGl2Pi0tPlxuXG48IS0tPGRpdj4tLT5cbjwhLS1cdDxkaXYgKGZpZWxkU2VsZWN0ZWQpPVwib25GaWVsZFNlbGVjdCgkZXZlbnQpXCItLT5cbjwhLS1cdFx0IFtmaWVsZHNdPVwiZmllbGRzXCIgZ3VpLWZpZWxkLXNlbGVjdG9yPjwvZGl2Pi0tPlxuXG48IS0tXHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2VsZWN0ZWRDb2x1bW5cIj4tLT5cbjwhLS1cdFx0e3tzZWxlY3RlZENvbHVtbi5nZXRGaWVsZElkKCl9fS0tPlxuPCEtLVx0PC9uZy1jb250YWluZXI+LS0+XG48IS0tPC9kaXY+LS0+XG5cbjwhLS08ZGl2Pi0tPlxuPCEtLVx0PGRpdiAoZmlsdGVyVHlwZVNlbGVjdGVkKT1cIm9uRmlsdGVyVHlwZVNlbGVjdCgkZXZlbnQpXCItLT5cbjwhLS1cdFx0IFtmaWx0ZXJUeXBlc109XCJmaWx0ZXJUeXBlc1wiIGd1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcj48L2Rpdj4tLT5cblxuPCEtLVx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCI+LS0+XG48IS0tXHRcdHt7c2VsZWN0ZWRGaWx0ZXJUeXBlSWQudG9TdHJpbmcoKX19LS0+XG48IS0tXHQ8L25nLWNvbnRhaW5lcj4tLT5cbjwhLS08L2Rpdj4tLT5cblxuPCEtLTxkaXY+LS0+XG5cbjwhLS1cdDxkaXYgKHZhbHVlQ2hhbmdlZCk9XCJvblZhbHVlQ2hhbmdlZCgkZXZlbnQpXCIgKm5nSWY9XCJzZWxlY3RlZEZpbHRlclR5cGVJZFwiIGd1aS1maWx0ZXItdmFsdWU+PC9kaXY+LS0+XG5cbjwhLS08L2Rpdj4tLT5cblxuPGgxPkZpbHRlciBtZW51PC9oMT5cblxuXG48ZGl2IChyZW1vdmVkRmlsdGVyKT1cIm9uUmVtb3ZlZEZpbHRlcigkZXZlbnQpXCJcblx0IFthY3RpdmVGaWx0ZXJzXT1cImFjdGl2ZUZpbHRlcnMkIHwgZ3VpUHVzaFwiXG5cdCBndWktZmlsdGVyLW1lbnUtYWN0aXZlLWZpbHRlcnM+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImd1aS1mbGV4IGd1aS1mbGV4LXJvdyBndWktcGItMTJcIj5cblxuXHQ8ZGl2IChmaWVsZFNlbGVjdGVkKT1cIm9uRmllbGRTZWxlY3QoJGV2ZW50KVwiXG5cdFx0IFtmaWVsZHNdPVwiZmllbGRzJCB8IGd1aVB1c2hcIlxuXHRcdCBndWktZmllbGQtc2VsZWN0b3I+XG5cdDwvZGl2PlxuXG5cdDxkaXYgKGZpbHRlclR5cGVTZWxlY3RlZCk9XCJvbkZpbHRlclR5cGVTZWxlY3QoJGV2ZW50KVwiXG5cdFx0IFtmaWx0ZXJUeXBlc109XCJmaWx0ZXJUeXBlc1wiXG5cdFx0IGd1aS1maWx0ZXItdHlwZS1zZWxlY3Rvcj5cblx0PC9kaXY+XG5cblx0PGRpdiAodmFsdWVDaGFuZ2VkKT1cIm9uVmFsdWVDaGFuZ2VkKCRldmVudClcIlxuXHRcdCAqbmdJZj1cInNlbGVjdGVkRmlsdGVyVHlwZUlkXCJcblx0XHQgZ3VpLWZpbHRlci12YWx1ZT5cblx0PC9kaXY+XG5cblx0PGJ1dHRvbiAoY2xpY2spPVwiYWRkRmlsdGVyKClcIj5GaWx0ZXI8L2J1dHRvbj5cblx0PGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlRmlsdGVyKClcIj5SZW1vdmU8L2J1dHRvbj5cblxuPC9kaXY+XG5cbjxici8+XG48YnIvPlxuPGJyLz5cblxuPGJ1dHRvblxuXHRbcHJpbWFyeV09XCJ0cnVlXCIgZ3VpLWJ1dHRvbj5cblx0QWRkIGZpbHRlclxuPC9idXR0b24+XG5cbjxici8+XG48YnIvPlxuPGJyLz5cblxuPGRpdiBjbGFzcz1cImd1aS1mbGV4IGd1aS1mbGV4LXJvdyBndWktanVzdGlmeS1iZXR3ZWVuIGd1aS1wdC0xMlwiPlxuXG5cdDxidXR0b24gKGNsaWNrKT1cInJlbW92ZUFsbEZpbHRlcnMoKVwiXG5cdFx0XHRbb3V0bGluZV09XCJmYWxzZVwiXG5cdFx0XHRndWktYnV0dG9uPlxuXHRcdENsZWFyIGZpbHRlcnNcblx0PC9idXR0b24+XG5cblx0PCEtLVx0PGRpdj4tLT5cblx0PCEtLVx0XHQ8YnV0dG9uIChjbGljayk9XCJjbG9zZSgpXCItLT5cblx0PCEtLVx0XHRcdFx0W291dGxpbmVdPVwiZmFsc2VcIiBndWktYnV0dG9uPi0tPlxuXHQ8IS0tXHRcdFx0Q2FuY2VsLS0+XG5cdDwhLS1cdFx0PC9idXR0b24+LS0+XG5cdDwhLS1cdDwvZGl2Pi0tPlxuPC9kaXY+XG5cbiJdfQ==