import { ChangeDetectionStrategy, Component, inject, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../core/composition/src/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../../../feature/common/component/src/smart-component';
import { StructureArrowPosition } from '../../../../../../../feature/common/icons/arrow/strucutre.arrow-position';
import { GuiState } from '../../../../../../../feature/gui-angular/state/gui.state';
import { hermesSwitchMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../core/composition/src/api/global/composition.id";
import * as i2 from "../../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../../../../core/structure/sorting/src/api/sorting.publisher";
import * as i4 from "../../../../../../../core/composition/src/api/composition.warehouse";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i7 from "../../../../../../../feature/common/icons/arrow/structure.arrow-icon.component";
import * as i8 from "../../../../../../../feature/l10n/src/translation.pipe";
export class StructureColumnConfigSortComponent extends SmartComponent {
    changeDetectorRef;
    compositionId;
    structureId;
    sortingCommandDispatcher;
    compositionReadModelService;
    set column(column) {
        this.state.setValue({
            fieldId: column.getFieldId()
        });
    }
    dropdownTextTranslation;
    state = inject((GuiState));
    placement = Placement.Right;
    status = SortOrder;
    StructureArrowPosition = StructureArrowPosition;
    sortOrder$ = this.state.select('sortOrder');
    constructor(changeDetectorRef, elementRef, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.state.connect('sortOrder', this.selectSortOrder());
    }
    isAscSort() {
        return this.state.getValue('sortOrder') === SortOrder.ASC;
    }
    isDescSort() {
        return this.state.getValue('sortOrder') === SortOrder.DESC;
    }
    isNoneSort() {
        return this.state.getValue('sortOrder') === SortOrder.NONE;
    }
    setSortOrder(sort) {
        event.preventDefault();
        event.stopPropagation();
        const fieldId = this.state.getValue('fieldId');
        this.sortingCommandDispatcher.setSortOrder(fieldId, sort, this.compositionId, this.structureId);
    }
    getSelectorName() {
        return 'gui-structure-column-config-sort';
    }
    selectSortOrder() {
        return this.state
            .select('fieldId')
            .pipe(hermesSwitchMap((fieldId) => {
            return this.compositionReadModelService
                .onSortOrder(fieldId, this.compositionId);
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigSortComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.CompositionId }, { token: i2.StructureId }, { token: i3.SortingPublisher }, { token: i4.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureColumnConfigSortComponent, selector: "div[gui-structure-column-config-sort][column][dropdownTextTranslation]", inputs: { column: "column", dropdownTextTranslation: "dropdownTextTranslation" }, providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<gui-dropdown *guiLet=\"sortOrder$; let sortOrder\"\n\t\t\t  [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n", dependencies: [{ kind: "component", type: i5.FabricDropdownComponent, selector: "gui-dropdown", inputs: ["disabled", "dropdownText", "isArrowEnabled", "placement", "width", "showOnHover"] }, { kind: "component", type: i5.FabricDropdownItemComponent, selector: "gui-dropdown-item" }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i7.StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "pipe", type: i8.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigSortComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-sort][column][dropdownTextTranslation]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<gui-dropdown *guiLet=\"sortOrder$; let sortOrder\"\n\t\t\t  [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.CompositionId }, { type: i2.StructureId }, { type: i3.SortingPublisher }, { type: i4.CompositionWarehouse }], propDecorators: { column: [{
                type: Input
            }], dropdownTextTranslation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9tZW51L21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsTUFBTSxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1SSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBR3BHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUluRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwRUFBMEUsQ0FBQztBQUVsSCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDcEYsT0FBTyxFQUF5QyxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7OztBQW1CNUYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGNBQWM7SUFzQnhDO0lBR1Q7SUFDQTtJQUNBO0lBQ0E7SUExQnBCLElBQ0ksTUFBTSxDQUFDLE1BQStCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFO1NBQzVCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFHRCx1QkFBdUIsQ0FBVTtJQUVoQixLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUEsUUFBaUQsQ0FBQSxDQUFDLENBQUM7SUFFMUUsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFNUIsTUFBTSxHQUFHLFNBQVMsQ0FBQztJQUVuQixzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQUVoRCxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFckQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBRUwsYUFBNEIsRUFDNUIsV0FBd0IsRUFDeEIsd0JBQTBDLEVBQzFDLDJCQUFpRDtRQUNwRSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFQVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRzdDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBa0I7UUFDMUMsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUFzQjtRQUdwRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFNBQVM7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxHQUFHLENBQUM7SUFDM0QsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDNUQsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFlO1FBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLHdCQUF3QixDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pHLENBQUM7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sa0NBQWtDLENBQUM7SUFDM0MsQ0FBQztJQUVPLGVBQWU7UUFDdEIsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNYLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakIsSUFBSSxDQUNKLGVBQWUsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQywyQkFBMkI7aUJBQ3BDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO3VHQWxFVyxrQ0FBa0M7MkZBQWxDLGtDQUFrQyxtTEFKbkM7WUFDVixRQUFRO1NBQ1IsaURDL0JGLG9wQ0ErQkE7OzJGREVhLGtDQUFrQztrQkFUOUMsU0FBUzsrQkFDQyx3RUFBd0UsbUJBRWpFLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsUUFBUTtxQkFDUjt1T0FLRyxNQUFNO3NCQURULEtBQUs7Z0JBUU4sdUJBQXVCO3NCQUR0QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIGluamVjdCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3V0cmUuYXJyb3ctcG9zaXRpb24nO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgR3VpU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIGhlcm1lc09mLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnRTdGF0ZSB7XG5cblx0ZmllbGRJZDogRmllbGRJZDtcblxuXHRzb3J0T3JkZXI6IFNvcnRPcmRlcjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnRdW2NvbHVtbl1bZHJvcGRvd25UZXh0VHJhbnNsYXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNldCBjb2x1bW4oY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHRoaXMuc3RhdGUuc2V0VmFsdWUoe1xuXHRcdFx0ZmllbGRJZDogY29sdW1uLmdldEZpZWxkSWQoKVxuXHRcdH0pO1xuXHR9XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb24hOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZSA9IGluamVjdChHdWlTdGF0ZTxTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50U3RhdGU+KTtcblxuXHRyZWFkb25seSBwbGFjZW1lbnQgPSBQbGFjZW1lbnQuUmlnaHQ7XG5cblx0cmVhZG9ubHkgc3RhdHVzID0gU29ydE9yZGVyO1xuXG5cdHJlYWRvbmx5IFN0cnVjdHVyZUFycm93UG9zaXRpb24gPSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uO1xuXG5cdHJlYWRvbmx5IHNvcnRPcmRlciQgPSB0aGlzLnN0YXRlLnNlbGVjdCgnc29ydE9yZGVyJyk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0aW5nQ29tbWFuZERpc3BhdGNoZXI6IFNvcnRpbmdQdWJsaXNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlOiBDb21wb3NpdGlvbldhcmVob3VzZSkge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmLCBlbGVtZW50UmVmKTtcblxuXHRcdHRoaXMuc3RhdGUuY29ubmVjdCgnc29ydE9yZGVyJywgdGhpcy5zZWxlY3RTb3J0T3JkZXIoKSk7XG5cdH1cblxuXHRpc0FzY1NvcnQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ3NvcnRPcmRlcicpID09PSBTb3J0T3JkZXIuQVNDO1xuXHR9XG5cblx0aXNEZXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnc29ydE9yZGVyJykgPT09IFNvcnRPcmRlci5ERVNDO1xuXHR9XG5cblx0aXNOb25lU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnc29ydE9yZGVyJykgPT09IFNvcnRPcmRlci5OT05FO1xuXHR9XG5cblx0c2V0U29ydE9yZGVyKHNvcnQ6IFNvcnRPcmRlcik6IHZvaWQge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0Y29uc3QgZmllbGRJZCA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoJ2ZpZWxkSWQnKTtcblx0XHR0aGlzLnNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlci5zZXRTb3J0T3JkZXIoZmllbGRJZCwgc29ydCwgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1zb3J0Jztcblx0fVxuXG5cdHByaXZhdGUgc2VsZWN0U29ydE9yZGVyKCk6IEhlcm1lc09ic2VydmFibGU8U29ydE9yZGVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGVcblx0XHRcdFx0ICAgLnNlbGVjdCgnZmllbGRJZCcpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc1N3aXRjaE1hcCgoZmllbGRJZDogRmllbGRJZCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIHRoaXMuY29tcG9zaXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblNvcnRPcmRlcihmaWVsZElkLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cbn1cbiIsIjxndWktZHJvcGRvd24gKmd1aUxldD1cInNvcnRPcmRlciQ7IGxldCBzb3J0T3JkZXJcIlxuXHRcdFx0ICBbZHJvcGRvd25UZXh0XT1cImRyb3Bkb3duVGV4dFRyYW5zbGF0aW9uXCJcblx0XHRcdCAgW3BsYWNlbWVudF09XCJwbGFjZW1lbnRcIlxuXHRcdFx0ICBbc2hvd09uSG92ZXJdPVwidHJ1ZVwiXG5cdFx0XHQgIFt3aWR0aF09XCIyMjVcIlxuXHRcdFx0ICBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1kcm9wZG93blwiPlxuXG5cdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5BU0MpXCJcblx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc0FzY1NvcnQoKVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPlxuXHRcdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0QXNjZW5kaW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8ZGl2IFtzb3J0XT1cInRydWVcIiBndWktc3RydWN0dXJlLWFycm93LWljb24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9ndWktZHJvcGRvd24taXRlbT5cblxuXHQ8Z3VpLWRyb3Bkb3duLWl0ZW0gKGNsaWNrKT1cInNldFNvcnRPcmRlcihzdGF0dXMuREVTQylcIlxuXHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzRGVzY1NvcnQoKVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJndWktc29ydC10aXRsZVwiPlxuXHRcdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0RGVzY2VuZGluZycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PGRpdiBbcG9zaXRpb25dPVwiU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5ET1dOXCIgW3NvcnRdPVwidHJ1ZVwiIGd1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5OT05FKVwiXG5cdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNOb25lU29ydCgpXCI+XG5cdFx0e3snaGVhZGVyTWVudU1haW5UYWJDb2x1bW5Tb3J0Tm9uZScgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG48L2d1aS1kcm9wZG93bj5cbiJdfQ==