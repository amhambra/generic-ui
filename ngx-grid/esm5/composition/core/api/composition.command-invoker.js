/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var CompositionCommandInvoker = /** @class */ (function () {
    function CompositionCommandInvoker() {
    }
    CompositionCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionCommandInvoker.ctorParameters = function () { return []; };
    return CompositionCommandInvoker;
}());
export { CompositionCommandInvoker };
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.create = function (compositionId) { };
    /**
     * @abstract
     * @param {?} params
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setColumns = function (params, compositionId) { };
    /**
     * @abstract
     * @param {?} configs
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setGroups = function (configs, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} width
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setContainerWidth = function (width, compositionId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.setResizeWidth = function (enabled, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.enableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.disableColumn = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveLeft = function (columnDefinitionId, compositionId) { };
    /**
     * @abstract
     * @param {?} columnDefinitionId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionCommandInvoker.prototype.moveRight = function (columnDefinitionId, compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFRM0M7SUFHQztJQUNBLENBQUM7O2dCQUpELFVBQVU7Ozs7SUF5QlgsZ0NBQUM7Q0FBQSxBQXpCRCxJQXlCQztTQXhCcUIseUJBQXlCOzs7Ozs7O0lBSzlDLDBFQUFvRDs7Ozs7OztJQUVwRCxzRkFBcUY7Ozs7Ozs7SUFFckYsc0ZBQXFFOzs7Ozs7O0lBRXJFLG1GQUFxRTs7Ozs7OztJQUVyRSw0RkFBOEU7Ozs7Ozs7SUFFOUUsMkZBQThFOzs7Ozs7O0lBRTlFLG9HQUFrRzs7Ozs7OztJQUVsRyxxR0FBbUc7Ozs7Ozs7SUFFbkcsZ0dBQThGOzs7Ozs7O0lBRTlGLGlHQUErRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL2NvbHVtbi5wYXJhbXMnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi1pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWJzdHJhY3QgY3JlYXRlKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldENvbHVtbnMocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRHcm91cHMoY29uZmlnczogYW55LCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRDb250YWluZXJXaWR0aCh3aWR0aDogbnVtYmVyLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSZXNpemVXaWR0aChlbmFibGVkOiBib29sZWFuLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlbmFibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRpc2FibGVDb2x1bW4oY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IG1vdmVMZWZ0KGNvbHVtbkRlZmluaXRpb25JZDogQ29sdW1uRGVmaW5pdGlvbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBtb3ZlUmlnaHQoY29sdW1uRGVmaW5pdGlvbklkOiBDb2x1bW5EZWZpbml0aW9uSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiB2b2lkO1xufVxuIl19