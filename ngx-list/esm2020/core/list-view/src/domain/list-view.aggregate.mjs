import { AggregateRoot } from '@generic-ui/hermes';
import { ListViewCreatedAggregateEvent } from '../core/create/list-view-created.aggregate-event';
import { ListViewModeSetAggregateEvent } from '../core/mode/list-view-mode-set.aggregate-event';
import { ListViewMode } from './mode/list-view-mode';
import { SelectorVisibility } from './mode/selector-visibility';
import { ListViewSelectorToggledAggregateEvent } from '../core/mode/selector/list-view-selector-toggled.aggregate-event';
export class ListViewAggregate extends AggregateRoot {
    constructor(listViewId) {
        super(listViewId, 'ListViewAggregate');
        this.setMode(ListViewMode.LIST);
        this.initSelectorVisibility();
    }
    createEvent() {
        return ListViewCreatedAggregateEvent;
    }
    setMode(mode) {
        this.mode = mode;
        this.addEvent(new ListViewModeSetAggregateEvent(this.getId(), this.mode));
    }
    toggleModeSelector(enabled) {
        this.selectorVisibility.setEnabled(enabled);
        this.emitEventAfterSelectorVisibilityChange();
    }
    initSelectorVisibility() {
        this.selectorVisibility = new SelectorVisibility();
        this.emitEventAfterSelectorVisibilityChange();
    }
    emitEventAfterSelectorVisibilityChange() {
        this.addEvent(new ListViewSelectorToggledAggregateEvent(this.getId(), this.selectorVisibility.isVisible()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9saXN0LXZpZXcvc3JjL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0MsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDakcsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBR3pILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxhQUF5QjtJQU0vRCxZQUFZLFVBQXNCO1FBQ2pDLEtBQUssQ0FBQyxVQUFVLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsV0FBVztRQUNWLE9BQU8sNkJBQTZCLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFrQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUFnQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxzQ0FBc0MsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFTyxzQkFBc0I7UUFDN0IsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBQztJQUMvQyxDQUFDO0lBRU8sc0NBQXNDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxxQ0FBcUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3RyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVFdmVudCwgQWdncmVnYXRlRXZlbnRUeXBlLCBBZ2dyZWdhdGVSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2NvcmUvbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuYWdncmVnYXRlLWV2ZW50JztcbmltcG9ydCB7IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50IH0gZnJvbSAnLi4vY29yZS9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5hZ2dyZWdhdGUtZXZlbnQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IFNlbGVjdG9yVmlzaWJpbGl0eSB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci12aXNpYmlsaXR5JztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkQWdncmVnYXRlRXZlbnQgfSBmcm9tICcuLi9jb3JlL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuYWdncmVnYXRlLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdBZ2dyZWdhdGUgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PExpc3RWaWV3SWQ+IHtcblxuXHRwcml2YXRlIG1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRwcml2YXRlIHNlbGVjdG9yVmlzaWJpbGl0eTogU2VsZWN0b3JWaXNpYmlsaXR5O1xuXG5cdGNvbnN0cnVjdG9yKGxpc3RWaWV3SWQ6IExpc3RWaWV3SWQpIHtcblx0XHRzdXBlcihsaXN0Vmlld0lkLCAnTGlzdFZpZXdBZ2dyZWdhdGUnKTtcblx0XHR0aGlzLnNldE1vZGUoTGlzdFZpZXdNb2RlLkxJU1QpO1xuXHRcdHRoaXMuaW5pdFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHR9XG5cblx0Y3JlYXRlRXZlbnQoKTogQWdncmVnYXRlRXZlbnRUeXBlPEFnZ3JlZ2F0ZUV2ZW50PExpc3RWaWV3SWQ+PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3Q3JlYXRlZEFnZ3JlZ2F0ZUV2ZW50O1xuXHR9XG5cblx0c2V0TW9kZShtb2RlOiBMaXN0Vmlld01vZGUpOiB2b2lkIHtcblx0XHR0aGlzLm1vZGUgPSBtb2RlO1xuXHRcdHRoaXMuYWRkRXZlbnQobmV3IExpc3RWaWV3TW9kZVNldEFnZ3JlZ2F0ZUV2ZW50KHRoaXMuZ2V0SWQoKSwgdGhpcy5tb2RlKSk7XG5cdH1cblxuXHR0b2dnbGVNb2RlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LnNldEVuYWJsZWQoZW5hYmxlZCk7XG5cdFx0dGhpcy5lbWl0RXZlbnRBZnRlclNlbGVjdG9yVmlzaWJpbGl0eUNoYW5nZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBpbml0U2VsZWN0b3JWaXNpYmlsaXR5KCk6IHZvaWQge1xuXHRcdHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5ID0gbmV3IFNlbGVjdG9yVmlzaWJpbGl0eSgpO1xuXHRcdHRoaXMuZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTtcblx0fVxuXG5cdHByaXZhdGUgZW1pdEV2ZW50QWZ0ZXJTZWxlY3RvclZpc2liaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG5cdFx0dGhpcy5hZGRFdmVudChuZXcgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRBZ2dyZWdhdGVFdmVudCh0aGlzLmdldElkKCksIHRoaXMuc2VsZWN0b3JWaXNpYmlsaXR5LmlzVmlzaWJsZSgpKSk7XG5cdH1cbn1cbiJdfQ==