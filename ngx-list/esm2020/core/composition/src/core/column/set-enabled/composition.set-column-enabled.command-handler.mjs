import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { CompositionEventConverter } from '../../composition.event-converter';
import { CompositionSetColumnEnabledCommand } from './composition.set-column-enabled.command';
export class CompositionSetColumnEnabledCommandHandler {
    constructor(compositionEventConverter) {
        this.compositionEventConverter = compositionEventConverter;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return CompositionSetColumnEnabledCommand;
    }
    handle(aggregate, command) {
        const columnId = command.getColumnId(), enabled = command.isEnabled();
        aggregate.enableColumn(columnId, enabled);
    }
    publish(aggregate, command) {
        this.publishEvents(aggregate, command);
    }
    publishEvents(composition, command) {
        const events = composition.getEvents();
        const domainEvents = this.compositionEventConverter.convert(events);
        if (domainEvents && domainEvents.length > 0) {
            this.domainEventPublisher.publish(domainEvents);
        }
    }
}
CompositionSetColumnEnabledCommandHandler.services = [CompositionEventConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9jb21wb3NpdGlvbi9zcmMvY29yZS9jb2x1bW4vc2V0LWVuYWJsZWQvY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStDLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSTlGLE1BQU0sT0FBTyx5Q0FBeUM7SUFJckQsWUFBNkIseUJBQW9EO1FBQXBELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFGaEUseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUcxRyxDQUFDO0lBSUQsVUFBVTtRQUNULE9BQU8sa0NBQWtDLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUErQixFQUFFLE9BQTJDO1FBRWxGLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUvQixTQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQStCLEVBQUUsT0FBMkM7UUFDbkYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLGFBQWEsQ0FBQyxXQUFpQyxFQUFFLE9BQTJDO1FBRW5HLE1BQU0sTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQTBDLENBQUM7UUFFL0UsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRSxJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO0lBQ0YsQ0FBQzs7QUEzQmUsa0RBQVEsR0FBRyxDQUFDLHlCQUF5QixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBDb3JlQ29udGFpbmVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbkV2ZW50Q29udmVydGVyOiBDb21wb3NpdGlvbkV2ZW50Q29udmVydGVyKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbQ29tcG9zaXRpb25FdmVudENvbnZlcnRlcl0gYXMgY29uc3Q7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kPiB7XG5cdFx0cmV0dXJuIENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSwgY29tbWFuZDogQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgY29sdW1uSWQgPSBjb21tYW5kLmdldENvbHVtbklkKCksXG5cdFx0XHRlbmFibGVkID0gY29tbWFuZC5pc0VuYWJsZWQoKTtcblxuXHRcdGFnZ3JlZ2F0ZS5lbmFibGVDb2x1bW4oY29sdW1uSWQsIGVuYWJsZWQpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5wdWJsaXNoRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudHMoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBldmVudHMgPSBjb21wb3NpdGlvbi5nZXRFdmVudHMoKSBhcyBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj47XG5cblx0XHRjb25zdCBkb21haW5FdmVudHMgPSB0aGlzLmNvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIuY29udmVydChldmVudHMpO1xuXG5cdFx0aWYgKGRvbWFpbkV2ZW50cyAmJiBkb21haW5FdmVudHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGRvbWFpbkV2ZW50cyk7XG5cdFx0fVxuXHR9XG59XG4iXX0=