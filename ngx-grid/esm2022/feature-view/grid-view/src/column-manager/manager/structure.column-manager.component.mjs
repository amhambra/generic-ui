import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { hermesMap } from '@generic-ui/hermes';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../core/composition/src/api/global/composition.id";
import * as i2 from "../../../../../core/composition/src/api/composition.publisher";
import * as i3 from "../../../../../feature/composition/src/column/composition.template-warehouse";
import * as i4 from "@angular/common";
import * as i5 from "@generic-ui/fabric";
import * as i6 from "../../../../../feature/gui-angular/template/let/gui.let.directive";
export class StructureColumnManagerComponent extends SmartComponent {
    compositionId;
    compositionCommandInvoker;
    compositionTemplateWarehouse;
    state = inject((GuiState));
    state$ = this.state.select();
    constructor(changeDetectorRef, elementRef, compositionId, compositionCommandInvoker, compositionTemplateWarehouse) {
        super(changeDetectorRef, elementRef);
        this.compositionId = compositionId;
        this.compositionCommandInvoker = compositionCommandInvoker;
        this.compositionTemplateWarehouse = compositionTemplateWarehouse;
        this.addClassToHost('gui-block');
        this.state.connect('columns', this.selectColumns());
        this.state.connect('enabledColumnsCount', this.selectEnabledColumnsCount());
    }
    toggleColumn(column) {
        event.stopPropagation();
        if (column.isEnabled()) {
            this.compositionCommandInvoker.disableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
        else {
            this.compositionCommandInvoker.enableColumn(column.getColumnDefinitionId(), this.compositionId);
        }
    }
    getSelectorName() {
        return 'gui-structure-column-manager';
    }
    selectColumns() {
        return this.compositionTemplateWarehouse.onAll(this.compositionId);
    }
    selectEnabledColumnsCount() {
        return this.compositionTemplateWarehouse
            .onAll(this.compositionId)
            .pipe(hermesMap((columns) => {
            return columns.map((c) => +c.isEnabled())
                .reduce((accumulator, currentValue) => accumulator + currentValue);
        }));
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnManagerComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.CompositionId }, { token: i2.CompositionPublisher }, { token: i3.CompositionTemplateWarehouse }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureColumnManagerComponent, selector: "div[gui-structure-column-manager]", providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ol *guiLet=\"state$; let localState\"\n\tclass=\"gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\t<li (click)=\"toggleColumn(column)\"\n\t\t*ngFor=\"let column of localState.columns\"\n\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t  [disabled]=\"localState.enabledColumnsCount === 1 && column.isEnabled()\">\n\n\t\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t</ng-container>\n\n\t\t</gui-checkbox>\n\n\t</li>\n</ol>\n", dependencies: [{ kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i4.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i5.FabricCheckboxComponent, selector: "gui-checkbox", inputs: ["name", "checked", "disabled", "readonly", "indeterminate"], outputs: ["changed"] }, { kind: "directive", type: i6.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnManagerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-manager]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ol *guiLet=\"state$; let localState\"\n\tclass=\"gui-structure-ordered-list gui-p-0 gui-my-4 gui-list-none gui-overflow-auto\">\n\t<li (click)=\"toggleColumn(column)\"\n\t\t*ngFor=\"let column of localState.columns\"\n\t\tclass=\"gui-px-13 gui-py-6 gui-cursor-pointer\">\n\n\t\t<gui-checkbox [checked]=\"column.isEnabled()\"\n\t\t\t\t\t  [disabled]=\"localState.enabledColumnsCount === 1 && column.isEnabled()\">\n\n\t\t\t<ng-container\n\t\t\t\t*ngTemplateOutlet=\"column.viewTemplate;\n\t\t\t\t\t\t\t\t\t\t\tcontext: column.context\">\n\t\t\t</ng-container>\n\n\t\t</gui-checkbox>\n\n\t</li>\n</ol>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.CompositionId }, { type: i2.CompositionPublisher }, { type: i3.CompositionTemplateWarehouse }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1tYW5hZ2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29sdW1uLW1hbmFnZXIvbWFuYWdlci9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb2x1bW4tbWFuYWdlci9tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxNQUFNLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0gsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBTTdGLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFDakUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7Ozs7OztBQWtCOUUsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGNBQWM7SUFROUM7SUFDQTtJQUNBO0lBUkgsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFBLFFBQThDLENBQUEsQ0FBQyxDQUFDO0lBRXZFLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRXRDLFlBQVksaUJBQW9DLEVBQzdDLFVBQXNCLEVBQ0wsYUFBNEIsRUFDNUIseUJBQStDLEVBQy9DLDRCQUEwRDtRQUM3RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFIbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUFzQjtRQUMvQyxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO1FBRzdFLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUErQjtRQUMzQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDakc7YUFBTTtZQUNOLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDO0lBRU8sYUFBYTtRQUNwQixPQUFPLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyx5QkFBeUI7UUFDaEMsT0FBTyxJQUFJLENBQUMsNEJBQTRCO2FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ3pCLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxPQUF3QyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDdEMsTUFBTSxDQUFDLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO3VHQTdDVywrQkFBK0I7MkZBQS9CLCtCQUErQiw0REFKaEM7WUFDVixRQUFRO1NBQ1IsaURDekJGLDRsQkFrQkE7OzJGRFNhLCtCQUErQjtrQkFUM0MsU0FBUzsrQkFDQyxtQ0FBbUMsbUJBRTVCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUksYUFDMUI7d0JBQ1YsUUFBUTtxQkFDUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBpbmplY3QsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9jb21wb3NpdGlvbi5wdWJsaXNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi9jb21wb3NpdGlvbi50ZW1wbGF0ZS13YXJlaG91c2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2NvbXBvc2l0aW9uLnRlbXBsYXRlLm1vZGVsJztcbmltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBHdWlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvc3RhdGUvZ3VpLnN0YXRlJztcblxuZXhwb3J0IGludGVyZmFjZSBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50U3RhdGUge1xuXG5cdGNvbHVtbnM6IFJlYWRvbmx5QXJyYXk8Q29tcG9zaXRpb25UZW1wbGF0ZU1vZGVsPjtcblxuXHRlbmFibGVkQ29sdW1uc0NvdW50OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbHVtbi1tYW5hZ2VyXScsXG5cdHRlbXBsYXRlVXJsOiBgLi9zdHJ1Y3R1cmUuY29sdW1uLW1hbmFnZXIuY29tcG9uZW50Lmh0bWxgLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb2x1bW5NYW5hZ2VyQ29tcG9uZW50IGV4dGVuZHMgU21hcnRDb21wb25lbnQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RhdGUgPSBpbmplY3QoR3VpU3RhdGU8U3RydWN0dXJlQ29sdW1uTWFuYWdlckNvbXBvbmVudFN0YXRlPik7XG5cblx0cmVhZG9ubHkgc3RhdGUkID0gdGhpcy5zdGF0ZS5zZWxlY3QoKTtcblxuXHRjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyOiBDb21wb3NpdGlvblB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlOiBDb21wb3NpdGlvblRlbXBsYXRlV2FyZWhvdXNlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5hZGRDbGFzc1RvSG9zdCgnZ3VpLWJsb2NrJyk7XG5cblx0XHR0aGlzLnN0YXRlLmNvbm5lY3QoJ2NvbHVtbnMnLCB0aGlzLnNlbGVjdENvbHVtbnMoKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdlbmFibGVkQ29sdW1uc0NvdW50JywgdGhpcy5zZWxlY3RFbmFibGVkQ29sdW1uc0NvdW50KCkpO1xuXHR9XG5cblx0dG9nZ2xlQ29sdW1uKGNvbHVtbjogQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQpOiB2b2lkIHtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAoY29sdW1uLmlzRW5hYmxlZCgpKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIuZGlzYWJsZUNvbHVtbihjb2x1bW4uZ2V0Q29sdW1uRGVmaW5pdGlvbklkKCksIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kSW52b2tlci5lbmFibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLW1hbmFnZXInO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RDb2x1bW5zKCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDb21wb3NpdGlvblRlbXBsYXRlTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZS5vbkFsbCh0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWxlY3RFbmFibGVkQ29sdW1uc0NvdW50KCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDb21wb3NpdGlvblRlbXBsYXRlTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25UZW1wbGF0ZVdhcmVob3VzZVxuXHRcdFx0XHQgICAub25BbGwodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGNvbHVtbnM6IEFycmF5PENvbXBvc2l0aW9uVGVtcGxhdGVNb2RlbD4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBjb2x1bW5zLm1hcCgoYykgPT4gK2MuaXNFbmFibGVkKCkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAucmVkdWNlKChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZSk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIiwiPG9sICpndWlMZXQ9XCJzdGF0ZSQ7IGxldCBsb2NhbFN0YXRlXCJcblx0Y2xhc3M9XCJndWktc3RydWN0dXJlLW9yZGVyZWQtbGlzdCBndWktcC0wIGd1aS1teS00IGd1aS1saXN0LW5vbmUgZ3VpLW92ZXJmbG93LWF1dG9cIj5cblx0PGxpIChjbGljayk9XCJ0b2dnbGVDb2x1bW4oY29sdW1uKVwiXG5cdFx0Km5nRm9yPVwibGV0IGNvbHVtbiBvZiBsb2NhbFN0YXRlLmNvbHVtbnNcIlxuXHRcdGNsYXNzPVwiZ3VpLXB4LTEzIGd1aS1weS02IGd1aS1jdXJzb3ItcG9pbnRlclwiPlxuXG5cdFx0PGd1aS1jaGVja2JveCBbY2hlY2tlZF09XCJjb2x1bW4uaXNFbmFibGVkKClcIlxuXHRcdFx0XHRcdCAgW2Rpc2FibGVkXT1cImxvY2FsU3RhdGUuZW5hYmxlZENvbHVtbnNDb3VudCA9PT0gMSAmJiBjb2x1bW4uaXNFbmFibGVkKClcIj5cblxuXHRcdFx0PG5nLWNvbnRhaW5lclxuXHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNvbHVtbi52aWV3VGVtcGxhdGU7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dDogY29sdW1uLmNvbnRleHRcIj5cblx0XHRcdDwvbmctY29udGFpbmVyPlxuXG5cdFx0PC9ndWktY2hlY2tib3g+XG5cblx0PC9saT5cbjwvb2w+XG4iXX0=