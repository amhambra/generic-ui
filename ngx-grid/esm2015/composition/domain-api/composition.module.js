/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FabricButtonComponent, FabricButtonModule, FabricCheckboxComponent, FabricCheckboxModule, FabricChipComponent, FabricChipModule, FabricDatePickerModule, FabricInputComponent, FabricInputModule } from '@generic-ui/fabric';
import { HermesModule } from '@generic-ui/hermes';
import { ViewTemplatesComponent } from './read/view/view-templates.component';
import { NumberEditTemplateComponent } from './read/edit/template/number-edit-template.component';
import { StringEditTemplateComponent } from './read/edit/template/string-edit-template.component';
import { EditTemplatesComponent } from './read/edit/edit-templates.component';
import { BooleanEditTemplateComponent } from './read/edit/template/boolean-edit-template.component';
import { ColumnQueryComponent } from '../feature/column-query.component';
import { FunctionViewComponent } from './read/view/function/function-view.component';
import { compositionProviders } from './composition.providers';
import { SanitizeModule } from '../../common/cdk/sanitize/sanitize.module';
import { CompositionAggregateFactory } from '../domain/composition.aggregate-factory';
import { InMemoryCompositionAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.composition.aggregate-repository';
import { CreateCompositionCommandHandler } from '../domain/create/create-composition.command-handler';
import { CompositionSetColumnEnabledCommandHandler } from '../domain/column/set-enabled/composition.set-column-enabled.command-handler';
import { SetColumnsCommandHandler } from '../domain/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../domain/width/set-width/set-composition-width.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from '../domain/column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from '../domain/column/move/right/composition.move-right-column.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../domain/column/sort/composition-change-sort-status.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../domain/width/set-container-width/set-composition-container-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../domain/width/resize-width/set-composition-resize-width.command-handler';
import { DateEditTemplateComponent } from './read/edit/template/date-edit-template.component';
import { BarViewComponent } from './read/view/bar/bar-view.component';
import { PercentageViewComponent } from './read/view/percentage/percentage-view.component';
import { TextViewComponent } from './read/view/text/text-view.component';
import { CompositionChangeSortStatusEventHandler } from '../domain/column/sort/composition-change-sort-status.event-handler';
/** @type {?} */
const components = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    StringEditTemplateComponent,
    NumberEditTemplateComponent,
    BooleanEditTemplateComponent,
    DateEditTemplateComponent,
    ColumnQueryComponent,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent,
    TextViewComponent
];
/** @type {?} */
const exportDeclarations = [
    ViewTemplatesComponent,
    EditTemplatesComponent,
    ColumnQueryComponent,
    FabricChipModule,
    FabricCheckboxModule,
    FabricButtonModule,
    FabricInputModule,
    FunctionViewComponent,
    BarViewComponent,
    PercentageViewComponent
];
/** @type {?} */
export const compositionKey = 'CompositionAggregate';
export class CompositionModule {
}
CompositionModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    SanitizeModule,
                    FabricChipModule,
                    FabricCheckboxModule,
                    FabricButtonModule,
                    FabricInputModule,
                    FabricDatePickerModule,
                    HermesModule.defineAggregate(compositionKey, CompositionAggregateFactory, InMemoryCompositionAggregateRepository, CreateCompositionCommandHandler, [
                        ...HermesModule.registerCommandHandler(SetColumnsCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionResizeWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(SetCompositionContainerWidthCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionSetColumnEnabledCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionChangeSortStatusCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveLeftColumnCommandHandler, compositionKey),
                        ...HermesModule.registerCommandHandler(CompositionMoveRightColumnCommandHandler, compositionKey)
                    ], [
                        ...HermesModule.registerMultiDomainEventHandler(CompositionChangeSortStatusEventHandler)
                    ])
                ],
                providers: [
                    ...compositionProviders
                ],
                declarations: [
                    components
                ],
                exports: exportDeclarations,
                entryComponents: [
                    ViewTemplatesComponent,
                    EditTemplatesComponent,
                    FabricChipComponent,
                    FabricCheckboxComponent,
                    FabricButtonComponent,
                    FabricInputComponent
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckQsT0FBTyxFQUNOLHFCQUFxQixFQUNyQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUN2SSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUN4SSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUNwSCxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNsSSxPQUFPLEVBQUUsd0NBQXdDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNySSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQUNqSSxPQUFPLEVBQUUsMENBQTBDLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUNqSixPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUNwSSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM5RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUNBQXVDLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQzs7TUFHdkgsVUFBVSxHQUFHO0lBQ2xCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUVwQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7Q0FDakI7O01BRUssa0JBQWtCLEdBQUc7SUFDMUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFFcEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBRWpCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0NBQ3ZCOztBQUVELE1BQU0sT0FBTyxjQUFjLEdBQUcsc0JBQXNCO0FBbURwRCxNQUFNLE9BQU8saUJBQWlCOzs7WUFqRDdCLFFBQVEsU0FBQztnQkFDVCxPQUFPLEVBQUU7b0JBQ1IsWUFBWTtvQkFDWixtQkFBbUI7b0JBRW5CLGNBQWM7b0JBRWQsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLGtCQUFrQjtvQkFDbEIsaUJBQWlCO29CQUNqQixzQkFBc0I7b0JBRXRCLFlBQVksQ0FBQyxlQUFlLENBQzNCLGNBQWMsRUFDZCwyQkFBMkIsRUFDM0Isc0NBQXNDLEVBQ3RDLCtCQUErQixFQUUvQjt3QkFDQyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx3QkFBd0IsRUFBRSxjQUFjLENBQUM7d0JBQ2hGLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLGlDQUFpQyxFQUFFLGNBQWMsQ0FBQzt3QkFDekYsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMsdUNBQXVDLEVBQUUsY0FBYyxDQUFDO3dCQUMvRixHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQywwQ0FBMEMsRUFBRSxjQUFjLENBQUM7d0JBQ2xHLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHlDQUF5QyxFQUFFLGNBQWMsQ0FBQzt3QkFDakcsR0FBRyxZQUFZLENBQUMsc0JBQXNCLENBQUMseUNBQXlDLEVBQUUsY0FBYyxDQUFDO3dCQUNqRyxHQUFHLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyx1Q0FBdUMsRUFBRSxjQUFjLENBQUM7d0JBQy9GLEdBQUcsWUFBWSxDQUFDLHNCQUFzQixDQUFDLHdDQUF3QyxFQUFFLGNBQWMsQ0FBQztxQkFDaEcsRUFBRTt3QkFDRixHQUFHLFlBQVksQ0FBQywrQkFBK0IsQ0FBQyx1Q0FBdUMsQ0FBQztxQkFDeEYsQ0FDRDtpQkFDRDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YsR0FBRyxvQkFBb0I7aUJBQ3ZCO2dCQUNELFlBQVksRUFBRTtvQkFDYixVQUFVO2lCQUNWO2dCQUNELE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLGVBQWUsRUFBRTtvQkFDaEIsc0JBQXNCO29CQUN0QixzQkFBc0I7b0JBQ3RCLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixxQkFBcUI7b0JBQ3JCLG9CQUFvQjtpQkFDcEI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtcblx0RmFicmljQnV0dG9uQ29tcG9uZW50LFxuXHRGYWJyaWNCdXR0b25Nb2R1bGUsXG5cdEZhYnJpY0NoZWNrYm94Q29tcG9uZW50LFxuXHRGYWJyaWNDaGVja2JveE1vZHVsZSxcblx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljRGF0ZVBpY2tlck1vZHVsZSxcblx0RmFicmljSW5wdXRDb21wb25lbnQsXG5cdEZhYnJpY0lucHV0TW9kdWxlXG59IGZyb20gJ0BnZW5lcmljLXVpL2ZhYnJpYyc7XG5cbmltcG9ydCB7IEhlcm1lc01vZHVsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFZpZXdUZW1wbGF0ZXNDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvdmlldy92aWV3LXRlbXBsYXRlcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnVtYmVyRWRpdFRlbXBsYXRlQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL2VkaXQvdGVtcGxhdGUvbnVtYmVyLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cmluZ0VkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVhZC9lZGl0L3RlbXBsYXRlL3N0cmluZy1lZGl0LXRlbXBsYXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFkL2VkaXQvZWRpdC10ZW1wbGF0ZXMuY29tcG9uZW50JztcbmltcG9ydCB7IEJvb2xlYW5FZGl0VGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvZWRpdC90ZW1wbGF0ZS9ib29sZWFuLWVkaXQtdGVtcGxhdGUuY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtblF1ZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9jb2x1bW4tcXVlcnkuY29tcG9uZW50JztcbmltcG9ydCB7IEZ1bmN0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcmVhZC92aWV3L2Z1bmN0aW9uL2Z1bmN0aW9uLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IGNvbXBvc2l0aW9uUHJvdmlkZXJzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5wcm92aWRlcnMnO1xuaW1wb3J0IHsgU2FuaXRpemVNb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vY2RrL3Nhbml0aXplL3Nhbml0aXplLm1vZHVsZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZG9tYWluL2luLW1lbW9yeS5jb21wb3NpdGlvbi5hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbHVtbnNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi93aWR0aC9zZXQtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5tb3ZlLWxlZnQtY29sdW1uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbk1vdmVSaWdodENvbHVtbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9tb3ZlL3JpZ2h0L2NvbXBvc2l0aW9uLm1vdmUtcmlnaHQtY29sdW1uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9jb21wb3NpdGlvbi1jaGFuZ2Utc29ydC1zdGF0dXMuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi93aWR0aC9zZXQtY29udGFpbmVyLXdpZHRoL3NldC1jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGguY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFNldENvbXBvc2l0aW9uUmVzaXplV2lkdGhDb21tYW5kSGFuZGxlciB9IGZyb20gJy4uL2RvbWFpbi93aWR0aC9yZXNpemUtd2lkdGgvc2V0LWNvbXBvc2l0aW9uLXJlc2l6ZS13aWR0aC5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgRGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVhZC9lZGl0L3RlbXBsYXRlL2RhdGUtZWRpdC10ZW1wbGF0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vcmVhZC92aWV3L2Jhci9iYXItdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGVyY2VudGFnZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvdmlldy9wZXJjZW50YWdlL3BlcmNlbnRhZ2Utdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGV4dFZpZXdDb21wb25lbnQgfSBmcm9tICcuL3JlYWQvdmlldy90ZXh0L3RleHQtdmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25DaGFuZ2VTb3J0U3RhdHVzRXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5ldmVudC1oYW5kbGVyJztcblxuXG5jb25zdCBjb21wb25lbnRzID0gW1xuXHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRFZGl0VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRTdHJpbmdFZGl0VGVtcGxhdGVDb21wb25lbnQsXG5cdE51bWJlckVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Qm9vbGVhbkVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0RGF0ZUVkaXRUZW1wbGF0ZUNvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50LFxuXHRCYXJWaWV3Q29tcG9uZW50LFxuXHRQZXJjZW50YWdlVmlld0NvbXBvbmVudCxcblx0VGV4dFZpZXdDb21wb25lbnRcbl07XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0Vmlld1RlbXBsYXRlc0NvbXBvbmVudCxcblx0RWRpdFRlbXBsYXRlc0NvbXBvbmVudCxcblx0Q29sdW1uUXVlcnlDb21wb25lbnQsXG5cblx0RmFicmljQ2hpcE1vZHVsZSxcblx0RmFicmljQ2hlY2tib3hNb2R1bGUsXG5cdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0RmFicmljSW5wdXRNb2R1bGUsXG5cblx0RnVuY3Rpb25WaWV3Q29tcG9uZW50LFxuXHRCYXJWaWV3Q29tcG9uZW50LFxuXHRQZXJjZW50YWdlVmlld0NvbXBvbmVudFxuXTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvc2l0aW9uS2V5ID0gJ0NvbXBvc2l0aW9uQWdncmVnYXRlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuXG5cdFx0U2FuaXRpemVNb2R1bGUsXG5cblx0XHRGYWJyaWNDaGlwTW9kdWxlLFxuXHRcdEZhYnJpY0NoZWNrYm94TW9kdWxlLFxuXHRcdEZhYnJpY0J1dHRvbk1vZHVsZSxcblx0XHRGYWJyaWNJbnB1dE1vZHVsZSxcblx0XHRGYWJyaWNEYXRlUGlja2VyTW9kdWxlLFxuXG5cdFx0SGVybWVzTW9kdWxlLmRlZmluZUFnZ3JlZ2F0ZShcblx0XHRcdGNvbXBvc2l0aW9uS2V5LFxuXHRcdFx0Q29tcG9zaXRpb25BZ2dyZWdhdGVGYWN0b3J5LFxuXHRcdFx0SW5NZW1vcnlDb21wb3NpdGlvbkFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRDcmVhdGVDb21wb3NpdGlvbkNvbW1hbmRIYW5kbGVyLFxuXG5cdFx0XHRbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbHVtbnNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihTZXRDb21wb3NpdGlvbldpZHRoQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoU2V0Q29tcG9zaXRpb25SZXNpemVXaWR0aENvbW1hbmRIYW5kbGVyLCBjb21wb3NpdGlvbktleSksXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3RlckNvbW1hbmRIYW5kbGVyKFNldENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpLFxuXHRcdFx0XHQuLi5IZXJtZXNNb2R1bGUucmVnaXN0ZXJDb21tYW5kSGFuZGxlcihDb21wb3NpdGlvbk1vdmVMZWZ0Q29sdW1uQ29tbWFuZEhhbmRsZXIsIGNvbXBvc2l0aW9uS2V5KSxcblx0XHRcdFx0Li4uSGVybWVzTW9kdWxlLnJlZ2lzdGVyQ29tbWFuZEhhbmRsZXIoQ29tcG9zaXRpb25Nb3ZlUmlnaHRDb2x1bW5Db21tYW5kSGFuZGxlciwgY29tcG9zaXRpb25LZXkpXG5cdFx0XHRdLCBbXG5cdFx0XHRcdC4uLkhlcm1lc01vZHVsZS5yZWdpc3Rlck11bHRpRG9tYWluRXZlbnRIYW5kbGVyKENvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0V2ZW50SGFuZGxlcilcblx0XHRcdF1cblx0XHQpXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdC4uLmNvbXBvc2l0aW9uUHJvdmlkZXJzXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdGNvbXBvbmVudHNcblx0XSxcblx0ZXhwb3J0czogZXhwb3J0RGVjbGFyYXRpb25zLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRWaWV3VGVtcGxhdGVzQ29tcG9uZW50LFxuXHRcdEVkaXRUZW1wbGF0ZXNDb21wb25lbnQsXG5cdFx0RmFicmljQ2hpcENvbXBvbmVudCxcblx0XHRGYWJyaWNDaGVja2JveENvbXBvbmVudCxcblx0XHRGYWJyaWNCdXR0b25Db21wb25lbnQsXG5cdFx0RmFicmljSW5wdXRDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbk1vZHVsZSB7XG5cbn1cbiJdfQ==