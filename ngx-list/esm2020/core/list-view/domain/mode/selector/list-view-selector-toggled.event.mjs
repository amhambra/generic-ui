import { ListViewDomainEvent } from '../../list-view.domain-event';
export class ListViewSelectorToggledEvent extends ListViewDomainEvent {
    constructor(schemaId, enabled) {
        super(schemaId, enabled, 'ListViewSelectorToggledEvent');
        this.enabled = enabled;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvbGlzdC12aWV3L2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR25FLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxtQkFBbUI7SUFFcEUsWUFBWSxRQUFvQixFQUNaLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFEdEMsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3RG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9saXN0LXZpZXcuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCBleHRlbmRzIExpc3RWaWV3RG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKHNjaGVtYUlkOiBMaXN0Vmlld0lkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgZW5hYmxlZCwgJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQnKTtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG59XG4iXX0=