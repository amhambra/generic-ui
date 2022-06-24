import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export class PageChangedEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PageChangedEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1jaGFuZ2VkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3BhZ2UvcGFnZS1jaGFuZ2VkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxvQkFBb0I7SUFFekQsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgUGFnZUNoYW5nZWRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbnVsbCwgJ1BhZ2VDaGFuZ2VkRXZlbnQnKTtcblx0fVxufVxuIl19