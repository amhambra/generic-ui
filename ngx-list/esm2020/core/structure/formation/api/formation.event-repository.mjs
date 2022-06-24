import { DomainEventBus, EventRepository, hermesFilter, hermesMap, HermesSubject, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../../source/api/source.warehouse';
import { SelectedRow } from './row-selected/selected-row';
import { SelectedRowChangedEvent } from '../domain/selected-row-changed.event';
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
FormationEventRepository.services = [SourceWarehouse, DomainEventBus];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBb0IsYUFBYSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc1SixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzFELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSy9FLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxlQUFzRDtJQU1uRyxZQUE2QixlQUFnQyxFQUN6QyxzQkFBc0M7UUFDekQsS0FBSyxFQUFFLENBQUM7UUFGb0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3pDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBZ0I7UUFMekMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFNL0MsSUFBSSxDQUFDLHNCQUFzQjthQUN6QixRQUFRLENBQUM7WUFDUix1QkFBOEI7U0FDOUIsQ0FDRDthQUNBLElBQUksQ0FDSixlQUFlLENBQUMsQ0FBQyxLQUE4QixFQUFFLEVBQUU7WUFFbEQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzdDLE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUUzQyxPQUFPLElBQUksQ0FBQyxlQUFlO2lCQUNyQixrQkFBa0IsQ0FBQyxXQUFXLENBQUM7aUJBQy9CLElBQUksQ0FDSixVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQ2IsU0FBUyxDQUFDLENBQUMsS0FBOEIsRUFBRSxFQUFFO2dCQUU1QyxNQUFNLGFBQWEsR0FBRyxFQUFFLEVBQ3ZCLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUNyQixRQUFRLEdBQUcsSUFBSSxHQUFHLEVBQTRCLENBQUM7Z0JBRWhELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO2dCQUVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ2hELE1BQU0sSUFBSSxHQUFxQixRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0U7Z0JBRUQsT0FBTztvQkFDTixFQUFFLEVBQUUsV0FBVztvQkFDZixLQUFLLEVBQUUsYUFBYTtpQkFDcEIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDUixDQUFDLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFJRCxjQUFjLENBQUMsV0FBd0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUTthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUN6QixPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDOztBQWJlLGlDQUFRLEdBQUcsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5LCBoZXJtZXNGaWx0ZXIsIGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU3ViamVjdCwgaGVybWVzU3dpdGNoTWFwLCBoZXJtZXNUYWtlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL3NvdXJjZS9hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vcm93LXNlbGVjdGVkL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsIFN0cnVjdHVyZUlkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXAgPSBuZXcgTWFwKCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdWJqZWN0JCA9IG5ldyBIZXJtZXNTdWJqZWN0KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzb3VyY2VXYXJlaG91c2U6IFNvdXJjZVdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1c1RPUkVNT1ZFOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50QnVzVE9SRU1PVkVcblx0XHRcdC5vZkV2ZW50cyhbXG5cdFx0XHRcdFx0U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQgYXMgYW55XG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNTd2l0Y2hNYXAoKGV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCkgPT4ge1xuXG5cdFx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gZXZlbnQuZ2V0U2VsZWN0ZWRSb3dzKCk7XG5cdFx0XHRcdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSBldmVudC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdCAgIC5vblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc1Rha2UoMSksXG5cdFx0XHRcdFx0XHRcdFx0ICAgaGVybWVzTWFwKChpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pID0+IHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc3Qgc2VsZWN0ZWRJdGVtcyA9IFtdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBsZW5ndGggPSBpdGVtcy5sZW5ndGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zTWFwID0gbmV3IE1hcDxzdHJpbmcsIE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdCAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgaXRlbXNNYXAuc2V0KGl0ZW1zW2ldLmdldElkKCkudG9TdHJpbmcoKSwgaXRlbXNbaV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlbGVjdGVkUm93cy5sZW5ndGg7IGogKz0gMSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zdCBpdGVtOiBPcmlnaW5JdGVtRW50aXR5ID0gaXRlbXNNYXAuZ2V0KHNlbGVjdGVkUm93c1tqXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHNlbGVjdGVkSXRlbXMucHVzaChuZXcgU2VsZWN0ZWRSb3coaXRlbS5nZXRTb3VyY2VJdGVtKCksIGosIGl0ZW0uZ2V0SWQoKSkpO1xuXHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBpZDogc3RydWN0dXJlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgIGl0ZW1zOiBzZWxlY3RlZEl0ZW1zXG5cdFx0XHRcdFx0XHRcdFx0XHQgICB9O1xuXHRcdFx0XHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdFx0XHRcdCAgICk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKChlKSA9PiB7XG5cdFx0XHRcdHRoaXMubWFwLnNldChlLmlkLnRvU3RyaW5nKCksIGUuaXRlbXMpO1xuXHRcdFx0XHR0aGlzLnN1YmplY3QkLm5leHQodGhpcy5tYXApO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU291cmNlV2FyZWhvdXNlLCBEb21haW5FdmVudEJ1c10gYXMgY29uc3Q7XG5cblx0b25JdGVtU2VsZWN0ZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PFNlbGVjdGVkUm93Pj4ge1xuXHRcdHJldHVybiB0aGlzLnN1YmplY3QkXG5cdFx0XHRcdCAgIC50b09ic2VydmFibGUoKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmhhcyhzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKG1hcDogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHQgICByZXR1cm4gbWFwLmdldChzdHJ1Y3R1cmVJZC50b1N0cmluZygpKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==