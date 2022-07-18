import { VerticalFormationPublisher } from '../api/vertical-formation.publisher';
import { VerticalFormationDispatcher } from './vertical-formation.dispatcher';
export class VerticalFormationDomainPublisher extends VerticalFormationPublisher {
    constructor(verticalFormationDispatcher) {
        super();
        this.verticalFormationDispatcher = verticalFormationDispatcher;
    }
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
VerticalFormationDomainPublisher.services = [VerticalFormationDispatcher];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvY29yZS92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXB1Ymxpc2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVqRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUc5RSxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCO0lBRS9FLFlBQTZCLDJCQUF3RDtRQUNwRixLQUFLLEVBQUUsQ0FBQztRQURvQixnQ0FBMkIsR0FBM0IsMkJBQTJCLENBQTZCO0lBRXJGLENBQUM7SUFJRCxtQkFBbUIsQ0FBQyxXQUF3QjtRQUMzQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxXQUF3QjtRQUM1QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUN0QyxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWEsRUFBRSxXQUF3QjtRQUNwRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsUUFBZ0IsRUFBRSxXQUF3QjtRQUMzRCxJQUFJLENBQUMsMkJBQTJCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O0FBeEJlLHlDQUFRLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25QdWJsaXNoZXIgfSBmcm9tICcuLi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5kaXNwYXRjaGVyJztcblxuXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25Eb21haW5QdWJsaXNoZXIgZXh0ZW5kcyBWZXJ0aWNhbEZvcm1hdGlvblB1Ymxpc2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB2ZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXI6IFZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbVmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyXTtcblxuXHRlbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyLnNldFZpcnR1YWxTY3JvbGxFbmFibGVkKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMudmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyLnNldFZpcnR1YWxTY3JvbGxFbmFibGVkKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlci5zY3JvbGxUbygwLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlci5zY3JvbGxUbyhOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2Nyb2xsVG9JbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRGlzcGF0Y2hlci5zY3JvbGxUbyhpbmRleCwgc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy52ZXJ0aWNhbEZvcm1hdGlvbkRpc3BhdGNoZXIuc2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb24sIHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=