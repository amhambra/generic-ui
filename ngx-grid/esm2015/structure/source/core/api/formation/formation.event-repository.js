import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { SelectedRowChangedEvent } from '../../domain/formation/selected-row-changed.event';
export class FormationEventRepository extends EventRepository {
    constructor(domainEventBus, sourceWarehouse) {
        super(domainEventBus);
        this.sourceWarehouse = sourceWarehouse;
        this.map = new Map();
        this.subject$ = new HermesSubject();
        domainEventBus
            .ofEvents([
            SelectedRowChangedEvent
        ])
            .pipe(hermesSwitchMap((event) => {
            const selectedRows = event.getSelectedRows();
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedEntities(structureId)
                .pipe(hermesTake(1), hermesMap((items) => {
                const selectedItems = [], length = items.length, itemsMap = new Map();
                for (let i = 0; i < length; i += 1) {
                    itemsMap.set(items[i].getId().toString(), items[i]);
                }
                for (let j = 0; j < selectedRows.length; j += 1) {
                    const item = itemsMap.get(selectedRows[j]);
                    selectedItems.push(new SelectedRow(item.getSourceItem(), j, item.getId()));
                }
                return {
                    id: structureId,
                    items: selectedItems
                };
            }));
        }))
            .subscribe((e) => {
            this.map.set(e.id.toString(), e.items);
            this.subject$.next(this.map);
        });
    }
    onItemSelected(structureId) {
        return this.subject$
            .toObservable()
            .pipe(hermesFilter((map) => {
            return map.has(structureId.toString());
        }), hermesMap((map) => {
            return map.get(structureId.toString());
        }));
    }
}
FormationEventRepository.decorators = [
    { type: Injectable }
];
FormationEventRepository.ctorParameters = () => [
    { type: DomainEventBus },
    { type: SourceWarehouse }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBTTVGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFzRDtJQU1uRyxZQUFZLGNBQThCLEVBQ3RCLGVBQWdDO1FBQ25ELEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQURILG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUxuQyxRQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUVoQixhQUFRLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQU0vQyxjQUFjO2FBQ1osUUFBUSxDQUFDO1lBQ1IsdUJBQThCO1NBQzlCLENBQ0Q7YUFDQSxJQUFJLENBQ0osZUFBZSxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBRWxELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0MsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDckIsa0JBQWtCLENBQUMsV0FBVyxDQUFDO2lCQUMvQixJQUFJLENBQ0osVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUNiLFNBQVMsQ0FBQyxDQUFDLEtBQThCLEVBQUUsRUFBRTtnQkFFNUMsTUFBTSxhQUFhLEdBQUcsRUFBRSxFQUN2QixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFDckIsUUFBUSxHQUFHLElBQUksR0FBRyxFQUE0QixDQUFDO2dCQUVoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ25DLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNoRCxNQUFNLElBQUksR0FBcUIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2dCQUVELE9BQU87b0JBQ04sRUFBRSxFQUFFLFdBQVc7b0JBQ2YsS0FBSyxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FDRixDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7O1lBbEVELFVBQVU7OztZQVZGLGNBQWM7WUFHZCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5LCBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzU3dpdGNoTWFwLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtYXRpb25FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBFdmVudFJlcG9zaXRvcnk8U3RydWN0dXJlUmVhZE1vZGVsUm9vdElkLCBTdHJ1Y3R1cmVJZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbWFwID0gbmV3IE1hcCgpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3ViamVjdCQgPSBuZXcgSGVybWVzU3ViamVjdCgpO1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSkge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblxuXHRcdGRvbWFpbkV2ZW50QnVzXG5cdFx0XHQub2ZFdmVudHMoW1xuXHRcdFx0XHRcdFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50IGFzIGFueVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzU3dpdGNoTWFwKChldmVudDogU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQpID0+IHtcblxuXHRcdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IGV2ZW50LmdldFNlbGVjdGVkUm93cygpO1xuXHRcdFx0XHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gZXZlbnQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnNvdXJjZVdhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNUYWtlKDEpLFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHNlbGVjdGVkSXRlbXMgPSBbXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcCA9IG5ldyBNYXA8c3RyaW5nLCBPcmlnaW5JdGVtRW50aXR5PigpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwLnNldChpdGVtc1tpXS5nZXRJZCgpLnRvU3RyaW5nKCksIGl0ZW1zW2ldKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWxlY3RlZFJvd3MubGVuZ3RoOyBqICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3QgaXRlbTogT3JpZ2luSXRlbUVudGl0eSA9IGl0ZW1zTWFwLmdldChzZWxlY3RlZFJvd3Nbal0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBzZWxlY3RlZEl0ZW1zLnB1c2gobmV3IFNlbGVjdGVkUm93KGl0ZW0uZ2V0U291cmNlSXRlbSgpLCBqLCBpdGVtLmdldElkKCkpKTtcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaWQ6IHN0cnVjdHVyZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtczogc2VsZWN0ZWRJdGVtc1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfTtcblx0XHRcdFx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHRcdFx0XHQgICApO1xuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoZSkgPT4ge1xuXHRcdFx0XHR0aGlzLm1hcC5zZXQoZS5pZC50b1N0cmluZygpLCBlLml0ZW1zKTtcblx0XHRcdFx0dGhpcy5zdWJqZWN0JC5uZXh0KHRoaXMubWFwKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PFNlbGVjdGVkUm93Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmhhcyhzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==