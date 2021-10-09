/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { SourceSetLoadingCommandHandler } from './loading/source-set-loading.command-handler';
import { SetOriginCommandHandler } from './origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from './origin/edit/structure.edit-source-item.command-handler';
import { SourceDispatcher } from './source.dispatcher';
import { SourceManagerFactory } from './core/source.manager-factory';
import { SourceDomainEventPublisher } from './source.domain-event.publisher';
import { SetEnabledSelectionCommandHandler } from './formation/set-enabled/set-enabled-selection.command-handler';
import { ToggleSelectedRowCommandHandler } from './formation/toggle/toggle-selected-row.command-handler';
import { FormationDispatcher } from './formation/formation.dispatcher';
import { FormationManagerFactory } from './formation/core/formation.manager-factory';
import { SelectedRowChangedEventHandler } from '../api/formation/row-selected/selected-row-changed.event-handler';
import { SetSelectionModeCommandHandler } from './formation/mode/set-selection-mode.command-handler';
import { SelectAllRowsCommandHandler } from './formation/select-all/select-all-rows.command-handler';
import { UnselectAllRowsCommandHandler } from './formation/unselect-all/unselect-all-rows.command-handler';
import { SelectionModeSetEventHandler } from '../api/formation/mode/selection-mode-set.event-handler';
import { DeleteOriginItemCommandHandler } from './origin/delete/delete-origin-item.command-handler';
import { structureKey } from '../../../core/api/structre.key';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
var SourceDomainModule = /** @class */ (function (_super) {
    tslib_1.__extends(SourceDomainModule, _super);
    function SourceDomainModule() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    SourceDomainModule.commandHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerCommandHandler(SourceSetLoadingCommandHandler, structureKey), HermesModule.registerCommandHandler(SetOriginCommandHandler, structureKey), HermesModule.registerCommandHandler(StructureEditSourceItemCommandHandler, structureKey), HermesModule.registerCommandHandler(SetEnabledSelectionCommandHandler, structureKey), HermesModule.registerCommandHandler(SetSelectionModeCommandHandler, structureKey), HermesModule.registerCommandHandler(SelectAllRowsCommandHandler, structureKey), HermesModule.registerCommandHandler(UnselectAllRowsCommandHandler, structureKey), HermesModule.registerCommandHandler(DeleteOriginItemCommandHandler, structureKey), HermesModule.registerCommandHandler(ToggleSelectedRowCommandHandler, structureKey));
    };
    /**
     * @return {?}
     */
    SourceDomainModule.domainEventHandlers = /**
     * @return {?}
     */
    function () {
        return tslib_1.__spread(HermesModule.registerDomainEventHandler(StructureOriginChangedEventHandler), HermesModule.registerDomainEventHandler(SelectedRowChangedEventHandler), HermesModule.registerDomainEventHandler(SelectionModeSetEventHandler), HermesModule.registerDomainEventHandler(StructurePreparedItemsEventHandler));
    };
    SourceDomainModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    providers: [
                        SourceDispatcher,
                        SourceManagerFactory,
                        SourceDomainEventPublisher,
                        FormationDispatcher,
                        FormationManagerFactory
                    ],
                    declarations: [],
                    exports: []
                },] }
    ];
    /** @nocollapse */
    SourceDomainModule.ctorParameters = function () { return []; };
    return SourceDomainModule;
}(DomainModule));
export { SourceDomainModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pILE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ2xILE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUd2RztJQWV3Qyw4Q0FBWTtJQUVuRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVNLGtDQUFlOzs7SUFBdEI7UUFDQyx3QkFDSSxZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDLEVBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsRUFDMUUsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQyxFQUN4RixZQUFZLENBQUMsc0JBQXNCLENBQUMsaUNBQWlDLEVBQUUsWUFBWSxDQUFDLEVBQ3BGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUMsRUFDakYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLDJCQUEyQixFQUFFLFlBQVksQ0FBQyxFQUM5RSxZQUFZLENBQUMsc0JBQXNCLENBQUMsNkJBQTZCLEVBQUUsWUFBWSxDQUFDLEVBQ2hGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUMsRUFDakYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLCtCQUErQixFQUFFLFlBQVksQ0FBQyxFQUNwRjtJQUNILENBQUM7Ozs7SUFFTSxzQ0FBbUI7OztJQUExQjtRQUNDLHdCQUNJLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUMzRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsOEJBQThCLENBQUMsRUFDdkUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLDRCQUE0QixDQUFDLEVBQ3JFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUM3RTtJQUNILENBQUM7O2dCQTFDRCxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNWLGdCQUFnQjt3QkFDaEIsb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBRTFCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3FCQUN2QjtvQkFDRCxZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7aUJBQ1g7Ozs7SUE4QkQseUJBQUM7Q0FBQSxBQTVDRCxDQWV3QyxZQUFZLEdBNkJuRDtTQTdCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRG9tYWluTW9kdWxlLCBIZXJtZXNNb2R1bGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2VkaXQvc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNvdXJjZURpc3BhdGNoZXIgfSBmcm9tICcuL3NvdXJjZS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZU1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9jb3JlL3NvdXJjZS5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFNldEVuYWJsZWRTZWxlY3Rpb25Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL3NldC1lbmFibGVkL3NldC1lbmFibGVkLXNlbGVjdGlvbi5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vZm9ybWF0aW9uL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgRm9ybWF0aW9uTWFuYWdlckZhY3RvcnkgfSBmcm9tICcuL2Zvcm1hdGlvbi9jb3JlL2Zvcm1hdGlvbi5tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXBpL2Zvcm1hdGlvbi9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9tb2RlL3NldC1zZWxlY3Rpb24tbW9kZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXJvd3MuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFVuc2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC1yb3dzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXBpL2Zvcm1hdGlvbi9tb2RlL3NlbGVjdGlvbi1tb2RlLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kSGFuZGxlciB9IGZyb20gJy4vb3JpZ2luL2RlbGV0ZS9kZWxldGUtb3JpZ2luLWl0ZW0uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IHN0cnVjdHVyZUtleSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHJlLmtleSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVPcmlnaW5DaGFuZ2VkRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi9vcmlnaW4vc3RydWN0dXJlLm9yaWdpbi1jaGFuZ2VkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0V2ZW50SGFuZGxlciB9IGZyb20gJy4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmV2ZW50LWhhbmRsZXInO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0U291cmNlRGlzcGF0Y2hlcixcblx0XHRTb3VyY2VNYW5hZ2VyRmFjdG9yeSxcblx0XHRTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcixcblxuXHRcdEZvcm1hdGlvbkRpc3BhdGNoZXIsXG5cdFx0Rm9ybWF0aW9uTWFuYWdlckZhY3Rvcnlcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXSxcblx0ZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgU291cmNlRG9tYWluTW9kdWxlIGV4dGVuZHMgRG9tYWluTW9kdWxlIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIGNvbW1hbmRIYW5kbGVycygpIHtcblx0XHRyZXR1cm4gW1xuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU291cmNlU2V0TG9hZGluZ0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0T3JpZ2luQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0RW5hYmxlZFNlbGVjdGlvbkNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0U2VsZWN0aW9uTW9kZUNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2VsZWN0QWxsUm93c0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVW5zZWxlY3RBbGxSb3dzQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihEZWxldGVPcmlnaW5JdGVtQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpXG5cdFx0XTtcblx0fVxuXG5cdHN0YXRpYyBkb21haW5FdmVudEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU3RydWN0dXJlT3JpZ2luQ2hhbmdlZEV2ZW50SGFuZGxlciksXG5cdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTZWxlY3Rpb25Nb2RlU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zRXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19