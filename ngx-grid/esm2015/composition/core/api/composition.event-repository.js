/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
/**
 * @abstract
 */
export class CompositionEventRepository extends EventRepository {
    /**
     * @protected
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
}
CompositionEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
if (false) {
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onColumnsChanged = function (compositionId) { };
    /**
     * @abstract
     * @param {?=} compositionId
     * @return {?}
     */
    CompositionEventRepository.prototype.onContainerWidthChanged = function (compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBb0IsTUFBTSxvQkFBb0IsQ0FBQzs7OztBQVF2RixNQUFNLE9BQWdCLDBCQUEyQixTQUFRLGVBQTBEOzs7OztJQUVsSCxZQUFzQixjQUE4QjtRQUNuRCxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7O1lBTEQsVUFBVTs7OztZQVBGLGNBQWM7Ozs7Ozs7O0lBY3RCLHFGQUFvSDs7Ozs7O0lBRXBILDRGQUF1RyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRCdXMsIEV2ZW50UmVwb3NpdG9yeSwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCwgQ29tcG9zaXRpb25JZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMpIHtcblx0XHRzdXBlcihkb21haW5FdmVudEJ1cyk7XG5cdH1cblxuXHRhYnN0cmFjdCBvbkNvbHVtbnNDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQ+O1xuXG5cdGFic3RyYWN0IG9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKGNvbXBvc2l0aW9uSWQ/OiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPjtcblxufVxuIl19