import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class SelectionEnabledSetAggregateEvent extends AggregateEvent<StructureId> {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    toDomainEvent(): DomainEvent<StructureId>;
}
