import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { RowSelectionType } from '../../../../core/structure/formation/src/api/row-selected/row-selection';
import { RowSelectToggleType } from '../../../../core/structure/formation/src/domain/row-select-toggle-type';
import { fromRxJsObservable, toRxJsObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
import * as i1 from "../../../../core/structure/formation/src/api/formation.publisher";
import * as i2 from "../edit/structure.edit-mode.archive";
import * as i3 from "../../../../core/structure/formation/src/api/formation.warehouse";
import * as i4 from "../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i5 from "../../../../core/structure/vertical-formation/src/api/vertical-formation.warehouse";
import * as i6 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i7 from "../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i8 from "../../../../core/structure/search/src/api/search.warehouse";
import * as i9 from "../../../../core/schema/src/api/schema.warehouse";
import * as i10 from "@angular/common";
import * as i11 from "./row/structure-row.component";
export class StructureContentComponent extends SmartComponent {
    constructor(elementRef, changeDetectorRef, formationPublisher, structureEditModeArchive, formationWarehouse, structureWarehouse, verticalFormationWarehouse, structureId, // REfactor
    schemaReadModelRootId, // REfactor
    searchWarehouse, schemaWarehouse) {
        super(changeDetectorRef, elementRef);
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.formationPublisher = formationPublisher;
        this.structureEditModeArchive = structureEditModeArchive;
        this.formationWarehouse = formationWarehouse;
        this.structureWarehouse = structureWarehouse;
        this.verticalFormationWarehouse = verticalFormationWarehouse;
        this.structureId = structureId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.searchWarehouse = searchWarehouse;
        this.schemaWarehouse = schemaWarehouse;
        this.editMode = false;
        this.searchPhrase = '';
        this.highlighting = true;
        this.phrase = true;
        this.rowDetailOpened = 4;
        this.checkboxSelection = false;
        this.radioSelection = false;
        this.selectionEnabled = true;
    }
    ngOnInit() {
        this.subscribe(this.formationWarehouse.onType(this.structureId), (type) => {
            this.checkboxSelection = type === RowSelectionType.CHECKBOX;
            this.radioSelection = type === RowSelectionType.RADIO;
        });
        this.subscribe(this.formationWarehouse.onSelectionEnabled(this.structureId), (enabled) => {
            this.selectionEnabled = enabled;
        });
        this.subscribe(this.structureEditModeArchive.on(), (enabled) => {
            this.editMode = enabled;
        });
        this.subscribe(this.structureWarehouse.onEditManager(this.structureId), (manager) => {
            this.cellEditing = manager;
        });
        this.subscribe(this.schemaWarehouse.onRowClass(this.schemaReadModelRootId), (schemaRowClass) => {
            this.schemaRowClass = schemaRowClass;
        });
        this.subscribe(this.schemaWarehouse.onRowStyle(this.schemaReadModelRootId), (schemaRowStyle) => {
            this.schemaRowStyle = schemaRowStyle;
        });
        this.subscribe(this.verticalFormationWarehouse.onRowHeight(this.structureId), (rowHeight) => {
            this.rowHeight = rowHeight;
        });
        this.subscribe(fromRxJsObservable(combineLatest(toRxJsObservable(this.searchWarehouse.onPhrase(this.structureId)), toRxJsObservable(this.searchWarehouse.onHighlight(this.structureId)))), (args) => {
            const searchPhrase = args[0], highlighting = args[1];
            this.highlighting = highlighting;
            this.searchPhrase = searchPhrase;
            if (!this.highlighting) {
                this.searchPhrase = '';
            }
        });
    }
    trackByFn() {
        return 0;
    }
    translateY(index) {
        const height = index * this.rowHeight;
        return `translateY(${height}px)`;
    }
    toggleSelectedRow(entity) {
        if (!this.selectionEnabled) {
            return;
        }
        if (!this.checkboxSelection && !this.radioSelection) {
            this.formationPublisher.toggleSelectedRow(entity.getId(), RowSelectToggleType.NONE, this.structureId);
        }
    }
    getSelectorName() {
        return 'gui-structure-content';
    }
}
StructureContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1.FormationPublisher }, { token: i2.StructureEditModeArchive }, { token: i3.FormationWarehouse }, { token: i4.StructureWarehouse }, { token: i5.VerticalFormationWarehouse }, { token: i6.StructureId }, { token: i7.SchemaReadModelRootId }, { token: i8.SearchWarehouse }, { token: i9.SchemaWarehouse }], target: i0.ɵɵFactoryTarget.Component });
StructureContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureContentComponent, selector: "div[gui-structure-content]", inputs: { source: "source", columns: "columns" }, usesInheritance: true, ngImport: i0, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [radioSelection]=\"radioSelection\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n", dependencies: [{ kind: "directive", type: i10.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i10.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i10.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i11.StructureRowComponent, selector: "div[gui-structure-row]", inputs: ["entity", "columns", "editMode", "cellEditing", "searchPhrase", "index", "rowStyle", "rowClass", "detailsEnabled", "checkboxSelection", "radioSelection"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-content]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-content\">\n\n\t<div (click)=\"toggleSelectedRow(entity)\" *ngFor=\"let entity of source; let index = index; trackBy: trackByFn\"\n\t\t [cellEditing]=\"cellEditing\"\n\t\t [checkboxSelection]=\"checkboxSelection\"\n\t\t [columns]=\"columns\"\n\t\t [detailsEnabled]=\"rowDetailOpened === index\"\n\t\t [editMode]=\"editMode\"\n\t\t [entity]=\"entity\"\n\t\t [id]=\"entity.getUiId()\"\n\t\t [index]=\"entity.getPosition()\"\n\t\t [ngClass]=\"{'even': entity.isEven(), 'odd': entity.isOdd()}\"\n\t\t [ngStyle]=\"{'transform': translateY(index)}\"\n\t\t [radioSelection]=\"radioSelection\"\n\t\t [rowClass]=\"schemaRowClass\"\n\t\t [rowStyle]=\"schemaRowStyle\"\n\t\t [searchPhrase]=\"searchPhrase\"\n\t\t [style.height.px]=\"rowHeight\"\n\t\t class=\"gui-row\"\n\t\t gui-structure-row>\n\t</div>\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1.FormationPublisher }, { type: i2.StructureEditModeArchive }, { type: i3.FormationWarehouse }, { type: i4.StructureWarehouse }, { type: i5.VerticalFormationWarehouse }, { type: i6.StructureId }, { type: i7.SchemaReadModelRootId }, { type: i8.SearchWarehouse }, { type: i9.SchemaWarehouse }]; }, propDecorators: { source: [{
                type: Input
            }], columns: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNvbnRlbnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9jb250ZW50L3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBYyxLQUFLLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFRdEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDM0csT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0VBQXdFLENBQUM7QUFHN0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFjMUUsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFnQzVELFlBQTZCLFVBQXNCLEVBQy9CLGlCQUFvQyxFQUNwQyxrQkFBc0MsRUFDdEMsd0JBQWtELEVBQ2xELGtCQUFzQyxFQUN0QyxrQkFBc0MsRUFDdEMsMEJBQXNELEVBQ3RELFdBQXdCLEVBQUUsV0FBVztJQUNyQyxxQkFBNEMsRUFBRSxXQUFXO0lBQ3pELGVBQWdDLEVBQ2hDLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsQ0FB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QztJQUNoQyxDQUFDOztzSEFoSlcseUJBQXlCOzBHQUF6Qix5QkFBeUIsMklDN0J0Qyx1ekJBdUJBOzJGRE1hLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDQyw0QkFBNEIsbUJBRXJCLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLElBQUk7OGFBS3JDLE1BQU07c0JBREwsS0FBSztnQkFJTixPQUFPO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbW1vbi9zcmMvY2RrL2NvbXBvbmVudC9saWIvc3JjL3NtYXJ0LWNvbXBvbmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL2l0ZW0vaXRlbSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vc3JjL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9kb21haW4vcm93LXNlbGVjdC10b2dnbGUtdHlwZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzcyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9zdHlsaW5nL3NjaGVtYS5yb3ctc3R5bGUnO1xuaW1wb3J0IHsgZnJvbVJ4SnNPYnNlcnZhYmxlLCB0b1J4SnNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNlYXJjaFdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgQ2VsbEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NjaGVtYS9zcmMvYXBpL3NjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zY2hlbWEvc3JjL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFjY2Vzc29yTW9kZWwgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vY29tcG9zaXRpb24uYWNjZXNzb3IubW9kZWwnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWNvbnRlbnRdJyxcblx0dGVtcGxhdGVVcmw6ICcuL3N0cnVjdHVyZS1jb250ZW50LmNvbXBvbmVudC5odG1sJyxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PEl0ZW0+O1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbXBvc2l0aW9uQWNjZXNzb3JNb2RlbD47XG5cblx0ZWRpdE1vZGUgPSBmYWxzZTtcblxuXHRjZWxsRWRpdGluZzogQ2VsbEVkaXRvck1hbmFnZXI7XG5cblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0c2VhcmNoUGhyYXNlOiBzdHJpbmcgPSAnJztcblxuXHRoaWdobGlnaHRpbmcgPSB0cnVlO1xuXG5cdHBocmFzZSA9IHRydWU7XG5cblx0cm93RGV0YWlsT3BlbmVkID0gNDtcblxuXHRjaGVja2JveFNlbGVjdGlvbiA9IGZhbHNlO1xuXG5cdHJhZGlvU2VsZWN0aW9uID0gZmFsc2U7XG5cblx0c2NoZW1hUm93Q2xhc3M6IFNjaGVtYVJvd0NsYXNzO1xuXG5cdHNjaGVtYVJvd1N0eWxlOiBTY2hlbWFSb3dTdHlsZTtcblxuXHRzZWxlY3Rpb25FbmFibGVkID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvblB1Ymxpc2hlcjogRm9ybWF0aW9uUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVdhcmVob3VzZTogU3RydWN0dXJlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlOiBWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsIC8vIFJFZmFjdG9yXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoV2FyZWhvdXNlOiBTZWFyY2hXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hV2FyZWhvdXNlOiBTY2hlbWFXYXJlaG91c2UpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2Uub25UeXBlKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KHR5cGU6IFJvd1NlbGVjdGlvblR5cGUpID0+IHtcblx0XHRcdFx0dGhpcy5jaGVja2JveFNlbGVjdGlvbiA9IHR5cGUgPT09IFJvd1NlbGVjdGlvblR5cGUuQ0hFQ0tCT1g7XG5cdFx0XHRcdHRoaXMucmFkaW9TZWxlY3Rpb24gPSB0eXBlID09PSBSb3dTZWxlY3Rpb25UeXBlLlJBRElPO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLm9uU2VsZWN0aW9uRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUub24oKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuZWRpdE1vZGUgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlV2FyZWhvdXNlLm9uRWRpdE1hbmFnZXIodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQobWFuYWdlcjogQ2VsbEVkaXRvck1hbmFnZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jZWxsRWRpdGluZyA9IG1hbmFnZXI7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zY2hlbWFXYXJlaG91c2Uub25Sb3dDbGFzcyh0aGlzLnNjaGVtYVJlYWRNb2RlbFJvb3RJZCksXG5cdFx0XHQoc2NoZW1hUm93Q2xhc3M6IFNjaGVtYVJvd0NsYXNzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2NoZW1hUm93Q2xhc3MgPSBzY2hlbWFSb3dDbGFzcztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnNjaGVtYVdhcmVob3VzZS5vblJvd1N0eWxlKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkKSxcblx0XHRcdChzY2hlbWFSb3dTdHlsZTogU2NoZW1hUm93U3R5bGUpID0+IHtcblx0XHRcdFx0dGhpcy5zY2hlbWFSb3dTdHlsZSA9IHNjaGVtYVJvd1N0eWxlO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uub25Sb3dIZWlnaHQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocm93SGVpZ2h0OiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5yb3dIZWlnaHQgPSByb3dIZWlnaHQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0ZnJvbVJ4SnNPYnNlcnZhYmxlKFxuXHRcdFx0XHRjb21iaW5lTGF0ZXN0KFxuXHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zZWFyY2hXYXJlaG91c2Uub25QaHJhc2UodGhpcy5zdHJ1Y3R1cmVJZCkpLFxuXHRcdFx0XHRcdHRvUnhKc09ic2VydmFibGUodGhpcy5zZWFyY2hXYXJlaG91c2Uub25IaWdobGlnaHQodGhpcy5zdHJ1Y3R1cmVJZCkpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHQoYXJnczogQXJyYXk8YW55PikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHNlYXJjaFBocmFzZSA9IGFyZ3NbMF0sXG5cdFx0XHRcdFx0aGlnaGxpZ2h0aW5nID0gYXJnc1sxXTtcblxuXHRcdFx0XHR0aGlzLmhpZ2hsaWdodGluZyA9IGhpZ2hsaWdodGluZztcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2UgPSBzZWFyY2hQaHJhc2U7XG5cblx0XHRcdFx0aWYgKCF0aGlzLmhpZ2hsaWdodGluZykge1xuXHRcdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlID0gJyc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0dHJhY2tCeUZuKCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0dHJhbnNsYXRlWShpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGNvbnN0IGhlaWdodCA9IGluZGV4ICogdGhpcy5yb3dIZWlnaHQ7XG5cblx0XHRyZXR1cm4gYHRyYW5zbGF0ZVkoJHtoZWlnaHR9cHgpYDtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eTogSXRlbSk6IHZvaWQge1xuXG5cdFx0aWYgKCF0aGlzLnNlbGVjdGlvbkVuYWJsZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuY2hlY2tib3hTZWxlY3Rpb24gJiYgIXRoaXMucmFkaW9TZWxlY3Rpb24pIHtcblx0XHRcdHRoaXMuZm9ybWF0aW9uUHVibGlzaGVyLnRvZ2dsZVNlbGVjdGVkUm93KGVudGl0eS5nZXRJZCgpLCBSb3dTZWxlY3RUb2dnbGVUeXBlLk5PTkUsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdH1cblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29udGVudCc7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1jb250ZW50XCI+XG5cblx0PGRpdiAoY2xpY2spPVwidG9nZ2xlU2VsZWN0ZWRSb3coZW50aXR5KVwiICpuZ0Zvcj1cImxldCBlbnRpdHkgb2Ygc291cmNlOyBsZXQgaW5kZXggPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcblx0XHQgW2NlbGxFZGl0aW5nXT1cImNlbGxFZGl0aW5nXCJcblx0XHQgW2NoZWNrYm94U2VsZWN0aW9uXT1cImNoZWNrYm94U2VsZWN0aW9uXCJcblx0XHQgW2NvbHVtbnNdPVwiY29sdW1uc1wiXG5cdFx0IFtkZXRhaWxzRW5hYmxlZF09XCJyb3dEZXRhaWxPcGVuZWQgPT09IGluZGV4XCJcblx0XHQgW2VkaXRNb2RlXT1cImVkaXRNb2RlXCJcblx0XHQgW2VudGl0eV09XCJlbnRpdHlcIlxuXHRcdCBbaWRdPVwiZW50aXR5LmdldFVpSWQoKVwiXG5cdFx0IFtpbmRleF09XCJlbnRpdHkuZ2V0UG9zaXRpb24oKVwiXG5cdFx0IFtuZ0NsYXNzXT1cInsnZXZlbic6IGVudGl0eS5pc0V2ZW4oKSwgJ29kZCc6IGVudGl0eS5pc09kZCgpfVwiXG5cdFx0IFtuZ1N0eWxlXT1cInsndHJhbnNmb3JtJzogdHJhbnNsYXRlWShpbmRleCl9XCJcblx0XHQgW3JhZGlvU2VsZWN0aW9uXT1cInJhZGlvU2VsZWN0aW9uXCJcblx0XHQgW3Jvd0NsYXNzXT1cInNjaGVtYVJvd0NsYXNzXCJcblx0XHQgW3Jvd1N0eWxlXT1cInNjaGVtYVJvd1N0eWxlXCJcblx0XHQgW3NlYXJjaFBocmFzZV09XCJzZWFyY2hQaHJhc2VcIlxuXHRcdCBbc3R5bGUuaGVpZ2h0LnB4XT1cInJvd0hlaWdodFwiXG5cdFx0IGNsYXNzPVwiZ3VpLXJvd1wiXG5cdFx0IGd1aS1zdHJ1Y3R1cmUtcm93PlxuXHQ8L2Rpdj5cblxuPC9kaXY+XG4iXX0=