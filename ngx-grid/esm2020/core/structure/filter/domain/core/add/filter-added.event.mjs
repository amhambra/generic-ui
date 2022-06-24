import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export class FilterAddedEvent extends StructureDomainEvent {
    constructor(aggregateId, fieldId, filterTypeId, value) {
        super(aggregateId, { fieldId, filterTypeId, value }, 'FilterAddedEvent');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUd0RixNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsb0JBQW9CO0lBRXpELFlBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsWUFBMEIsRUFDMUIsS0FBVTtRQUM3QixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBSHRELFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBSztJQUU5QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlSWQgfSBmcm9tICcuLi8uLi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckFkZGVkRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IGFueSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCB7IGZpZWxkSWQsIGZpbHRlclR5cGVJZCwgdmFsdWUgfSwgJ0ZpbHRlckFkZGVkRXZlbnQnKTtcblx0fVxuXG59XG4iXX0=