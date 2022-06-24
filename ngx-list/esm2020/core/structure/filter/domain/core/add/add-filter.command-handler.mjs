import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
export class AddFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return AddFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId(), filterTypeId = command.getFilterTypeId(), value = command.getValue();
        structure.addFilter(fieldId, filterTypeId, value);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9kb21haW4vY29yZS9hZGQvYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU14RCxNQUFNLE9BQU8sdUJBQXVCO0lBQXBDO1FBRWtCLHlCQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFrQjNHLENBQUM7SUFoQkEsVUFBVTtRQUNULE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQXlCO1FBRTlELE1BQU0sT0FBTyxHQUFZLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFDNUMsWUFBWSxHQUFpQixPQUFPLENBQUMsZUFBZSxFQUFFLEVBQ3RELEtBQUssR0FBUSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxPQUFPLENBQUMsU0FBNkIsRUFBRSxPQUF5QjtRQUMvRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBDb3JlQ29udGFpbmVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEFkZEZpbHRlckNvbW1hbmQgfSBmcm9tICcuL2FkZC1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBBZGRGaWx0ZXJDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8QWRkRmlsdGVyQ29tbWFuZD4ge1xuXHRcdHJldHVybiBBZGRGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBBZGRGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkOiBGaWVsZElkID0gY29tbWFuZC5nZXRGaWVsZElkKCksXG5cdFx0XHRmaWx0ZXJUeXBlSWQ6IEZpbHRlclR5cGVJZCA9IGNvbW1hbmQuZ2V0RmlsdGVyVHlwZUlkKCksXG5cdFx0XHR2YWx1ZTogYW55ID0gY29tbWFuZC5nZXRWYWx1ZSgpO1xuXHRcdHN0cnVjdHVyZS5hZGRGaWx0ZXIoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBBZGRGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==