import { AllUniqueFilterSelectedEvent } from './all-unique-filter-selected.event';
import { StructureAggregateEvent } from '../../../../../structure-core/src/core/structure.aggregate-event';
export class AllUniqueFilterSelectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'AllUniqueFilterSelectedAggregateEvent');
    }
    toDomainEvent() {
        return new AllUniqueFilterSelectedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvdW5pcXVlL3NlbGVjdC1hbGwvYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRzNHLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSx1QkFBdUI7SUFFakYsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksNEJBQTRCLENBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDckIsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRFdmVudCB9IGZyb20gJy4vYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0FsbFVuaXF1ZUZpbHRlclNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKClcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==