/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { COMMAND_HANDLERS } from '@generic-ui/hermes';
import { FormationDispatcher } from '../../domain/formation/command/formation.dispatcher';
import { SetFormationCommandHandler } from '../../domain/formation/command/set/set-formation.command-handler';
import { ToggleSelectedRowCommandHandler } from '../../domain/formation/command/toggle/toggle-selected-row.command-handler';
import { FormationRepository } from '../../domain/formation/query/formation-repository';
import { FormationEventService } from './formation-event.service';
import { FormationConverter } from '../../domain/formation/formation.converter';
import { FormationCommandService } from './formation-command.service';
import { FormationQueryService } from './formation-query.service';
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
    }
];
/** @type {?} */
const queryProviders = [
    FormationRepository
];
/** @type {?} */
export const formationProviders = [
    ...commandProviders,
    ...queryProviders,
    FormationEventService,
    FormationConverter,
    FormationCommandService,
    FormationQueryService
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9hcHAvZm9ybWF0aW9uL2Zvcm1hdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzlHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzVILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztNQUU1RCxnQkFBZ0IsR0FBRztJQUN4QixtQkFBbUI7SUFDbkI7UUFDQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWDtJQUNEO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLEtBQUssRUFBRSxJQUFJO0tBQ1g7Q0FDRDs7TUFFSyxjQUFjLEdBQUc7SUFDdEIsbUJBQW1CO0NBQ25COztBQUVELE1BQU0sT0FBTyxrQkFBa0IsR0FBRztJQUNqQyxHQUFHLGdCQUFnQjtJQUNuQixHQUFHLGNBQWM7SUFFakIscUJBQXFCO0lBRXJCLGtCQUFrQjtJQUVsQix1QkFBdUI7SUFDdkIscUJBQXFCO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvc2V0L3NldC1mb3JtYXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3F1ZXJ5L2Zvcm1hdGlvbi1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi9mb3JtYXRpb24tY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvblF1ZXJ5U2VydmljZSB9IGZyb20gJy4vZm9ybWF0aW9uLXF1ZXJ5LnNlcnZpY2UnO1xuXG5jb25zdCBjb21tYW5kUHJvdmlkZXJzID0gW1xuXHRGb3JtYXRpb25EaXNwYXRjaGVyLFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fSxcblx0e1xuXHRcdHByb3ZpZGU6IENPTU1BTkRfSEFORExFUlMsXG5cdFx0dXNlQ2xhc3M6IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIsXG5cdFx0bXVsdGk6IHRydWVcblx0fVxuXTtcblxuY29uc3QgcXVlcnlQcm92aWRlcnMgPSBbXG5cdEZvcm1hdGlvblJlcG9zaXRvcnlcbl07XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRpb25Qcm92aWRlcnMgPSBbXG5cdC4uLmNvbW1hbmRQcm92aWRlcnMsXG5cdC4uLnF1ZXJ5UHJvdmlkZXJzLFxuXG5cdEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblxuXHRGb3JtYXRpb25Db252ZXJ0ZXIsXG5cblx0Rm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdEZvcm1hdGlvblF1ZXJ5U2VydmljZVxuXTtcbiJdfQ==