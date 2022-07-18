import { AllUniqueFilterUnselectedEvent } from './all-unique-filter-unselected.event';
import { StructureAggregateEvent } from '../../../../../structure-core/src/core/structure.aggregate-event';
export class AllUniqueFilterUnselectedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId) {
        super(aggregateId, 'AllUniqueFilterUnselectedAggregateEvent');
    }
    toDomainEvent() {
        return new AllUniqueFilterUnselectedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvY29yZS91bmlxdWUvdW5zZWxlY3QtYWxsL2FsbC11bmlxdWUtZmlsdGVyLXVuc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBRzNHLE1BQU0sT0FBTyx1Q0FBd0MsU0FBUSx1QkFBdUI7SUFFbkYsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksOEJBQThCLENBQ3hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDckIsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50IH0gZnJvbSAnLi9hbGwtdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEFsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0FsbFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWxsVW5pcXVlRmlsdGVyVW5zZWxlY3RlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=