import { ListViewDispatcher } from '../core/list-view.dispatcher';
import { listViewGlobalId } from './global/list-view.global-id';
export class ListViewPublisher {
    constructor(listViewDispatcher) {
        this.listViewDispatcher = listViewDispatcher;
    }
    create(listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.create(listViewReadModelRootId.toAggregateId());
    }
    setMode(mode, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.setMode(mode, listViewReadModelRootId.toAggregateId());
    }
    toggleSelector(enabled, listViewReadModelRootId = listViewGlobalId) {
        this.listViewDispatcher.toggleSelector(enabled, listViewReadModelRootId.toAggregateId());
    }
}
ListViewPublisher.services = [ListViewDispatcher];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LnB1Ymxpc2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9saXN0LXZpZXcvc3JjL2FwaS9saXN0LXZpZXcucHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBS2hFLE1BQU0sT0FBTyxpQkFBaUI7SUFFN0IsWUFBNkIsa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFDbkUsQ0FBQztJQUlELE1BQU0sQ0FBQywwQkFBbUQsZ0JBQWdCO1FBQ3pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQWtCLEVBQUUsMEJBQW1ELGdCQUFnQjtRQUM5RixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSx1QkFBdUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSwwQkFBbUQsZ0JBQWdCO1FBQ25HLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7QUFaZSwwQkFBUSxHQUFHLENBQUMsa0JBQWtCLENBQVUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3RGlzcGF0Y2hlciB9IGZyb20gJy4uL2NvcmUvbGlzdC12aWV3LmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdHbG9iYWxJZCB9IGZyb20gJy4vZ2xvYmFsL2xpc3Qtdmlldy5nbG9iYWwtaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2dsb2JhbC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdQdWJsaXNoZXIgaW1wbGVtZW50cyBQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdEaXNwYXRjaGVyOiBMaXN0Vmlld0Rpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtMaXN0Vmlld0Rpc3BhdGNoZXJdIGFzIGNvbnN0O1xuXG5cdGNyZWF0ZShsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgPSBsaXN0Vmlld0dsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5saXN0Vmlld0Rpc3BhdGNoZXIuY3JlYXRlKGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkID0gbGlzdFZpZXdHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMubGlzdFZpZXdEaXNwYXRjaGVyLnNldE1vZGUobW9kZSwgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHRvZ2dsZVNlbGVjdG9yKGVuYWJsZWQ6IGJvb2xlYW4sIGxpc3RWaWV3UmVhZE1vZGVsUm9vdElkOiBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCA9IGxpc3RWaWV3R2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmxpc3RWaWV3RGlzcGF0Y2hlci50b2dnbGVTZWxlY3RvcihlbmFibGVkLCBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cbn1cbiJdfQ==