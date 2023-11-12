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
    pagingAggregateFactory;
    sourceManagerFactory;
    verticalFormationFactory;
    summariesManagerFactory;
    filterManagerFactory;
    searchManagerFactory;
    fieldCollectionFactory;
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
    static services = [
        PagingManagerFactory, SourceManagerFactory, VerticalFormationFactory, SummariesManagerFactory,
        FilterManagerFactory, SearchManagerFactory, FieldCollectionFactory
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFFMUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzlGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxnQkFBaUQ7SUFFbEU7SUFDVDtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFOcEIsWUFBNkIsc0JBQTRDLEVBQ3JELG9CQUEwQyxFQUMxQyx3QkFBa0QsRUFDbEQsdUJBQWdELEVBQ2hELG9CQUEwQyxFQUMxQyxvQkFBMEMsRUFDMUMsc0JBQThDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBUG9CLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBc0I7UUFDckQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFFbEUsQ0FBQztJQUVELE1BQU0sQ0FBVSxRQUFRLEdBQUc7UUFDMUIsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCO1FBQzdGLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHNCQUFzQjtLQUNsRSxDQUFDO0lBRUYsTUFBTSxDQUFDLFdBQXdCO1FBRTlCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLEVBQUUsRUFDekQsTUFBTSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQzdELGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkUsTUFBTSxlQUFlLEdBQWtCLElBQUksYUFBYSxFQUFFLEVBQ3pELGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUN6RCxjQUFjLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxFQUNyRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUNuRSxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXBELE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxXQUFXLEVBQzVELE1BQU0sRUFDTixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsZUFBZSxFQUNmLElBQUksbUJBQW1CLEVBQUUsRUFDekIsYUFBYSxFQUNiLGNBQWMsQ0FDZCxDQUFDO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTlCLE9BQU8sa0JBQWtCLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksQ0FBQyxrQkFBc0M7UUFDMUMsa0JBQWtCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBQYWdpbmdNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3BhZ2luZy9zcmMvZG9tYWluL3BhZ2luZy5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvc3JjL2RvbWFpbi9zb3VyY2UubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL3ZlcnRpY2FsLWZvcm1hdGlvbi9zcmMvZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFN1bW1hcmllc01hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vc3VtbWFyaWVzL3NyYy9kb21haW4vc3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZpbHRlci9zcmMvZG9tYWluL2ZpbHRlci5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL3NyYy9jb3JlL2ZpZWxkLWNvbGxlY3Rpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IFNvcnRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9zb3J0aW5nL3NyYy9kb21haW4vc29ydGVyLm1hbmFnZXInO1xuaW1wb3J0IHsgU2VhcmNoTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuLi8uLi8uLi9zZWFyY2gvc3JjL2RvbWFpbi9zZWFyY2gubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi9maWx0ZXIvc3JjL2RvbWFpbi91bmlxdWUvdW5pcXVlLWZpbHRlci1tYW5hZ2VyJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U3RydWN0dXJlSWQsIFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcGFnaW5nQWdncmVnYXRlRmFjdG9yeTogUGFnaW5nTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc291cmNlTWFuYWdlckZhY3Rvcnk6IFNvdXJjZU1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeTogVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcmllc01hbmFnZXJGYWN0b3J5OiBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJNYW5hZ2VyRmFjdG9yeTogRmlsdGVyTWFuYWdlckZhY3RvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoTWFuYWdlckZhY3Rvcnk6IFNlYXJjaE1hbmFnZXJGYWN0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29sbGVjdGlvbkZhY3Rvcnk6IEZpZWxkQ29sbGVjdGlvbkZhY3RvcnkpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1xuXHRcdFBhZ2luZ01hbmFnZXJGYWN0b3J5LCBTb3VyY2VNYW5hZ2VyRmFjdG9yeSwgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5LCBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSxcblx0XHRGaWx0ZXJNYW5hZ2VyRmFjdG9yeSwgU2VhcmNoTWFuYWdlckZhY3RvcnksIEZpZWxkQ29sbGVjdGlvbkZhY3Rvcnlcblx0XTtcblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3RydWN0dXJlQWdncmVnYXRlIHtcblxuXHRcdGNvbnN0IHBhZ2luZyA9IHRoaXMucGFnaW5nQWdncmVnYXRlRmFjdG9yeS5jcmVhdGVEZWZhdWx0KCksXG5cdFx0XHRzb3VyY2UgPSB0aGlzLnNvdXJjZU1hbmFnZXJGYWN0b3J5LmNyZWF0ZURlZmF1bHQoc3RydWN0dXJlSWQpLFxuXHRcdFx0dmVydGljYWxGb3JtYXRpb24gPSB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeS5jcmVhdGUoc3RydWN0dXJlSWQpO1xuXG5cdFx0Y29uc3Qgc29ydGVyQ29udGFpbmVyOiBTb3J0ZXJNYW5hZ2VyID0gbmV3IFNvcnRlck1hbmFnZXIoKSxcblx0XHRcdGZpbHRlckNvbnRhaW5lciA9IHRoaXMuZmlsdGVyTWFuYWdlckZhY3RvcnkuY3JlYXRlKGZhbHNlKSxcblx0XHRcdGZpZWxkQ29udGFpbmVyID0gdGhpcy5maWVsZENvbGxlY3Rpb25GYWN0b3J5LmNyZWF0ZSgpLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlciA9IHRoaXMuc3VtbWFyaWVzTWFuYWdlckZhY3RvcnkuY3JlYXRlKHN0cnVjdHVyZUlkKSxcblx0XHRcdHNlYXJjaE1hbmFnZXIgPSB0aGlzLnNlYXJjaE1hbmFnZXJGYWN0b3J5LmNyZWF0ZSgpO1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlQWdncmVnYXRlID0gbmV3IFN0cnVjdHVyZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVJZCxcblx0XHRcdHBhZ2luZyxcblx0XHRcdHNvdXJjZSxcblx0XHRcdHZlcnRpY2FsRm9ybWF0aW9uLFxuXHRcdFx0c3VtbWFyaWVzTWFuYWdlcixcblx0XHRcdHNvcnRlckNvbnRhaW5lcixcblx0XHRcdGZpbHRlckNvbnRhaW5lcixcblx0XHRcdG5ldyBVbmlxdWVGaWx0ZXJNYW5hZ2VyKCksXG5cdFx0XHRzZWFyY2hNYW5hZ2VyLFxuXHRcdFx0ZmllbGRDb250YWluZXJcblx0XHQpO1xuXG5cdFx0dGhpcy5pbml0KHN0cnVjdHVyZUFnZ3JlZ2F0ZSk7XG5cblx0XHRyZXR1cm4gc3RydWN0dXJlQWdncmVnYXRlO1xuXHR9XG5cblx0aW5pdChzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSk6IHZvaWQge1xuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5pbml0KCk7XG5cdH1cblxufVxuIl19