import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../core/composition/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../../feature/common/cdk/component/smart-component';
import { StructureArrowPosition } from '../../../../../../feature/common/icons/arrow/strucutre.arrow-position';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../core/composition/api/global/composition.id";
import * as i2 from "../../../../../../core/structure/core/api/global/structure.id";
import * as i3 from "../../../../../../core/structure/sorting/api/sorting.publisher";
import * as i4 from "../../../../../../core/composition/api/composition.warehouse";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../../../../feature/common/icons/arrow/structure.arrow-icon.component";
import * as i7 from "../../../../../../feature/l10n/translation.pipe";
export class StructureColumnConfigSortComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
        this.StructureArrowPosition = StructureArrowPosition;
    }
    ngOnInit() {
        this.sortStatus = this.column.getSortStatus();
        this.subscribe(this.compositionReadModelService.onSortOrder(this.column.getFieldId(), this.compositionId), (sortStatus) => {
            this.sortStatus = sortStatus;
        });
    }
    isAscSort() {
        return this.sortStatus === SortOrder.ASC;
    }
    isDescSort() {
        return this.sortStatus === SortOrder.DESC;
    }
    isNoneSort() {
        return this.sortStatus === SortOrder.NONE;
    }
    setSortOrder(sort) {
        event.stopPropagation();
        this.sortingCommandDispatcher.setSortOrder(this.column.getFieldId(), sort, this.compositionId, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-column-config-sort';
    }
}
StructureColumnConfigSortComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigSortComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.CompositionId }, { token: i2.StructureId }, { token: i3.SortingPublisher }, { token: i4.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigSortComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.11", type: StructureColumnConfigSortComponent, selector: "div[gui-structure-column-config-sort]", inputs: { column: "column", dropdownTextTranslation: "dropdownTextTranslation" }, usesInheritance: true, ngImport: i0, template: "<gui-dropdown [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n", components: [{ type: i5.FabricDropdownComponent, selector: "gui-dropdown", inputs: ["disabled", "dropdownText", "isArrowEnabled", "placement", "width", "showOnHover"] }, { type: i5.DropdownItemComponent, selector: "gui-dropdown-item" }, { type: i6.StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }], pipes: { "guiTranslate": i7.TranslationPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: StructureColumnConfigSortComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-sort]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<gui-dropdown [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.SortingPublisher }, { type: i4.CompositionWarehouse }]; }, propDecorators: { column: [{
                type: Input
            }], dropdownTextTranslation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L2hlYWRlci9tZW51L21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFjLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVwSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRzdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUloRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQzs7Ozs7Ozs7O0FBUy9HLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxjQUFjO0lBZ0JyRSxZQUE2QixpQkFBb0MsRUFDOUQsVUFBc0IsRUFDTCxhQUE0QixFQUM1QixXQUF3QixFQUN4Qix3QkFBMEMsRUFDMUMsMkJBQWlEO1FBQ3BFLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FBQztRQU5ULHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFFN0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUFrQjtRQUMxQyxnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQXNCO1FBYnJFLGNBQVMsR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBRXZDLFdBQU0sR0FBRyxTQUFTLENBQUM7UUFJbkIsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7SUFTaEQsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUMxRixDQUFDLFVBQXFCLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM5QixDQUFDLENBQ0QsQ0FBQztJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUMzQyxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBZTtRQUMzQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsSCxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLGtDQUFrQyxDQUFDO0lBQzNDLENBQUM7O2dJQXZEVyxrQ0FBa0M7b0hBQWxDLGtDQUFrQyxzTENwQi9DLHFtQ0E4QkE7NEZEVmEsa0NBQWtDO2tCQU45QyxTQUFTOytCQUNDLHVDQUF1QyxtQkFFaEMsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSTt5UEFLckMsTUFBTTtzQkFETCxLQUFLO2dCQUlOLHVCQUF1QjtzQkFEdEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQbGFjZW1lbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY2RrL2NvbXBvbmVudC9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgU29ydGluZ1B1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvcnRpbmcvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3V0cmUuYXJyb3ctcG9zaXRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1jb25maWctc29ydF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRASW5wdXQoKVxuXHRkcm9wZG93blRleHRUcmFuc2xhdGlvbjogc3RyaW5nO1xuXG5cdHBsYWNlbWVudDogUGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRzb3J0U3RhdHVzOiBTb3J0T3JkZXI7XG5cblx0U3RydWN0dXJlQXJyb3dQb3NpdGlvbiA9IFN0cnVjdHVyZUFycm93UG9zaXRpb247XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyOiBTb3J0aW5nUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZTogQ29tcG9zaXRpb25XYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnNvcnRTdGF0dXMgPSB0aGlzLmNvbHVtbi5nZXRTb3J0U3RhdHVzKCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlLm9uU29ydE9yZGVyKHRoaXMuY29sdW1uLmdldEZpZWxkSWQoKSwgdGhpcy5jb21wb3NpdGlvbklkKSxcblx0XHRcdChzb3J0U3RhdHVzOiBTb3J0T3JkZXIpID0+IHtcblx0XHRcdFx0dGhpcy5zb3J0U3RhdHVzID0gc29ydFN0YXR1cztcblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0aXNBc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRTdGF0dXMgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNOb25lU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0U3RhdHVzID09PSBTb3J0T3JkZXIuTk9ORTtcblx0fVxuXG5cdHNldFNvcnRPcmRlcihzb3J0OiBTb3J0T3JkZXIpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0T3JkZXIodGhpcy5jb2x1bW4uZ2V0RmllbGRJZCgpLCBzb3J0LCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQnO1xuXHR9XG59XG4iLCI8Z3VpLWRyb3Bkb3duIFtkcm9wZG93blRleHRdPVwiZHJvcGRvd25UZXh0VHJhbnNsYXRpb25cIlxuXHRcdFx0ICBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdCAgW3dpZHRoXT1cIjIyNVwiXG5cdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzQXNjU29ydCgpXCI+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+XG5cdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnRBc2NlbmRpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdDxkaXYgW3NvcnRdPVwidHJ1ZVwiIGd1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+XG5cdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnREZXNjZW5kaW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8ZGl2IFtwb3NpdGlvbl09XCJTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLkRPV05cIiBbc29ydF09XCJ0cnVlXCIgZ3VpLXN0cnVjdHVyZS1hcnJvdy1pY29uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc05vbmVTb3J0KClcIj5cblx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnROb25lJyB8IGd1aVRyYW5zbGF0ZX19XG5cdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cbjwvZ3VpLWRyb3Bkb3duPlxuIl19