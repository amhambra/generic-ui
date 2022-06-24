import { StructureReadModelRepository } from '../../core/api/read/structure.read-model-repository';
import { hermesDistinctUntilChanged, hermesMap, singleFromObservable } from '@generic-ui/hermes';
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
    findEntities(structureId) {
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
        return singleFromObservable(this.onEntities(structureId));
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
    findPreparedEntities(structureId) {
        return this.structurePreparedItemsRepository.getPreparedItems(structureId);
    }
}
SourceDomainWarehouse.services = [StructureReadModelRepository, StructurePreparedItemsArchive, StructureSourceOriginArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9kb21haW4tcmVhZC9zb3VyY2UuZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUtuRyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsU0FBUyxFQUFrQyxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUdoRyxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQUV6RCxZQUE2QixtQkFBaUQsRUFDMUQsZ0NBQStELEVBQy9ELCtCQUE2RDtRQUNoRixLQUFLLEVBQUUsQ0FBQztRQUhvQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQThCO1FBQzFELHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBK0I7UUFDL0Qsb0NBQStCLEdBQS9CLCtCQUErQixDQUE4QjtJQUVqRixDQUFDO0lBSUQsWUFBWSxDQUFDLFdBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6RSxDQUFDO0lBRUQsVUFBVSxDQUFDLFdBQXdCO1FBRWxDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjthQUN6QixFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLFNBQWlDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUN6RSwwQkFBMEIsQ0FBQyxDQUFDLEtBQWdDLEVBQUUsS0FBZ0MsRUFBRSxFQUFFO1lBQ2pHLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNsQyxPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRWhCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUM5QixJQUFJLEdBQUcsS0FBSyxDQUFDO29CQUNiLE9BQU87aUJBQ1A7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFFRCxjQUFjLENBQUMsV0FBd0I7UUFFdEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQzthQUM3QixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsUUFBbUMsRUFBRSxFQUFFO1lBQ2pELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FDRixDQUFDO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNwQyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFdBQXdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLCtCQUErQjthQUNyQyxFQUFFLENBQUMsV0FBVyxDQUFDO2FBQ2YsSUFBSSxDQUNKLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDbEMsQ0FBQztJQUNSLENBQUM7SUFFRCxTQUFTLENBQUMsV0FBd0I7UUFDakMsT0FBTyxJQUFJLENBQUMsbUJBQW1CO2FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDZixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsU0FBaUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQ25GLENBQUM7SUFDUixDQUFDO0lBRUQsa0JBQWtCLENBQUMsV0FBd0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxXQUF3QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDOztBQW5FZSw4QkFBUSxHQUFHLENBQUMsNEJBQTRCLEVBQUUsNkJBQTZCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb3JlL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1NpbmdsZSwgc2luZ2xlRnJvbU9ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU291cmNlV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUHJlcGFyZWRJdGVtc0FyY2hpdmUgfSBmcm9tICcuLi9kb21haW4vcHJlcGFyZWQvc3RydWN0dXJlLnByZXBhcmVkLWl0ZW1zLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vc3RydWN0dXJlLnNvdXJjZS1vcmlnaW4uYXJjaGl2ZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZURvbWFpbldhcmVob3VzZSBleHRlbmRzIFNvdXJjZVdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVByZXBhcmVkSXRlbXNSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VPcmlnaW5SZXBvc2l0b3J5OiBTdHJ1Y3R1cmVTb3VyY2VPcmlnaW5BcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTdHJ1Y3R1cmVSZWFkTW9kZWxSZXBvc2l0b3J5LCBTdHJ1Y3R1cmVQcmVwYXJlZEl0ZW1zQXJjaGl2ZSwgU3RydWN0dXJlU291cmNlT3JpZ2luQXJjaGl2ZV07XG5cblx0ZmluZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnkuZ2V0U3RydWN0dXJlKHN0cnVjdHVyZUlkKS5nZXRFbnRpdGllcygpO1xuXHR9XG5cblx0b25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAoKHN0cnVjdHVyZTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCkgPT4gc3RydWN0dXJlLmdldEVudGl0aWVzKCkpLFxuXHRcdFx0XHRcdCAgIGhlcm1lc0Rpc3RpbmN0VW50aWxDaGFuZ2VkKChlbnRzMTogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PiwgZW50czI6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIGlmIChlbnRzMS5sZW5ndGggIT09IGVudHMyLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0XHQgICByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHQgICB9XG5cblx0XHRcdFx0XHRcdCAgIGxldCBmbGFnID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0ICAgZW50czEuZm9yRWFjaCgoZW50LCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdFx0XHQgICBpZiAoIWVudC5lcXVhbHMoZW50czJbaW5kZXhdKSkge1xuXHRcdFx0XHRcdFx0XHRcdCAgIGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm47XG5cdFx0XHRcdFx0XHRcdCAgIH1cblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHQgICByZXR1cm4gZmxhZztcblx0XHRcdFx0XHQgICB9KVxuXHRcdFx0XHQgICApO1xuXHR9XG5cblx0b25FbnRpdGllc1NpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZW50aXRpZXM6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4pID0+IHtcblx0XHRcdFx0XHRcdCAgIHJldHVybiBlbnRpdGllcy5sZW5ndGg7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uY2VFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNTaW5nbGU8UmVhZG9ubHlBcnJheTxJdGVtRW50aXR5Pj4ge1xuXHRcdHJldHVybiBzaW5nbGVGcm9tT2JzZXJ2YWJsZSh0aGlzLm9uRW50aXRpZXMoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnN0cnVjdHVyZVNvdXJjZU9yaWdpblJlcG9zaXRvcnlcblx0XHRcdFx0ICAgLm9uKHN0cnVjdHVyZUlkKVxuXHRcdFx0XHQgICAucGlwZShcblx0XHRcdFx0XHQgICBoZXJtZXNNYXAob3JpZ2luID0+IG9yaWdpbi5sZW5ndGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvbkxvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUmVwb3NpdG9yeVxuXHRcdFx0XHQgICAub24oc3RydWN0dXJlSWQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiBzdHJ1Y3R1cmUuZ2V0U291cmNlKCkuaXNMb2FkaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0ZmluZFByZXBhcmVkRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUHJlcGFyZWRJdGVtc1JlcG9zaXRvcnkuZ2V0UHJlcGFyZWRJdGVtcyhzdHJ1Y3R1cmVJZCk7XG5cdH1cblxufVxuIl19