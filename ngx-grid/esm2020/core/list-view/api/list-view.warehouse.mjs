import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
export class ListViewWarehouse {
    constructor(listViewModeArchive, listViewSelectorArchive) {
        this.listViewModeArchive = listViewModeArchive;
        this.listViewSelectorArchive = listViewSelectorArchive;
    }
    onMode(id) {
        return this.listViewModeArchive.on(id);
    }
    onSelector(id) {
        return this.listViewSelectorArchive.on(id);
    }
}
ListViewWarehouse.services = [ListViewModeArchive, ListViewSelectorArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9saXN0LXZpZXcvYXBpL2xpc3Qtdmlldy53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFHckYsTUFBTSxPQUFPLGlCQUFpQjtJQUU3QixZQUE2QixtQkFBd0MsRUFDakQsdUJBQWdEO1FBRHZDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDakQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUNwRSxDQUFDO0lBSUQsTUFBTSxDQUFDLEVBQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxVQUFVLENBQUMsRUFBYztRQUN4QixPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7QUFSZSwwQkFBUSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL2xpc3Qtdmlldy5tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvckFyY2hpdmUgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LnNlbGVjdG9yLmFyY2hpdmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1dhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBsaXN0Vmlld01vZGVBcmNoaXZlOiBMaXN0Vmlld01vZGVBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3U2VsZWN0b3JBcmNoaXZlOiBMaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0xpc3RWaWV3TW9kZUFyY2hpdmUsIExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlXTtcblxuXHRvbk1vZGUoaWQ6IExpc3RWaWV3SWQpOiBIZXJtZXNPYnNlcnZhYmxlPExpc3RWaWV3TW9kZT4ge1xuXHRcdHJldHVybiB0aGlzLmxpc3RWaWV3TW9kZUFyY2hpdmUub24oaWQpO1xuXHR9XG5cblx0b25TZWxlY3RvcihpZDogTGlzdFZpZXdJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLmxpc3RWaWV3U2VsZWN0b3JBcmNoaXZlLm9uKGlkKTtcblx0fVxuXG59XG4iXX0=