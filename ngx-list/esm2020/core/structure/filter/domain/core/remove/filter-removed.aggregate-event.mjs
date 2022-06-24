import { ActiveFiltersSetEvent } from '../active-filters-set.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class FilterRemovedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, activeFilters) {
        super(aggregateId, 'FilterRemovedAggregateEvent');
        this.activeFilters = activeFilters;
    }
    toDomainEvent() {
        return new ActiveFiltersSetEvent(this.getAggregateId(), this.activeFilters);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXJlbW92ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2NvcmUvcmVtb3ZlL2ZpbHRlci1yZW1vdmVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVwRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUc1RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsdUJBQXVCO0lBRXZFLFlBQVksV0FBd0IsRUFDaEIsYUFBK0M7UUFDbEUsS0FBSyxDQUFDLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBRC9CLGtCQUFhLEdBQWIsYUFBYSxDQUFrQztJQUVuRSxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxxQkFBcUIsQ0FDL0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsYUFBYSxDQUNsQixDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyc1NldEV2ZW50IH0gZnJvbSAnLi4vYWN0aXZlLWZpbHRlcnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWN0aXZlRmlsdGVyczogUmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJNb2RlbD4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ0ZpbHRlclJlbW92ZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgQWN0aXZlRmlsdGVyc1NldEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0dGhpcy5hY3RpdmVGaWx0ZXJzXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=