import { AfterViewInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourcePublisher } from '../../../../../core/structure/source/src/api/source.publisher';
import { ChangedValueEmitter } from '../../../../../feature/composition/src/column/edit/changed-value.emitter';
import { Item } from '../../../../../core/structure/source/src/api/item/item';
import { StructureCellEditCloseAllService } from '../../edit/structure.cell-edit-close-all.service';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { CompositionWarehouse } from '../../../../../core/composition/src/api/composition.warehouse';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { CellEditorManager } from '../../../../../core/structure/structure-core/src/domain/edit/cell-editor.manager';
import { CompositionAccessorModel } from '../../../../../feature/composition/src/column/composition.accessor.model';
import * as i0 from "@angular/core";
export declare class StructureCellComponent extends SmartComponent implements AfterViewInit {
    private readonly changeDetectorRef;
    private readonly elementRef;
    private readonly structureId;
    private readonly compositionId;
    private readonly structureCellEditStore;
    private readonly cellEditCloseAllService;
    private readonly sourceCommandService;
    private readonly compositionWarehouse;
    entity: Item;
    cell: CompositionAccessorModel;
    editMode: boolean;
    cellEditorManager: CellEditorManager;
    searchPhrase: string;
    rowIndex: number;
    columnIndex: number;
    inEditMode: boolean;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    isHighlighted: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, compositionId: CompositionId, structureCellEditStore: StructureCellEditStore, cellEditCloseAllService: StructureCellEditCloseAllService, sourceCommandService: SourcePublisher, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isCellEditingEnabled(): boolean;
    enterEditMode(forceCheck?: boolean): void;
    exitEditMode(): void;
    submitChangesAndExit(): void;
    protected getSelectorName(): string;
    private observeFieldStatus;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureCellComponent, "div[gui-structure-cell][entity][cell]", never, { "entity": "entity"; "cell": "cell"; "editMode": "editMode"; "cellEditorManager": "cellEditorManager"; "searchPhrase": "searchPhrase"; "rowIndex": "rowIndex"; "columnIndex": "columnIndex"; }, {}, never, never, false>;
}
