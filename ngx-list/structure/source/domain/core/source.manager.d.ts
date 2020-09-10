import { AggregateEvent } from '@generic-ui/hermes';
import { OriginItemEntity } from '../origin/origin-item-entity';
import { StructureId } from '../../../core/domain/structure.id';
import { Field } from '../../../field/domain/core/field/field';
import { OriginId } from '../origin/origin-id';
import { FormationManager } from '../formation/core/formation-manager';
import { RowSelectToggleType } from '../formation/core/row-select-toggle-type';
export declare class SourceManager {
    private loading;
    private fetched;
    private origin;
    private entities;
    private preparedEntities;
    private slicedEntities;
    private readonly formationManager;
    constructor(formationManager: FormationManager);
    isLoading(): boolean;
    isFetched(): boolean;
    setLoading(enabled: boolean): void;
    setEntities(ent: Array<OriginItemEntity>): void;
    getEntities(): Array<OriginItemEntity>;
    setPreparedEntities(): void;
    getPreparedEntities(): Array<OriginItemEntity>;
    setSlicedEntities(ent: Array<OriginItemEntity>): void;
    getSlicedEntities(): Array<OriginItemEntity>;
    setOrigin(items: Array<any>, structureId: StructureId): AggregateEvent<StructureId>;
    setConvertedOrigin(items: Array<OriginItemEntity>, structureId: StructureId): AggregateEvent<StructureId>;
    getOrigin(): Array<OriginItemEntity>;
    getOriginSize(): number;
    editOriginItem(itemId: string, value: any, field: Field, structureId: StructureId): ReadonlyArray<AggregateEvent<StructureId>>;
    deleteAllSelected(structureId: StructureId): Array<AggregateEvent<StructureId>>;
    deleteOriginItem(payload: number | OriginId | Array<number> | Array<OriginId>, structureId: StructureId): Array<AggregateEvent<StructureId>>;
    private deleteOneOriginItem;
    private deleteOriginItemByItemId;
    private deleteOriginItemByIndex;
    private deleteManyOriginItemByIndex;
    private deleteManyOriginItemByItemID;
    addOriginItem(item: any, structureId: StructureId): ReadonlyArray<AggregateEvent<StructureId>>;
    selectAll(): void;
    unselectAll(): void;
    toggleRow(itemId: string, type: RowSelectToggleType): void;
    getFormation(): FormationManager;
    private convertItems;
    private createOriginChangedEvent;
    private findOriginItem;
    private findOriginItemIndex;
    private recalculatePositions;
}
