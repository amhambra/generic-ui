import { DomainInitializer } from '@generic-ui/hermes';
import { PagingPublisher } from './paging.publisher';
import { PagingWarehouse } from './paging.warehouse';
import { PagingEventRepository } from './paging.event-repository';
import { PagingDomainModule } from '../core/paging.domain-module';
import { PagingConverter } from '../core-read/paging.converter';
import { PagingRepository } from '../core-read/paging.repository';
import { PagingDomainWarehouse } from '../core-read/paging.domain-warehouse';
import { PagingDomainPublisher } from '../core/paging.domain-publisher';
import { PagingDomainEventRepository } from '../core-read/paging.domain.event-repository';
export class PagingApiModule {
    registerProviders(container) {
        container.provide(PagingPublisher, PagingDomainPublisher);
        container.provide(PagingWarehouse, PagingDomainWarehouse);
        container.provide(PagingEventRepository, PagingDomainEventRepository);
        container.provide(PagingRepository);
        container.provide(PagingConverter);
    }
}
export function initializePaging() {
    new DomainInitializer(new PagingApiModule(), new PagingDomainModule()).init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUcxRixNQUFNLE9BQU8sZUFBZTtJQUUzQixpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQ3RFLFNBQVMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNwQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRDtBQUVELE1BQU0sVUFBVSxnQkFBZ0I7SUFDL0IsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLGVBQWUsRUFBRSxFQUFFLElBQUksa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9FLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlQcm92aWRlcnMsIENvbnRhaW5lciwgRG9tYWluSW5pdGlhbGl6ZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdQdWJsaXNoZXIgfSBmcm9tICcuL3BhZ2luZy5wdWJsaXNoZXInO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgUGFnaW5nRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vY29yZS9wYWdpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBQYWdpbmdDb252ZXJ0ZXIgfSBmcm9tICcuLi9jb3JlLXJlYWQvcGFnaW5nLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBQYWdpbmdSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29yZS1yZWFkL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUtcmVhZC9wYWdpbmcuZG9tYWluLXdhcmVob3VzZSc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5QdWJsaXNoZXIgfSBmcm9tICcuLi9jb3JlL3BhZ2luZy5kb21haW4tcHVibGlzaGVyJztcbmltcG9ydCB7IFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uL2NvcmUtcmVhZC9wYWdpbmcuZG9tYWluLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdBcGlNb2R1bGUgaW1wbGVtZW50cyBBcGlQcm92aWRlcnMge1xuXG5cdHJlZ2lzdGVyUHJvdmlkZXJzKGNvbnRhaW5lcjogQ29udGFpbmVyKTogdm9pZCB7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoUGFnaW5nUHVibGlzaGVyLCBQYWdpbmdEb21haW5QdWJsaXNoZXIpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFBhZ2luZ1dhcmVob3VzZSwgUGFnaW5nRG9tYWluV2FyZWhvdXNlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShQYWdpbmdFdmVudFJlcG9zaXRvcnksIFBhZ2luZ0RvbWFpbkV2ZW50UmVwb3NpdG9yeSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoUGFnaW5nUmVwb3NpdG9yeSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoUGFnaW5nQ29udmVydGVyKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVBhZ2luZygpOiB2b2lkIHtcblx0bmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBQYWdpbmdBcGlNb2R1bGUoKSwgbmV3IFBhZ2luZ0RvbWFpbk1vZHVsZSgpKS5pbml0KCk7XG59XG4iXX0=