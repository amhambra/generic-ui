import { DomainInitializer } from '@generic-ui/hermes';
import { ListViewPublisher } from './list-view.publisher';
import { ListViewEventRepository } from './list-view.event-repository';
import { ListViewWarehouse } from './list-view.warehouse';
import { InMemoryListViewAggregateStore } from '../persist/in-memory.list-view.aggregate-store';
import { InMemoryListViewStore } from '../persist/in-memory.list-view.store';
import { ListViewDomainModule } from '../core/list-view.domain-module';
import { ListViewModeArchive } from './mode/list-view.mode.archive';
import { ListViewSelectorArchive } from './mode/selector/list-view.selector.archive';
export const listViewKey = 'ListViewKey';
export class ListViewApiModule {
    registerProviders(container) {
        container.provide(ListViewPublisher);
        container.provide(ListViewEventRepository);
        container.provide(ListViewWarehouse);
        container.provide(ListViewModeArchive);
        container.provide(ListViewSelectorArchive);
        container.provide(InMemoryListViewAggregateStore);
        container.provide(InMemoryListViewStore);
    }
}
export function initializeListView() {
    new DomainInitializer(new ListViewApiModule(), new ListViewDomainModule()).init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXJGLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFFekMsTUFBTSxPQUFPLGlCQUFpQjtJQUU3QixpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNEO0FBRUQsTUFBTSxVQUFVLGtCQUFrQjtJQUNqQyxJQUFJLGlCQUFpQixDQUFDLElBQUksaUJBQWlCLEVBQUUsRUFBRSxJQUFJLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNuRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpUHJvdmlkZXJzLCBDb250YWluZXIsIERvbWFpbkluaXRpYWxpemVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IExpc3RWaWV3UHVibGlzaGVyIH0gZnJvbSAnLi9saXN0LXZpZXcucHVibGlzaGVyJztcbmltcG9ydCB7IExpc3RWaWV3RXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcuZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBMaXN0Vmlld1dhcmVob3VzZSB9IGZyb20gJy4vbGlzdC12aWV3LndhcmVob3VzZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgfSBmcm9tICcuLi9wZXJzaXN0L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdTdG9yZSB9IGZyb20gJy4uL3BlcnNpc3QvaW4tbWVtb3J5Lmxpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2NvcmUvbGlzdC12aWV3LmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9saXN0LXZpZXcubW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlIH0gZnJvbSAnLi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy5zZWxlY3Rvci5hcmNoaXZlJztcblxuZXhwb3J0IGNvbnN0IGxpc3RWaWV3S2V5ID0gJ0xpc3RWaWV3S2V5JztcblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3QXBpTW9kdWxlIGltcGxlbWVudHMgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKExpc3RWaWV3UHVibGlzaGVyKTtcblx0XHRjb250YWluZXIucHJvdmlkZShMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoTGlzdFZpZXdXYXJlaG91c2UpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKExpc3RWaWV3TW9kZUFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKExpc3RWaWV3U2VsZWN0b3JBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEluTWVtb3J5TGlzdFZpZXdTdG9yZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVMaXN0VmlldygpOiB2b2lkIHtcblx0bmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBMaXN0Vmlld0FwaU1vZHVsZSgpLCBuZXcgTGlzdFZpZXdEb21haW5Nb2R1bGUoKSkuaW5pdCgpO1xufVxuIl19