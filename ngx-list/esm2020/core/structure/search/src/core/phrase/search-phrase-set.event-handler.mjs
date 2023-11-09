import { SearchPhraseArchive } from './search-phrase.archive';
import { SearchPhraseSetDomainEvent } from './set-phrase/search-phrase-set.domain-event';
export class SearchPhraseSetEventHandler {
    constructor(searchPhraseRepository) {
        this.searchPhraseRepository = searchPhraseRepository;
    }
    forEvent() {
        return SearchPhraseSetDomainEvent;
    }
    handle(event) {
        if (event.ofMessageType('SearchPhraseSetDomainEvent')) {
            this.searchPhraseRepository.next(event.getAggregateId(), event.getPhrase());
        }
    }
}
SearchPhraseSetEventHandler.services = [SearchPhraseArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBocmFzZS1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9jb3JlL3BocmFzZS9zZWFyY2gtcGhyYXNlLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSXpGLE1BQU0sT0FBTywyQkFBMkI7SUFFdkMsWUFBNkIsc0JBQTJDO1FBQTNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7SUFDeEUsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBaUM7UUFFdkMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7U0FDNUU7SUFDRixDQUFDOztBQVhlLG9DQUFRLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VBcmNoaXZlIH0gZnJvbSAnLi9zZWFyY2gtcGhyYXNlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU2VhcmNoUGhyYXNlU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoUGhyYXNlUmVwb3NpdG9yeTogU2VhcmNoUGhyYXNlQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1NlYXJjaFBocmFzZUFyY2hpdmVdO1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudD4ge1xuXHRcdHJldHVybiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCcpKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBocmFzZVJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5nZXRQaHJhc2UoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==