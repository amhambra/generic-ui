import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
export class ConfigFilterSetEventHandler {
    constructor(filterEnabledArchive) {
        this.filterEnabledArchive = filterEnabledArchive;
    }
    forEvent() {
        return ConfigFilterSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('ConfigFilterSetEvent')) {
            this.filterEnabledArchive.next(event.getAggregateId(), event.getEnabled());
        }
    }
}
ConfigFilterSetEventHandler.services = [FilterEnabledArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi1yZWFkL2NvbmZpZy9jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBSW5GLE1BQU0sT0FBTywyQkFBMkI7SUFFdkMsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQztJQUlELFFBQVE7UUFDUCxPQUFPLG9CQUFvQixDQUFDO0lBQzdCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBMkI7UUFFakMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDaEQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7U0FDM0U7SUFFRixDQUFDOztBQVplLG9DQUFRLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb25maWcvY29uZmlnLWZpbHRlci1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBDb25maWdGaWx0ZXJTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyRW5hYmxlZEFyY2hpdmU6IEZpbHRlckVuYWJsZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbRmlsdGVyRW5hYmxlZEFyY2hpdmVdO1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxDb25maWdGaWx0ZXJTZXRFdmVudD4ge1xuXHRcdHJldHVybiBDb25maWdGaWx0ZXJTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogQ29uZmlnRmlsdGVyU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdDb25maWdGaWx0ZXJTZXRFdmVudCcpKSB7XG5cdFx0XHR0aGlzLmZpbHRlckVuYWJsZWRBcmNoaXZlLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZXZlbnQuZ2V0RW5hYmxlZCgpKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=