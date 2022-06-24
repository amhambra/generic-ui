import { SchemaThemeSetEvent } from './schema-theme-set.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export class SchemaThemeSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, theme) {
        super(schemaId, 'SchemaThemeSetAggregateEvent');
        this.theme = theme;
    }
    toDomainEvent() {
        return new SchemaThemeSetEvent(this.getAggregateId(), this.theme);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXRoZW1lLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc2NoZW1hL2RvbWFpbi90aGVtZS9zY2hlbWEtdGhlbWUtc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVqRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9CO0lBRXJFLFlBQVksUUFBa0IsRUFDVixLQUFrQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEN0IsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUV0QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi9zY2hlbWEuaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9zY2hlbWEuYWdncmVnYXRlLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjaGVtYVRoZW1lU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2NoZW1hVGhlbWVTZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hVGhlbWVTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMudGhlbWUpO1xuXHR9XG59XG4iXX0=