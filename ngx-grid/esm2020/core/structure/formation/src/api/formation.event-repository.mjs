import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../../../source/src/api/source.warehouse';
import { SelectedRow } from './row-selected/selected-row';
import { SelectedRowChangedEvent } from '../core/selected-row-changed.event';
export class FormationEventRepository extends EventRepository {
    constructor(sourceWarehouse, domainEventBusTOREMOVE) {
        super();
        this.sourceWarehouse = sourceWarehouse;
        this.domainEventBusTOREMOVE = domainEventBusTOREMOVE;
        this.map = new Map();
        this.subject$ = new HermesSubject();
        this.domainEventBusTOREMOVE
            .ofEvents([
            SelectedRowChangedEvent
        ])
            .pipe(hermesSwitchMap((event) => {
            const selectedRows = event.getSelectedRows();
            const structureId = event.getAggregateId();
            return this.sourceWarehouse
                .onPreparedItems(structureId)
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
FormationEventRepository.services = [SourceWarehouse, DomainEventBus];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9zcmMvYXBpL2Zvcm1hdGlvbi5ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLGFBQWEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHNUosT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUs3RSxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBc0Q7SUFNbkcsWUFBNkIsZUFBZ0MsRUFDekMsc0JBQXNDO1FBQ3pELEtBQUssRUFBRSxDQUFDO1FBRm9CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUN6QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQWdCO1FBTHpDLFFBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBTS9DLElBQUksQ0FBQyxzQkFBc0I7YUFDekIsUUFBUSxDQUFDO1lBQ1IsdUJBQThCO1NBQzlCLENBQ0Q7YUFDQSxJQUFJLENBQ0osZUFBZSxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO1lBRWxELE1BQU0sWUFBWSxHQUFHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFM0MsT0FBTyxJQUFJLENBQUMsZUFBZTtpQkFDckIsZUFBZSxDQUFDLFdBQVcsQ0FBQztpQkFDNUIsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFDYixTQUFTLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUU7Z0JBRXRDLE1BQU0sYUFBYSxHQUFHLEVBQUUsRUFDdkIsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQ3JCLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztnQkFFMUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7Z0JBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDaEQsTUFBTSxJQUFJLEdBQWUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkQsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzNFO2dCQUVELE9BQU87b0JBQ04sRUFBRSxFQUFFLFdBQVc7b0JBQ2YsS0FBSyxFQUFFLGFBQWE7aUJBQ3BCLENBQUM7WUFDSCxDQUFDLENBQUMsQ0FDRixDQUFDO1FBQ1IsQ0FBQyxDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtZQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBSUQsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVE7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWSxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDekIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUNGLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQzs7QUFiZSxpQ0FBUSxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1N1YmplY3QsIGhlcm1lc1N3aXRjaE1hcCwgaGVybWVzVGFrZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgfSBmcm9tICcuLi9jb3JlL3NlbGVjdGVkLXJvdy1jaGFuZ2VkLmV2ZW50JztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2Uvc3JjL2RvbWFpbi9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnRSZXBvc2l0b3J5PFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCwgU3RydWN0dXJlSWQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN1YmplY3QkID0gbmV3IEhlcm1lc1N1YmplY3QoKTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNvdXJjZVdhcmVob3VzZTogU291cmNlV2FyZWhvdXNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzVE9SRU1PVkU6IERvbWFpbkV2ZW50QnVzKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMuZG9tYWluRXZlbnRCdXNUT1JFTU9WRVxuXHRcdFx0Lm9mRXZlbnRzKFtcblx0XHRcdFx0XHRTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCBhcyBhbnlcblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgoZXZlbnQ6IFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50KSA9PiB7XG5cblx0XHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSBldmVudC5nZXRTZWxlY3RlZFJvd3MoKTtcblx0XHRcdFx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5zb3VyY2VXYXJlaG91c2Vcblx0XHRcdFx0XHRcdFx0ICAgLm9uUHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKSxcblx0XHRcdFx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKGl0ZW1zOiBBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBzZWxlY3RlZEl0ZW1zID0gW10sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAgPSBuZXcgTWFwPHN0cmluZywgSXRlbUVudGl0eT4oKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpdGVtc01hcC5zZXQoaXRlbXNbaV0uZ2V0SWQoKS50b1N0cmluZygpLCBpdGVtc1tpXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VsZWN0ZWRSb3dzLmxlbmd0aDsgaiArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnN0IGl0ZW06IEl0ZW1FbnRpdHkgPSBpdGVtc01hcC5nZXQoc2VsZWN0ZWRSb3dzW2pdKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgc2VsZWN0ZWRJdGVtcy5wdXNoKG5ldyBTZWxlY3RlZFJvdyhpdGVtLmdldFNvdXJjZUl0ZW0oKSwgaiwgaXRlbS5nZXRJZCgpKSk7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGlkOiBzdHJ1Y3R1cmVJZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXM6IHNlbGVjdGVkSXRlbXNcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGUpID0+IHtcblx0XHRcdFx0dGhpcy5tYXAuc2V0KGUuaWQudG9TdHJpbmcoKSwgZS5pdGVtcyk7XG5cdFx0XHRcdHRoaXMuc3ViamVjdCQubmV4dCh0aGlzLm1hcCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTb3VyY2VXYXJlaG91c2UsIERvbWFpbkV2ZW50QnVzXSBhcyBjb25zdDtcblxuXHRvbkl0ZW1TZWxlY3RlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8U2VsZWN0ZWRSb3c+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3ViamVjdCRcblx0XHRcdFx0ICAgLnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc0ZpbHRlcigobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuaGFzKHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pLFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgobWFwOiBhbnkpID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBtYXAuZ2V0KHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19