import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from '../../api/event/domain-event';
export class DomainEventPublisher {
    eventStream;
    constructor(eventStream) {
        this.eventStream = eventStream;
    }
    static services = [DomainEventStream];
    publish(args) {
        if (Array.isArray(args)) {
            for (const arg of args) {
                this.publishEvent(arg);
            }
        }
        else {
            this.publishEvent(args);
        }
    }
    publishFromAggregate(aggregate) {
        const events = [...aggregate.getEvents()];
        events.forEach((aggregateEvent) => {
            this.publish(aggregateEvent.toDomainEvent());
        });
    }
    publishEvent(event) {
        if (!event) {
            // eslint-disable-next-line no-console
            console.error(`${event} is not defined`);
        }
        if (!(event instanceof DomainEvent)) {
            // throw new Error(`${event} is not a DomainEvent`);
            // eslint-disable-next-line no-console
            console.error(`${event} is not a DomainEvent`);
        }
        this.eventStream.next(event);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb3JlL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUszRCxNQUFNLE9BQU8sb0JBQW9CO0lBRUg7SUFBN0IsWUFBNkIsV0FBOEI7UUFBOUIsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBQzNELENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsaUJBQWlCLENBQVUsQ0FBQztJQUl4RCxPQUFPLENBQUMsSUFBd0U7UUFFL0UsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRXhCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Q7YUFBTTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBZ0MsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0YsQ0FBQztJQUVELG9CQUFvQixDQUFDLFNBQXFDO1FBRXpELE1BQU0sTUFBTSxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUUxQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBMkMsRUFBRSxFQUFFO1lBQzlELElBQUksQ0FBQyxPQUFPLENBQ1gsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUM5QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLEtBQStCO1FBRW5ELElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWCxzQ0FBc0M7WUFDdEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssaUJBQWlCLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtZQUNwQyxvREFBb0Q7WUFFcEQsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLHVCQUF1QixDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1ldmVudCc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50U3RyZWFtIH0gZnJvbSAnLi9kb21haW4tZXZlbnQuc3RyZWFtJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vYXBpL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcblxuXG5leHBvcnQgY2xhc3MgRG9tYWluRXZlbnRQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZXZlbnRTdHJlYW06IERvbWFpbkV2ZW50U3RyZWFtKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbRG9tYWluRXZlbnRTdHJlYW1dIGFzIGNvbnN0O1xuXG5cdHB1Ymxpc2goZXZlbnQ6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik6IHZvaWQ7XG5cdHB1Ymxpc2goZXZlbnRzOiBSZWFkb25seUFycmF5PERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPj4pOiB2b2lkO1xuXHRwdWJsaXNoKGFyZ3M6IERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPiB8IFJlYWRvbmx5QXJyYXk8RG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+Pik6IHZvaWQge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblxuXHRcdFx0Zm9yIChjb25zdCBhcmcgb2YgYXJncykge1xuXHRcdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmcpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnB1Ymxpc2hFdmVudChhcmdzIGFzIERvbWFpbkV2ZW50PEFnZ3JlZ2F0ZUlkPik7XG5cdFx0fVxuXHR9XG5cblx0cHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlOiBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPik6IHZvaWQge1xuXG5cdFx0Y29uc3QgZXZlbnRzID0gWy4uLmFnZ3JlZ2F0ZS5nZXRFdmVudHMoKV07XG5cblx0XHRldmVudHMuZm9yRWFjaCgoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0dGhpcy5wdWJsaXNoKFxuXHRcdFx0XHRhZ2dyZWdhdGVFdmVudC50b0RvbWFpbkV2ZW50KClcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIHB1Ymxpc2hFdmVudChldmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cblx0XHRpZiAoIWV2ZW50KSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGRlZmluZWRgKTtcblx0XHR9XG5cblx0XHRpZiAoIShldmVudCBpbnN0YW5jZW9mIERvbWFpbkV2ZW50KSkge1xuXHRcdFx0Ly8gdGhyb3cgbmV3IEVycm9yKGAke2V2ZW50fSBpcyBub3QgYSBEb21haW5FdmVudGApO1xuXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihgJHtldmVudH0gaXMgbm90IGEgRG9tYWluRXZlbnRgKTtcblx0XHR9XG5cblx0XHR0aGlzLmV2ZW50U3RyZWFtLm5leHQoZXZlbnQpO1xuXHR9XG59XG4iXX0=