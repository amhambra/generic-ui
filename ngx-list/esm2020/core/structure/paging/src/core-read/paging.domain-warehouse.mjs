import { singleFromObservable } from '@generic-ui/hermes';
import { PagingRepository } from './paging.repository';
import { PagingWarehouse } from '../api/paging.warehouse';
export class PagingDomainWarehouse extends PagingWarehouse {
    constructor(pagingRepository) {
        super();
        this.pagingRepository = pagingRepository;
    }
    onPaging(structureId) {
        return this.pagingRepository.on(structureId);
    }
    oncePaging(structureId) {
        return singleFromObservable(this.pagingRepository.on(structureId));
    }
}
PagingDomainWarehouse.services = [PagingRepository];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvY29yZS1yZWFkL3BhZ2luZy5kb21haW4td2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBa0Msb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUcxRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHMUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7SUFFekQsWUFBNkIsZ0JBQWtDO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFL0QsQ0FBQztJQUlELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELFVBQVUsQ0FBQyxXQUF3QjtRQUNsQyxPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOztBQVJlLDhCQUFRLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU2luZ2xlLCBzaW5nbGVGcm9tT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ1JlcG9zaXRvcnkgfSBmcm9tICcuL3BhZ2luZy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFBhZ2luZ01vZGVsIH0gZnJvbSAnLi4vYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdpbmdXYXJlaG91c2UgfSBmcm9tICcuLi9hcGkvcGFnaW5nLndhcmVob3VzZSc7XG5cblxuZXhwb3J0IGNsYXNzIFBhZ2luZ0RvbWFpbldhcmVob3VzZSBleHRlbmRzIFBhZ2luZ1dhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWdpbmdSZXBvc2l0b3J5OiBQYWdpbmdSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtQYWdpbmdSZXBvc2l0b3J5XTtcblxuXHRvblBhZ2luZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFBhZ2luZ01vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMucGFnaW5nUmVwb3NpdG9yeS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbmNlUGFnaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc1NpbmdsZTxQYWdpbmdNb2RlbD4ge1xuXHRcdHJldHVybiBzaW5nbGVGcm9tT2JzZXJ2YWJsZSh0aGlzLnBhZ2luZ1JlcG9zaXRvcnkub24oc3RydWN0dXJlSWQpKTtcblx0fVxuXG59XG4iXX0=