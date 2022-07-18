import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class ConfigSearchingSetEvent extends StructureDomainEvent {
    private readonly enabled;
    constructor(aggregateId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
