import { VerticalFormationPublisher } from '../api/vertical-formation.publisher';
import { VerticalFormationDispatcher } from './vertical-formation.dispatcher';
export class VerticalFormationDomainPublisher extends VerticalFormationPublisher {
    verticalFormationDispatcher;
    constructor(verticalFormationDispatcher) {
        super();
        this.verticalFormationDispatcher = verticalFormationDispatcher;
    }
    static services = [VerticalFormationDispatcher];
    enableVirtualScroll(structureId) {
        this.verticalFormationDispatcher.setVirtualScrollEnabled(true, structureId);
    }
    disableVirtualScroll(structureId) {
        this.verticalFormationDispatcher.setVirtualScrollEnabled(false, structureId);
    }
    scrollToTop(structureId) {
        this.verticalFormationDispatcher.scrollTo(0, structureId);
    }
    scrollToBottom(structureId) {
        this.verticalFormationDispatcher.scrollTo(Number.MAX_SAFE_INTEGER, structureId);
    }
    scrollToIndex(index, structureId) {
        this.verticalFormationDispatcher.scrollTo(index, structureId);
    }
    setScrollPosition(position, structureId) {
        this.verticalFormationDispatcher.setScrollPosition(position, structureId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvY29yZS92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXB1Ymxpc2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc5RSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCO0lBRWxEO0lBQTdCLFlBQTZCLDJCQUF3RDtRQUNwRixLQUFLLEVBQUUsQ0FBQztRQURvQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBRXJGLENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztJQUV6RCxtQkFBbUIsQ0FBQyxXQUF3QjtRQUMzQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxXQUF3QjtRQUM1QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUN0QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxXQUF3QjtRQUNwRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBZ0IsRUFBRSxXQUF3QjtRQUMzRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciB9IGZyb20gJy4uL2FwaS92ZXJ0aWNhbC1mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlciB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkRvbWFpblB1Ymxpc2hlciBleHRlbmRzIFZlcnRpY2FsRm9ybWF0aW9uUHVibGlzaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlcjogVmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtWZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXJdO1xuXG5cdGVuYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXIuc2V0VmlydHVhbFNjcm9sbEVuYWJsZWQodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXIuc2V0VmlydHVhbFNjcm9sbEVuYWJsZWQoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyLnNjcm9sbFRvKDAsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyLnNjcm9sbFRvKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzY3JvbGxUb0luZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyLnNjcm9sbFRvKGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbjogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlci5zZXRTY3JvbGxQb3NpdGlvbihwb3NpdGlvbiwgc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==