import { DomainEventLogger } from '../../../domain/event/domain-event.logger';
import { DomainEventBus } from '../../../domain/event/domain-event.bus';
import { AggregateStoreRegister } from '../../../domain/command/store/aggregate-store.register';
import { hermesFilter } from '../../../../common/stream/core/operator/hermes.filter';
import { hermesTakeUntil } from '../../../../common/stream/core/operator/hermes.take-until';
import { HermesSubject } from '../../../../common/stream/core/observable/hermes.subject';
import { CoreContainer } from '../../../api/core.container';
export class ConsoleEventLogger extends DomainEventLogger {
    constructor() {
        super();
        this.enabled = false;
        this.unsubscribe$ = new HermesSubject();
        this.eventBus = CoreContainer.resolve(DomainEventBus);
        this.aggregateStoreRegister = CoreContainer.resolve(AggregateStoreRegister);
        this.eventBus
            .pipe(hermesFilter(() => this.enabled), hermesTakeUntil(this.unsubscribe$))
            .subscribe((domainEvent) => {
            this.log(domainEvent);
        });
    }
    onDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    start() {
        this.enabled = true;
    }
    stop() {
        this.enabled = false;
    }
    print(domainEvent) {
        const aggregateId = domainEvent.getAggregateId(), aggregates = this.aggregateStoreRegister.captureAggregatesSnapshot(aggregateId);
        // eslint-disable-next-line no-console
        console.log(domainEvent.toString(), domainEvent, aggregates);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5ldmVudC5sb2dnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9pbmZyYXN0cnVjdHVyZS9sb2dnZXIvZXZlbnQvY29uc29sZS5ldmVudC5sb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDNUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUc1RCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsaUJBQWlCO0lBVXhEO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFURCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGlCQUFZLEdBQUcsSUFBSSxhQUFhLEVBQVEsQ0FBQztRQUVoQyxhQUFRLEdBQW1CLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFakUsMkJBQXNCLEdBQTJCLGFBQWEsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUsvRyxJQUFJLENBQUMsUUFBUTthQUNYLElBQUksQ0FDSixZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNoQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUNsQzthQUNBLFNBQVMsQ0FBQyxDQUFDLFdBQXFDLEVBQUUsRUFBRTtZQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUs7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSTtRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFUyxLQUFLLENBQUMsV0FBcUM7UUFDcEQsTUFBTSxXQUFXLEdBQUcsV0FBVyxDQUFDLGNBQWMsRUFBRSxFQUMvQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWpGLHNDQUFzQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LmxvZ2dlcic7XG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9ldmVudC9kb21haW4tZXZlbnQuYnVzJztcbmltcG9ydCB7IERvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vYXBpL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbW1hbmQvc3RvcmUvYWdncmVnYXRlLXN0b3JlLnJlZ2lzdGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy5maWx0ZXInO1xuaW1wb3J0IHsgaGVybWVzVGFrZVVudGlsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9jb3JlL29wZXJhdG9yL2hlcm1lcy50YWtlLXVudGlsJztcbmltcG9ydCB7IEhlcm1lc1N1YmplY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vc3RyZWFtL2NvcmUvb2JzZXJ2YWJsZS9oZXJtZXMuc3ViamVjdCc7XG5pbXBvcnQgeyBDb3JlQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvcmUuY29udGFpbmVyJztcblxuXG5leHBvcnQgY2xhc3MgQ29uc29sZUV2ZW50TG9nZ2VyIGV4dGVuZHMgRG9tYWluRXZlbnRMb2dnZXIge1xuXG5cdHByaXZhdGUgZW5hYmxlZCA9IGZhbHNlO1xuXG5cdHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IEhlcm1lc1N1YmplY3Q8dm9pZD4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudEJ1cyk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmV2ZW50QnVzXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKCgpID0+IHRoaXMuZW5hYmxlZCksXG5cdFx0XHRcdGhlcm1lc1Rha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGRvbWFpbkV2ZW50OiBEb21haW5FdmVudDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0dGhpcy5sb2coZG9tYWluRXZlbnQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRvbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuXHRcdHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG5cdH1cblxuXHRzdGFydCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xuXHR9XG5cblx0c3RvcCgpOiB2b2lkIHtcblx0XHR0aGlzLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdHByb3RlY3RlZCBwcmludChkb21haW5FdmVudDogRG9tYWluRXZlbnQ8QWdncmVnYXRlSWQ+KTogdm9pZCB7XG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBkb21haW5FdmVudC5nZXRBZ2dyZWdhdGVJZCgpLFxuXHRcdFx0YWdncmVnYXRlcyA9IHRoaXMuYWdncmVnYXRlU3RvcmVSZWdpc3Rlci5jYXB0dXJlQWdncmVnYXRlc1NuYXBzaG90KGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cdFx0Y29uc29sZS5sb2coZG9tYWluRXZlbnQudG9TdHJpbmcoKSwgZG9tYWluRXZlbnQsIGFnZ3JlZ2F0ZXMpO1xuXHR9XG5cbn1cbiJdfQ==