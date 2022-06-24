import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
export class StructurePreparedItemsEventHandler {
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    }
}
StructurePreparedItemsEventHandler.services = [StructurePreparedItemsArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJbkYsTUFBTSxPQUFPLGtDQUFrQztJQUU5QyxZQUE2QixnQ0FBK0Q7UUFBL0QscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUErQjtJQUM1RixDQUFDO0lBSUQsUUFBUTtRQUNQLE9BQU8saUNBQWlDLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUF3QztRQUU5QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsbUNBQW1DLENBQUMsRUFBRTtZQUU3RCxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUUvQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNsRjtJQUVGLENBQUM7O0FBZmUsMkNBQVEsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4vc3RydWN0dXJlLnByZXBhcmVkLWVudGl0aWVzLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSB9IGZyb20gJy4vc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeTogU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZV07XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHByZXBhcmVkSXRlbXMgPSBldmVudC5nZXRQcmVwYXJlZEl0ZW1zKCk7XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBwcmVwYXJlZEl0ZW1zKTtcblx0XHR9XG5cblx0fVxufVxuIl19