import { hermesFilter, hermesMap } from '@generic-ui/hermes';
import { SearchPhraseSetDomainEvent } from '../domain/phrase/set-phrase/search-phrase-set.domain-event';
import { SearchEventRepository } from '../api/search.event-repository';
export class SearchDomainEventRepository extends SearchEventRepository {
    constructor() {
        super();
    }
    onSearchPhrase(structureId) {
        return this.onEvent(structureId, SearchPhraseSetDomainEvent)
            .pipe(hermesFilter((event) => event.isInitial() === false), hermesMap((event) => event.getPhrase()), hermesFilter((phrase) => phrase !== null));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLXJlYWQvc2VhcmNoLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBRS9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3ZFLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBcUI7SUFFckU7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxjQUFjLENBQUMsV0FBcUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQzthQUN0RCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsS0FBaUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLEtBQUssQ0FBQyxFQUNoRixTQUFTLENBQUMsQ0FBQyxLQUFpQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsRUFDbkUsWUFBWSxDQUFDLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLENBQ2pELENBQUM7SUFDUixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2VhcmNoUGhyYXNlU2V0RG9tYWluRXZlbnQgfSBmcm9tICcuLi9kb21haW4vcGhyYXNlL3NldC1waHJhc2Uvc2VhcmNoLXBocmFzZS1zZXQuZG9tYWluLWV2ZW50JztcbmltcG9ydCB7IFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2FwaS9zZWFyY2guZXZlbnQtcmVwb3NpdG9yeSc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaERvbWFpbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIFNlYXJjaEV2ZW50UmVwb3NpdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG9uU2VhcmNoUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc3RydWN0dXJlSWQsIFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuaXNJbml0aWFsKCkgPT09IGZhbHNlKSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGV2ZW50OiBTZWFyY2hQaHJhc2VTZXREb21haW5FdmVudCkgPT4gZXZlbnQuZ2V0UGhyYXNlKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigocGhyYXNlOiBzdHJpbmcpID0+IHBocmFzZSAhPT0gbnVsbClcblx0XHRcdFx0ICAgKTtcblx0fVxufVxuIl19