import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
export class PagingEventRepository extends EventRepository {
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
PagingEventRepository.decorators = [
    { type: Injectable }
];
PagingEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQztBQU12RixNQUFNLE9BQWdCLHFCQUFzQixTQUFRLGVBQXNEO0lBRXpHLFlBQXNCLGNBQThCO1FBQ25ELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN2QixDQUFDOzs7WUFMRCxVQUFVOzs7WUFMRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5LCBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoZG9tYWluRXZlbnRCdXMpO1xuXHR9XG5cblx0YWJzdHJhY3Qgb25QYWdlQ2hhbmdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0YWJzdHJhY3Qgb25QYWdlU2l6ZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG59XG4iXX0=