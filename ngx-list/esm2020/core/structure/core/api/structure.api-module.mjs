import { DomainInitializer } from '@generic-ui/hermes';
import { StructureDomainModule } from '../domain/structure.domain-module';
import { InMemoryStructureAggregateStore } from '../infrastructure/in-memory/domain/in-memory.structure.aggregate-store';
import { InMemoryStructureStore } from '../infrastructure/in-memory/in-memory.structure.store';
import { StructureAggregateRepository } from '../domain/structure-aggregate.repository';
import { InMemoryStructureAggregateRepository } from '../infrastructure/in-memory/domain/in-memory.structure-aggregate.repository';
import { FabricModalThemeService } from '@generic-ui/fabric';
import { StructureCellEditArchive } from '../../../../feature-view/grid-view/edit/structure.cell-edit.archive';
import { InMemoryStructureReadStore } from '../infrastructure/in-memory/api/in-memory-structure.read-store';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { InMemoryStructureRepository } from '../infrastructure/in-memory/api/in-memory.structure.repository';
import { StructureAggregateFactory } from '../domain/structure.aggregate-factory';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureWarehouse } from './structure.warehouse';
import { StructurePublisher } from './structure.publisher';
import { StructureDomainPublisher } from '../domain/structure.domain-publisher';
import { StructureInitialValuesReadyArchive } from './ready/structure.initial-values-ready.archive';
export class StructureApiModule {
    registerProviders(container) {
        container.provide(InMemoryStructureReadStore);
        container.provide(StructureReadModelRepository, InMemoryStructureRepository);
        container.provide(StructureAggregateFactory);
        container.provide(StructureReadModelRootConverter);
        container.provide(StructureWarehouse);
        container.provide(StructurePublisher, StructureDomainPublisher);
        container.provide(StructureInitialValuesReadyArchive);
        container.provide(InMemoryStructureAggregateStore);
        container.provide(InMemoryStructureStore);
        container.provide(StructureAggregateRepository, InMemoryStructureAggregateRepository);
        container.provide(FabricModalThemeService);
        container.provide(StructureCellEditArchive);
    }
}
export const structureInitializer = new DomainInitializer(new StructureApiModule(), new StructureDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5hcGktbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBMEMsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3RUFBd0UsQ0FBQztBQUN6SCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMvRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUNuSSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMvRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM3RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUdwRyxNQUFNLE9BQU8sa0JBQWtCO0lBRTlCLGlCQUFpQixDQUFDLFNBQW9CO1FBRXJDLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM5QyxTQUFTLENBQUMsT0FBTyxDQUFDLDRCQUE0QixFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDN0UsU0FBUyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNuRCxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztRQUV0RCxTQUFTLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsNEJBQTRCLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztRQUN0RixTQUFTLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFFM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxrQkFBa0IsRUFBRSxFQUFFLElBQUkscUJBQXFCLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBpUHJvdmlkZXJzLCBDb250YWluZXIsIENvcmVDb250YWluZXIsIERvbWFpbkluaXRpYWxpemVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLW1vZHVsZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnkuc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVXYXJlaG91c2UgfSBmcm9tICcuL3N0cnVjdHVyZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHVibGlzaGVyIH0gZnJvbSAnLi9zdHJ1Y3R1cmUucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZURvbWFpblB1Ymxpc2hlciB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLXB1Ymxpc2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbml0aWFsVmFsdWVzUmVhZHlBcmNoaXZlIH0gZnJvbSAnLi9yZWFkeS9zdHJ1Y3R1cmUuaW5pdGlhbC12YWx1ZXMtcmVhZHkuYXJjaGl2ZSc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUFwaU1vZHVsZSBpbXBsZW1lbnRzIEFwaVByb3ZpZGVycyB7XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblxuXHRcdGNvbnRhaW5lci5wcm92aWRlKEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LCBJbk1lbW9yeVN0cnVjdHVyZVJlcG9zaXRvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFN0cnVjdHVyZUFnZ3JlZ2F0ZUZhY3RvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFN0cnVjdHVyZVdhcmVob3VzZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoU3RydWN0dXJlUHVibGlzaGVyLCBTdHJ1Y3R1cmVEb21haW5QdWJsaXNoZXIpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUpO1xuXG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSwgSW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5KTtcblx0XHRjb250YWluZXIucHJvdmlkZShGYWJyaWNNb2RhbFRoZW1lU2VydmljZSk7XG5cblx0XHRjb250YWluZXIucHJvdmlkZShTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUpO1xuXHR9XG59XG5cbmV4cG9ydCBjb25zdCBzdHJ1Y3R1cmVJbml0aWFsaXplciA9IG5ldyBEb21haW5Jbml0aWFsaXplcihuZXcgU3RydWN0dXJlQXBpTW9kdWxlKCksIG5ldyBTdHJ1Y3R1cmVEb21haW5Nb2R1bGUoKSk7XG5cbiJdfQ==