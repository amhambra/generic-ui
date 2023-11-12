import { DomainInitializer } from '@generic-ui/hermes';
import { FilterPublisher } from './filter.publisher';
import { FilterDomainModule } from '../core/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { UniqueValueCollectionArchive } from '../core-read/unique/unique-value-collection.archive';
import { FilterEnabledArchive } from '../core-read/config/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../core-read/quick-filter/quick-filter-enabled.archive';
import { FilterDomainWarehouse } from '../core-read/filter.domain-warehouse';
import { FilterDomainPublisher } from '../core/filter.domain-publisher';
import { FilterIntegration } from '../api-integration/filter.integration';
export class FilterApiModule {
    registerProviders(container) {
        container.provide(FilterPublisher, FilterDomainPublisher);
        container.provide(FilterWarehouse, FilterDomainWarehouse);
        container.provide(UniqueValueCollectionArchive);
        container.provide(FilterEnabledArchive);
        container.provide(QuickFilterEnabledArchive);
        container.provide(FilterIntegration);
    }
}
export function initializeFilter() {
    new DomainInitializer(new FilterApiModule(), new FilterDomainModule()).init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMkIsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzFFLE1BQU0sT0FBTyxlQUFlO0lBRTNCLGlCQUFpQixDQUFDLFNBQW9CO1FBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDMUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hDLFNBQVMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxTQUFTLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNEO0FBRUQsTUFBTSxVQUFVLGdCQUFnQjtJQUMvQixJQUFJLGlCQUFpQixDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0UsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVByb3ZpZGVycywgQ29udGFpbmVyLCBEb21haW5Jbml0aWFsaXplciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4vZmlsdGVyLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBGaWx0ZXJEb21haW5Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4vZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25BcmNoaXZlIH0gZnJvbSAnLi4vY29yZS1yZWFkL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS1yZWFkL2NvbmZpZy9maWx0ZXItZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9jb3JlLXJlYWQvcXVpY2stZmlsdGVyL3F1aWNrLWZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vY29yZS1yZWFkL2ZpbHRlci5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IEZpbHRlckRvbWFpblB1Ymxpc2hlciB9IGZyb20gJy4uL2NvcmUvZmlsdGVyLmRvbWFpbi1wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmlsdGVySW50ZWdyYXRpb24gfSBmcm9tICcuLi9hcGktaW50ZWdyYXRpb24vZmlsdGVyLmludGVncmF0aW9uJztcblxuXG5leHBvcnQgY2xhc3MgRmlsdGVyQXBpTW9kdWxlIGltcGxlbWVudHMgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZpbHRlclB1Ymxpc2hlciwgRmlsdGVyRG9tYWluUHVibGlzaGVyKTtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJXYXJlaG91c2UsIEZpbHRlckRvbWFpbldhcmVob3VzZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoVW5pcXVlVmFsdWVDb2xsZWN0aW9uQXJjaGl2ZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmlsdGVyRW5hYmxlZEFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFF1aWNrRmlsdGVyRW5hYmxlZEFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZpbHRlckludGVncmF0aW9uKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUZpbHRlcigpOiB2b2lkIHtcblx0bmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBGaWx0ZXJBcGlNb2R1bGUoKSwgbmV3IEZpbHRlckRvbWFpbk1vZHVsZSgpKS5pbml0KCk7XG59XG4iXX0=