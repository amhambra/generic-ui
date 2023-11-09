import { AggregateRepositoryArchive } from '../config/define';
import { CoreContainer } from '../../../api/core.container';
import { DomainEventPublisher } from '../../event/domain-event.publisher';
export function commandHandlerFactory(commandHandler, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateName);
}
export class CommandHandlerImpl {
    constructor(commandHandler, aggregateType) {
        this.commandHandler = commandHandler;
        this.aggregateType = aggregateType;
        this.aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
        this.commandType = this.createCommandInstance().getMessageType();
    }
    publishDomainEvents(aggregate, command) {
        if (this.commandHandler.publish) {
            this.commandHandler.publish(aggregate, command);
        }
        else {
            this.domainEventPublisher.publishFromAggregate(aggregate);
        }
    }
    handleCommand(command) {
        const aggregateId = command.getAggregateId();
        const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((repo) => {
            const optAggregate = repo.findById(aggregateId);
            optAggregate.ifPresent((aggregate) => {
                this.commandHandler.handle(aggregate, command);
                this.publishDomainEvents(aggregate, command);
            });
        });
    }
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    createCommandInstance() {
        const args = [], argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new (this.commandHandler.forCommand())());
        }
        else if (args.length === 1) {
            return (new (this.commandHandler.forCommand())(args[0]));
        }
        else if (args.length === 2) {
            return (new (this.commandHandler.forCommand())(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new (this.commandHandler.forCommand())(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('CommandHandlerImpl constructor out of arguments');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLWltcGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9kb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSTlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUcxRSxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLGNBQW9DLEVBQ3BDLGFBQXFCO0lBRXJCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBVSxjQUFjLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDdkUsQ0FBQztBQUVELE1BQU0sT0FBTyxrQkFBa0I7SUFROUIsWUFBNkIsY0FBb0MsRUFDN0MsYUFBcUI7UUFEWixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFDN0Msa0JBQWEsR0FBYixhQUFhLENBQVE7UUFQeEIsK0JBQTBCLEdBQXFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVqSCx5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBTXpHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVELG1CQUFtQixDQUFDLFNBQVksRUFBRSxPQUFVO1FBQzNDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUQ7SUFDRixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQVU7UUFFdkIsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBTyxDQUFDO1FBRWxELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTlFLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUErQixFQUFFLEVBQUU7WUFFM0QsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUVoRCxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFL0MsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVPLHFCQUFxQjtRQUM1QixNQUFNLElBQUksR0FBZ0IsRUFBRSxFQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFVLEdBQUUsQ0FBQyxDQUFDO1NBQ3pEO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEU7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDekU7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDM0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEc7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQztTQUNuRTtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29yZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb3JlLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kSGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KFxuXHRjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZ1xuKTogQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+IHtcblx0cmV0dXJuIG5ldyBDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4oY29tbWFuZEhhbmRsZXIsIGFnZ3JlZ2F0ZU5hbWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbWFuZEhhbmRsZXJJbXBsPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPEk+PiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4gPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50UHVibGlzaGVyKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRUeXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBBLCBjb21tYW5kOiBDKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuY29tbWFuZEhhbmRsZXIucHVibGlzaCkge1xuXHRcdFx0dGhpcy5jb21tYW5kSGFuZGxlci5wdWJsaXNoKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IEMpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpIGFzIEk7XG5cblx0XHRjb25zdCBvcHRSZXBvc2l0b3J5ID0gdGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5nZXQodGhpcy5hZ2dyZWdhdGVUeXBlKTtcblxuXHRcdG9wdFJlcG9zaXRvcnkuaWZQcmVzZW50KChyZXBvOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+KSA9PiB7XG5cblx0XHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZSA9IHJlcG8uZmluZEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhZ2dyZWdhdGU6IEEpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbW1hbmRIYW5kbGVyLmhhbmRsZShhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KSgpKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KShhcmdzWzBdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSkpO1xuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiAobmV3ICh0aGlzLmNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKSBhcyBhbnkpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gNSkge1xuXHRcdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvbW1hbmRIYW5kbGVySW1wbCBjb25zdHJ1Y3RvciBvdXQgb2YgYXJndW1lbnRzJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==