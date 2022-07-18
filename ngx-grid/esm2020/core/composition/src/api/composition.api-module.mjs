import { DomainInitializer } from '@generic-ui/hermes';
import { CompositionDomainModule } from '../core/composition.domain-module';
import { ColumnDefinitionFactory } from '../core-read/definition/column-definition.factory';
import { ViewTemplateRepository } from '../../../../feature/composition/src/column/view/view-template.repository';
import { ViewTemplateFactory } from '../../../../feature/composition/src/column/view/view-template.factory';
import { EditTemplateFactory } from '../../../../feature/composition/src/column/edit/edit-template.factory';
import { EditTemplateRepository } from '../../../../feature/composition/src/column/edit/edit-template.repository';
import { CompositionReadModelRootConverter } from '../core-read/composition.read-model-root-converter';
import { CompositionPublisher } from './composition.publisher';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionGroupArchive } from '../core-read/group/composition-group.archive';
import { ColumnAutoConfigurator } from './column/auto/column-auto.configurator';
import { InMemoryCompositionReadStore } from '../persist/api/in-memory.composition.read-store';
import { CompositionReadModelRootRepository } from '../core-read/composition.read-model-root-repository';
import { InMemoryCompositionStore } from '../persist/in-memory.composition.store';
import { InMemoryCompositionRepository } from '../persist/api/in-memory.composition.repository';
import { CompositionDomainPublisher } from '../core/compositon.domain-publisher';
import { CompositionDomainWarehouse } from '../core-read/composition.domain-warehouse';
import { CompositionDomainEventRepository } from '../core/composition.domain-event-repository';
import { DomainColumnAutoConfigurator } from '../domain/column/auto/domain.column-auto.configurator';
export class CompositionApiModule {
    registerProviders(container) {
        container.provide(InMemoryCompositionReadStore);
        container.provide(CompositionReadModelRootRepository, InMemoryCompositionRepository);
        container.provide(ColumnDefinitionFactory);
        container.provide(ViewTemplateRepository);
        container.provide(ViewTemplateFactory);
        container.provide(EditTemplateFactory);
        container.provide(EditTemplateRepository);
        container.provide(InMemoryCompositionStore);
        container.provide(CompositionReadModelRootConverter);
        container.provide(CompositionGroupArchive);
        container.provide(CompositionPublisher, CompositionDomainPublisher);
        container.provide(CompositionWarehouse, CompositionDomainWarehouse);
        container.provide(CompositionEventRepository, CompositionDomainEventRepository);
        container.provide(ColumnAutoConfigurator, DomainColumnAutoConfigurator);
    }
}
export function initializeComposition() {
    new DomainInitializer(new CompositionApiModule(), new CompositionDomainModule()).init();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9zcmMvYXBpL2NvbXBvc2l0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVFQUF1RSxDQUFDO0FBQzVHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3ZHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQy9GLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQy9GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBR3JHLE1BQU0sT0FBTyxvQkFBb0I7SUFFaEMsaUJBQWlCLENBQUMsU0FBb0I7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1FBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsa0NBQWtDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUNyRixTQUFTLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUN2QyxTQUFTLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBRTNDLFNBQVMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUNwRSxTQUFTLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRWhGLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0NBQ0Q7QUFFRCxNQUFNLFVBQVUscUJBQXFCO0lBQ3BDLElBQUksaUJBQWlCLENBQUMsSUFBSSxvQkFBb0IsRUFBRSxFQUFFLElBQUksdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3pGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcGlQcm92aWRlcnMsIENvbnRhaW5lciwgRG9tYWluSW5pdGlhbGl6ZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2NvbXBvc2l0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuLi9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jb2x1bW4tZGVmaW5pdGlvbi5mYWN0b3J5JztcbmltcG9ydCB7IFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vdmlldy92aWV3LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tcG9zaXRpb24vc3JjL2NvbHVtbi92aWV3L3ZpZXctdGVtcGxhdGUuZmFjdG9yeSc7XG5pbXBvcnQgeyBFZGl0VGVtcGxhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21wb3NpdGlvbi9zcmMvY29sdW1uL2VkaXQvZWRpdC10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi8uLi9mZWF0dXJlL2NvbXBvc2l0aW9uL3NyYy9jb2x1bW4vZWRpdC9lZGl0LXRlbXBsYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vY29yZS1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25QdWJsaXNoZXIgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4vY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBBcmNoaXZlIH0gZnJvbSAnLi4vY29yZS1yZWFkL2dyb3VwL2NvbXBvc2l0aW9uLWdyb3VwLmFyY2hpdmUnO1xuaW1wb3J0IHsgQ29sdW1uQXV0b0NvbmZpZ3VyYXRvciB9IGZyb20gJy4vY29sdW1uL2F1dG8vY29sdW1uLWF1dG8uY29uZmlndXJhdG9yJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgfSBmcm9tICcuLi9wZXJzaXN0L2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29yZS1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL3BlcnNpc3QvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25SZXBvc2l0b3J5IH0gZnJvbSAnLi4vcGVyc2lzdC9hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5QdWJsaXNoZXIgfSBmcm9tICcuLi9jb3JlL2NvbXBvc2l0b24uZG9tYWluLXB1Ymxpc2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkRvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2NvcmUtcmVhZC9jb21wb3NpdGlvbi5kb21haW4td2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uRG9tYWluRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vY29yZS9jb21wb3NpdGlvbi5kb21haW4tZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBEb21haW5Db2x1bW5BdXRvQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9hdXRvL2RvbWFpbi5jb2x1bW4tYXV0by5jb25maWd1cmF0b3InO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkFwaU1vZHVsZSBpbXBsZW1lbnRzIEFwaVByb3ZpZGVycyB7XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RSZXBvc2l0b3J5LCBJbk1lbW9yeUNvbXBvc2l0aW9uUmVwb3NpdG9yeSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFZpZXdUZW1wbGF0ZVJlcG9zaXRvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFZpZXdUZW1wbGF0ZUZhY3RvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEVkaXRUZW1wbGF0ZUZhY3RvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyKTtcblx0XHRjb250YWluZXIucHJvdmlkZShDb21wb3NpdGlvbkdyb3VwQXJjaGl2ZSk7XG5cblx0XHRjb250YWluZXIucHJvdmlkZShDb21wb3NpdGlvblB1Ymxpc2hlciwgQ29tcG9zaXRpb25Eb21haW5QdWJsaXNoZXIpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKENvbXBvc2l0aW9uV2FyZWhvdXNlLCBDb21wb3NpdGlvbkRvbWFpbldhcmVob3VzZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksIENvbXBvc2l0aW9uRG9tYWluRXZlbnRSZXBvc2l0b3J5KTtcblxuXHRcdGNvbnRhaW5lci5wcm92aWRlKENvbHVtbkF1dG9Db25maWd1cmF0b3IsIERvbWFpbkNvbHVtbkF1dG9Db25maWd1cmF0b3IpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29tcG9zaXRpb24oKTogdm9pZCB7XG5cdG5ldyBEb21haW5Jbml0aWFsaXplcihuZXcgQ29tcG9zaXRpb25BcGlNb2R1bGUoKSwgbmV3IENvbXBvc2l0aW9uRG9tYWluTW9kdWxlKCkpLmluaXQoKTtcbn1cbiJdfQ==