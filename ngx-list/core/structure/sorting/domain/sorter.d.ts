import { SorterId } from '../api/id/sorter.id';
import { OriginItemEntity } from '../../source/domain/origin/origin-item-entity';
import { FieldEntity } from '../../field/domain/field/field.entity';
export declare class Sorter {
    private readonly sorterId;
    private columnId;
    private field;
    private rank;
    private direction;
    constructor(id: SorterId, field: FieldEntity, direction?: boolean);
    getId(): SorterId;
    getRank(): number;
    getField(): FieldEntity;
    hasDirection(): boolean;
    changeDirection(): void;
    setDirection(direction: boolean): void;
    sort(entities: Array<OriginItemEntity>): Array<OriginItemEntity>;
}
