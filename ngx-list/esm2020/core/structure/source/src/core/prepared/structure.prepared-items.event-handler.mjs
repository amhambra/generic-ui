import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
export class StructurePreparedItemsEventHandler {
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    }
}
StructurePreparedItemsEventHandler.services = [StructurePreparedItemsArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvY29yZS9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUluRixNQUFNLE9BQU8sa0NBQWtDO0lBRTlDLFlBQTZCLGdDQUErRDtRQUEvRCxxQ0FBZ0MsR0FBaEMsZ0NBQWdDLENBQStCO0lBQzVGLENBQUM7SUFJRCxRQUFRO1FBQ1AsT0FBTyxpQ0FBaUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQXdDO1FBRTlDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQ0FBbUMsQ0FBQyxFQUFFO1lBRTdELE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRS9DLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xGO0lBRUYsQ0FBQzs7QUFmZSwyQ0FBUSxHQUFHLENBQUMsNkJBQTZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50IH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmVdO1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50O1xuXHR9XG5cblx0aGFuZGxlKGV2ZW50OiBTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTdHJ1Y3R1cmVQcmVwYXJlZEVudGl0aWVzU2V0RXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBwcmVwYXJlZEl0ZW1zID0gZXZlbnQuZ2V0UHJlcGFyZWRJdGVtcygpO1xuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5Lm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcHJlcGFyZWRJdGVtcyk7XG5cdFx0fVxuXG5cdH1cbn1cbiJdfQ==