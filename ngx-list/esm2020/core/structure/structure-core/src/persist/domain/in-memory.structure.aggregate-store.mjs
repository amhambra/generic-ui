import { InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
export class InMemoryStructureAggregateStore extends InMemoryAggregateStore {
    constructor(inMemoryStructureStore) {
        super(inMemoryStructureStore);
    }
}
InMemoryStructureAggregateStore.services = [InMemoryStructureStore];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9wZXJzaXN0L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUl0RSxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsc0JBQXVEO0lBRTNHLFlBQVksc0JBQThDO1FBQ3pELEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQy9CLENBQUM7O0FBRWUsd0NBQVEsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFN0cnVjdHVyZUlkLCBTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeVN0cnVjdHVyZVN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZV07XG59XG4iXX0=