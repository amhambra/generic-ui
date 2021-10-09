/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SchemaDispatcher } from './schema.dispatcher';
import { StructureCommandInvoker } from '../../../structure/core/api/structure.command-invoker';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../api/theme/schema-theme';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { Injectable } from '@angular/core';
import { SchemaCommandInvoker } from '../api/schema.command-invoker';
export class SchemaDomainCommandInvoker extends SchemaCommandInvoker {
    /**
     * @param {?} schemaDispatcher
     * @param {?} structureCommandService
     * @param {?} fabricModalThemeService
     */
    constructor(schemaDispatcher, structureCommandService, fabricModalThemeService) {
        super();
        this.schemaDispatcher = schemaDispatcher;
        this.structureCommandService = structureCommandService;
        this.fabricModalThemeService = fabricModalThemeService;
    }
    /**
     * @param {?} schemaId
     * @return {?}
     */
    create(schemaId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    /**
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    setTheme(theme, schemaId, structureId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structureCommandService.setRowHeightBasedOnTheme(theme, structureId);
    }
    /**
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    setRowColoring(rowColoring, schemaId) {
        /** @type {?} */
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    /**
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setVerticalGrid(verticalGrid, schemaId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    /**
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    /**
     * @private
     * @param {?} coloring
     * @return {?}
     */
    toSchemaRowColoring(coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                break;
        }
    }
    /**
     * @private
     * @param {?} schemaTheme
     * @return {?}
     */
    toFabricTheme(schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                break;
        }
    }
}
SchemaDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaDomainCommandInvoker.ctorParameters = () => [
    { type: SchemaDispatcher },
    { type: StructureCommandInvoker },
    { type: FabricModalThemeService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.schemaDispatcher;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.structureCommandService;
    /**
     * @type {?}
     * @private
     */
    SchemaDomainCommandInvoker.prototype.fabricModalThemeService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2RvbWFpbi9zY2hlbWEuZG9tYWluLWNvbW1hbmQtaW52b2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUlyRSxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsb0JBQW9COzs7Ozs7SUFFbkUsWUFBNkIsZ0JBQWtDLEVBQzNDLHVCQUFnRCxFQUNoRCx1QkFBZ0Q7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFIb0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMzQyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFFcEUsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsUUFBK0I7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWtCLEVBQ3hCLFFBQStCLEVBQy9CLFdBQXdCO1FBRTFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3pGLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCLEVBQUUsUUFBK0I7O2NBRWpFLGlCQUFpQixHQUFzQixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO1FBRWxGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLFlBQXFCLEVBQUUsUUFBK0I7UUFDckUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsY0FBdUIsRUFBRSxRQUErQjtRQUN6RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7OztJQUVPLG1CQUFtQixDQUFDLFFBQXFCO1FBQ2hELFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRS9CLEtBQUssV0FBVyxDQUFDLEdBQUc7Z0JBQ25CLE9BQU8saUJBQWlCLENBQUMsR0FBRyxDQUFDO1lBRTlCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBRS9CO2dCQUNDLE1BQU07U0FDUDtJQUNGLENBQUM7Ozs7OztJQUVPLGFBQWEsQ0FBQyxXQUF3QjtRQUU3QyxRQUFRLFdBQVcsRUFBRTtZQUNwQixLQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO2FBQ2xCO1lBRUQsS0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hCLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQzthQUNwQjtZQUVELEtBQUssV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDckI7WUFFRCxLQUFLLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDO2FBQ25CO1lBRUQsS0FBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN0QjtZQUVEO2dCQUNDLE1BQU07U0FFUDtJQUNGLENBQUM7OztZQWpGRCxVQUFVOzs7O1lBWkYsZ0JBQWdCO1lBQ2hCLHVCQUF1QjtZQUN2Qix1QkFBdUI7Ozs7Ozs7SUFhbkIsc0RBQW1EOzs7OztJQUM1RCw2REFBaUU7Ozs7O0lBQ2pFLDZEQUFpRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsIFRoZW1lIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9zY2hlbWEuY29tbWFuZC1pbnZva2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTY2hlbWFDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzY2hlbWFEaXNwYXRjaGVyOiBTY2hlbWFEaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNNb2RhbFRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Y3JlYXRlKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuY3JlYXRlKHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdH1cblxuXHRzZXRUaGVtZSh0aGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0XHQgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWRcblx0KTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHRcdHRoaXMuZmFicmljTW9kYWxUaGVtZVNlcnZpY2UuY2hhbmdlVGhlbWUodGhpcy50b0ZhYnJpY1RoZW1lKHRoZW1lKSk7IC8vIFRPRE8gZ2l0aHViICMyMTYyXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nID0gdGhpcy50b1NjaGVtYVJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nKTtcblxuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHRvRmFicmljVGhlbWUoc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lKTogVGhlbWUge1xuXG5cdFx0c3dpdGNoIChzY2hlbWFUaGVtZSkge1xuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5EQVJLOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5EQVJLO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkZBQlJJQzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkdFTkVSSUM6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkdFTkVSSUM7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTElHSFQ6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkxJR0hUO1xuXHRcdFx0fVxuXG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLk1BVEVSSUFMOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5NQVRFUklBTDtcblx0XHRcdH1cblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cdH1cbn1cbiJdfQ==