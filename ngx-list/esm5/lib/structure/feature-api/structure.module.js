/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricModule } from '@generic-ui/fabric';
import { COMMAND_LOGGER_ENABLED, EVENT_LOGGER_ENABLED, HermesModule } from '@generic-ui/hermes';
import { fabricImports } from '../feature/structure-fabric.imports';
import { PagingFeatureModule } from '../../../structure/paging/feature/paging.feature-module';
import { StructureInfoPanelModule } from '../feature/panel/info/structure.info-panel.module';
import { CompositionModule } from '../../composition/feature-api/composition.module';
import { StructureComponent } from '../feature/structure.component';
import { StructureHeaderComponent } from '../feature/header/structure-header.component';
import { StructureHeaderColumnsComponent } from '../feature/header/columns/structure-header-columns.component';
import { StructureHeaderFiltersComponent } from '../feature/header/filters/structure-header-filters.component';
import { StructureHeaderFilterComponent } from '../feature/header/filters/structure.header-filter.component';
import { StructureContentComponent } from '../feature/content/structure-content.component';
import { StructureRowComponent } from '../feature/content/row/structure-row.component';
import { StructureCellComponent } from '../feature/content/cell/structure.cell.component';
import { StructureContainerComponent } from '../feature/content/structure-container.component';
import { StructureQuickFiltersComponent } from '../feature/header/quick-filters/structure.quick-filters.component';
import { StructureBlueprintComponent } from '../feature/blueprint/structure.blueprint.component';
import { StructureColumnConfigComponent } from '../feature/header/menu/structure.column-config.component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StructureDefinition } from '../feature/structure-definition';
import { StructureSourceWarehouse } from './source/structure-source.warehouse';
import { StructureIdGenerator } from '../feature/structure-id.generator';
import { structureCommandHandlers, structureProviders } from './structure.providers';
import { LoggerModule } from '../../../common/cdk/logger/logger.module';
import { ItemEntityFactory } from '../domain/source/item.entity-factory';
import { StructureTopPanelModule } from '../feature/panel/top/structure.top-panel.module';
import { StructureColumnMenuModule } from '../feature/header/menu/structure.column-menu.module';
import { StructureSummariesPanelModule } from '../feature/panel/summaries/structure.summaries-panel.module';
import { StructureColumnManagerModule } from '../feature/column-manager/structure.column-manager.module';
import { StructureAggregateFactory } from '../domain/structure/structure.aggregate-factory';
import { InMemoryStructureAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { CreateStructureCommandHandler } from '../domain/structure/create-structure/create-structure-command-handler.service';
import { formationCommandHandlers } from './formation/formation.providers';
import { sourceCommandHandlers } from './source/source.providers';
import { StructureCellEditComponent } from '../feature/content/cell/edit/structure.cell-edit.component';
import { StructureThemeConverter } from '../feature/schema/structure.theme.converter';
import { SchemaModule } from '../../../schema/feature-api/schema.module';
import { StructureCellEditBooleanComponent } from '../feature/content/cell/boolean/structure.cell-edit-boolean.component';
import { StructureRowDetailViewComponent } from '../feature/row-detail/view/structure.row-detail-view.component';
import { StructureTitlePanelComponent } from '../feature/panel/title-panel/structure.title-panel.component';
import { StructureFooterPanelComponent } from '../feature/panel/footer-panel/structure.footer-panel.component';
import { PagingDomainModule } from '../../../structure/paging/domain/paging.domain-module';
import { EmptySourceFeatureModule } from '../../../structure/empty-source/feature/empty-source.feature-module';
/**
 * @return {?}
 */
export function createStructureDefinition() {
    return new StructureDefinition.DefaultBuilder().build();
}
/** @type {?} */
export var structureKey = 'StructureAggregate';
/** @type {?} */
var imports = tslib_1.__spread([
    CommonModule,
    ReactiveFormsModule,
    HermesModule,
    HermesModule.defineAggregate(structureKey, StructureAggregateFactory, InMemoryStructureAggregateRepository, CreateStructureCommandHandler, tslib_1.__spread(formationCommandHandlers, PagingDomainModule.commandHandlers(), sourceCommandHandlers, structureCommandHandlers))
], fabricImports, [
    PagingFeatureModule,
    StructureInfoPanelModule,
    StructureSummariesPanelModule,
    StructureTopPanelModule,
    StructureColumnMenuModule,
    StructureColumnManagerModule,
    EmptySourceFeatureModule,
    CompositionModule,
    SchemaModule,
    LoggerModule
]);
/** @type {?} */
var declarations = [
    StructureComponent,
    StructureHeaderComponent,
    StructureHeaderColumnsComponent,
    StructureHeaderFiltersComponent,
    StructureHeaderFilterComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureCellComponent,
    StructureCellEditComponent,
    StructureCellEditBooleanComponent,
    StructureContainerComponent,
    StructureQuickFiltersComponent,
    StructureBlueprintComponent,
    StructureRowDetailViewComponent,
    StructureTitlePanelComponent,
    StructureFooterPanelComponent
];
/** @type {?} */
var entryComponents = [
    StructureColumnConfigComponent,
    StructureRowDetailViewComponent
];
/** @type {?} */
var providers = tslib_1.__spread([
    {
        provide: STRUCTURE_CSS_CLASS_NAME,
        useValue: 'structure'
    },
    {
        provide: StructureDefinition,
        useFactory: createStructureDefinition
    },
    ItemEntityFactory,
    StructureThemeConverter,
    StructureSourceWarehouse,
    StructureIdGenerator
], structureProviders);
/** @type {?} */
var exportDeclarations = tslib_1.__spread([
    FabricModule,
    StructureComponent,
    StructureHeaderComponent,
    StructureContentComponent,
    StructureRowComponent,
    StructureContainerComponent
], fabricImports, [
    PagingFeatureModule
]);
var StructureModule = /** @class */ (function () {
    function StructureModule(platformId) {
        this.platformId = platformId;
        if (isPlatformBrowser(this.platformId)) {
            window['hermesApi'].loggers = false;
        }
    }
    /**
     * @param {?=} structureConfig
     * @return {?}
     */
    StructureModule.withConfig = /**
     * @param {?=} structureConfig
     * @return {?}
     */
    function (structureConfig) {
        if (structureConfig === void 0) { structureConfig = {
            cssClassName: '',
            hermesModuleConfig: { loggers: false }
        }; }
        return {
            ngModule: StructureModule,
            providers: tslib_1.__spread([
                {
                    provide: STRUCTURE_CSS_CLASS_NAME,
                    useValue: structureConfig.cssClassName
                },
                { provide: COMMAND_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers },
                { provide: EVENT_LOGGER_ENABLED, useValue: structureConfig.hermesModuleConfig.loggers }
            ], providers)
        };
    };
    StructureModule.exportDeclarations = tslib_1.__spread(exportDeclarations);
    StructureModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    /** @nocollapse */
    StructureModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    return StructureModule;
}());
export { StructureModule };
if (false) {
    /** @type {?} */
    StructureModule.exportDeclarations;
    /**
     * @type {?}
     * @private
     */
    StructureModule.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBdUIsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDOUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDeEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDN0csT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDM0YsT0FB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QU8sRUFBRSxLQUFLLEVBQUU7U0FDdEM7UUFDQSxPQUFPO1lBQ04sUUFBUSxFQUFFLGVBQWU7WUFDekIsU0FBUztnQkFDUjtvQkFDQyxPQUFPLEVBQUUsd0JBQXdCO29CQUNqQyxRQUFRLEVBQUUsZUFBZSxDQUFDLFlBQVk7aUJBQ3RDO2dCQUNELEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dCQUN6RixFQUFFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTtlQUNwRixTQUFTLENBQ1o7U0FDRCxDQUFDO0lBQ0gsQ0FBQztJQWxCTSxrQ0FBa0Isb0JBQU8sa0JBQWtCLEVBQUU7O2dCQVJwRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxTQUFBO29CQUNQLFlBQVksY0FBQTtvQkFDWixPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixlQUFlLGlCQUFBO2lCQUNmOzs7O2dEQXVCYSxNQUFNLFNBQUMsV0FBVzs7SUFNaEMsc0JBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQTVCWSxlQUFlOzs7SUFFM0IsbUNBQW9EOzs7OztJQW9CeEMscUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgRmFicmljTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcblxuaW1wb3J0IHsgQ09NTUFORF9MT0dHRVJfRU5BQkxFRCwgRVZFTlRfTE9HR0VSX0VOQUJMRUQsIEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IGZhYnJpY0ltcG9ydHMgfSBmcm9tICcuLi9mZWF0dXJlL3N0cnVjdHVyZS1mYWJyaWMuaW1wb3J0cyc7XG5pbXBvcnQgeyBQYWdpbmdGZWF0dXJlTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9mZWF0dXJlL3BhZ2luZy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24ubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvc3RydWN0dXJlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9oZWFkZXIvY29sdW1ucy9zdHJ1Y3R1cmUtaGVhZGVyLWNvbHVtbnMuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9maWx0ZXJzL3N0cnVjdHVyZS1oZWFkZXItZmlsdGVycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9oZWFkZXIvZmlsdGVycy9zdHJ1Y3R1cmUuaGVhZGVyLWZpbHRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUtcm93LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsQ29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb250ZW50L2NlbGwvc3RydWN0dXJlLmNlbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvY29udGVudC9zdHJ1Y3R1cmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9xdWljay1maWx0ZXJzL3N0cnVjdHVyZS5xdWljay1maWx0ZXJzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVCbHVlcHJpbnRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5Db25maWdDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2hlYWRlci9tZW51L3N0cnVjdHVyZS5jb2x1bW4tY29uZmlnLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGVmaW5pdGlvbiB9IGZyb20gJy4uL2ZlYXR1cmUvc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2Uvc3RydWN0dXJlLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWRHZW5lcmF0b3IgfSBmcm9tICcuLi9mZWF0dXJlL3N0cnVjdHVyZS1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzLCBzdHJ1Y3R1cmVQcm92aWRlcnMgfSBmcm9tICcuL3N0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi4vZmVhdHVyZS9zdHJ1Y3R1cmUtbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQgeyBMb2dnZXJNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXIubW9kdWxlJztcbmltcG9ydCB7IEl0ZW1FbnRpdHlGYWN0b3J5IH0gZnJvbSAnLi4vZG9tYWluL3NvdXJjZS9pdGVtLmVudGl0eS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVRvcFBhbmVsTW9kdWxlIH0gZnJvbSAnLi4vZmVhdHVyZS9wYW5lbC90b3Avc3RydWN0dXJlLnRvcC1wYW5lbC5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudU1vZHVsZSB9IGZyb20gJy4uL2ZlYXR1cmUvaGVhZGVyL21lbnUvc3RydWN0dXJlLmNvbHVtbi1tZW51Lm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbE1vZHVsZSB9IGZyb20gJy4uL2ZlYXR1cmUvcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwubW9kdWxlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUgfSBmcm9tICcuLi9mZWF0dXJlL2NvbHVtbi1tYW5hZ2VyL3N0cnVjdHVyZS5jb2x1bW4tbWFuYWdlci5tb2R1bGUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ3JlYXRlU3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL2NyZWF0ZS1zdHJ1Y3R1cmUvY3JlYXRlLXN0cnVjdHVyZS1jb21tYW5kLWhhbmRsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBmb3JtYXRpb25Db21tYW5kSGFuZGxlcnMgfSBmcm9tICcuL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IHNvdXJjZUNvbW1hbmRIYW5kbGVycyB9IGZyb20gJy4vc291cmNlL3NvdXJjZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRoZW1lQ29udmVydGVyIH0gZnJvbSAnLi4vZmVhdHVyZS9zY2hlbWEvc3RydWN0dXJlLnRoZW1lLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTY2hlbWFNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLm1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEJvb2xlYW5Db21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NvbnRlbnQvY2VsbC9ib29sZWFuL3N0cnVjdHVyZS5jZWxsLWVkaXQtYm9vbGVhbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCB9IGZyb20gJy4uL2ZlYXR1cmUvcm93LWRldGFpbC92aWV3L3N0cnVjdHVyZS5yb3ctZGV0YWlsLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVRpdGxlUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL3RpdGxlLXBhbmVsL3N0cnVjdHVyZS50aXRsZS1wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL3BhbmVsL2Zvb3Rlci1wYW5lbC9zdHJ1Y3R1cmUuZm9vdGVyLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYWdpbmdEb21haW5Nb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvcGFnaW5nL2RvbWFpbi9wYWdpbmcuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBFbXB0eVNvdXJjZUZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZW1wdHktc291cmNlL2ZlYXR1cmUvZW1wdHktc291cmNlLmZlYXR1cmUtbW9kdWxlJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlRGVmaW5pdGlvbigpIHtcblx0cmV0dXJuIG5ldyBTdHJ1Y3R1cmVEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZUtleSA9ICdTdHJ1Y3R1cmVBZ2dyZWdhdGUnO1xuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRDb21tb25Nb2R1bGUsXG5cdFJlYWN0aXZlRm9ybXNNb2R1bGUsXG5cdEhlcm1lc01vZHVsZSxcblx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRzdHJ1Y3R1cmVLZXksXG5cdFx0U3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0XHRJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0Q3JlYXRlU3RydWN0dXJlQ29tbWFuZEhhbmRsZXIsXG5cdFx0W1xuXHRcdFx0Li4uZm9ybWF0aW9uQ29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0Li4uUGFnaW5nRG9tYWluTW9kdWxlLmNvbW1hbmRIYW5kbGVycygpLFxuXHRcdFx0Li4uc291cmNlQ29tbWFuZEhhbmRsZXJzLFxuXHRcdFx0Li4uc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzXG5cdFx0XVxuXHQpLFxuXHQvLyAud2l0aENvbmZpZyh7XG5cdC8vIFx0bG9nZ2VyczogZmFsc2Vcblx0Ly8gfSksXG5cdC4uLmZhYnJpY0ltcG9ydHMsXG5cblx0UGFnaW5nRmVhdHVyZU1vZHVsZSxcblx0U3RydWN0dXJlSW5mb1BhbmVsTW9kdWxlLFxuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbE1vZHVsZSxcblx0U3RydWN0dXJlVG9wUGFuZWxNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1lbnVNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbHVtbk1hbmFnZXJNb2R1bGUsXG5cblx0RW1wdHlTb3VyY2VGZWF0dXJlTW9kdWxlLFxuXG5cdENvbXBvc2l0aW9uTW9kdWxlLFxuXHRTY2hlbWFNb2R1bGUsXG5cblx0TG9nZ2VyTW9kdWxlXG5dO1xuXG5jb25zdCBkZWNsYXJhdGlvbnMgPSBbXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJDb2x1bW5zQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJzQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVIZWFkZXJGaWx0ZXJDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRlbnRDb21wb25lbnQsXG5cdFN0cnVjdHVyZVJvd0NvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbENvbXBvbmVudCxcblx0U3RydWN0dXJlQ2VsbEVkaXRDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNlbGxFZGl0Qm9vbGVhbkNvbXBvbmVudCxcblx0U3RydWN0dXJlQ29udGFpbmVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlcnNDb21wb25lbnQsXG5cdFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCxcblx0U3RydWN0dXJlUm93RGV0YWlsVmlld0NvbXBvbmVudCxcblx0U3RydWN0dXJlVGl0bGVQYW5lbENvbXBvbmVudCxcblx0U3RydWN0dXJlRm9vdGVyUGFuZWxDb21wb25lbnRcbl07XG5cbmNvbnN0IGVudHJ5Q29tcG9uZW50cyA9IFtcblx0U3RydWN0dXJlQ29sdW1uQ29uZmlnQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dEZXRhaWxWaWV3Q29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0dXNlVmFsdWU6ICdzdHJ1Y3R1cmUnXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVEZWZpbml0aW9uLFxuXHRcdHVzZUZhY3Rvcnk6IGNyZWF0ZVN0cnVjdHVyZURlZmluaXRpb25cblx0fSxcblx0SXRlbUVudGl0eUZhY3RvcnksXG5cdFN0cnVjdHVyZVRoZW1lQ29udmVydGVyLFxuXG5cdFN0cnVjdHVyZVNvdXJjZVdhcmVob3VzZSxcblxuXHRTdHJ1Y3R1cmVJZEdlbmVyYXRvcixcblxuXHQuLi5zdHJ1Y3R1cmVQcm92aWRlcnNcblxuXTtcblxuY29uc3QgZXhwb3J0RGVjbGFyYXRpb25zID0gW1xuXHRGYWJyaWNNb2R1bGUsXG5cdFN0cnVjdHVyZUNvbXBvbmVudCxcblx0U3RydWN0dXJlSGVhZGVyQ29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVDb250ZW50Q29tcG9uZW50LFxuXHRTdHJ1Y3R1cmVSb3dDb21wb25lbnQsXG5cdFN0cnVjdHVyZUNvbnRhaW5lckNvbXBvbmVudCxcblxuXHQuLi5mYWJyaWNJbXBvcnRzLFxuXHRQYWdpbmdGZWF0dXJlTW9kdWxlXG5dO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZU1vZHVsZSB7XG5cblx0c3RhdGljIGV4cG9ydERlY2xhcmF0aW9ucyA9IFsuLi5leHBvcnREZWNsYXJhdGlvbnNdO1xuXG5cdHN0YXRpYyB3aXRoQ29uZmlnKHN0cnVjdHVyZUNvbmZpZzogU3RydWN0dXJlTW9kdWxlQ29uZmlnID0ge1xuXHRcdGNzc0NsYXNzTmFtZTogJycsXG5cdFx0aGVybWVzTW9kdWxlQ29uZmlnOiB7IGxvZ2dlcnM6IGZhbHNlIH1cblx0fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogU3RydWN0dXJlTW9kdWxlLFxuXHRcdFx0cHJvdmlkZXJzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwcm92aWRlOiBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUsXG5cdFx0XHRcdFx0dXNlVmFsdWU6IHN0cnVjdHVyZUNvbmZpZy5jc3NDbGFzc05hbWVcblx0XHRcdFx0fSxcblx0XHRcdFx0eyBwcm92aWRlOiBDT01NQU5EX0xPR0dFUl9FTkFCTEVELCB1c2VWYWx1ZTogc3RydWN0dXJlQ29uZmlnLmhlcm1lc01vZHVsZUNvbmZpZy5sb2dnZXJzIH0sXG5cdFx0XHRcdHsgcHJvdmlkZTogRVZFTlRfTE9HR0VSX0VOQUJMRUQsIHVzZVZhbHVlOiBzdHJ1Y3R1cmVDb25maWcuaGVybWVzTW9kdWxlQ29uZmlnLmxvZ2dlcnMgfSxcblx0XHRcdFx0Li4ucHJvdmlkZXJzXG5cdFx0XHRdXG5cdFx0fTtcblx0fVxuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55KSB7XG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdHdpbmRvd1snaGVybWVzQXBpJ10ubG9nZ2VycyA9IGZhbHNlO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=