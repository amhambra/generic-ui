/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AggregateEvent } from '@generic-ui/hermes';
import { AllUniqueFilterSelectedEvent } from './all-unique-filter-selected.event';
export class AllUniqueFilterSelectedAggregateEvent extends AggregateEvent {
    /**
     * @param {?} aggregateId
     */
    constructor(aggregateId) {
        super(aggregateId, 'AllUniqueFilterSelectedAggregateEvent');
    }
    /**
     * @return {?}
     */
    toDomainEvent() {
        return new AllUniqueFilterSelectedEvent(this.getAggregateId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLXVuaXF1ZS1maWx0ZXItc2VsZWN0ZWQuYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvc2VsZWN0LWFsbC9hbGwtdW5pcXVlLWZpbHRlci1zZWxlY3RlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQWUsTUFBTSxvQkFBb0IsQ0FBQztBQUdqRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUdsRixNQUFNLE9BQU8scUNBQXNDLFNBQVEsY0FBMkI7Ozs7SUFFckYsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLHVDQUF1QyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksNEJBQTRCLENBQ3RDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FDckIsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEFsbFVuaXF1ZUZpbHRlclNlbGVjdGVkRXZlbnQgfSBmcm9tICcuL2FsbC11bmlxdWUtZmlsdGVyLXNlbGVjdGVkLmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgQWxsVW5pcXVlRmlsdGVyU2VsZWN0ZWRBZ2dyZWdhdGVFdmVudCBleHRlbmRzIEFnZ3JlZ2F0ZUV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsICdBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBBbGxVbmlxdWVGaWx0ZXJTZWxlY3RlZEV2ZW50KFxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=