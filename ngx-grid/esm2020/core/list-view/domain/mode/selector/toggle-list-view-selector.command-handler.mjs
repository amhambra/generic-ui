import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
export class ToggleListViewSelectorCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return ToggleListViewSelectorCommand;
    }
    handle(listViewAggregate, command) {
        const enabled = command.isEnabled();
        listViewAggregate.toggleModeSelector(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L2RvbWFpbi9tb2RlL3NlbGVjdG9yL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBK0IsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFLcEYsTUFBTSxPQUFPLG9DQUFvQztJQUFqRDtRQUVrQix5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBaUIzRyxDQUFDO0lBZkEsVUFBVTtRQUNULE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBb0MsRUFBRSxPQUFzQztRQUVsRixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUE0QixFQUFFLE9BQXdCO1FBQzdELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQgfSBmcm9tICcuL3RvZ2dsZS1saXN0LXZpZXctc2VsZWN0b3IuY29tbWFuZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxMaXN0Vmlld0FnZ3JlZ2F0ZSwgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZD4ge1xuXHRcdHJldHVybiBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShsaXN0Vmlld0FnZ3JlZ2F0ZTogTGlzdFZpZXdBZ2dyZWdhdGUsIGNvbW1hbmQ6IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKTtcblxuXHRcdGxpc3RWaWV3QWdncmVnYXRlLnRvZ2dsZU1vZGVTZWxlY3RvcihlbmFibGVkKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogTGlzdFZpZXdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==