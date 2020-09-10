import { ChangeDetectorRef, OnInit, SimpleChanges, OnChanges, ElementRef, Renderer2 } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { ItemEntity } from '../../../../source/domain/core/item/item.entity';
import { FormationCommandInvoker } from '../../../../source/domain-api/formation/formation.command-invoker';
import { StructureId } from '../../../domain/structure.id';
import { FormationWarehouse } from '../../../../source/domain-api/formation/formation.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureRowComponent extends SmartComponent implements OnChanges, OnInit {
    private readonly changeDetectorRef;
    private readonly elRef;
    private readonly renderer2;
    private readonly structureId;
    private readonly formationWarehouse;
    private readonly formationCommandDispatcher;
    entity: ItemEntity;
    columns: Array<CellTemplateWithAccessor>;
    editMode: boolean;
    cellEditing: boolean;
    searchPhrase: string;
    index: number;
    detailsEnabled: boolean;
    checkboxSelection: boolean;
    selectedItem: boolean;
    private row;
    constructor(changeDetectorRef: ChangeDetectorRef, elRef: ElementRef, renderer2: Renderer2, structureId: StructureId, formationWarehouse: FormationWarehouse, formationCommandDispatcher: FormationCommandInvoker);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    trackByFn(): number;
    selectRow(): void;
    checkSelectedItem(): void;
}
