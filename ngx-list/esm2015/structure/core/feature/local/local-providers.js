/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommandInvoker } from '../../../../composition/domain-api/composition.command-invoker';
import { PagingCommandInvoker } from '../../../paging/domain-api/paging.command-invoker';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingWarehouse } from './paging/local-paging.warehouse';
import { FormationCommandInvoker } from '../../../source/domain-api/formation/formation.command-invoker';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { FormationWarehouse } from '../../../source/domain-api/formation/formation.warehouse';
import { LocalFormationWarehouse } from './formation/local-formation.warehouse';
import { StructureCommandDispatcher } from '../../domain-api/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureWarehouse } from '../../domain-api/structure.warehouse';
import { LocalStructureWarehouse } from './structure/local-structure.warehouse';
import { SourceCommandInvoker } from '../../../source/domain-api/source.command-invoker';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { SourceWarehouse } from '../../../source/domain-api/source.warehouse';
import { LocalSourceWarehouse } from './source/local-source.warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { LocalCompositionWarehouse } from './composition/local-composition.warehouse';
import { PagingWarehouse } from '../../../paging/domain-api/paging.warehouse';
import { SearchDispatcher } from '../../../search/domain/search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaWarehouse } from '../../../../schema/domain-api/schema.warehouse';
import { LocalSchemaWarehouse } from './schema/local-schema.warehouse';
import { SchemaCommandInvoker } from '../../../../schema/domain-api/schema.command-invoker';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
import { StructureVerticalFormationWarehouse } from '../../domain-api/vertical-formation/structure-vertical-formation.warehouse';
import { LocalStructureVerticalFormationWarehouse } from './vertical-formation/local-structure-vertical-formation.warehouse';
/** @type {?} */
export const localProviders = [
    { provide: PagingCommandInvoker, useClass: LocalPagingCommandDispatcher },
    { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
    { provide: FormationCommandInvoker, useClass: LocalFormationCommandDispatcher },
    { provide: FormationWarehouse, useClass: LocalFormationWarehouse },
    { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
    { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
    { provide: SourceCommandInvoker, useClass: LocalSourceCommandDispatcher },
    { provide: SourceWarehouse, useClass: LocalSourceWarehouse },
    { provide: CompositionCommandInvoker, useClass: LocalCompositionCommandDispatcher },
    { provide: CompositionWarehouse, useClass: LocalCompositionWarehouse },
    { provide: SearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
    { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse },
    { provide: SchemaWarehouse, useClass: LocalSchemaWarehouse },
    { provide: SchemaCommandInvoker, useClass: LocalSchemaCommandDispatcher }
];
/**
 * @return {?}
 */
export function provideComponentServices() {
    return [
        { provide: PagingCommandInvoker, useClass: LocalPagingCommandDispatcher },
        { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
        { provide: FormationCommandInvoker, useClass: LocalFormationCommandDispatcher },
        { provide: FormationWarehouse, useClass: LocalFormationWarehouse },
        // { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
        { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
        { provide: SourceCommandInvoker, useClass: LocalSourceCommandDispatcher },
        { provide: SourceWarehouse, useClass: LocalSourceWarehouse },
        { provide: SearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
        { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse }
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9mZWF0dXJlL2xvY2FsL2xvY2FsLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDM0csT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFDekcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDOUYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDM0YsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDakcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8s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LEVBQUU7UUFDOUUsRUFBRSxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsUUFBUSxFQUFFLHdDQUF3QyxFQUFFO0tBQ3BHLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBMb2NhbFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9wYWdpbmcvbG9jYWwtcGFnaW5nLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4vcGFnaW5nL2xvY2FsLXBhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9mb3JtYXRpb24vbG9jYWwtZm9ybWF0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vZm9ybWF0aW9uL2xvY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc3RydWN0dXJlL2xvY2FsLXN0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi9zdHJ1Y3R1cmUvbG9jYWwtc3RydWN0dXJlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc291cmNlL2xvY2FsLXNvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi1hcGkvc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4vc291cmNlL2xvY2FsLXNvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4tYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vcGFnaW5nL2RvbWFpbi1hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi9zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbFN0cnVjdHVyZVNlYXJjaENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zZWFyY2gvbG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9zY2hlbWEud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU2NoZW1hV2FyZWhvdXNlIH0gZnJvbSAnLi9zY2hlbWEvbG9jYWwtc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uL3NjaGVtYS9kb21haW4tYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTG9jYWxTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc2NoZW1hL2xvY2FsLXNjaGVtYS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vbG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGxvY2FsUHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IFBhZ2luZ0NvbW1hbmRJbnZva2VyLCB1c2VDbGFzczogTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFBhZ2luZ1dhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogRm9ybWF0aW9uV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxGb3JtYXRpb25XYXJlaG91c2UgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVdhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFNvdXJjZUNvbW1hbmRJbnZva2VyLCB1c2VDbGFzczogTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFNvdXJjZVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU291cmNlV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBDb21wb3NpdGlvbkNvbW1hbmRJbnZva2VyLCB1c2VDbGFzczogTG9jYWxDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogQ29tcG9zaXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbENvbXBvc2l0aW9uV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBTZWFyY2hEaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB9LFxuXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0sXG5cblx0eyBwcm92aWRlOiBTY2hlbWFXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFNjaGVtYVdhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFNjaGVtYUNvbW1hbmRJbnZva2VyLCB1c2VDbGFzczogTG9jYWxTY2hlbWFDb21tYW5kRGlzcGF0Y2hlciB9XG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbXBvbmVudFNlcnZpY2VzKCk6IEFycmF5PFByb3ZpZGVyPiB7XG5cdHJldHVybiBbXG5cdFx0eyBwcm92aWRlOiBQYWdpbmdDb21tYW5kSW52b2tlciwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ1dhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBGb3JtYXRpb25Db21tYW5kSW52b2tlciwgdXNlQ2xhc3M6IExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IEZvcm1hdGlvbldhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0sXG5cdFx0Ly8geyBwcm92aWRlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IFN0cnVjdHVyZVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTb3VyY2VDb21tYW5kSW52b2tlciwgdXNlQ2xhc3M6IExvY2FsU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IFNvdXJjZVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU291cmNlV2FyZWhvdXNlIH0sXG5cdFx0eyBwcm92aWRlOiBTZWFyY2hEaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHRcdHsgcHJvdmlkZTogU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH1cblx0XTtcbn1cbiJdfQ==