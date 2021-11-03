import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule, HermesModule } from '@generic-ui/hermes';
import { ToggleFilterCommandHandler } from './toggle/toggle-filter.command-handler';
import { AddFilterCommandHandler } from './core/add/add-filter.command-handler';
import { RemoveAllFiltersCommandHandler } from './core/remove-all/remove-all-filters.command-handler';
import { RemoveFilterCommandHandler } from './core/remove/remove-filter.command-handler';
import { SetConfigFilterCommandHandler } from './config/set-config-filter.command-handler';
import { SetConfigQuickFilterCommandHandler } from './quick/set-config-quick-filter.command-handler';
import { FilterManagerFactory } from './filter.manager-factory';
import { ConfigQuickFilterSetEventHandler } from '../api/read/config-quick-filter-set.event-handler';
import { ConfigFilterSetEventHandler } from '../api/read/config-filter-set.event-handler';
import { FilterTypeConfigFilterSetEventHandler } from '../api/type/filter-type.config-filter-set.event-handler';
import { ActiveFiltersSetEventHandler } from '../api/active/active-filters-set.event-handler';
import { UniqueFilterCalculatedEventHandler } from '../api/unique/unique-filter-calculated.event-handler';
import { FilterTypeFieldsInitedEventHandler } from './type/init/filter-type.fields-inited.event-handler';
import { UnselectAllUniqueFilterCommandHandler } from './unique/unselect-all/unselect-all-unique-filter.command-handler';
import { UnselectUniqueFilterCommandHandler } from './unique/unselect/unselect-unique-filter.command-handler';
import { SelectAllUniqueFilterCommandHandler } from './unique/select-all/select-all-unique-filter.command-handler';
import { SelectUniqueFilterCommandHandler } from './unique/select/select-unique-filter.command-handler';
import { structureKey } from '../../../core/api/structre.key';
export class FilterDomainModule extends DomainModule {
    constructor() {
        super();
    }
    static commandHandlers() {
        return [
            HermesModule.registerCommandHandler(SetConfigFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SetConfigQuickFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(ToggleFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(AddFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(RemoveAllFiltersCommandHandler, structureKey),
            HermesModule.registerCommandHandler(RemoveFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SelectUniqueFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(SelectAllUniqueFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(UnselectUniqueFilterCommandHandler, structureKey),
            HermesModule.registerCommandHandler(UnselectAllUniqueFilterCommandHandler, structureKey)
        ];
    }
    static domainEventHandlers() {
        return [
            HermesModule.registerDomainEventHandler(ConfigQuickFilterSetEventHandler),
            HermesModule.registerDomainEventHandler(ConfigFilterSetEventHandler),
            HermesModule.registerDomainEventHandler(FilterTypeConfigFilterSetEventHandler),
            HermesModule.registerDomainEventHandler(ActiveFiltersSetEventHandler),
            HermesModule.registerDomainEventHandler(UniqueFilterCalculatedEventHandler),
            HermesModule.registerDomainEventHandler(FilterTypeFieldsInitedEventHandler)
        ];
    }
}
FilterDomainModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                providers: [
                    FilterManagerFactory
                ],
                declarations: [],
                exports: []
            },] }
];
FilterDomainModule.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLmRvbWFpbi1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN0RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN6RixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoSCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM5RixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUMxRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUN6SCxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUM5RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUNuSCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUN4RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFjOUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFlBQVk7SUFFbkQ7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsZUFBZTtRQUNyQixPQUFPO1lBQ04sWUFBWSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixFQUFFLFlBQVksQ0FBQztZQUNoRixZQUFZLENBQUMsc0JBQXNCLENBQUMsa0NBQWtDLEVBQUUsWUFBWSxDQUFDO1lBQ3JGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7WUFDN0UsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQztZQUMxRSxZQUFZLENBQUMsc0JBQXNCLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDO1lBQ2pGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQkFBMEIsRUFBRSxZQUFZLENBQUM7WUFDN0UsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGdDQUFnQyxFQUFFLFlBQVksQ0FBQztZQUNuRixZQUFZLENBQUMsc0JBQXNCLENBQUMsbUNBQW1DLEVBQUUsWUFBWSxDQUFDO1lBQ3RGLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxrQ0FBa0MsRUFBRSxZQUFZLENBQUM7WUFDckYsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHFDQUFxQyxFQUFFLFlBQVksQ0FBQztTQUN4RixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUI7UUFDekIsT0FBTztZQUNOLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUN6RSxZQUFZLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUM7WUFDcEUsWUFBWSxDQUFDLDBCQUEwQixDQUFDLHFDQUFxQyxDQUFDO1lBQzlFLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyw0QkFBNEIsQ0FBQztZQUNyRSxZQUFZLENBQUMsMEJBQTBCLENBQUMsa0NBQWtDLENBQUM7WUFDM0UsWUFBWSxDQUFDLDBCQUEwQixDQUFDLGtDQUFrQyxDQUFDO1NBQzNFLENBQUM7SUFDSCxDQUFDOzs7WUF6Q0QsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFNBQVMsRUFBRTtvQkFDVixvQkFBb0I7aUJBRXBCO2dCQUNELFlBQVksRUFBRSxFQUFFO2dCQUNoQixPQUFPLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IERvbWFpbk1vZHVsZSwgSGVybWVzTW9kdWxlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgVG9nZ2xlRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL3RvZ2dsZS90b2dnbGUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBBZGRGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29yZS9hZGQvYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb3JlL3JlbW92ZS1hbGwvcmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBSZW1vdmVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29yZS9yZW1vdmUvcmVtb3ZlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29uZmlnRmlsdGVyQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbmZpZy9zZXQtY29uZmlnLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vcXVpY2svc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZpbHRlck1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi9maWx0ZXIubWFuYWdlci1mYWN0b3J5JztcbmltcG9ydCB7IENvbmZpZ1F1aWNrRmlsdGVyU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXBpL3JlYWQvY29uZmlnLXF1aWNrLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvcmVhZC9jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IEZpbHRlclR5cGVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvdHlwZS9maWx0ZXItdHlwZS5jb25maWctZmlsdGVyLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlcnNTZXRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvYWN0aXZlL2FjdGl2ZS1maWx0ZXJzLXNldC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvdW5pcXVlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IEZpbHRlclR5cGVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuL3R5cGUvaW5pdC9maWx0ZXItdHlwZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdW5pcXVlL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vdW5pcXVlL3Vuc2VsZWN0L3Vuc2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvc2VsZWN0LWFsbC9zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVLZXkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3RyZS5rZXknO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGVcblx0XSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0RmlsdGVyTWFuYWdlckZhY3RvcnlcblxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtdLFxuXHRleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJEb21haW5Nb2R1bGUgZXh0ZW5kcyBEb21haW5Nb2R1bGUge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgY29tbWFuZEhhbmRsZXJzKCkge1xuXHRcdHJldHVybiBbXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb25maWdGaWx0ZXJDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihUb2dnbGVGaWx0ZXJDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKEFkZEZpbHRlckNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoUmVtb3ZlRmlsdGVyQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmRIYW5kbGVyLCBzdHJ1Y3R1cmVLZXkpLFxuXHRcdFx0SGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciwgc3RydWN0dXJlS2V5KSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFVuc2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZEhhbmRsZXIsIHN0cnVjdHVyZUtleSlcblx0XHRdO1xuXHR9XG5cblx0c3RhdGljIGRvbWFpbkV2ZW50SGFuZGxlcnMoKSB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihDb25maWdRdWlja0ZpbHRlclNldEV2ZW50SGFuZGxlciksXG5cdFx0XHRIZXJtZXNNb2R1bGUucmVnaXN0ZXJEb21haW5FdmVudEhhbmRsZXIoQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihGaWx0ZXJUeXBlQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihBY3RpdmVGaWx0ZXJzU2V0RXZlbnRIYW5kbGVyKSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnRIYW5kbGVyKSxcblx0XHRcdEhlcm1lc01vZHVsZS5yZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcihGaWx0ZXJUeXBlRmllbGRzSW5pdGVkRXZlbnRIYW5kbGVyKVxuXHRcdF07XG5cdH1cblxufVxuIl19