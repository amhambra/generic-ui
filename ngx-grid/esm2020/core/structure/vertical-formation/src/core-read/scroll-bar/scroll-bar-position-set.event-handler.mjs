import { VerticalFormationScrollBarPositionArchive } from './vertical-formation.scroll-bar-position.archive';
import { ScrollBarPositionSetEvent } from '../../core/scroll-bar/scroll-bar-position-set.event';
export class ScrollBarPositionSetEventHandler {
    constructor(positionRepository) {
        this.positionRepository = positionRepository;
    }
    forEvent() {
        return ScrollBarPositionSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ScrollBarPositionSetEvent')) {
            this.positionRepository.next(event.getAggregateId(), event.getPosition());
        }
    }
}
ScrollBarPositionSetEventHandler.services = [VerticalFormationScrollBarPositionArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NyYy9jb3JlLXJlYWQvc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSx5Q0FBeUMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBSWhHLE1BQU0sT0FBTyxnQ0FBZ0M7SUFFNUMsWUFBNkIsa0JBQTZEO1FBQTdELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkM7SUFDMUYsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBZ0M7UUFFdEMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLEVBQUU7WUFDckQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDMUU7SUFFRixDQUFDOztBQVplLHlDQUFRLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnNjcm9sbC1iYXItcG9zaXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9zY3JvbGwtYmFyL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uUmVwb3NpdG9yeTogVmVydGljYWxGb3JtYXRpb25TY3JvbGxCYXJQb3NpdGlvbkFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZV0gYXMgY29uc3Q7XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Njcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5wb3NpdGlvblJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRQb3NpdGlvbigpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=