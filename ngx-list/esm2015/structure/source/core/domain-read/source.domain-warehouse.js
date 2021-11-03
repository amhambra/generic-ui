import { Injectable } from '@angular/core';
import { StructureReadModelRepository } from '../../../grid/core/api/read/structure.read-model-repository';
import { hermesDistinctUntilChanged, hermesMap, hermesTake } from '@generic-ui/hermes';
import { SourceWarehouse } from '../api/source.warehouse';
import { StructurePreparedItemsArchive } from '../domain/prepared/structure.prepared-items.archive';
import { StructureSourceOriginArchive } from '../domain/origin/structure.source-origin.archive';
export class SourceDomainWarehouse extends SourceWarehouse {
    constructor(structureRepository, structurePreparedItemsRepository, structureSourceOriginRepository) {
        super();
        this.structureRepository = structureRepository;
        this.structurePreparedItemsRepository = structurePreparedItemsRepository;
        this.structureSourceOriginRepository = structureSourceOriginRepository;
    }
    /**
     * @deprecated
     */
    getEntities(structureId) {
        return this.structureRepository.getStructure(structureId).getEntities();
    }
    onEntities(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((structure) => structure.getEntities()), hermesDistinctUntilChanged((ents1, ents2) => {
            if (ents1.length !== ents2.length) {
                return false;
            }
            let flag = true;
            ents1.forEach((ent, index) => {
                if (!ent.equals(ents2[index])) {
                    flag = false;
                    return;
                }
            });
            return flag;
        }));
    }
    onEntitiesSize(structureId) {
        return this.onEntities(structureId)
            .pipe(hermesMap((entities) => {
            return entities.length;
        }));
    }
    onceEntities(structureId) {
        return this.onEntities(structureId)
            .pipe(hermesTake(1));
    }
    onOriginSize(structureId) {
        return this.structureSourceOriginRepository
            .on(structureId)
            .pipe(hermesMap(origin => origin.length));
    }
    onLoading(structureId) {
        return this.structureRepository
            .on(structureId)
            .pipe(hermesMap((structure) => structure.getSource().isLoading()));
    }
    onPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.on(structureId);
    }
    /**
     * @deprecated
     */
    getPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    }
}
SourceDomainWarehouse.decorators = [
    { type: Injectable }
];
SourceDomainWarehouse.ctorParameters = () => [
    { type: StructureReadModelRepository },
    { type: StructurePreparedItemsArchive },
    { type: StructureSourceOriginArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4tcmVhZC9zb3VyY2UuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBSzNHLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxTQUFTLEVBQW9CLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUloRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQUV6RCxZQUE2QixtQkFBaUQsRUFDMUQsZ0NBQStELEVBQy9ELCtCQUE2RDtRQUNoRixLQUFLLEVBQUUsQ0FBQztRQUhvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBK0I7UUFDL0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUE4QjtJQUVqRixDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pFLENBQUM7SUFFRCxVQUFVLENBQUMsV0FBd0I7UUFFbEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsU0FBaUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQ3pFLDBCQUEwQixDQUFDLENBQUMsS0FBZ0MsRUFBRSxLQUFnQyxFQUFFLEVBQUU7WUFDakcsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xDLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7WUFFaEIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7b0JBQzlCLElBQUksR0FBRyxLQUFLLENBQUM7b0JBQ2IsT0FBTztpQkFDUDtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLENBQUM7UUFDYixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVELGNBQWMsQ0FBQyxXQUF3QjtRQUV0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO2FBQzdCLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxRQUFtQyxFQUFFLEVBQUU7WUFDakQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUNGLENBQUM7SUFDUixDQUFDO0lBRUQsWUFBWSxDQUFDLFdBQXdCO1FBRXBDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUM7YUFDN0IsSUFBSSxDQUNKLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FDYixDQUFDO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNwQyxPQUFPLElBQUksQ0FBQywrQkFBK0I7YUFDckMsRUFBRSxDQUFDLFdBQVcsQ0FBQzthQUNmLElBQUksQ0FDSixTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQ2xDLENBQUM7SUFDUixDQUFDO0lBRUQsU0FBUyxDQUFDLFdBQXdCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLFNBQWlDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUNuRixDQUFDO0lBQ1IsQ0FBQztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUIsQ0FBQyxXQUF3QjtRQUMzQyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7WUFwRkQsVUFBVTs7O1lBWEYsNEJBQTRCO1lBTzVCLDZCQUE2QjtZQUM3Qiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290IH0gZnJvbSAnLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIGhlcm1lc1Rha2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4uYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbldhcmVob3VzZSBleHRlbmRzIFNvdXJjZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5BcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0Z2V0RW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeS5nZXRTdHJ1Y3R1cmUoc3RydWN0dXJlSWQpLmdldEVudGl0aWVzKCk7XG5cdH1cblxuXHRvbkVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0RW50aXRpZXMoKSksXG5cdFx0XHRcdFx0ICAgaGVybWVzRGlzdGluY3RVbnRpbENoYW5nZWQoKGVudHMxOiBSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+LCBlbnRzMjogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgaWYgKGVudHMxLmxlbmd0aCAhPT0gZW50czIubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdCAgIH1cblxuXHRcdFx0XHRcdFx0ICAgbGV0IGZsYWcgPSB0cnVlO1xuXG5cdFx0XHRcdFx0XHQgICBlbnRzMS5mb3JFYWNoKChlbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIGlmICghZW50LmVxdWFscyhlbnRzMltpbmRleF0pKSB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgZmxhZyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybjtcblx0XHRcdFx0XHRcdFx0ICAgfVxuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdCAgIHJldHVybiBmbGFnO1xuXHRcdFx0XHRcdCAgIH0pXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkVudGl0aWVzU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChlbnRpdGllczogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PikgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGVudGl0aWVzLmxlbmd0aDtcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25jZUVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxJdGVtRW50aXR5Pj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FbnRpdGllcyhzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzVGFrZSgxKVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25PcmlnaW5TaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlU291cmNlT3JpZ2luUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcChvcmlnaW4gPT4gb3JpZ2luLmxlbmd0aClcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uTG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVSZXBvc2l0b3J5XG5cdFx0XHRcdCAgIC5vbihzdHJ1Y3R1cmVJZClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QpID0+IHN0cnVjdHVyZS5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4+IHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGdldFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkuZ2V0UHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19