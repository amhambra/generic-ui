import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../../paging/src/domain/paging.manager-factory';
import { SourceManagerFactory } from '../../../source/src/domain/source.manager-factory';
import { VerticalFormationFactory } from '../../../vertical-formation/src/domain/vertical-formation.factory';
import { SummariesManagerFactory } from '../../../summaries/src/domain/summaries.manager.factory';
import { FilterManagerFactory } from '../../../filter/src/domain/filter.manager-factory';
import { FieldCollectionFactory } from '../../../field/src/core/field-collection.factory';
import { StructureAggregate } from '../domain/structure.aggregate';
import { SorterManager } from '../../../sorting/src/domain/sorter.manager';
import { SearchManagerFactory } from '../../../search/src/domain/search.manager-factory';
import { UniqueFilterManager } from '../../../filter/src/domain/unique/unique-filter-manager';
export class StructureAggregateFactory extends AggregateFactory {
    constructor(pagingAggregateFactory, sourceManagerFactory, verticalFormationFactory, summariesManagerFactory, filterManagerFactory, searchManagerFactory, fieldCollectionFactory) {
        super();
        this.pagingAggregateFactory = pagingAggregateFactory;
        this.sourceManagerFactory = sourceManagerFactory;
        this.verticalFormationFactory = verticalFormationFactory;
        this.summariesManagerFactory = summariesManagerFactory;
        this.filterManagerFactory = filterManagerFactory;
        this.searchManagerFactory = searchManagerFactory;
        this.fieldCollectionFactory = fieldCollectionFactory;
    }
    create(structureId) {
        const paging = this.pagingAggregateFactory.createDefault(), source = this.sourceManagerFactory.createDefault(structureId), verticalFormation = this.verticalFormationFactory.create(structureId);
        const sorterContainer = new SorterManager(), filterContainer = this.filterManagerFactory.create(false), fieldContainer = this.fieldCollectionFactory.create(), summariesManager = this.summariesManagerFactory.create(structureId), searchManager = this.searchManagerFactory.create();
        const structureAggregate = new StructureAggregate(structureId, paging, source, verticalFormation, summariesManager, sorterContainer, filterContainer, new UniqueFilterManager(), searchManager, fieldContainer);
        this.init(structureAggregate);
        return structureAggregate;
    }
    init(structureAggregate) {
        structureAggregate.init();
    }
}
StructureAggregateFactory.services = [
    PagingManagerFactory, SourceManagerFactory, VerticalFormationFactory, SummariesManagerFactory,
    FilterManagerFactory, SearchManagerFactory, FieldCollectionFactory
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzlGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7SUFFL0YsWUFBNkIsc0JBQTRDLEVBQ3JELG9CQUEwQyxFQUMxQyx3QkFBa0QsRUFDbEQsdUJBQWdELEVBQ2hELG9CQUEwQyxFQUMxQyxvQkFBMEMsRUFDMUMsc0JBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBUG9CLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFbEUsQ0FBQztJQU9ELE1BQU0sQ0FBQyxXQUF3QjtRQUU5QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsYUFBYSxFQUFFLEVBQ3pELE1BQU0sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUM3RCxpQkFBaUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZFLE1BQU0sZUFBZSxHQUFrQixJQUFJLGFBQWEsRUFBRSxFQUN6RCxlQUFlLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDekQsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsRUFDckQsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFDbkUsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVwRCxNQUFNLGtCQUFrQixHQUFHLElBQUksa0JBQWtCLENBQUMsV0FBVyxFQUM1RCxNQUFNLEVBQ04sTUFBTSxFQUNOLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLGVBQWUsRUFDZixJQUFJLG1CQUFtQixFQUFFLEVBQ3pCLGFBQWEsRUFDYixjQUFjLENBQ2QsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU5QixPQUFPLGtCQUFrQixDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLENBQUMsa0JBQXNDO1FBQzFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7O0FBcENlLGtDQUFRLEdBQUc7SUFDMUIsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCO0lBQzdGLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtDQUNsRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFBhZ2luZ01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL3NyYy9kb21haW4vcGFnaW5nLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTb3VyY2VNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vdmVydGljYWwtZm9ybWF0aW9uL3NyYy9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zdW1tYXJpZXMvc3JjL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5JztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZmlsdGVyL3NyYy9kb21haW4vZmlsdGVyLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZENvbGxlY3Rpb25GYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvc3JjL2NvcmUvZmllbGQtY29sbGVjdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgU29ydGVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL3NvcnRpbmcvc3JjL2RvbWFpbi9zb3J0ZXIubWFuYWdlcic7XG5pbXBvcnQgeyBTZWFyY2hNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC9zcmMvZG9tYWluL3NlYXJjaC5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgVW5pcXVlRmlsdGVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IGV4dGVuZHMgQWdncmVnYXRlRmFjdG9yeTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdBZ2dyZWdhdGVGYWN0b3J5OiBQYWdpbmdNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VNYW5hZ2VyRmFjdG9yeTogU291cmNlTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25GYWN0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzTWFuYWdlckZhY3Rvcnk6IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlck1hbmFnZXJGYWN0b3J5OiBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYW5hZ2VyRmFjdG9yeTogU2VhcmNoTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb2xsZWN0aW9uRmFjdG9yeTogRmllbGRDb2xsZWN0aW9uRmFjdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbXG5cdFx0UGFnaW5nTWFuYWdlckZhY3RvcnksIFNvdXJjZU1hbmFnZXJGYWN0b3J5LCBWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksIFN1bW1hcmllc01hbmFnZXJGYWN0b3J5LFxuXHRcdEZpbHRlck1hbmFnZXJGYWN0b3J5LCBTZWFyY2hNYW5hZ2VyRmFjdG9yeSwgRmllbGRDb2xsZWN0aW9uRmFjdG9yeVxuXHRdO1xuXG5cdGNyZWF0ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUge1xuXG5cdFx0Y29uc3QgcGFnaW5nID0gdGhpcy5wYWdpbmdBZ2dyZWdhdGVGYWN0b3J5LmNyZWF0ZURlZmF1bHQoKSxcblx0XHRcdHNvdXJjZSA9IHRoaXMuc291cmNlTWFuYWdlckZhY3RvcnkuY3JlYXRlRGVmYXVsdChzdHJ1Y3R1cmVJZCksXG5cdFx0XHR2ZXJ0aWNhbEZvcm1hdGlvbiA9IHRoaXMudmVydGljYWxGb3JtYXRpb25GYWN0b3J5LmNyZWF0ZShzdHJ1Y3R1cmVJZCk7XG5cblx0XHRjb25zdCBzb3J0ZXJDb250YWluZXI6IFNvcnRlck1hbmFnZXIgPSBuZXcgU29ydGVyTWFuYWdlcigpLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyID0gdGhpcy5maWx0ZXJNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoZmFsc2UpLFxuXHRcdFx0ZmllbGRDb250YWluZXIgPSB0aGlzLmZpZWxkQ29sbGVjdGlvbkZhY3RvcnkuY3JlYXRlKCksXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyID0gdGhpcy5zdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeS5jcmVhdGUoc3RydWN0dXJlSWQpLFxuXHRcdFx0c2VhcmNoTWFuYWdlciA9IHRoaXMuc2VhcmNoTWFuYWdlckZhY3RvcnkuY3JlYXRlKCk7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVBZ2dyZWdhdGUgPSBuZXcgU3RydWN0dXJlQWdncmVnYXRlKHN0cnVjdHVyZUlkLFxuXHRcdFx0cGFnaW5nLFxuXHRcdFx0c291cmNlLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24sXG5cdFx0XHRzdW1tYXJpZXNNYW5hZ2VyLFxuXHRcdFx0c29ydGVyQ29udGFpbmVyLFxuXHRcdFx0ZmlsdGVyQ29udGFpbmVyLFxuXHRcdFx0bmV3IFVuaXF1ZUZpbHRlck1hbmFnZXIoKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIsXG5cdFx0XHRmaWVsZENvbnRhaW5lclxuXHRcdCk7XG5cblx0XHR0aGlzLmluaXQoc3RydWN0dXJlQWdncmVnYXRlKTtcblxuXHRcdHJldHVybiBzdHJ1Y3R1cmVBZ2dyZWdhdGU7XG5cdH1cblxuXHRpbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogdm9pZCB7XG5cdFx0c3RydWN0dXJlQWdncmVnYXRlLmluaXQoKTtcblx0fVxuXG59XG4iXX0=