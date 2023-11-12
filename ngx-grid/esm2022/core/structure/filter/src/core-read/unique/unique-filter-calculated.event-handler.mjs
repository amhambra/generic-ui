import { UniqueFilterCalculatedEvent } from '../../core/unique/calculate/unique-filter-calculated.event';
import { UniqueValueCollectionArchive } from './unique-value-collection.archive';
import { UniqueValueCollectionModel } from '../../api/unique/unique-value-collection.model';
import { UniqueValueModel } from '../../api/unique/unique-value.model';
export class UniqueFilterCalculatedEventHandler {
    uniqueValuesRepository;
    constructor(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    static services = [UniqueValueCollectionArchive];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvY29yZS1yZWFkL3VuaXF1ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUU1RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUd2RSxNQUFNLE9BQU8sa0NBQWtDO0lBRWpCO0lBQTdCLFlBQTZCLHNCQUFvRDtRQUFwRCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQThCO0lBQ2pGLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUUxRCxRQUFRO1FBQ1AsT0FBTywyQkFBMkIsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFO1lBRWpFLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7WUFFdkIsZUFBZSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxHQUFXLEVBQUUsRUFBRTtnQkFFcEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQWUsRUFBRSxFQUFFO29CQUMvQyxPQUFPLElBQUksZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDL0UsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7WUFHVCxNQUFNLFlBQVksR0FBRyxJQUFJLDBCQUEwQixDQUNsRCxJQUFJLENBQ0osQ0FBQztZQUVGLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25BcmNoaXZlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5hcmNoaXZlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi91bmlxdWUvdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlTW9kZWwgfSBmcm9tICcuLi8uLi9hcGkvdW5pcXVlL3VuaXF1ZS12YWx1ZS5tb2RlbCc7XG5cblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVzUmVwb3NpdG9yeTogVW5pcXVlVmFsdWVDb2xsZWN0aW9uQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1VuaXF1ZVZhbHVlQ29sbGVjdGlvbkFyY2hpdmVdO1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGNhbGN1bGF0ZWRFdmVudDogVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoY2FsY3VsYXRlZEV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1VuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHV2Uk0gPSBuZXcgTWFwKCk7XG5cblx0XHRcdGNhbGN1bGF0ZWRFdmVudC5nZXRVbmlxdWVWYWx1ZXMoKVxuXHRcdFx0XHRcdFx0ICAgLmZvckVhY2goKHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+LCBrZXk6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHZhbHVlc1JNID0gdmFsdWVzLm1hcCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBVbmlxdWVWYWx1ZU1vZGVsKHV2LmdldElkKCksIHV2LmdldERpc3BsYXlWYWx1ZSgpLCB1di5pc0VuYWJsZWQoKSk7XG5cdFx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHV2Uk0uc2V0KGtleSwgdmFsdWVzUk0pO1xuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblxuXHRcdFx0Y29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsKFxuXHRcdFx0XHR1dlJNXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnVuaXF1ZVZhbHVlc1JlcG9zaXRvcnkubmV4dChjYWxjdWxhdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgdW5pcXVlVmFsdWVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19