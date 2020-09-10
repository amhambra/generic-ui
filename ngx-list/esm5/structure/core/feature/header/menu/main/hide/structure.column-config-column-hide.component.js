/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../../../../composition/domain-api/composition.command-invoker';
import { StructureColumnConfigService } from '../../structure.column-config.service';
var StructureColumnConfigColumnHideComponent = /** @class */ (function () {
    function StructureColumnConfigColumnHideComponent(compositionCommandService, structureColumnConfigService) {
        this.compositionCommandService = compositionCommandService;
        this.structureColumnConfigService = structureColumnConfigService;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    StructureColumnConfigColumnHideComponent.prototype.hideColumn = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        this.compositionCommandService.disableColumn(column.getColumnDefinitionId());
        this.structureColumnConfigService.close();
    };
    StructureColumnConfigColumnHideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure-column-config-column-hide',
                    template: "\n\n\t\t<div class=\"gui-header-menu-item\"\n\t\t\t (click)=\"hideColumn(column)\">\n\t\t\tHide Column\n\t\t</div>\n\t"
                }] }
    ];
    /** @nocollapse */
    StructureColumnConfigColumnHideComponent.ctorParameters = function () { return [
        { type: CompositionCommandInvoker },
        { type: StructureColumnConfigService }
    ]; };
    StructureColumnConfigColumnHideComponent.propDecorators = {
        column: [{ type: Input }]
    };
    return StructureColumnConfigColumnHideComponent;
}());
export { StructureColumnConfigColumnHideComponent };
if (false) {
    /** @type {?} */
    StructureColumnConfigColumnHideComponent.prototype.column;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.compositionCommandService;
    /**
     * @type {?}
     * @private
     */
    StructureColumnConfigColumnHideComponent.prototype.structureColumnConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLWhpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2hlYWRlci9tZW51L21haW4vaGlkZS9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQ2pJLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3BILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3JGO0lBZUMsa0RBQW9CLHlCQUFvRCxFQUM3RCw0QkFBMEQ7UUFEakQsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUM3RCxpQ0FBNEIsR0FBNUIsNEJBQTRCLENBQThCO0lBQ3JFLENBQUM7Ozs7O0lBRUQsNkRBQVU7Ozs7SUFBVixVQUFXLE1BQStCO1FBQ3pDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBdkJELFNBQVMsU0FBQztvQkFDVixRQUFRLEVBQUUseUNBQXlDO29CQUNuRCxRQUFRLEVBQUUsd0hBTVQ7aUJBQ0Q7Ozs7Z0JBYlEseUJBQXlCO2dCQUN6Qiw0QkFBNEI7Ozt5QkFlbkMsS0FBSzs7SUFhUCwrQ0FBQztDQUFBLEFBekJELElBeUJDO1NBZlksd0NBQXdDOzs7SUFFcEQsMERBQ2dDOzs7OztJQUVwQiw2RUFBNEQ7Ozs7O0lBQ3JFLGdGQUFrRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL3JlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLnNlcnZpY2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4taGlkZScsXG5cdHRlbXBsYXRlOiBgXG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWl0ZW1cIlxuXHRcdFx0IChjbGljayk9XCJoaWRlQ29sdW1uKGNvbHVtbilcIj5cblx0XHRcdEhpZGUgQ29sdW1uXG5cdFx0PC9kaXY+XG5cdGBcbn0pXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlQ29sdW1uQ29uZmlnQ29sdW1uSGlkZUNvbXBvbmVudCB7XG5cblx0QElucHV0KClcblx0Y29sdW1uOiBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dDtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2U6IENvbXBvc2l0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZSkge1xuXHR9XG5cblx0aGlkZUNvbHVtbihjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0KTogdm9pZCB7XG5cdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLmRpc2FibGVDb2x1bW4oY29sdW1uLmdldENvbHVtbkRlZmluaXRpb25JZCgpKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uQ29uZmlnU2VydmljZS5jbG9zZSgpO1xuXHR9XG5cbn1cbiJdfQ==