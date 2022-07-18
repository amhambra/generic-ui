import { RowColoringSetEvent } from './row-coloring-set.event';
import { SchemaAggregateEvent } from '../schema.aggregate-event';
export class RowColoringSetAggregateEvent extends SchemaAggregateEvent {
    constructor(schemaId, rowColoring) {
        super(schemaId, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    toDomainEvent() {
        return new RowColoringSetEvent(this.getAggregateId(), this.rowColoring);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5hZ2dyZWdhdGUtZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc2NoZW1hL3NyYy9jb3JlL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsb0JBQW9CO0lBRXJFLFlBQVksUUFBa0IsRUFDVixXQUE4QjtRQUNqRCxLQUFLLENBQUMsUUFBUSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEcEIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBRWxELENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG1CQUFtQixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekUsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vc2NoZW1hLmFnZ3JlZ2F0ZS1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFJvd0NvbG9yaW5nU2V0QWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTY2hlbWFBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnUm93Q29sb3JpbmdTZXRFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTY2hlbWFJZD4ge1xuXHRcdHJldHVybiBuZXcgUm93Q29sb3JpbmdTZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucm93Q29sb3JpbmcpO1xuXHR9XG5cbn1cbiJdfQ==