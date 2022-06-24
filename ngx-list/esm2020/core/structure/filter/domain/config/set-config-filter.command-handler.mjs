import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigFilterCommand } from './set-config-filter.command';
import { ConfigFilterSetEvent } from './config-filter-set.event';
export class SetConfigFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigFilterCommand;
    }
    handle(aggregate, command) {
        const filterConfig = command.getConfig();
        aggregate.setFilterConfig(filterConfig);
    }
    publish(aggregate, command) {
        const filterConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigFilterSetEvent(command.getAggregateId(), filterConfig.enabled));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUlqRSxNQUFNLE9BQU8sNkJBQTZCO0lBQTFDO1FBRWtCLHlCQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFvQjNHLENBQUM7SUFsQkEsVUFBVTtRQUNULE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQStCO1FBRXBFLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUV6QyxTQUFTLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBNkIsRUFBRSxPQUErQjtRQUVyRSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3NldC1jb25maWctZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ29uZmlnRmlsdGVyU2V0RXZlbnQgfSBmcm9tICcuL2NvbmZpZy1maWx0ZXItc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50UHVibGlzaGVyKTtcblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldENvbmZpZ0ZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29uZmlnRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Q29uZmlnRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyQ29uZmlnID0gY29tbWFuZC5nZXRDb25maWcoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5zZXRGaWx0ZXJDb25maWcoZmlsdGVyQ29uZmlnKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpbHRlckNvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IENvbmZpZ0ZpbHRlclNldEV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgZmlsdGVyQ29uZmlnLmVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=