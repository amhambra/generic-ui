import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
export class SetOriginCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    forCommand() {
        return SetOriginCommand;
    }
    handle(structure, command) {
        const items = command.getItems();
        structure.setOrigin(items);
    }
    publish(aggregate, command) {
        const aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    }
}
SetOriginCommandHandler.services = [SourceDomainEventPublisher];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY29yZS9vcmlnaW4vc2V0L3NldC1vcmlnaW4uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBR2pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR3hELE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBb0IsbUNBQStEO1FBQS9ELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7SUFDbkYsQ0FBQztJQUlELFVBQVU7UUFDVCxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUF5QjtRQUU5RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBeUI7UUFFL0QsTUFBTSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7QUFsQmUsZ0NBQVEsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi9zb3VyY2UuZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kIH0gZnJvbSAnLi9zZXQtb3JpZ2luLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRPcmlnaW5Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0T3JpZ2luQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXJdO1xuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0T3JpZ2luQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRPcmlnaW5Db21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRPcmlnaW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtcyA9IGNvbW1hbmQuZ2V0SXRlbXMoKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRPcmlnaW4oaXRlbXMpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0T3JpZ2luQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlRXZlbnRzID0gYWdncmVnYXRlLmdldEV2ZW50cygpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZUV2ZW50cyk7XG5cdH1cblxufVxuIl19