/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Override } from '../../../../../common/cdk/decorators';
import { CompositionCommandDispatcher } from '../../../../composition/ui-api/composition.command-dispatcher';
import { CompositionId } from '../../../../composition/domain/composition.id';
import { CompositionDispatcher } from '../../../../composition/domain/composition.dispatcher';
import { compositionGlobalId } from '../../../../composition/ui-api/composition.global-id';
import { ColumnDefinitionId } from '../../../../composition/read/definition/column-definition-id';
export class LocalCompositionCommandDispatcher extends CompositionCommandDispatcher {
    /**
     * @param {?} compositionId
     * @param {?} compositionDispatcher
     */
    constructor(compositionId, compositionDispatcher) {
        super(compositionDispatcher);
        this.compositionId = compositionId;
    }
    /**
     * @param {?=} compositionId
     * @return {?}
     */
    createComposition(compositionId = compositionGlobalId) {
        super.createComposition(this.compositionId);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    setColumns(params) {
        super.setColumns(params, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setWidth(width, compositionId = compositionGlobalId) {
        super.setWidth(width, this.compositionId);
    }
    /**
     * @param {?} width
     * @param {?=} compositionId
     * @return {?}
     */
    setContainerWidth(width, compositionId = compositionGlobalId) {
        super.setContainerWidth(width, this.compositionId);
    }
    /**
     * @param {?} enabled
     * @param {?=} compositionId
     * @return {?}
     */
    setResizeWidth(enabled, compositionId = compositionGlobalId) {
        super.setResizeWidth(enabled, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    enableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.enableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    disableColumn(columnDefId, compositionId = compositionGlobalId) {
        super.disableColumn(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveLeft(columnDefId, compositionId = compositionGlobalId) {
        super.moveLeft(columnDefId, this.compositionId);
    }
    /**
     * @param {?} columnDefId
     * @param {?=} compositionId
     * @return {?}
     */
    moveRight(columnDefId, compositionId = compositionGlobalId) {
        super.moveRight(columnDefId, this.compositionId);
    }
}
LocalCompositionCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalCompositionCommandDispatcher.ctorParameters = () => [
    { type: CompositionId },
    { type: CompositionDispatcher }
];
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "createComposition", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Array]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setColumns", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setContainerWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Boolean, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "setResizeWidth", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "enableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "disableColumn", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveLeft", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ColumnDefinitionId, CompositionId]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalCompositionCommandDispatcher.prototype, "moveRight", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalCompositionCommandDispatcher.prototype.compositionId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRWhFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUUzRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUlsRyxNQUFNLE9BQU8saUNBQWtDLFNBQVEsNEJBQTRCOzs7OztJQUVsRixZQUE2QixhQUE0QixFQUN0RCxxQkFBNEM7UUFDOUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFGRCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUd6RCxDQUFDOzs7OztJQUdELGlCQUFpQixDQUFDLGdCQUErQixtQkFBbUI7UUFDbkUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxNQUEyQjtRQUNyQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLEtBQWEsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ3pFLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFHRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsZ0JBQStCLG1CQUFtQjtRQUNsRixLQUFLLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7Ozs7SUFHRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2xGLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsV0FBK0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQy9GLEtBQUssQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsV0FBK0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQ2hHLEtBQUssQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7Ozs7SUFHRCxRQUFRLENBQUMsV0FBK0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQzNGLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFHRCxTQUFTLENBQUMsV0FBK0IsRUFBRSxnQkFBK0IsbUJBQW1CO1FBQzVGLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7WUFuREQsVUFBVTs7OztZQVBGLGFBQWE7WUFDYixxQkFBcUI7O0FBZTdCO0lBREMsUUFBUTs7NkNBQ3dCLGFBQWE7OzBFQUU3QztBQUdEO0lBREMsUUFBUTs7NkNBQ1UsS0FBSzs7bUVBRXZCO0FBR0Q7SUFEQyxRQUFROztxREFDOEIsYUFBYTs7aUVBRW5EO0FBR0Q7SUFEQyxRQUFROztxREFDdUMsYUFBYTs7MEVBRTVEO0FBR0Q7SUFEQyxRQUFROztzREFDdUMsYUFBYTs7dUVBRTVEO0FBR0Q7SUFEQyxRQUFROzs2Q0FDaUIsa0JBQWtCLEVBQWlCLGFBQWE7O3FFQUV6RTtBQUdEO0lBREMsUUFBUTs7NkNBQ2tCLGtCQUFrQixFQUFpQixhQUFhOztzRUFFMUU7QUFHRDtJQURDLFFBQVE7OzZDQUNhLGtCQUFrQixFQUFpQixhQUFhOztpRUFFckU7QUFHRDtJQURDLFFBQVE7OzZDQUNjLGtCQUFrQixFQUFpQixhQUFhOztrRUFFdEU7Ozs7OztJQWhEVywwREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBjb21wb3NpdGlvbkdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRjb21wb3NpdGlvbkRpc3BhdGNoZXI6IENvbXBvc2l0aW9uRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uRGlzcGF0Y2hlcik7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0Y3JlYXRlQ29tcG9zaXRpb24oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5jcmVhdGVDb21wb3NpdGlvbih0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0Q29sdW1ucyhwYXJhbXMsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0V2lkdGgod2lkdGg6IG51bWJlciwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRXaWR0aCh3aWR0aCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLnNldENvbnRhaW5lcldpZHRoKHdpZHRoLCB0aGlzLmNvbXBvc2l0aW9uSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFJlc2l6ZVdpZHRoKGVuYWJsZWQ6IGJvb2xlYW4sIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQgPSBjb21wb3NpdGlvbkdsb2JhbElkKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0UmVzaXplV2lkdGgoZW5hYmxlZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRlbmFibGVDb2x1bW4oY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5lbmFibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0ZGlzYWJsZUNvbHVtbihjb2x1bW5EZWZJZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkID0gY29tcG9zaXRpb25HbG9iYWxJZCk6IHZvaWQge1xuXHRcdHN1cGVyLmRpc2FibGVDb2x1bW4oY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0bW92ZUxlZnQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlTGVmdChjb2x1bW5EZWZJZCwgdGhpcy5jb21wb3NpdGlvbklkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRtb3ZlUmlnaHQoY29sdW1uRGVmSWQ6IENvbHVtbkRlZmluaXRpb25JZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCA9IGNvbXBvc2l0aW9uR2xvYmFsSWQpOiB2b2lkIHtcblx0XHRzdXBlci5tb3ZlUmlnaHQoY29sdW1uRGVmSWQsIHRoaXMuY29tcG9zaXRpb25JZCk7XG5cdH1cblxufVxuIl19