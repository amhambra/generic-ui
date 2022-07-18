import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureCellEditArchive } from '../../../../../feature-view/grid-view/src/edit/structure.cell-edit.archive';
export class StructureWarehouse {
    constructor(structureRepository, structureCellEditArchive) {
        this.structureRepository = structureRepository;
        this.structureCellEditArchive = structureCellEditArchive;
    }
    on(structureId) {
        return this.structureRepository.on(structureId);
    }
    onEditManager(structureId) {
        return this.structureCellEditArchive
            .on(structureId);
    }
}
StructureWarehouse.services = [StructureReadModelRepository, StructureCellEditArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBSXRILE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsWUFBNkIsbUJBQWlELEVBQzFELHdCQUFrRDtRQUR6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDdEUsQ0FBQztJQUlELEVBQUUsQ0FBQyxXQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUF3QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7O0FBVGUsMkJBQVEsR0FBRyxDQUFDLDRCQUE0QixFQUFFLHdCQUF3QixDQUFVLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB9IGZyb20gJy4vcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IENlbGxFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vZG9tYWluL2VkaXQvY2VsbC1lZGl0b3IubWFuYWdlcic7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVdhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSwgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlXSBhcyBjb25zdDtcblxuXHRvbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uRWRpdE1hbmFnZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxDZWxsRWRpdG9yTWFuYWdlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==