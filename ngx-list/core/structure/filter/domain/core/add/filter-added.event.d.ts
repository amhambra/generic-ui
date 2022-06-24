import { StructureId } from '../../../../core/api/global/structure.id';
import { FieldId } from '../../../../field/domain/field/field.id';
import { FilterTypeId } from '../../type/filter-type.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class FilterAddedEvent extends StructureDomainEvent {
    private readonly fieldId;
    private readonly filterTypeId;
    private readonly value;
    constructor(aggregateId: StructureId, fieldId: FieldId, filterTypeId: FilterTypeId, value: any);
}
