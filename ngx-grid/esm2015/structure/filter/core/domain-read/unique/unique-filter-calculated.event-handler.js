import { Injectable } from '@angular/core';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValueCollectionArchive } from './unique-value-collection.archive';
import { UniqueValueCollectionModel } from '../../api/unique/unique-value-collection.model';
import { UniqueValueModel } from '../../api/unique/unique-value.model';
export class UniqueFilterCalculatedEventHandler {
    constructor(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    forEvent() {
        return UniqueFilterCalculatedEvent;
    }
    handle(calculatedEvent) {
        if (calculatedEvent.ofMessageType('UniqueFilterCalculatedEvent')) {
            const uvRM = new Map();
            calculatedEvent.getUniqueValues()
                .forEach((values, key) => {
                const valuesRM = values.map((uv) => {
                    return new UniqueValueModel(uv.getId(), uv.getDisplayValue(), uv.isEnabled());
                });
                uvRM.set(key, valuesRM);
            });
            const uniqueValues = new UniqueValueCollectionModel(uvRM);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    }
}
UniqueFilterCalculatedEventHandler.decorators = [
    { type: Injectable }
];
UniqueFilterCalculatedEventHandler.ctorParameters = () => [
    { type: UniqueValueCollectionArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4tcmVhZC91bmlxdWUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMzRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd2RSxNQUFNLE9BQU8sa0NBQWtDO0lBRTlDLFlBQTZCLHNCQUFvRDtRQUFwRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO0lBQ2pGLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO1lBRWpFLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFdkIsZUFBZSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxHQUFXLEVBQUUsRUFBRTtnQkFFcEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO29CQUMvQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7WUFHVCxNQUFNLFlBQVksR0FBRyxJQUFJLDBCQUEwQixDQUNsRCxJQUFJLENBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQzs7O1lBakNELFVBQVU7OztZQUxGLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uQXJjaGl2ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbCB9IGZyb20gJy4uLy4uL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24ubW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZU1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNSZXBvc2l0b3J5OiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25BcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8VW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShjYWxjdWxhdGVkRXZlbnQ6IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGNhbGN1bGF0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCB1dlJNID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRjYWxjdWxhdGVkRXZlbnQuZ2V0VW5pcXVlVmFsdWVzKClcblx0XHRcdFx0XHRcdCAgIC5mb3JFYWNoKCh2YWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlPiwga2V5OiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRcdFx0XHQgICBjb25zdCB2YWx1ZXNSTSA9IHZhbHVlcy5tYXAoKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgVW5pcXVlVmFsdWVNb2RlbCh1di5nZXRJZCgpLCB1di5nZXREaXNwbGF5VmFsdWUoKSwgdXYuaXNFbmFibGVkKCkpO1xuXHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0XHQgICB1dlJNLnNldChrZXksIHZhbHVlc1JNKTtcblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cblx0XHRcdGNvbnN0IHVuaXF1ZVZhbHVlcyA9IG5ldyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25Nb2RlbChcblx0XHRcdFx0dXZSTVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy51bmlxdWVWYWx1ZXNSZXBvc2l0b3J5Lm5leHQoY2FsY3VsYXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHVuaXF1ZVZhbHVlcyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==