import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './set-config-searching.command';
import { ConfigSearchingSetEvent } from './config-searching-set.event';
export class SetConfigSearchingCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetConfigSearchingCommand;
    }
    handle(aggregate, command) {
        const searchingConfig = command.getConfig();
        aggregate.setSearchingConfig(searchingConfig);
    }
    publish(aggregate, command) {
        const searchingConfig = command.getConfig();
        this.domainEventPublisher.publish(new ConfigSearchingSetEvent(command.getAggregateId(), searchingConfig.enabled));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl2RSxNQUFNLE9BQU8sZ0NBQWdDO0lBQTdDO1FBRWtCLHlCQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFvQjNHLENBQUM7SUFsQkEsVUFBVTtRQUNULE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUE2QixFQUFFLE9BQWtDO1FBRXZFLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU1QyxTQUFTLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE2QixFQUFFLE9BQWtDO1FBRXhFLE1BQU0sZUFBZSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUU1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksdUJBQXVCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ25ILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kJztcbmltcG9ydCB7IENvbmZpZ1NlYXJjaGluZ1NldEV2ZW50IH0gZnJvbSAnLi9jb25maWctc2VhcmNoaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHNlYXJjaGluZ0NvbmZpZyA9IGNvbW1hbmQuZ2V0Q29uZmlnKCk7XG5cblx0XHRhZ2dyZWdhdGUuc2V0U2VhcmNoaW5nQ29uZmlnKHNlYXJjaGluZ0NvbmZpZyk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBzZWFyY2hpbmdDb25maWcgPSBjb21tYW5kLmdldENvbmZpZygpO1xuXG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb25maWdTZWFyY2hpbmdTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksIHNlYXJjaGluZ0NvbmZpZy5lbmFibGVkKSk7XG5cdH1cblxufVxuIl19