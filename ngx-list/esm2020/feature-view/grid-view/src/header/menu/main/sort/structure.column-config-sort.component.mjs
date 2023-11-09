import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Placement } from '@generic-ui/fabric';
import { SortOrder } from '../../../../../../../core/composition/src/domain/column/sort/sort-order';
import { SmartComponent } from '../../../../../../../feature/common/component/src/smart-component';
import { StructureArrowPosition } from '../../../../../../../feature/common/icons/arrow/strucutre.arrow-position';
import { GuiState } from '../../../../../../../feature/gui-angular/state/gui.state';
import { hermesSwitchMap } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../feature/gui-angular/state/gui.state";
import * as i2 from "../../../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i4 from "../../../../../../../core/structure/sorting/src/api/sorting.publisher";
import * as i5 from "../../../../../../../core/composition/src/api/composition.warehouse";
import * as i6 from "@generic-ui/fabric";
import * as i7 from "../../../../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i8 from "../../../../../../../feature/common/icons/arrow/structure.arrow-icon.component";
import * as i9 from "../../../../../../../feature/l10n/src/translation.pipe";
export class StructureColumnConfigSortComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, state, compositionId, structureId, sortingCommandDispatcher, compositionReadModelService) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.state = state;
        this.compositionId = compositionId;
        this.structureId = structureId;
        this.sortingCommandDispatcher = sortingCommandDispatcher;
        this.compositionReadModelService = compositionReadModelService;
        this.placement = Placement.Right;
        this.status = SortOrder;
        this.StructureArrowPosition = StructureArrowPosition;
        this.sortOrder$ = this.state
            .select('sortOrder');
        this.state.connect('sortOrder', this.selectSortOrder());
    }
    set column(column) {
        this.state.setValue({
            fieldId: column.getFieldId()
        });
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
}
StructureColumnConfigSortComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnConfigSortComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.GuiState }, { token: i2.CompositionId }, { token: i3.StructureId }, { token: i4.SortingPublisher }, { token: i5.CompositionWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureColumnConfigSortComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: StructureColumnConfigSortComponent, selector: "div[gui-structure-column-config-sort][column][dropdownTextTranslation]", inputs: { column: "column", dropdownTextTranslation: "dropdownTextTranslation" }, providers: [
        GuiState
    ], usesInheritance: true, ngImport: i0, template: "<gui-dropdown *guiLet=\"sortOrder$; let sortOrder\"\n\t\t\t  [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n", dependencies: [{ kind: "component", type: i6.FabricDropdownComponent, selector: "gui-dropdown", inputs: ["disabled", "dropdownText", "isArrowEnabled", "placement", "width", "showOnHover"] }, { kind: "component", type: i6.FabricDropdownItemComponent, selector: "gui-dropdown-item" }, { kind: "directive", type: i7.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i8.StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "pipe", type: i9.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: StructureColumnConfigSortComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-sort][column][dropdownTextTranslation]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<gui-dropdown *guiLet=\"sortOrder$; let sortOrder\"\n\t\t\t  [dropdownText]=\"dropdownTextTranslation\"\n\t\t\t  [placement]=\"placement\"\n\t\t\t  [showOnHover]=\"true\"\n\t\t\t  [width]=\"225\"\n\t\t\t  class=\"gui-header-menu-dropdown\">\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.ASC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isAscSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortAscending' | guiTranslate}}\n\t\t\t<div [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.DESC)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isDescSort()\">\n\t\t<div class=\"gui-sort-title\">\n\t\t\t{{'headerMenuMainTabColumnSortDescending' | guiTranslate}}\n\t\t\t<div [position]=\"StructureArrowPosition.DOWN\" [sort]=\"true\" gui-structure-arrow-icon>\n\t\t\t</div>\n\t\t</div>\n\t</gui-dropdown-item>\n\n\t<gui-dropdown-item (click)=\"setSortOrder(status.NONE)\"\n\t\t\t\t\t   [class.gui-header-item-active]=\"isNoneSort()\">\n\t\t{{'headerMenuMainTabColumnSortNone' | guiTranslate}}\n\t</gui-dropdown-item>\n\n</gui-dropdown>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.GuiState }, { type: i2.CompositionId }, { type: i3.StructureId }, { type: i4.SortingPublisher }, { type: i5.CompositionWarehouse }]; }, propDecorators: { column: [{
                type: Input
            }], dropdownTextTranslation: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctc29ydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2hlYWRlci9tZW51L21haW4vc29ydC9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1zb3J0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvaGVhZGVyL21lbnUvbWFpbi9zb3J0L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFHcEcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBSW5HLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBRWxILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRixPQUFPLEVBQXlDLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7OztBQW1CNUYsTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGNBQWM7SUFxQnJFLFlBQTZCLGlCQUFvQyxFQUM5RCxVQUFzQixFQUNMLEtBQXdELEVBQ3hELGFBQTRCLEVBQzVCLFdBQXdCLEVBQ3hCLHdCQUEwQyxFQUMxQywyQkFBaUQ7UUFDcEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBUFQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxVQUFLLEdBQUwsS0FBSyxDQUFtRDtRQUN4RCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQWtCO1FBQzFDLGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBc0I7UUFmNUQsY0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFFNUIsV0FBTSxHQUFHLFNBQVMsQ0FBQztRQUVuQiwyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztRQUVoRCxlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBVzVCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBN0JELElBQ0ksTUFBTSxDQUFDLE1BQStCO1FBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1lBQ25CLE9BQU8sRUFBRSxNQUFNLENBQUMsVUFBVSxFQUFFO1NBQzVCLENBQUMsQ0FBQztJQUNKLENBQUM7SUEwQkQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxDQUFDLEdBQUcsQ0FBQztJQUMzRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxDQUFDLElBQUksQ0FBQztJQUM1RCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWU7UUFDM0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxrQ0FBa0MsQ0FBQztJQUMzQyxDQUFDO0lBRU8sZUFBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQzthQUNqQixJQUFJLENBQ0osZUFBZSxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQjtpQkFDcEMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dJQWpFVyxrQ0FBa0M7b0hBQWxDLGtDQUFrQyxtTEFKbkM7UUFDVixRQUFRO0tBQ1IsaURDL0JGLG9wQ0ErQkE7NEZERWEsa0NBQWtDO2tCQVQ5QyxTQUFTOytCQUNDLHdFQUF3RSxtQkFFakUsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVixRQUFRO3FCQUNSO2dSQUtHLE1BQU07c0JBRFQsS0FBSztnQkFRTix1QkFBdUI7c0JBRHRCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGxhY2VtZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9jb21wb3NpdGlvbi9zcmMvZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9jb21wb25lbnQvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTb3J0aW5nUHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc29ydGluZy9zcmMvYXBpL3NvcnRpbmcucHVibGlzaGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFycm93UG9zaXRpb24gfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9pY29ucy9hcnJvdy9zdHJ1Y3V0cmUuYXJyb3ctcG9zaXRpb24nO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgR3VpU3RhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlL2d1aS1hbmd1bGFyL3N0YXRlL2d1aS5zdGF0ZSc7XG5pbXBvcnQgeyBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIGhlcm1lc09mLCBoZXJtZXNTd2l0Y2hNYXAgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ1NvcnRDb21wb25lbnRTdGF0ZSB7XG5cblx0ZmllbGRJZDogRmllbGRJZDtcblxuXHRzb3J0T3JkZXI6IFNvcnRPcmRlcjtcblxufVxuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdkaXZbZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnRdW2NvbHVtbl1bZHJvcGRvd25UZXh0VHJhbnNsYXRpb25dJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLXNvcnQuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdEBJbnB1dCgpXG5cdHNldCBjb2x1bW4oY29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCkge1xuXHRcdHRoaXMuc3RhdGUuc2V0VmFsdWUoe1xuXHRcdFx0ZmllbGRJZDogY29sdW1uLmdldEZpZWxkSWQoKVxuXHRcdH0pO1xuXHR9XG5cblx0QElucHV0KClcblx0ZHJvcGRvd25UZXh0VHJhbnNsYXRpb24hOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgcGxhY2VtZW50ID0gUGxhY2VtZW50LlJpZ2h0O1xuXG5cdHJlYWRvbmx5IHN0YXR1cyA9IFNvcnRPcmRlcjtcblxuXHRyZWFkb25seSBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uID0gU3RydWN0dXJlQXJyb3dQb3NpdGlvbjtcblxuXHRyZWFkb25seSBzb3J0T3JkZXIkID0gdGhpcy5zdGF0ZVxuXHRcdFx0XHRcdFx0XHQgIC5zZWxlY3QoJ3NvcnRPcmRlcicpO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0YXRlOiBHdWlTdGF0ZTxTdHJ1Y3R1cmVDb2x1bW5Db25maWdTb3J0Q29tcG9uZW50U3RhdGU+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdDb21tYW5kRGlzcGF0Y2hlcjogU29ydGluZ1B1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2U6IENvbXBvc2l0aW9uV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdzb3J0T3JkZXInLCB0aGlzLnNlbGVjdFNvcnRPcmRlcigpKTtcblx0fVxuXG5cdGlzQXNjU29ydCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnc29ydE9yZGVyJykgPT09IFNvcnRPcmRlci5BU0M7XG5cdH1cblxuXHRpc0Rlc2NTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldFZhbHVlKCdzb3J0T3JkZXInKSA9PT0gU29ydE9yZGVyLkRFU0M7XG5cdH1cblxuXHRpc05vbmVTb3J0KCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLmdldFZhbHVlKCdzb3J0T3JkZXInKSA9PT0gU29ydE9yZGVyLk5PTkU7XG5cdH1cblxuXHRzZXRTb3J0T3JkZXIoc29ydDogU29ydE9yZGVyKTogdm9pZCB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgnZmllbGRJZCcpO1xuXHRcdHRoaXMuc29ydGluZ0NvbW1hbmREaXNwYXRjaGVyLnNldFNvcnRPcmRlcihmaWVsZElkLCBzb3J0LCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1jb2x1bW4tY29uZmlnLXNvcnQnO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RTb3J0T3JkZXIoKTogSGVybWVzT2JzZXJ2YWJsZTxTb3J0T3JkZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZVxuXHRcdFx0XHQgICAuc2VsZWN0KCdmaWVsZElkJylcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzU3dpdGNoTWFwKChmaWVsZElkOiBGaWVsZElkKSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5jb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uU29ydE9yZGVyKGZpZWxkSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIiwiPGd1aS1kcm9wZG93biAqZ3VpTGV0PVwic29ydE9yZGVyJDsgbGV0IHNvcnRPcmRlclwiXG5cdFx0XHQgIFtkcm9wZG93blRleHRdPVwiZHJvcGRvd25UZXh0VHJhbnNsYXRpb25cIlxuXHRcdFx0ICBbcGxhY2VtZW50XT1cInBsYWNlbWVudFwiXG5cdFx0XHQgIFtzaG93T25Ib3Zlcl09XCJ0cnVlXCJcblx0XHRcdCAgW3dpZHRoXT1cIjIyNVwiXG5cdFx0XHQgIGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWRyb3Bkb3duXCI+XG5cblx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLkFTQylcIlxuXHRcdFx0XHRcdCAgIFtjbGFzcy5ndWktaGVhZGVyLWl0ZW0tYWN0aXZlXT1cImlzQXNjU29ydCgpXCI+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+XG5cdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnRBc2NlbmRpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdDxkaXYgW3NvcnRdPVwidHJ1ZVwiIGd1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2d1aS1kcm9wZG93bi1pdGVtPlxuXG5cdDxndWktZHJvcGRvd24taXRlbSAoY2xpY2spPVwic2V0U29ydE9yZGVyKHN0YXR1cy5ERVNDKVwiXG5cdFx0XHRcdFx0ICAgW2NsYXNzLmd1aS1oZWFkZXItaXRlbS1hY3RpdmVdPVwiaXNEZXNjU29ydCgpXCI+XG5cdFx0PGRpdiBjbGFzcz1cImd1aS1zb3J0LXRpdGxlXCI+XG5cdFx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnREZXNjZW5kaW5nJyB8IGd1aVRyYW5zbGF0ZX19XG5cdFx0XHQ8ZGl2IFtwb3NpdGlvbl09XCJTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uLkRPV05cIiBbc29ydF09XCJ0cnVlXCIgZ3VpLXN0cnVjdHVyZS1hcnJvdy1pY29uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cblx0PGd1aS1kcm9wZG93bi1pdGVtIChjbGljayk9XCJzZXRTb3J0T3JkZXIoc3RhdHVzLk5PTkUpXCJcblx0XHRcdFx0XHQgICBbY2xhc3MuZ3VpLWhlYWRlci1pdGVtLWFjdGl2ZV09XCJpc05vbmVTb3J0KClcIj5cblx0XHR7eydoZWFkZXJNZW51TWFpblRhYkNvbHVtblNvcnROb25lJyB8IGd1aVRyYW5zbGF0ZX19XG5cdDwvZ3VpLWRyb3Bkb3duLWl0ZW0+XG5cbjwvZ3VpLWRyb3Bkb3duPlxuIl19