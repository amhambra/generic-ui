/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SourceDomainEventPublisher } from '../../../../source/domain/source.domain-event.publisher';
import { StructureSetSummariesEnabledCommand } from './structure.set-summaries-enabled.command';
import { StructureSummariesEnabledSetEvent } from './structure.summaries-enabled-set.event';
var StructureSetSummariesEnabledCommandHandler = /** @class */ (function () {
    function StructureSetSummariesEnabledCommandHandler(structureSourceDomainEventPublisher, domainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureSetSummariesEnabledCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.domainEventPublisher.publish(new StructureSummariesEnabledSetEvent(command.getAggregateId(), enabled));
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    StructureSetSummariesEnabledCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var enabled = command.isEnabled();
        structure.setSummariesEnabled(enabled);
    };
    StructureSetSummariesEnabledCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSetSummariesEnabledCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher },
        { type: DomainEventPublisher }
    ]; };
    return StructureSetSummariesEnabledCommandHandler;
}());
export { StructureSetSummariesEnabledCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.structureSourceDomainEventPublisher;
    /**
     * @type {?}
     * @private
     */
    StructureSetSummariesEnabledCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvc2V0L3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUk1RjtJQUdDLG9EQUE2QixtQ0FBK0QsRUFDakYsb0JBQTBDO1FBRHhCLHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7UUFDakYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsK0RBQVU7OztJQUFWO1FBQ0MsT0FBTyxtQ0FBbUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFFRCx3RUFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBNEM7O1lBRXhGLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFOztZQUNsQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUV4QyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksaUNBQWlDLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFFRCxvRUFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQTRDOztZQUVwRixPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRTtRQUVuQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBekJELFVBQVU7Ozs7Z0JBTkYsMEJBQTBCO2dCQUZHLG9CQUFvQjs7SUFtQzFELGlEQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksMENBQTBDOzs7Ozs7SUFFMUMseUZBQWdGOzs7OztJQUN6RiwwRUFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtZW5hYmxlZC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZW5hYmxlZCA9IGNvbW1hbmQuaXNFbmFibGVkKCksXG5cdFx0XHRhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCksIGVuYWJsZWQpKTtcblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0c3RydWN0dXJlLnNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZCk7XG5cdH1cblxufVxuIl19