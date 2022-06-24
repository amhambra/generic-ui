import { ReadModelStore } from '../../../api/read/store/read-model.store';
export class InMemoryReadModelStore extends ReadModelStore {
    constructor(inMemoryStore) {
        super();
        this.inMemoryStore = inMemoryStore;
    }
    getById(aggregateId) {
        return this.getValue(aggregateId);
    }
    getValue(aggregateId) {
        const optAggregate = this.inMemoryStore.get(aggregateId);
        return optAggregate.map(this.toReadModel.bind(this));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnJlYWQtbW9kZWwuc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkucmVhZC1tb2RlbC5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFPMUUsTUFBTSxPQUFnQixzQkFHTyxTQUFRLGNBQW9CO0lBRXhELFlBQXVDLGFBQWtDO1FBQ3hFLEtBQUssRUFBRSxDQUFDO1FBRDhCLGtCQUFhLEdBQWIsYUFBYSxDQUFxQjtJQUV6RSxDQUFDO0lBSUQsT0FBTyxDQUFDLFdBQWM7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTyxRQUFRLENBQUMsV0FBYztRQUU5QixNQUFNLFlBQVksR0FBZ0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdEUsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vLi4vYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5cbmltcG9ydCB7IFJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi9hcGkvcmVhZC9yZWFkLW1vZGVsLXJvb3QnO1xuXG5pbXBvcnQgeyBSZWFkTW9kZWxTdG9yZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9yZWFkL3N0b3JlL3JlYWQtbW9kZWwuc3RvcmUnO1xuXG5pbXBvcnQgeyBJbk1lbW9yeVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0b3JlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL29wdGlvbmFsJztcbmltcG9ydCB7IFJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9yZWFkL3JlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8SSBleHRlbmRzIFJlYWRNb2RlbFJvb3RJZCxcblx0UiBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8ST4sXG5cdEIgZXh0ZW5kcyBBZ2dyZWdhdGVJZCxcblx0QSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8Qj4+IGV4dGVuZHMgUmVhZE1vZGVsU3RvcmU8SSwgUj4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGluTWVtb3J5U3RvcmU6IEluTWVtb3J5U3RvcmU8QiwgQT4pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0YWJzdHJhY3QgdG9SZWFkTW9kZWwoYWdncmVnYXRlOiBBKTogUjtcblxuXHRnZXRCeUlkKGFnZ3JlZ2F0ZUlkOiBCKTogT3B0aW9uYWw8Uj4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGFnZ3JlZ2F0ZUlkKTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0VmFsdWUoYWdncmVnYXRlSWQ6IEIpOiBPcHRpb25hbDxSPiB7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGU6IE9wdGlvbmFsPEE+ID0gdGhpcy5pbk1lbW9yeVN0b3JlLmdldChhZ2dyZWdhdGVJZCk7XG5cblx0XHRyZXR1cm4gb3B0QWdncmVnYXRlLm1hcCh0aGlzLnRvUmVhZE1vZGVsLmJpbmQodGhpcykpO1xuXHR9XG5cbn1cbiJdfQ==