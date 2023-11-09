import { AggregateFactoryArchive, AggregateRepositoryArchive } from '../config/define';
import { DomainEventPublisher } from '../../event/domain-event.publisher';
import { CoreContainer } from '../../../api/core.container';
export function createAggregateCommandHandlerFactory(createAggregateCommandHandler, aggregateName) {
    return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateName);
}
export class CreateAggregateCommandHandlerImpl {
    constructor(createAggregateCommandHandler, aggregateType) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateType = aggregateType;
        this.aggregateFactoryArchive = CoreContainer.resolve(AggregateFactoryArchive);
        this.aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
        this.commandType = this.createCommandInstance().getMessageType();
    }
    handleCommand(command) {
        const aggregateId = command.getAggregateId();
        const optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((factory) => {
            const aggregate = factory.create(aggregateId);
            const type = aggregate.getType(), createCommandConstructor = aggregate.createEvent();
            const createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent((repo) => {
                repo.save(aggregate);
                this.domainEventPublisher.publishFromAggregate(aggregate);
            });
        });
    }
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    createCommandInstance() {
        const args = [], argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        if (args.length === 0) {
            return (new (this.createAggregateCommandHandler.forCommand())());
        }
        else if (args.length === 1) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0]));
        }
        else if (args.length === 2) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1]));
        }
        else if (args.length === 3) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2]));
        }
        else if (args.length === 4) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2], args[3]));
        }
        else if (args.length === 5) {
            return (new (this.createAggregateCommandHandler.forCommand())(args[0], args[1], args[2], args[3], args[4]));
        }
        else {
            throw new Error('CreateAggregateCommandHandlerImpl constructor out of arguments');
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9jb21tYW5kL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUt2RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHNUQsTUFBTSxVQUFVLG9DQUFvQyxDQUNuRCw2QkFBK0QsRUFDL0QsYUFBcUI7SUFHckIsT0FBTyxJQUFJLGlDQUFpQyxDQUMzQyw2QkFBNkIsRUFDN0IsYUFBYSxDQUNiLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLGlDQUFpQztJQVU3QyxZQUE2Qiw2QkFBK0QsRUFDeEUsYUFBcUI7UUFEWixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQWtDO1FBQ3hFLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBVHhCLDRCQUF1QixHQUFrQyxhQUFhLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFeEcsK0JBQTBCLEdBQXFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVqSCx5QkFBb0IsR0FBeUIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBTXpHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFVO1FBQ3ZCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQU8sQ0FBQztRQUVsRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV4RSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFO1lBRXhELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFOUMsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxFQUMvQix3QkFBd0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFdEUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUVsQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUU5RSxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBK0IsRUFBRSxFQUFFO2dCQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFTyxxQkFBcUI7UUFDNUIsTUFBTSxJQUFJLEdBQWdCLEVBQUUsRUFDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXJGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQVUsR0FBRSxDQUFDLENBQUM7U0FDeEU7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxFQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEY7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakc7YUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzFHO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxFQUFVLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkg7YUFBTTtZQUNOLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNsRjtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZCB9IGZyb20gJy4vY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnLi4vLi4vZXZlbnQvZG9tYWluLWV2ZW50LnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvcmUuY29udGFpbmVyJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPihcblx0Y3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEM+LFxuXHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmdcbik6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cblx0cmV0dXJuIG5ldyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4oXG5cdFx0Y3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIsXG5cdFx0YWdncmVnYXRlTmFtZVxuXHQpO1xufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4gPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+ID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEM+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuY29tbWFuZFR5cGUgPSB0aGlzLmNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IEMpIHtcblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSBhcyBJO1xuXG5cdFx0Y29uc3Qgb3B0RmFjdG9yeSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRGYWN0b3J5LmlmUHJlc2VudCgoZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBmYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGNvbnN0IHR5cGUgPSBhZ2dyZWdhdGUuZ2V0VHlwZSgpLFxuXHRcdFx0XHRjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IgPSBhZ2dyZWdhdGUuY3JlYXRlRXZlbnQoKTtcblxuXHRcdFx0Y29uc3QgY3JlYXRlQ29tbWFuZCA9IG5ldyBjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IoYWdncmVnYXRlSWQsIHR5cGUpO1xuXG5cdFx0XHRhZ2dyZWdhdGUuYWRkRXZlbnQoY3JlYXRlQ29tbWFuZCk7XG5cblx0XHRcdGNvbnN0IG9wdFJlcG9zaXRvcnkgPSB0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdHJlcG8uc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0aWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KSgpKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KShhcmdzWzBdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gMikge1xuXHRcdFx0cmV0dXJuIChuZXcgKHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSkpO1xuXHRcdH0gZWxzZSBpZiAoYXJncy5sZW5ndGggPT09IDMpIHtcblx0XHRcdHJldHVybiAobmV3ICh0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKSBhcyBhbnkpKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pKTtcblx0XHR9IGVsc2UgaWYgKGFyZ3MubGVuZ3RoID09PSA0KSB7XG5cdFx0XHRyZXR1cm4gKG5ldyAodGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KShhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKSk7XG5cdFx0fSBlbHNlIGlmIChhcmdzLmxlbmd0aCA9PT0gNSkge1xuXHRcdFx0cmV0dXJuIChuZXcgKHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCBjb25zdHJ1Y3RvciBvdXQgb2YgYXJndW1lbnRzJyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==