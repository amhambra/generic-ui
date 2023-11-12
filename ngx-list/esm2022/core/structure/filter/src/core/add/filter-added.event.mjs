import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export class FilterAddedEvent extends StructureDomainEvent {
    fieldId;
    filterTypeId;
    value;
    constructor(aggregateId, fieldId, filterTypeId, value) {
        super(aggregateId, { fieldId, filterTypeId, value }, 'FilterAddedEvent');
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.value = value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLWFkZGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvYWRkL2ZpbHRlci1hZGRlZC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUdsRyxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsb0JBQW9CO0lBR3JDO0lBQ0E7SUFDQTtJQUhwQixZQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLFlBQTBCLEVBQzFCLEtBQVU7UUFDN0IsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUh0RCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQUs7SUFFOUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyQWRkZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYW55KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIHsgZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSB9LCAnRmlsdGVyQWRkZWRFdmVudCcpO1xuXHR9XG5cbn1cbiJdfQ==