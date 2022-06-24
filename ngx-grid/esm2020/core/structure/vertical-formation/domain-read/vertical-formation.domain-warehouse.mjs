import { VerticalFormationRepository } from './vertical-formation.repository';
import { VerticalFormationScrollBarPositionArchive } from './scroll-bar/vertical-formation.scroll-bar-position.archive';
import { VerticalFormationWarehouse } from '../api/vertical-formation.warehouse';
export class VerticalFormationDomainWarehouse extends VerticalFormationWarehouse {
    constructor(verticalFormationRepository, positionRepository) {
        super();
        this.verticalFormationRepository = verticalFormationRepository;
        this.positionRepository = positionRepository;
    }
    onEnabled(structureId) {
        return this.verticalFormationRepository.onVerticalScrollEnabled(structureId);
    }
    onRowHeight(structureId) {
        return this.verticalFormationRepository.onRowHeight(structureId);
    }
    onContainerHeight(structureId) {
        return this.verticalFormationRepository.onContainerHeight(structureId);
    }
    onTopMargin(structureId) {
        return this.verticalFormationRepository.onTopMargin(structureId);
    }
    onScrollBarPosition(structureId) {
        return this.positionRepository.on(structureId);
    }
}
VerticalFormationDomainWarehouse.services = [
    VerticalFormationRepository,
    VerticalFormationScrollBarPositionArchive
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9kb21haW4tcmVhZC92ZXJ0aWNhbC1mb3JtYXRpb24uZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUseUNBQXlDLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUd4SCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUdqRixNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMEJBQTBCO0lBRS9FLFlBQTZCLDJCQUF3RCxFQUNqRSxrQkFBNkQ7UUFDaEYsS0FBSyxFQUFFLENBQUM7UUFGb0IsZ0NBQTJCLEdBQTNCLDJCQUEyQixDQUE2QjtRQUNqRSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJDO0lBRWpGLENBQUM7SUFPRCxTQUFTLENBQUMsV0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQXdCO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxXQUF3QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7QUF2QmUseUNBQVEsR0FBRztJQUMxQiwyQkFBMkI7SUFDM0IseUNBQXlDO0NBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnkgfSBmcm9tICcuL3ZlcnRpY2FsLWZvcm1hdGlvbi5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlIH0gZnJvbSAnLi9zY3JvbGwtYmFyL3ZlcnRpY2FsLWZvcm1hdGlvbi5zY3JvbGwtYmFyLXBvc2l0aW9uLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvdmVydGljYWwtZm9ybWF0aW9uLndhcmVob3VzZSc7XG5cblxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsRm9ybWF0aW9uRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgVmVydGljYWxGb3JtYXRpb25XYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcG9zaXRpb25SZXBvc2l0b3J5OiBWZXJ0aWNhbEZvcm1hdGlvblNjcm9sbEJhclBvc2l0aW9uQXJjaGl2ZSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbXG5cdFx0VmVydGljYWxGb3JtYXRpb25SZXBvc2l0b3J5LFxuXHRcdFZlcnRpY2FsRm9ybWF0aW9uU2Nyb2xsQmFyUG9zaXRpb25BcmNoaXZlXG5cdF07XG5cblx0b25FbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblZlcnRpY2FsU2Nyb2xsRW5hYmxlZChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblJvd0hlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblJvd0hlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vbkNvbnRhaW5lckhlaWdodChzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblRvcE1hcmdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsRm9ybWF0aW9uUmVwb3NpdG9yeS5vblRvcE1hcmdpbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblNjcm9sbEJhclBvc2l0aW9uKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMucG9zaXRpb25SZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=