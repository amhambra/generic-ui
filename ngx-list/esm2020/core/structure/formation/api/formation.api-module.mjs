import { DomainInitializer } from '@generic-ui/hermes';
import { FormationEventRepository } from './formation.event-repository';
import { FormationPublisher } from './formation.publisher';
import { FormationWarehouse } from './formation.warehouse';
import { RowSelectedArchive } from './row-selected/row-selected.archive';
import { RowSelectionModeArchive } from './mode/row-selection-mode.archive';
import { FormationDomainModule } from '../domain/formation.domain-module';
import { FormationDomainWarehouse } from '../domain-read/formation.domain-warehouse';
import { FormationDomainPublisher } from '../domain/formation.domain-publisher';
export class FormationApiModule {
    registerProviders(container) {
        container.provide(RowSelectedArchive);
        container.provide(FormationEventRepository);
        container.provide(FormationPublisher, FormationDomainPublisher);
        container.provide(FormationWarehouse, FormationDomainWarehouse);
        container.provide(RowSelectionModeArchive);
    }
}
export const formationInitializer = new DomainInitializer(new FormationApiModule(), new FormationDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLmFwaS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9hcGkvZm9ybWF0aW9uLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR2hGLE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsaUJBQWlCLENBQUMsU0FBb0I7UUFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxTQUFTLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDaEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2hFLFNBQVMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0Q7QUFFRCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksa0JBQWtCLEVBQUUsRUFBRSxJQUFJLHFCQUFxQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVByb3ZpZGVycywgQ29udGFpbmVyLCBEb21haW5Jbml0aWFsaXplciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4vZm9ybWF0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9ybWF0aW9uUHVibGlzaGVyIH0gZnJvbSAnLi9mb3JtYXRpb24ucHVibGlzaGVyJztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZEFyY2hpdmUgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0ZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlQXJjaGl2ZSB9IGZyb20gJy4vbW9kZS9yb3ctc2VsZWN0aW9uLW1vZGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Eb21haW5Nb2R1bGUgfSBmcm9tICcuLi9kb21haW4vZm9ybWF0aW9uLmRvbWFpbi1tb2R1bGUnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRG9tYWluV2FyZWhvdXNlIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgRm9ybWF0aW9uRG9tYWluUHVibGlzaGVyIH0gZnJvbSAnLi4vZG9tYWluL2Zvcm1hdGlvbi5kb21haW4tcHVibGlzaGVyJztcblxuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uQXBpTW9kdWxlIGltcGxlbWVudHMgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFJvd1NlbGVjdGVkQXJjaGl2ZSk7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRm9ybWF0aW9uRXZlbnRSZXBvc2l0b3J5KTtcblx0XHRjb250YWluZXIucHJvdmlkZShGb3JtYXRpb25QdWJsaXNoZXIsIEZvcm1hdGlvbkRvbWFpblB1Ymxpc2hlcik7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRm9ybWF0aW9uV2FyZWhvdXNlLCBGb3JtYXRpb25Eb21haW5XYXJlaG91c2UpO1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKFJvd1NlbGVjdGlvbk1vZGVBcmNoaXZlKTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0aW9uSW5pdGlhbGl6ZXIgPSBuZXcgRG9tYWluSW5pdGlhbGl6ZXIobmV3IEZvcm1hdGlvbkFwaU1vZHVsZSgpLCBuZXcgRm9ybWF0aW9uRG9tYWluTW9kdWxlKCkpO1xuXG4iXX0=