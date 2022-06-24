import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../core/composition/domain-read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../core/composition/domain-read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../../core/structure/source/domain/core/item/item.entity';
import { SmartComponent } from '../../../../../feature/common/cdk/component/smart-component';
import { SourcePublisher } from '../../../../../core/structure/source/api/source.publisher';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import { StructureId } from '../../../../../core/structure/core/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class StructureCellEditBooleanComponent extends SmartComponent implements OnChanges {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly sourceCommandService;
    cellContainerRef?: ElementRef;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureCellEditBooleanComponent, "div[gui-structure-cell-edit-boolean][entity][cell]", never, { "entity": "entity"; "cell": "cell"; }, {}, never, never>;
}
