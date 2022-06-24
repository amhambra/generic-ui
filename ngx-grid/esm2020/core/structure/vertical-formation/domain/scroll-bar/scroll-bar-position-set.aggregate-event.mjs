import { StructureAggregateEvent } from '../../../core/domain/structure.aggregate-event';
import { ScrollBarPositionSetEvent } from './scroll-bar-position-set.event';
export class ScrollBarPositionSetAggregateEvent extends StructureAggregateEvent {
    constructor(schemaId, position) {
        super(schemaId, 'ScrollBarPositionSetAggregateEvent');
        this.position = position;
    }
    toDomainEvent() {
        return new ScrollBarPositionSetEvent(this.getAggregateId(), this.position);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZG9tYWluL3Njcm9sbC1iYXIvc2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuYWdncmVnYXRlLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzVFLE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSx1QkFBdUI7SUFFOUUsWUFBWSxRQUFxQixFQUNiLFFBQWdCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQURuQyxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBRXBDLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUUsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQgfSBmcm9tICcuL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIFN0cnVjdHVyZUFnZ3JlZ2F0ZUV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2Nyb2xsQmFyUG9zaXRpb25TZXRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCh0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksIHRoaXMucG9zaXRpb24pO1xuXHR9XG59XG4iXX0=