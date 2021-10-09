/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UniqueFilterUnselectedEvent } from './unique-filter-unselected.event';
import { StructureAggregateEvent } from '../../../../../core/domain/structure.aggregate-event';
export class UniqueFilterUnselectedAggregateEvent extends StructureAggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'UniqueFilterUnselectedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new UniqueFilterUnselectedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvdW5zZWxlY3QvdW5pcXVlLWZpbHRlci11bnNlbGVjdGVkLmFnZ3JlZ2F0ZS1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHL0YsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLHVCQUF1Qjs7OztJQUVoRixZQUFZLFdBQXdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSwyQkFBMkIsQ0FDckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUNyQixDQUFDO0lBQ0gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkRXZlbnQgfSBmcm9tICcuL3VuaXF1ZS1maWx0ZXItdW5zZWxlY3RlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdVbmlxdWVGaWx0ZXJVbnNlbGVjdGVkQWdncmVnYXRlRXZlbnQnKTtcblx0fVxuXG5cdHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+IHtcblx0XHRyZXR1cm4gbmV3IFVuaXF1ZUZpbHRlclVuc2VsZWN0ZWRFdmVudChcblx0XHRcdHRoaXMuZ2V0QWdncmVnYXRlSWQoKVxuXHRcdCk7XG5cdH1cblxufVxuIl19