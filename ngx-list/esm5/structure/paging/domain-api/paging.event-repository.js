/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map, switchMap, take } from 'rxjs/operators';
import { DomainEventBus } from '@generic-ui/hermes';
import { PagingWarehouse } from './paging.warehouse';
import { NextPageEvent } from '../domain/next-page/next-page.event';
import { PrevPageEvent } from '../domain/prev-page/prev-page.event';
import { PageChangedEvent } from '../domain/page/page-changed.event';
import { PagesizeChangedEvent } from '../domain/change-pagesize/pagesize-changed.event';
var PagingEventRepository = /** @class */ (function () {
    function PagingEventRepository(domainEventBus, pagingReadModelService) {
        this.domainEventBus = domainEventBus;
        this.pagingReadModelService = pagingReadModelService;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(NextPageEvent, PrevPageEvent, PageChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPage(); })), take(1));
        })));
    };
    /**
     * @param {?} structureId
     * @return {?}
     */
    PagingEventRepository.prototype.onPageSizeChange = /**
     * @param {?} structureId
     * @return {?}
     */
    function (structureId) {
        var _this = this;
        return this.domainEventBus
            .ofEvent(PagesizeChangedEvent)
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.getAggregateId().toString() === structureId.toString(); })), switchMap((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return _this.pagingReadModelService
                .onPaging(structureId)
                .pipe(map((/**
             * @param {?} paging
             * @return {?}
             */
            function (paging) { return paging.getPageSize(); })), take(1));
        })));
    };
    PagingEventRepository.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingEventRepository.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: PagingWarehouse }
    ]; };
    return PagingEventRepository;
}());
export { PagingEventRepository };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    PagingEventRepository.prototype.pagingReadModelService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluLWFwaS9wYWdpbmcuZXZlbnQtcmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUQsT0FBTyxFQUFlLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3hGO0lBR0MsK0JBQTZCLGNBQThCLEVBQ3ZDLHNCQUF1QztRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFpQjtJQUMzRCxDQUFDOzs7OztJQUVELDRDQUFZOzs7O0lBQVosVUFBYSxXQUF3QjtRQUFyQyxpQkFvQkM7UUFsQkEsT0FBTyxJQUFJLENBQUMsY0FBYzthQUNwQixPQUFPLENBQ1AsYUFBYSxFQUNiLGFBQWEsRUFDYixnQkFBZ0IsQ0FDaEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsRUFDekcsU0FBUzs7OztRQUFDLFVBQUMsS0FBK0I7WUFFekMsT0FBTyxLQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFoQixDQUFnQixFQUFDLEVBQ3pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7Ozs7O0lBRUQsZ0RBQWdCOzs7O0lBQWhCLFVBQWlCLFdBQXdCO1FBQXpDLGlCQWtCQztRQWhCQSxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLE9BQU8sQ0FDUCxvQkFBb0IsQ0FDcEI7YUFDQSxJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsS0FBK0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQTVELENBQTRELEVBQUMsRUFDekcsU0FBUzs7OztRQUFDLFVBQUMsS0FBK0I7WUFFekMsT0FBTyxLQUFJLENBQUMsc0JBQXNCO2lCQUMvQixRQUFRLENBQUMsV0FBVyxDQUFDO2lCQUNyQixJQUFJLENBQ0osR0FBRzs7OztZQUFDLFVBQUMsTUFBYyxJQUFLLE9BQUEsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFwQixDQUFvQixFQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7O2dCQS9DRCxVQUFVOzs7O2dCQVhXLGNBQWM7Z0JBRTNCLGVBQWU7O0lBMER4Qiw0QkFBQztDQUFBLEFBakRELElBaURDO1NBaERZLHFCQUFxQjs7Ozs7O0lBRXJCLCtDQUErQzs7Ozs7SUFDeEQsdURBQXdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi9wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vbGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuLi9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgUGFnZUNoYW5nZWRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9wYWdlL3BhZ2UtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBQYWdpbmcgfSBmcm9tICcuL3JlYWQvcGFnaW5nJztcbmltcG9ydCB7IFBhZ2VzaXplQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi4vZG9tYWluL2NoYW5nZS1wYWdlc2l6ZS9wYWdlc2l6ZS1jaGFuZ2VkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGFnaW5nRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdSZWFkTW9kZWxTZXJ2aWNlOiBQYWdpbmdXYXJlaG91c2UpIHtcblx0fVxuXG5cdG9uUGFnZUNoYW5nZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuZG9tYWluRXZlbnRCdXNcblx0XHRcdFx0ICAgLm9mRXZlbnQoXG5cdFx0XHRcdFx0ICAgTmV4dFBhZ2VFdmVudCxcblx0XHRcdFx0XHQgICBQcmV2UGFnZUV2ZW50LFxuXHRcdFx0XHRcdCAgIFBhZ2VDaGFuZ2VkRXZlbnRcblx0XHRcdFx0ICAgKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBmaWx0ZXIoKGV2ZW50OiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4pID0+IGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkudG9TdHJpbmcoKSA9PT0gc3RydWN0dXJlSWQudG9TdHJpbmcoKSksXG5cdFx0XHRcdFx0ICAgc3dpdGNoTWFwKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiB7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiB0aGlzLnBhZ2luZ1JlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0XHRcdCAgLm9uUGFnaW5nKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHRcdFx0XHRcdFx0ICAucGlwZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBtYXAoKHBhZ2luZzogUGFnaW5nKSA9PiBwYWdpbmcuZ2V0UGFnZSgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICB0YWtlKDEpXG5cdFx0XHRcdFx0XHRcdFx0XHQgICk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLmRvbWFpbkV2ZW50QnVzXG5cdFx0XHRcdCAgIC5vZkV2ZW50KFxuXHRcdFx0XHRcdCAgIFBhZ2VzaXplQ2hhbmdlZEV2ZW50XG5cdFx0XHRcdCAgIClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgZmlsdGVyKChldmVudDogRG9tYWluRXZlbnQ8U3RydWN0dXJlSWQ+KSA9PiBldmVudC5nZXRBZ2dyZWdhdGVJZCgpLnRvU3RyaW5nKCkgPT09IHN0cnVjdHVyZUlkLnRvU3RyaW5nKCkpLFxuXHRcdFx0XHRcdCAgIHN3aXRjaE1hcCgoZXZlbnQ6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gdGhpcy5wYWdpbmdSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdFx0XHQgIC5vblBhZ2luZyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdCAgLnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCAgbWFwKChwYWdpbmc6IFBhZ2luZykgPT4gcGFnaW5nLmdldFBhZ2VTaXplKCkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIHRha2UoMSlcblx0XHRcdFx0XHRcdFx0XHRcdCAgKTtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cbn1cbiJdfQ==