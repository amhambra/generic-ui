/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var commandProviders = [
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
var readProviders = [
    FormationRepository
];
/** @type {?} */
export var formationProviders = tslib_1.__spread(commandProviders, readProviders, [
    FormationEventService,
    FormationConverter,
    FormationCommandService,
    FormationReadModelService
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrRUFBa0UsQ0FBQztBQUM5RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSwyRUFBMkUsQ0FBQztBQUM1SCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUN2RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNoRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFckUsZ0JBQWdCLEdBQUc7SUFDeEIsbUJBQW1CO0lBQ25CO1FBQ0MsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLEtBQUssRUFBRSxJQUFJO0tBQ1g7SUFDRDtRQUNDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLCtCQUErQjtRQUN6QyxLQUFLLEVBQUUsSUFBSTtLQUNYO0lBQ0QseUJBQXlCO0NBQ3pCOztJQUVLLGFBQWEsR0FBRztJQUNyQixtQkFBbUI7Q0FDbkI7O0FBRUQsTUFBTSxLQUFPLGtCQUFrQixvQkFDM0IsZ0JBQWdCLEVBQ2hCLGFBQWE7SUFFaEIscUJBQXFCO0lBRXJCLGtCQUFrQjtJQUVsQix1QkFBdUI7SUFDdkIseUJBQXlCO0VBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ09NTUFORF9IQU5ETEVSUyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2V0Rm9ybWF0aW9uQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvc2V0L3NldC1mb3JtYXRpb24uY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9kb21haW4vZm9ybWF0aW9uL3JlYWQvZm9ybWF0aW9uLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uL2RvbWFpbi9mb3JtYXRpb24vY29tbWFuZC9mb3JtYXRpb24uYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vZG9tYWluL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29udmVydGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuL2Zvcm1hdGlvbi1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4vZm9ybWF0aW9uLXJlYWQtbW9kZWwuc2VydmljZSc7XG5cbmNvbnN0IGNvbW1hbmRQcm92aWRlcnMgPSBbXG5cdEZvcm1hdGlvbkRpc3BhdGNoZXIsXG5cdHtcblx0XHRwcm92aWRlOiBDT01NQU5EX0hBTkRMRVJTLFxuXHRcdHVzZUNsYXNzOiBTZXRGb3JtYXRpb25Db21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHR7XG5cdFx0cHJvdmlkZTogQ09NTUFORF9IQU5ETEVSUyxcblx0XHR1c2VDbGFzczogVG9nZ2xlU2VsZWN0ZWRSb3dDb21tYW5kSGFuZGxlcixcblx0XHRtdWx0aTogdHJ1ZVxuXHR9LFxuXHRGb3JtYXRpb25BZ2dyZWdhdGVGYWN0b3J5XG5dO1xuXG5jb25zdCByZWFkUHJvdmlkZXJzID0gW1xuXHRGb3JtYXRpb25SZXBvc2l0b3J5XG5dO1xuXG5leHBvcnQgY29uc3QgZm9ybWF0aW9uUHJvdmlkZXJzID0gW1xuXHQuLi5jb21tYW5kUHJvdmlkZXJzLFxuXHQuLi5yZWFkUHJvdmlkZXJzLFxuXG5cdEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblxuXHRGb3JtYXRpb25Db252ZXJ0ZXIsXG5cblx0Rm9ybWF0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdEZvcm1hdGlvblJlYWRNb2RlbFNlcnZpY2Vcbl07XG4iXX0=