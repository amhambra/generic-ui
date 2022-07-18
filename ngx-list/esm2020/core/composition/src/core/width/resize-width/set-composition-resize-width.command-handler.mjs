import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetCompositionResizeWidthCommand } from './set-composition-resize-width.command';
import { CompositionResizeWidthSetEvent } from './composition-resize-width-set.event';
export class SetCompositionResizeWidthCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetCompositionResizeWidthCommand;
    }
    handle(composition, command) {
        const enabled = command.getEnabled();
        composition.setResizeWidth(enabled);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new CompositionResizeWidthSetEvent(command.getAggregateId()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvd2lkdGgvcmVzaXplLXdpZHRoL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBK0IsYUFBYSxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDMUYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJdEYsTUFBTSxPQUFPLHVDQUF1QztJQUFwRDtRQUVrQix5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBaUIzRyxDQUFDO0lBZkEsVUFBVTtRQUNULE9BQU8sZ0NBQWdDLENBQUM7SUFDekMsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFpQyxFQUFFLE9BQXlDO1FBRWxGLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVyQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxPQUFPLENBQUMsU0FBK0IsRUFBRSxPQUF5QztRQUNqRixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksOEJBQThCLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIENvcmVDb250YWluZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQgfSBmcm9tICcuL3NldC1jb21wb3NpdGlvbi1yZXNpemUtd2lkdGguY29tbWFuZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8Q29tcG9zaXRpb25BZ2dyZWdhdGUsIFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoRG9tYWluRXZlbnRQdWJsaXNoZXIpO1xuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoY29tcG9zaXRpb246IENvbXBvc2l0aW9uQWdncmVnYXRlLCBjb21tYW5kOiBTZXRDb21wb3NpdGlvblJlc2l6ZVdpZHRoQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuZ2V0RW5hYmxlZCgpO1xuXG5cdFx0Y29tcG9zaXRpb24uc2V0UmVzaXplV2lkdGgoZW5hYmxlZCk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBDb21wb3NpdGlvblJlc2l6ZVdpZHRoU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19