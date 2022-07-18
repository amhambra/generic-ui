import { SummariesEnabledArchive } from '../../../../summaries/src/core-read/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
export class StructureCreatedEventHandler {
    constructor(summariesEnabledArchive) {
        this.summariesEnabledArchive = summariesEnabledArchive;
    }
    forEvent() {
        return StructureCreatedEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructureCreatedEvent')) {
            const structureId = event.getAggregateId();
            this.summariesEnabledArchive.init(structureId);
        }
    }
}
StructureCreatedEventHandler.services = [SummariesEnabledArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvY3JlYXRlL3N0cnVjdHVyZS1jcmVhdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDeEgsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJbEUsTUFBTSxPQUFPLDRCQUE0QjtJQUV4QyxZQUE2Qix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUM3RSxDQUFDO0lBSUQsUUFBUTtRQUNQLE9BQU8scUJBQXFCLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUE0QjtRQUVsQyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsRUFBRTtZQUVqRCxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvQztJQUNGLENBQUM7O0FBZGUscUNBQVEsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3VtbWFyaWVzL3NyYy9jb3JlLXJlYWQvZW5hYmxlZC9zdW1tYXJpZXMtZW5hYmxlZC1hcmNoaXZlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ3JlYXRlZEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY3JlYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQ3JlYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNFbmFibGVkQXJjaGl2ZTogU3VtbWFyaWVzRW5hYmxlZEFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTdW1tYXJpZXNFbmFibGVkQXJjaGl2ZV07XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFN0cnVjdHVyZUNyZWF0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IFN0cnVjdHVyZUNyZWF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1N0cnVjdHVyZUNyZWF0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0dGhpcy5zdW1tYXJpZXNFbmFibGVkQXJjaGl2ZS5pbml0KHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cdH1cblxufVxuIl19