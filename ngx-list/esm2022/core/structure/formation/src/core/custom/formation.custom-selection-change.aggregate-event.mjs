import { FormationCustomSelectionChangeEvent } from './formation.custom-selection-change.event';
import { StructureAggregateEvent } from '../../../../structure-core/src/core/structure.aggregate-event';
export class FormationCustomSelectionChangeAggregateEvent extends StructureAggregateEvent {
    customSelection;
    constructor(structureId, customSelection) {
        super(structureId, 'FormationCustomSelectionChangeAggregateEvent');
        this.customSelection = customSelection;
    }
    toDomainEvent() {
        return new FormationCustomSelectionChangeEvent(this.getAggregateId(), this.customSelection);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24tY2hhbmdlLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9jb3JlL2N1c3RvbS9mb3JtYXRpb24uY3VzdG9tLXNlbGVjdGlvbi1jaGFuZ2UuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBR3hHLE1BQU0sT0FBTyw0Q0FBNkMsU0FBUSx1QkFBdUI7SUFHcEU7SUFEcEIsWUFBWSxXQUF3QixFQUNoQixlQUF5QztRQUM1RCxLQUFLLENBQUMsV0FBVyxFQUFFLDhDQUE4QyxDQUFDLENBQUM7UUFEaEQsb0JBQWUsR0FBZixlQUFlLENBQTBCO0lBRTdELENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLG1DQUFtQyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb25DaGFuZ2VFdmVudCB9IGZyb20gJy4vZm9ybWF0aW9uLmN1c3RvbS1zZWxlY3Rpb24tY2hhbmdlLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBGb3JtYXRpb25DdXN0b21TZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9hcGkvY3VzdG9tL2Zvcm1hdGlvbi5jdXN0b20tc2VsZWN0aW9uJztcblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNoYW5nZUFnZ3JlZ2F0ZUV2ZW50IGV4dGVuZHMgU3RydWN0dXJlQWdncmVnYXRlRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjdXN0b21TZWxlY3Rpb246IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnRm9ybWF0aW9uQ3VzdG9tU2VsZWN0aW9uQ2hhbmdlQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IEZvcm1hdGlvbkN1c3RvbVNlbGVjdGlvbkNoYW5nZUV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5jdXN0b21TZWxlY3Rpb24pO1xuXHR9XG59XG4iXX0=