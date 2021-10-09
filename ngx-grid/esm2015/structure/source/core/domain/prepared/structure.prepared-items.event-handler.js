/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructurePreparedEntitiesSetEvent } from '../../domain/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
export class StructurePreparedItemsEventHandler {
    /**
     * @param {?} structurePreparedItemsRepository
     */
    constructor(structurePreparedItemsRepository) {
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return StructurePreparedEntitiesSetEvent;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('StructurePreparedEntitiesSetEvent')) {
            /** @type {?} */
            const preparedItems = event.getPreparedItems();
            this.structurePreparedItemsRepository.next(event.getAggregateId(), preparedItems);
        }
    }
}
StructurePreparedItemsEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StructurePreparedItemsEventHandler.ctorParameters = () => [
    { type: StructurePreparedItemsArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructurePreparedItemsEventHandler.prototype.structurePreparedItemsRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDaEgsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLbkYsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUU5QyxZQUFvQixnQ0FBK0Q7UUFBL0QscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUErQjtJQUNuRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8saUNBQWlDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBd0M7UUFFOUMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7O2tCQUV2RCxhQUFhLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUFFO1lBRTlDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ2xGO0lBRUYsQ0FBQzs7O1lBbkJELFVBQVU7Ozs7WUFKRiw2QkFBNkI7Ozs7Ozs7SUFPekIsOEVBQXVFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9wcmVwYXJlZC9zdHJ1Y3R1cmUucHJlcGFyZWQtZW50aXRpZXMtc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHJlcGFyZWQtaXRlbXMuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVByZXBhcmVkSXRlbXNFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnk6IFN0cnVjdHVyZVByZXBhcmVkSXRlbXNBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFN0cnVjdHVyZVByZXBhcmVkRW50aXRpZXNTZXRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU3RydWN0dXJlUHJlcGFyZWRFbnRpdGllc1NldEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgcHJlcGFyZWRJdGVtcyA9IGV2ZW50LmdldFByZXBhcmVkSXRlbXMoKTtcblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHByZXBhcmVkSXRlbXMpO1xuXHRcdH1cblxuXHR9XG59XG4iXX0=