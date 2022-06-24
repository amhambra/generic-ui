import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleFilterCommand } from './toggle-filter.command';
import { FilterToggledEvent } from './filter-toggled.event';
export class ToggleFilterCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleFilterCommand;
    }
    handle(aggregate, command) {
        const fieldId = command.getFieldId(), externalFieldId = command.getExternalFilterId(), filterValue = command.getFilterValue();
        aggregate.toggleFilter(fieldId, externalFieldId, filterValue);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new FilterToggledEvent(command.getAggregateId()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9kb21haW4vdG9nZ2xlL3RvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBK0IsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFJNUQsTUFBTSxPQUFPLDBCQUEwQjtJQUF2QztRQUVrQix5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBbUIzRyxDQUFDO0lBakJBLFVBQVU7UUFDVCxPQUFPLG1CQUFtQixDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUE0QjtRQUVqRSxNQUFNLE9BQU8sR0FBWSxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQzVDLGVBQWUsR0FBVyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFDdkQsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUV4QyxTQUFTLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQTRCO1FBQ2xFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgVG9nZ2xlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi9maWx0ZXItdG9nZ2xlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFRvZ2dsZUZpbHRlckNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxUb2dnbGVGaWx0ZXJDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZUZpbHRlckNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdGV4dGVybmFsRmllbGRJZDogc3RyaW5nID0gY29tbWFuZC5nZXRFeHRlcm5hbEZpbHRlcklkKCksXG5cdFx0XHRmaWx0ZXJWYWx1ZSA9IGNvbW1hbmQuZ2V0RmlsdGVyVmFsdWUoKTtcblxuXHRcdGFnZ3JlZ2F0ZS50b2dnbGVGaWx0ZXIoZmllbGRJZCwgZXh0ZXJuYWxGaWVsZElkLCBmaWx0ZXJWYWx1ZSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBUb2dnbGVGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBGaWx0ZXJUb2dnbGVkRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19