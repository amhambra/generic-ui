/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/command/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/command/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from '../../domain/formation/read/formation-repository';
import { FormationAggregateFactory } from '../../domain/formation/command/formation.aggregate-factory';
import { FormationConverter } from '../../domain/formation/formation.converter';
import { FormationEventService } from './formation-event.service';
import { FormationCommandService } from './formation-command.service';
import { FormationReadModelService } from './formation-read-model.service';
/** @type {?} */
const commandProviders = [
    FormationDispatcher,
    {
        provide: COMMAND_HANDLERS,
        useClass: SetFormationCommandHandler,
        multi: true
    },
    {
        provide: COMMAND_HANDLERS,
        useClass: ToggleSelectedRowCommandHandler,
        multi: true
    },
    FormationAggregateFactory
];
/** @type {?} */
const readProviders = [
    FormationRepository
];
/** @type {?} */
export const formationProviders = [
    ...commandProviders,
    ...readProviders,
    FormationEventService,
    FormationConverter,
    FormationCommandService,
    FormationReadModelService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztNQUVyRSxnQkFBZ0IsR0FBRztJQUN4QixtQkFBbUI7SUFDbkI7UUFDQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWDtJQUNEO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRCx5QkFBeUI7Q0FDekI7O01BRUssYUFBYSxHQUFHO0lBQ3JCLG1CQUFtQjtDQUNuQjs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCLEdBQUc7SUFDakMsR0FBRyxnQkFBZ0I7SUFDbkIsR0FBRyxhQUFhO0lBRWhCLHFCQUFxQjtJQUVyQixrQkFBa0I7SUFFbEIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtDQUN6QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENPTU1BTkRfSEFORExFUlMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGb3JtYXRpb25EaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL2Zvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNldEZvcm1hdGlvbkNvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3NldC9zZXQtZm9ybWF0aW9uLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9jb21tYW5kL3RvZ2dsZS90b2dnbGUtc2VsZWN0ZWQtcm93LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9yZWFkL2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmFnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1hdGlvbi1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0Rm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeVxuXTtcblxuY29uc3QgcmVhZFByb3ZpZGVycyA9IFtcblx0Rm9ybWF0aW9uUmVwb3NpdG9yeVxuXTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdGlvblByb3ZpZGVycyA9IFtcblx0Li4uY29tbWFuZFByb3ZpZGVycyxcblx0Li4ucmVhZFByb3ZpZGVycyxcblxuXHRGb3JtYXRpb25FdmVudFNlcnZpY2UsXG5cblx0Rm9ybWF0aW9uQ29udmVydGVyLFxuXG5cdEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRGb3JtYXRpb25SZWFkTW9kZWxTZXJ2aWNlXG5dO1xuIl19