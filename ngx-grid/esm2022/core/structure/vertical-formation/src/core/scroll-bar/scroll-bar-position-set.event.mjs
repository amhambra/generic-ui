import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export class ScrollBarPositionSetEvent extends StructureDomainEvent {
    position;
    constructor(aggregateId, position) {
        super(aggregateId, position, 'ScrollBarPositionSetEvent');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWJhci1wb3NpdGlvbi1zZXQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvY29yZS9zY3JvbGwtYmFyL3Njcm9sbC1iYXItcG9zaXRpb24tc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWxHLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxvQkFBb0I7SUFHOUM7SUFEcEIsWUFBWSxXQUF3QixFQUNoQixRQUFnQjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBRHZDLGFBQVEsR0FBUixRQUFRLENBQVE7SUFFcEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFNjcm9sbEJhclBvc2l0aW9uU2V0RXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXIpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgcG9zaXRpb24sICdTY3JvbGxCYXJQb3NpdGlvblNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbigpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBvc2l0aW9uO1xuXHR9XG59XG4iXX0=