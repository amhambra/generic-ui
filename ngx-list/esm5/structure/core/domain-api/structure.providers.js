/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HermesModule } from '@generic-ui/hermes';
import { inMemoryStructureCommandProviders, inMemoryStructureProviders, inMemoryStructureReadProviders } from '../infrastructure/in-memory/in-memory.structure.providers';
import { SetVerticalScrollEnabledCommandHandler } from '../domain/vertical-formation/set-enabled/set-vertical-scroll-enabled.command-handler';
import { SetScrollPositionCommandHandler } from '../domain/vertical-formation/scroll-position/set-scroll-position.command-handler';
import { StructureSetSummariesEnabledCommandHandler } from '../domain/summaries/set/structure.set-summaries-enabled.command-handler';
import { VerticalFormationFactory } from '../domain/vertical-formation/vertical-formation.factory';
import { summariesProviders } from '../domain/summaries/summaries.providers';
import { FieldsInitedEventHandler } from '../../field/domain-api/read/fields-inited.event-handler';
import { VerticalFormationConverter } from './vertical-formation/vertical-formation.converter';
import { StructureSummariesCommandDispatcher } from './summaries/structure-summaries.command-dispatcher';
import { StructureSummariesUiEventsRepository } from './summaries/structure-summaries.ui-events-repository';
import { StructureCommandDispatcher } from './structure.command-dispatcher';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { VerticalFormationRepository } from './vertical-formation/vertical-formation.repository';
import { SetRowHeightCommandHandler } from '../domain/vertical-formation/set-row-height/set-row-height.command-handler';
import { StructureSetHeightCommandHandler } from '../domain/vertical-formation/container/set-height/structure-set-height.command-handler';
import { SetRowHeightBasedOnThemeCommandHandler } from '../domain/vertical-formation/set-row-height-theme/set-row-height-based-on-theme.command-handler';
import { StructureVerticalFormationWarehouse } from './vertical-formation/structure-vertical-formation.warehouse';
import { StructureSummariesWarehouse } from './summaries/structure-summaries.warehouse';
import { StructureSummariesRepository } from './summaries/enabled/structure.summaries.repository';
import { StructureCreatedEventHandler } from '../domain/create-structure/structure-created.event-handler';
import { StructureSummariesEnabledSetEventHandler } from './summaries/enabled/structure.summaries-enabled-set.event-handler';
/** @type {?} */
var commandProviders = tslib_1.__spread(inMemoryStructureCommandProviders, [
    VerticalFormationFactory
], summariesProviders);
/** @type {?} */
var readProviders = tslib_1.__spread(inMemoryStructureReadProviders, [
    VerticalFormationConverter,
    VerticalFormationRepository,
    StructureSummariesRepository,
    StructureSummariesWarehouse
]);
/** @type {?} */
export var structureCommandHandlers = tslib_1.__spread(HermesModule.registerCommandHandler(SetVerticalScrollEnabledCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetRowHeightBasedOnThemeCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetScrollPositionCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetSummariesEnabledCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(SetRowHeightCommandHandler, 'StructureAggregate'), HermesModule.registerCommandHandler(StructureSetHeightCommandHandler, 'StructureAggregate'));
/** @type {?} */
export var structureDomainEventHandlers = tslib_1.__spread(HermesModule.registerDomainEventHandler(StructureSummariesEnabledSetEventHandler), HermesModule.registerDomainEventHandler(StructureCreatedEventHandler), HermesModule.registerDomainEventHandler(FieldsInitedEventHandler));
/** @type {?} */
export var structureProviders = tslib_1.__spread(inMemoryStructureProviders, commandProviders, readProviders, [
    StructureSummariesCommandDispatcher,
    StructureSummariesUiEventsRepository,
    StructureAggregateFactory,
    StructureReadModelRootConverter,
    StructureVerticalFormationWarehouse,
    StructureWarehouse,
    StructureCommandDispatcher
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTixpQ0FBaUMsRUFDakMsMEJBQTBCLEVBQzFCLDhCQUE4QixFQUM5QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHNGQUFzRixDQUFDO0FBQzlJLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQ25JLE9BQU8sRUFBRSwwQ0FBMEMsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBQ3JJLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzVHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQ3hILE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHdGQUF3RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLGlHQUFpRyxDQUFDO0FBQ3pKLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ2xILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOztJQUd2SCxnQkFBZ0Isb0JBQ2xCLGlDQUFpQztJQUVwQyx3QkFBd0I7R0FFckIsa0JBQWtCLENBQ3JCOztJQUVLLGFBQWEsb0JBQ2YsOEJBQThCO0lBQ2pDLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFFM0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtFQUMzQjs7QUFFRCxNQUFNLEtBQU8sd0JBQXdCLG9CQUNqQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsc0NBQXNDLEVBQUUsb0JBQW9CLENBQUMsRUFDakcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHNDQUFzQyxFQUFFLG9CQUFvQixDQUFDLEVBQ2pHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywrQkFBK0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUMxRixZQUFZLENBQUMsc0JBQXNCLENBQUMsMENBQTBDLEVBQUUsb0JBQW9CLENBQUMsRUFDckcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDBCQUEwQixFQUFFLG9CQUFvQixDQUFDLEVBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxnQ0FBZ0MsRUFBRSxvQkFBb0IsQ0FBQyxDQUM5Rjs7QUFFRCxNQUFNLEtBQU8sNEJBQTRCLG9CQUNyQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsd0NBQXdDLENBQUMsRUFDakYsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDLEVBQ3JFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUNwRTs7QUFFRCxNQUFNLEtBQU8sa0JBQWtCLG9CQUMzQiwwQkFBMEIsRUFFMUIsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUVwQyx5QkFBeUI7SUFDekIsK0JBQStCO0lBRS9CLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsMEJBQTBCO0VBRTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7XG5cdGluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblx0aW5NZW1vcnlTdHJ1Y3R1cmVQcm92aWRlcnMsXG5cdGluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVyc1xufSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvaW4tbWVtb3J5LnN0cnVjdHVyZS5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC12ZXJ0aWNhbC1zY3JvbGwtZW5hYmxlZC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2Nyb2xsLXBvc2l0aW9uL3NldC1zY3JvbGwtcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9zdW1tYXJpZXMvc2V0L3N0cnVjdHVyZS5zZXQtc3VtbWFyaWVzLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnknO1xuaW1wb3J0IHsgc3VtbWFyaWVzUHJvdmlkZXJzIH0gZnJvbSAnLi4vZG9tYWluL3N1bW1hcmllcy9zdW1tYXJpZXMucHJvdmlkZXJzJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi1hcGkvcmVhZC9maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzVWlFdmVudHNSZXBvc2l0b3J5IH0gZnJvbSAnLi9zdW1tYXJpZXMvc3RydWN0dXJlLXN1bW1hcmllcy51aS1ldmVudHMtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4vc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi92ZXJ0aWNhbC1mb3JtYXRpb24ucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi92ZXJ0aWNhbC1mb3JtYXRpb24vc2V0LXJvdy1oZWlnaHQvc2V0LXJvdy1oZWlnaHQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldEhlaWdodENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb250YWluZXIvc2V0LWhlaWdodC9zdHJ1Y3R1cmUtc2V0LWhlaWdodC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uL3N0cnVjdHVyZS12ZXJ0aWNhbC1mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4vc3VtbWFyaWVzL3N0cnVjdHVyZS1zdW1tYXJpZXMud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcmllc1JlcG9zaXRvcnkgfSBmcm9tICcuL3N1bW1hcmllcy9lbmFibGVkL3N0cnVjdHVyZS5zdW1tYXJpZXMucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDcmVhdGVkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS1zdHJ1Y3R1cmUvc3RydWN0dXJlLWNyZWF0ZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNFbmFibGVkU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9zdW1tYXJpZXMvZW5hYmxlZC9zdHJ1Y3R1cmUuc3VtbWFyaWVzLWVuYWJsZWQtc2V0LmV2ZW50LWhhbmRsZXInO1xuXG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdC4uLmluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyxcblxuXHRWZXJ0aWNhbEZvcm1hdGlvbkZhY3RvcnksXG5cblx0Li4uc3VtbWFyaWVzUHJvdmlkZXJzXG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVJlYWRQcm92aWRlcnMsXG5cdFZlcnRpY2FsRm9ybWF0aW9uQ29udmVydGVyLFxuXHRWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cblx0U3RydWN0dXJlU3VtbWFyaWVzUmVwb3NpdG9yeSxcblx0U3RydWN0dXJlU3VtbWFyaWVzV2FyZWhvdXNlXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlQ29tbWFuZEhhbmRsZXJzID0gW1xuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRWZXJ0aWNhbFNjcm9sbEVuYWJsZWRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRTY3JvbGxQb3NpdGlvbkNvbW1hbmRIYW5kbGVyLCAnU3RydWN0dXJlQWdncmVnYXRlJyksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRSb3dIZWlnaHRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVTZXRIZWlnaHRDb21tYW5kSGFuZGxlciwgJ1N0cnVjdHVyZUFnZ3JlZ2F0ZScpXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlRG9tYWluRXZlbnRIYW5kbGVycyA9IFtcblx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyRG9tYWluRXZlbnRIYW5kbGVyKFN0cnVjdHVyZVN1bW1hcmllc0VuYWJsZWRTZXRFdmVudEhhbmRsZXIpLFxuXHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlQ3JlYXRlZEV2ZW50SGFuZGxlciksXG5cdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIpXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHQuLi5pbk1lbW9yeVN0cnVjdHVyZVByb3ZpZGVycyxcblxuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdFN0cnVjdHVyZVN1bW1hcmllc0NvbW1hbmREaXNwYXRjaGVyLFxuXHRTdHJ1Y3R1cmVTdW1tYXJpZXNVaUV2ZW50c1JlcG9zaXRvcnksXG5cblx0U3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSxcblx0U3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlcixcblxuXHRTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSxcblx0U3RydWN0dXJlV2FyZWhvdXNlLFxuXHRTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlclxuXG5dO1xuIl19