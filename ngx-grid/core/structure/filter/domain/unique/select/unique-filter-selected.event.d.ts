import { StructureId } from '../../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class UniqueFilterSelectedEvent extends StructureDomainEvent {
    constructor(aggregateId: StructureId);
}
