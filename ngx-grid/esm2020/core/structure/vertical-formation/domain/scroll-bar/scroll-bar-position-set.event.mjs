import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export class ScrollBarPositionSetEvent extends StructureDomainEvent {
    constructor(aggregateId, position) {
        super(aggregateId, position, 'ScrollBarPositionSetEvent');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9kb21haW4vc2Nyb2xsLWJhci9zY3JvbGwtYmFyLXBvc2l0aW9uLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixNQUFNLE9BQU8seUJBQTBCLFNBQVEsb0JBQW9CO0lBRWxFLFlBQVksV0FBd0IsRUFDaEIsUUFBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUR2QyxhQUFRLEdBQVIsUUFBUSxDQUFRO0lBRXBDLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2Nyb2xsQmFyUG9zaXRpb25TZXRFdmVudCBleHRlbmRzIFN0cnVjdHVyZURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb246IG51bWJlcikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBwb3NpdGlvbiwgJ1Njcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb247XG5cdH1cbn1cbiJdfQ==