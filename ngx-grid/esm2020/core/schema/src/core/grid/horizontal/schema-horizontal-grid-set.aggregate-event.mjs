import { SchemaHorizontalGridSetEvent } from './schema-horizontal-grid-set.event';
import { SchemaAggregateEvent } from '../../schema.aggregate-event';
export class SchemaHorizontalGridSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, horizontalGrid) {
        super(schemaId, 'SchemaHorizontalGridSetEvent');
        this.horizontalGrid = horizontalGrid;
    }
    toDomainEvent() {
        return new SchemaHorizontalGridSetEvent(this.getAggregateId(), this.horizontalGrid);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3NjaGVtYS9zcmMvY29yZS9ncmlkL2hvcml6b250YWwvc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3BFLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSxvQkFBb0I7SUFFOUUsWUFBWSxRQUFrQixFQUNWLGNBQXVCO1FBQzFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsOEJBQThCLENBQUMsQ0FBQztRQUQ3QixtQkFBYyxHQUFkLGNBQWMsQ0FBUztJQUUzQyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vc2NoZW1hLWhvcml6b250YWwtZ3JpZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9zY2hlbWEuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U2NoZW1hSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQodGhpcy5nZXRBZ2dyZWdhdGVJZCgpLCB0aGlzLmhvcml6b250YWxHcmlkKTtcblx0fVxufVxuIl19