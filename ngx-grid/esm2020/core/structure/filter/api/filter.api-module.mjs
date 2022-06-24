import { DomainInitializer } from '@generic-ui/hermes';
import { FilterPublisher } from './filter.publisher';
import { FilterDomainModule } from '../domain/filter.domain-module';
import { FilterWarehouse } from './filter.warehouse';
import { UniqueValueCollectionArchive } from '../domain-read/unique/unique-value-collection.archive';
import { FilterEnabledArchive } from '../domain-read/config/filter-enabled.archive';
import { QuickFilterEnabledArchive } from '../domain-read/quick-filter/quick-filter-enabled.archive';
import { FilterDomainWarehouse } from '../domain-read/filter.domain-warehouse';
import { FilterDomainPublisher } from '../domain/filter.domain-publisher';
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
export const filterInitializer = new DomainInitializer(new FilterApiModule(), new FilterDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9hcGkvZmlsdGVyLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDckcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDckcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFHMUUsTUFBTSxPQUFPLGVBQWU7SUFFM0IsaUJBQWlCLENBQUMsU0FBb0I7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUMxRCxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFELFNBQVMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDeEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksZUFBZSxFQUFFLEVBQUUsSUFBSSxrQkFBa0IsRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlQcm92aWRlcnMsIENvbnRhaW5lciwgRG9tYWluSW5pdGlhbGl6ZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWx0ZXJQdWJsaXNoZXIgfSBmcm9tICcuL2ZpbHRlci5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluTW9kdWxlIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4vZmlsdGVyLndhcmVob3VzZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb25BcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvdW5pcXVlL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tcmVhZC9jb25maWcvZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvcXVpY2stZmlsdGVyL3F1aWNrLWZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZmlsdGVyLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgRmlsdGVyRG9tYWluUHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2ZpbHRlci5kb21haW4tcHVibGlzaGVyJztcbmltcG9ydCB7IEZpbHRlckludGVncmF0aW9uIH0gZnJvbSAnLi4vYXBpLWludGVncmF0aW9uL2ZpbHRlci5pbnRlZ3JhdGlvbic7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckFwaU1vZHVsZSBpbXBsZW1lbnRzIEFwaVByb3ZpZGVycyB7XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJQdWJsaXNoZXIsIEZpbHRlckRvbWFpblB1Ymxpc2hlcik7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmlsdGVyV2FyZWhvdXNlLCBGaWx0ZXJEb21haW5XYXJlaG91c2UpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFVuaXF1ZVZhbHVlQ29sbGVjdGlvbkFyY2hpdmUpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZpbHRlckVuYWJsZWRBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWx0ZXJJbnRlZ3JhdGlvbik7XG5cdH1cbn1cblxuZXhwb3J0IGNvbnN0IGZpbHRlckluaXRpYWxpemVyID0gbmV3IERvbWFpbkluaXRpYWxpemVyKG5ldyBGaWx0ZXJBcGlNb2R1bGUoKSwgbmV3IEZpbHRlckRvbWFpbk1vZHVsZSgpKTtcblxuIl19