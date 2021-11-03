import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from './read/structure.read-model-repository';
import { StructureCellEditArchive } from '../../feature/edit/structure.cell-edit.archive';
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
StructureWarehouse.decorators = [
    { type: Injectable }
];
StructureWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructureCellEditArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvY29yZS9hcGkvc3RydWN0dXJlLndhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR3RGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyxrQkFBa0I7SUFFOUIsWUFBNkIsbUJBQWlELEVBQzFELHdCQUFrRDtRQUR6Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDdEUsQ0FBQztJQUVELEVBQUUsQ0FBQyxXQUF3QjtRQUMxQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGFBQWEsQ0FBQyxXQUF3QjtRQUNyQyxPQUFPLElBQUksQ0FBQyx3QkFBd0I7YUFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7OztZQWRELFVBQVU7OztZQVBGLDRCQUE0QjtZQUc1Qix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBDZWxsRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUmVwb3NpdG9yeTogU3RydWN0dXJlUmVhZE1vZGVsUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSkge1xuXHR9XG5cblx0b24oc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkVkaXRNYW5hZ2VyKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Q2VsbEVkaXRvck1hbmFnZXI+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmVcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG59XG4iXX0=