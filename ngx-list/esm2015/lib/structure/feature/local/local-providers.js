/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CompositionCommandDispatcher } from '../../../composition/feature-api/composition.command-dispatcher';
import { PagingCommandDispatcher } from '../../../../structure/paging/domain-api/paging.command-dispatcher';
import { LocalPagingCommandDispatcher } from './paging/local-paging.command-dispatcher';
import { LocalPagingWarehouse } from './paging/local-paging.warehouse';
import { StructureFormationDispatcher } from '../../feature-api/formation/structure-formation.dispatcher';
import { LocalFormationCommandDispatcher } from './formation/local-formation.command-dispatcher';
import { StructureFormationWarehouse } from '../../feature-api/formation/structure-formation.warehouse';
import { LocalFormationWarehouse } from './formation/local-formation.warehouse';
import { StructureCommandDispatcher } from '../../feature-api/structure.command-dispatcher';
import { LocalStructureCommandDispatcher } from './structure/local-structure.command-dispatcher';
import { StructureWarehouse } from '../../feature-api/structure.warehouse';
import { LocalStructureWarehouse } from './structure/local-structure.warehouse';
import { SourceCommandDispatcher } from '../../feature-api/source/source.command-dispatcher';
import { LocalSourceCommandDispatcher } from './source/local-source.command-dispatcher';
import { StructureSourceWarehouse } from '../../feature-api/source/structure-source.warehouse';
import { LocalSourceWarehouse } from './source/local-source.warehouse';
import { LocalCompositionCommandDispatcher } from './composition/local-composition.command-dispatcher';
import { CompositionWarehouse } from '../../../composition/feature-api/composition.warehouse';
import { LocalCompositionWarehouse } from './composition/local-composition.warehouse';
import { PagingWarehouse } from '../../../../structure/paging/domain-api/paging.warehouse';
import { StructureSearchDispatcher } from '../../domain/structure/search/structure.search.dispatcher';
import { LocalStructureSearchCommandDispatcher } from './search/local-structure-search.command-dispatcher';
import { SchemaWarehouse } from '../../../../schema/feature-api/schema.warehouse';
import { LocalSchemaWarehouse } from './schema/local-schema.warehouse';
import { SchemaCommandDispatcher } from '../../../../schema/feature-api/schema.command-dispatcher';
import { LocalSchemaCommandDispatcher } from './schema/local-schema.command-dispatcher';
import { StructureVerticalFormationWarehouse } from '../../feature-api/vertical-formation/structure-vertical-formation.warehouse';
import { LocalStructureVerticalFormationWarehouse } from './vertical-formation/local-structure-vertical-formation.warehouse';
/** @type {?} */
export const localProviders = [
    { provide: PagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
    { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
    { provide: StructureFormationDispatcher, useClass: LocalFormationCommandDispatcher },
    { provide: StructureFormationWarehouse, useClass: LocalFormationWarehouse },
    { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
    { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
    { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
    { provide: StructureSourceWarehouse, useClass: LocalSourceWarehouse },
    { provide: CompositionCommandDispatcher, useClass: LocalCompositionCommandDispatcher },
    { provide: CompositionWarehouse, useClass: LocalCompositionWarehouse },
    { provide: StructureSearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
    { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse },
    { provide: SchemaWarehouse, useClass: LocalSchemaWarehouse },
    { provide: SchemaCommandDispatcher, useClass: LocalSchemaCommandDispatcher }
];
/**
 * @return {?}
 */
export function provideComponentServices() {
    return [
        { provide: PagingCommandDispatcher, useClass: LocalPagingCommandDispatcher },
        { provide: PagingWarehouse, useClass: LocalPagingWarehouse },
        { provide: StructureFormationDispatcher, useClass: LocalFormationCommandDispatcher },
        { provide: StructureFormationWarehouse, useClass: LocalFormationWarehouse },
        // { provide: StructureCommandDispatcher, useClass: LocalStructureCommandDispatcher },
        { provide: StructureWarehouse, useClass: LocalStructureWarehouse },
        { provide: SourceCommandDispatcher, useClass: LocalSourceCommandDispatcher },
        { provide: StructureSourceWarehouse, useClass: LocalSourceWarehouse },
        { provide: StructureSearchDispatcher, useClass: LocalStructureSearchCommandDispatcher },
        { provide: StructureVerticalFormationWarehouse, useClass: LocalStructureVerticalFormationWarehouse },
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2ZlYXR1cmUvbG9jYWwvbG9jYWwtcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxpRUFBaUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RSxPQUFP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Q0FBcUMsRUFBRTtRQUN2RixFQUFFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxRQUFRLEVBQUUsd0NBQXdDLEVBQUU7S0FDcEcsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZmVhdHVyZS1hcGkvY29tcG9zaXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vcGFnaW5nL2xvY2FsLXBhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuL3BhZ2luZy9sb2NhbC1wYWdpbmcud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9mb3JtYXRpb24vc3RydWN0dXJlLWZvcm1hdGlvbi5kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi9sb2NhbC1mb3JtYXRpb24uY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL2Zvcm1hdGlvbi9zdHJ1Y3R1cmUtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vZm9ybWF0aW9uL2xvY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi9mZWF0dXJlLWFwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExvY2FsU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgTG9jYWxTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS9sb2NhbC1zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTG9jYWxTb3VyY2VDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4vc291cmNlL2xvY2FsLXNvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS1hcGkvc291cmNlL3N0cnVjdHVyZS1zb3VyY2Uud2FyZWhvdXNlJztcbmltcG9ydCB7IExvY2FsU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi9zb3VyY2UvbG9jYWwtc291cmNlLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uL2xvY2FsLWNvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2ZlYXR1cmUtYXBpL2NvbXBvc2l0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbENvbXBvc2l0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi9jb21wb3NpdGlvbi9sb2NhbC1jb21wb3NpdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUGFnaW5nV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlL3BhZ2luZy9kb21haW4tYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbFN0cnVjdHVyZVNlYXJjaENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zZWFyY2gvbG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXInO1xuXG5pbXBvcnQgeyBTY2hlbWFXYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbFNjaGVtYVdhcmVob3VzZSB9IGZyb20gJy4vc2NoZW1hL2xvY2FsLXNjaGVtYS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9zY2hlbWEvZmVhdHVyZS1hcGkvc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBMb2NhbFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi9zY2hlbWEvbG9jYWwtc2NoZW1hLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmUtYXBpL3ZlcnRpY2FsLWZvcm1hdGlvbi9zdHJ1Y3R1cmUtdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBMb2NhbFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi92ZXJ0aWNhbC1mb3JtYXRpb24vbG9jYWwtc3RydWN0dXJlLXZlcnRpY2FsLWZvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNvbnN0IGxvY2FsUHJvdmlkZXJzID0gW1xuXHR7IHByb3ZpZGU6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFBhZ2luZ1dhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsUGFnaW5nV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlRm9ybWF0aW9uRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsRm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdHsgcHJvdmlkZTogU3RydWN0dXJlU291cmNlV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxTb3VyY2VXYXJlaG91c2UgfSxcblxuXHR7IHByb3ZpZGU6IENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbENvbXBvc2l0aW9uQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0eyBwcm92aWRlOiBDb21wb3NpdGlvbldhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsQ29tcG9zaXRpb25XYXJlaG91c2UgfSxcblxuXHR7IHByb3ZpZGU6IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVNlYXJjaENvbW1hbmREaXNwYXRjaGVyIH0sXG5cblx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSxcblxuXHR7IHByb3ZpZGU6IFNjaGVtYVdhcmVob3VzZSwgdXNlQ2xhc3M6IExvY2FsU2NoZW1hV2FyZWhvdXNlIH0sXG5cdHsgcHJvdmlkZTogU2NoZW1hQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH1cbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29tcG9uZW50U2VydmljZXMoKTogQXJyYXk8UHJvdmlkZXI+IHtcblx0cmV0dXJuIFtcblx0XHR7IHByb3ZpZGU6IFBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLCB1c2VDbGFzczogTG9jYWxQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9LFxuXHRcdHsgcHJvdmlkZTogUGFnaW5nV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxQYWdpbmdXYXJlaG91c2UgfSxcblx0XHR7IHByb3ZpZGU6IFN0cnVjdHVyZUZvcm1hdGlvbkRpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVGb3JtYXRpb25XYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbEZvcm1hdGlvbldhcmVob3VzZSB9LFxuXHRcdC8vIHsgcHJvdmlkZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFN0cnVjdHVyZVdhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU291cmNlQ29tbWFuZERpc3BhdGNoZXIsIHVzZUNsYXNzOiBMb2NhbFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0sXG5cdFx0eyBwcm92aWRlOiBTdHJ1Y3R1cmVTb3VyY2VXYXJlaG91c2UsIHVzZUNsYXNzOiBMb2NhbFNvdXJjZVdhcmVob3VzZSB9LFxuXHRcdHsgcHJvdmlkZTogU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciwgdXNlQ2xhc3M6IExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgfSxcblx0XHR7IHByb3ZpZGU6IFN0cnVjdHVyZVZlcnRpY2FsRm9ybWF0aW9uV2FyZWhvdXNlLCB1c2VDbGFzczogTG9jYWxTdHJ1Y3R1cmVWZXJ0aWNhbEZvcm1hdGlvbldhcmVob3VzZSB9LFxuXHRdO1xufVxuIl19