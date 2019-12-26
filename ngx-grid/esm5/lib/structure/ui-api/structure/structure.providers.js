/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { COMMAND_HANDLERS, DOMAIN_EVENT_HANDLERS } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../../infrastructure/in-memory/structure/in-memory.structure.providers';
import { InitStructureCommandHandler } from '../../domain/structure/command/init/init-structure.command-handler';
import { SetVerticalScrollEnabledCommandHandler } from '../../domain/structure/command/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../../domain/structure/command/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { InitFieldsCommandHandler } from '../../domain/structure/command/field/init/init-fields.command-handler';
import { ToggleSortCommandHandler } from '../../domain/structure/command/sort/toggle/toggle-sort.command-handler';
import { SetSortingCommandHandler } from '../../domain/structure/command/sort/set/set-sorting.command-handler';
import { StructureSetConfigFilterCommandHandler } from '../../domain/structure/command/filter/config/structure.set-config-filter.command-handler';
import { StructureSetConfigSearchingCommandHandler } from '../../domain/structure/command/search/config/structure.set-config-searching.command-handler';
import { StructureSetConfigQuickFilterCommandHandler } from '../../domain/structure/command/filter/quick/structure.set-config-quick-filter.command-handler';
import { StructureToggleFilterCommandHandler } from '../../domain/structure/command/filter/toggle/structure.toggle-filter.command-handler';
import { StructureSetAggregationEnabledCommandHandler } from '../../domain/structure/command/aggregation/set/structure.set-aggregation-enabled.command-handler';
import { VerticalFormationFactory } from '../../domain/structure/command/vertical-formation/vertical-formation.factory';
import { FieldCollectionFactory } from '../../domain/structure/command/field/field-collection.factory';
import { FilterCollectionFactory } from '../../domain/structure/command/filter/filter.collection-factory';
import { FieldIdGenerator } from '../../domain/structure/command/field/field-id.generator';
import { StructureFilterCommandService } from './filter/structure.filter.command.service';
import { FieldFactory } from '../../domain/structure/command/field/data-type/field.factory';
import { aggregationProviders } from '../../domain/structure/command/aggregation/aggregation.providers';
import { StructureConfigFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-filter-set.event-handler';
import { StructureConfigSearchingSetEventHandler } from '../../domain/structure/read/searching/structure.config-searching-set.event-handler';
import { StructureConfigQuickFilterSetEventHandler } from '../../domain/structure/read/filter/structure.config-quick-filter-set.event-handler';
import { StructureFieldsInitedEventHandler } from './field/structure.fields-inited.event-handler';
import { VerticalFormationConverter } from '../../domain/structure/read/vertical-formation/vertical-formation.converter';
import { StructureFilterReadModelRepository } from './filter/structure.filter.read-model.repository';
import { StructureFilterRepository } from '../../domain/structure/read/filter/structure.filter.repository';
import { StructureQuickFilterRepository } from '../../domain/structure/read/filter/structure.quick-filter.repository';
import { StructureSearchingRepository } from '../../domain/structure/read/searching/structure.searching.repository';
import { StructureSearchReadModelRepository } from './search/structure-search.read-model.repository';
import { StructureFieldUiArchive } from './field/structure.field.ui-archive';
import { StructureFieldUiConverter } from './field/structure.field.ui-converter';
import { StructureFieldUiRepository } from './field/structure.field.ui-repository';
import { StructureAggregationCommandService } from './aggregation/structure.aggregation.command-service';
import { StructureAggregationUiEventsRepository } from './aggregation/structure.aggregation.ui-events-repository';
import { StructureCommandService } from './structure-command.service';
import { StructureConverter } from '../../domain/structure/structure.converter';
import { StructureAggregateFactory } from '../../domain/structure/command/structure.aggregate-factory';
import { StructureReadModelService } from './structure-read-model.service';
import { pagingProviders } from '../paging/paging.providers';
import { schemaProviders } from '../schema/schema.providers';
import { formationProviders } from '../formation/formation.providers';
import { sourceProviders } from '../source/source.providers';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders, [
    {
        provide: COMMAND_HANDLERS,
        useClass: InitStructureCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetVerticalScrollEnabledCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetScrollPositionCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: InitFieldsCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSortCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: SetSortingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigSearchingCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetConfigQuickFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureToggleFilterCommandHandler,
        multi: true
    }, {
        provide: COMMAND_HANDLERS,
        useClass: StructureSetAggregationEnabledCommandHandler,
        multi: true
    },
    VerticalFormationFactory,
    FieldCollectionFactory,
    FilterCollectionFactory,
    FieldIdGenerator,
    StructureFilterCommandService,
    FieldFactory
], aggregationProviders);
/** @type {?} */
var readProviders = tslib_1.__spread([
    {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigSearchingSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureConfigQuickFilterSetEventHandler,
        multi: true
    }, {
        provide: DOMAIN_EVENT_HANDLERS,
        useClass: StructureFieldsInitedEventHandler,
        multi: true
    }
], inMemoryStructureReadProviders, [
    VerticalFormationConverter,
    StructureFilterReadModelRepository,
    StructureFilterRepository,
    StructureQuickFilterRepository,
    StructureSearchingRepository,
    StructureSearchReadModelRepository,
    StructureFieldUiArchive,
    StructureFieldUiConverter,
    StructureFieldUiRepository
]);
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureAggregationCommandService,
    StructureAggregationUiEventsRepository,
    StructureAggregateFactory,
    StructureConverter,
    StructureReadModelService,
    StructureCommandService
], pagingProviders, schemaProviders, formationProviders, sourceProviders);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RSxPQUFPLEVBQ04saUNBQWlDLEVBQ2pDLDBCQUEwQixFQUMxQiw4QkFBOEIsRUFDOUIsTUFBTSx3RUFBd0UsQ0FBQztBQUNoRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQUNqSCxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwyR0FBMkcsQ0FBQztBQUNuSyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx1R0FBdUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1RUFBdUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUNsSCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwwRkFBMEYsQ0FBQztBQUNsSixPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUN4SixPQUFPLEVBQUUsMkNBQTJDLEVBQUUsTUFBTSwrRkFBK0YsQ0FBQztBQUM1SixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxzRkFBc0YsQ0FBQztBQUMzSSxPQUFPLEVBQUUsNENBQTRDLEVBQUUsTUFBTSxrR0FBa0csQ0FBQztBQUNoSyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4RUFBOEUsQ0FBQztBQUN4SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrREFBK0QsQ0FBQztBQUN2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Z0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsa0NBQWtDO0lBQ2xDLHNDQUFzQztJQUV0Qyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBRWxCLHlCQUF5QjtJQUN6Qix1QkFBdUI7R0FFcEIsZUFBZSxFQUNmLGVBQWUsRUFDZixrQkFBa0IsRUFDbEIsZUFBZSxDQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BTkRfSEFORExFUlMsIERPTUFJTl9FVkVOVF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQge1xuXHRpbk1lbW9yeVN0cnVjdHVyZUNvbW1hbmRQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzLFxuXHRpbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnNcbn0gZnJvbSAnLi4vLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3N0cnVjdHVyZS9pbi1tZW1vcnkuc3RydWN0dXJlLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBJbml0U3RydWN0dXJlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvaW5pdC9pbml0LXN0cnVjdHVyZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTb3J0Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC90b2dnbGUvdG9nZ2xlLXNvcnQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldFNvcnRpbmdDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zb3J0L3NldC9zZXQtc29ydGluZy5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9jb25maWcvc3RydWN0dXJlLnNldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRDb25maWdRdWlja0ZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci90b2dnbGUvc3RydWN0dXJlLnRvZ2dsZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEFnZ3JlZ2F0aW9uRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2FnZ3JlZ2F0aW9uL3NldC9zdHJ1Y3R1cmUuc2V0LWFnZ3JlZ2F0aW9uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRDb2xsZWN0aW9uRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1jb2xsZWN0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgRmlsdGVyQ29sbGVjdGlvbkZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmlsdGVyL2ZpbHRlci5jb2xsZWN0aW9uLWZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9maWVsZC9maWVsZC1pZC5nZW5lcmF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlRmlsdGVyQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLmNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBGaWVsZEZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvZmllbGQvZGF0YS10eXBlL2ZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgYWdncmVnYXRpb25Qcm92aWRlcnMgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvYWdncmVnYXRpb24vYWdncmVnYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbmZpZ0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9zdHJ1Y3R1cmUuY29uZmlnLXNlYXJjaGluZy1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9maWx0ZXIvc3RydWN0dXJlLmNvbmZpZy1xdWljay1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9maWVsZC9zdHJ1Y3R1cmUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZpbHRlclJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUuZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL2ZpbHRlci9zdHJ1Y3R1cmUucXVpY2stZmlsdGVyLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoaW5nUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvc3RydWN0dXJlLnNlYXJjaGluZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3NlYXJjaC9zdHJ1Y3R1cmUtc2VhcmNoLnJlYWQtbW9kZWwucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpQXJjaGl2ZSB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlRmllbGRVaUNvbnZlcnRlciB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeSB9IGZyb20gJy4vZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25Db21tYW5kU2VydmljZSB9IGZyb20gJy4vYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSB9IGZyb20gJy4vYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLnVpLWV2ZW50cy1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxTZXJ2aWNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IHBhZ2luZ1Byb3ZpZGVycyB9IGZyb20gJy4uL3BhZ2luZy9wYWdpbmcucHJvdmlkZXJzJztcbmltcG9ydCB7IHNjaGVtYVByb3ZpZGVycyB9IGZyb20gJy4uL3NjaGVtYS9zY2hlbWEucHJvdmlkZXJzJztcbmltcG9ydCB7IGZvcm1hdGlvblByb3ZpZGVycyB9IGZyb20gJy4uL2Zvcm1hdGlvbi9mb3JtYXRpb24ucHJvdmlkZXJzJztcbmltcG9ydCB7IHNvdXJjZVByb3ZpZGVycyB9IGZyb20gJy4uL3NvdXJjZS9zb3VyY2UucHJvdmlkZXJzJztcblxuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZUNvbW1hbmRQcm92aWRlcnMsXG5cdHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBJbml0U3RydWN0dXJlQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFNldFZlcnRpY2FsU2Nyb2xsRW5hYmxlZENvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFRvZ2dsZVNvcnRDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0U29ydGluZ0NvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LCB7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZVRvZ2dsZUZpbHRlckNvbW1hbmRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVTZXRBZ2dyZWdhdGlvbkVuYWJsZWRDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cdEZpZWxkQ29sbGVjdGlvbkZhY3RvcnksXG5cdEZpbHRlckNvbGxlY3Rpb25GYWN0b3J5LFxuXHRGaWVsZElkR2VuZXJhdG9yLFxuXHRTdHJ1Y3R1cmVGaWx0ZXJDb21tYW5kU2VydmljZSxcblx0RmllbGRGYWN0b3J5LFxuXG5cdC4uLmFnZ3JlZ2F0aW9uUHJvdmlkZXJzXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHR7XG5cdFx0cHJvdmlkZTogRE9NQUlOX0VWRU5UX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTdHJ1Y3R1cmVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSwge1xuXHRcdHByb3ZpZGU6IERPTUFJTl9FVkVOVF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU3RydWN0dXJlQ29uZmlnU2VhcmNoaW5nU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUNvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyLFxuXHRcdG11bHRpOiB0cnVlXG5cdH0sIHtcblx0XHRwcm92aWRlOiBET01BSU5fRVZFTlRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFN0cnVjdHVyZUZpZWxkc0luaXRlZEV2ZW50SGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMsXG5cdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRTdHJ1Y3R1cmVGaWx0ZXJSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVGaWx0ZXJSZXBvc2l0b3J5LFxuXHRTdHJ1Y3R1cmVRdWlja0ZpbHRlclJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaGluZ1JlcG9zaXRvcnksXG5cdFN0cnVjdHVyZVNlYXJjaFJlYWRNb2RlbFJlcG9zaXRvcnksXG5cdFN0cnVjdHVyZUZpZWxkVWlBcmNoaXZlLFxuXHRTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyLFxuXHRTdHJ1Y3R1cmVGaWVsZFVpUmVwb3NpdG9yeVxuXTtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZVByb3ZpZGVycyA9IFtcblx0Li4uaW5NZW1vcnlTdHJ1Y3R1cmVQcm92aWRlcnMsXG5cblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGlvblVpRXZlbnRzUmVwb3NpdG9yeSxcblxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGVGYWN0b3J5LFxuXHRTdHJ1Y3R1cmVDb252ZXJ0ZXIsXG5cblx0U3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSxcblx0U3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cblx0Li4ucGFnaW5nUHJvdmlkZXJzLFxuXHQuLi5zY2hlbWFQcm92aWRlcnMsXG5cdC4uLmZvcm1hdGlvblByb3ZpZGVycyxcblx0Li4uc291cmNlUHJvdmlkZXJzXG5dO1xuIl19