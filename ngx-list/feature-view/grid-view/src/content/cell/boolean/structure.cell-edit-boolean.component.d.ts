import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { ChangedValueEmitter } from '../../../../../../feature/composition/src/column/edit/changed-value.emitter';
import { Item } from '../../../../../../core/structure/source/src/api/item/item';
import { SmartComponent } from '../../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { SourcePublisher } from '../../../../../../core/structure/source/src/api/source.publisher';
import { NgChanges } from '../../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { StructureId } from '../../../../../../core/structure/structure-core/src/api/global/structure.id';
import { CompositionAccessorModel } from '../../../../../../feature/composition/src/column/composition.accessor.model';
import * as i0 from "@angular/core";
export declare class StructureCellEditBooleanComponent extends SmartComponent implements OnChanges {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly sourceCommandService;
    cellContainerRef?: ElementRef;
    entity: Item;
    cell: CompositionAccessorModel;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, sourceCommandService: SourcePublisher);
    ngOnChanges(changes: NgChanges<StructureCellEditBooleanComponent>): void;
    ngOnInit(): void;
    protected getSelectorName(): string;
    private submitChanges;
    private initEditContext;
    private observeValueChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureCellEditBooleanComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureCellEditBooleanComponent, "div[gui-structure-cell-edit-boolean][entity][cell]", never, { "entity": "entity"; "cell": "cell"; }, {}, never, never, false>;
}
