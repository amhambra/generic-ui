import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemorySchemaStore } from './in-memory.schema.store';
export class InMemorySchemaAggregateStore extends InMemoryAggregateStore {
    constructor(inMemorySchemaStore, aggregateStoreRegister) {
        super(inMemorySchemaStore, aggregateStoreRegister);
    }
}
InMemorySchemaAggregateStore.decorators = [
    { type: Injectable }
];
InMemorySchemaAggregateStore.ctorParameters = () => [
    { type: InMemorySchemaStore },
    { type: AggregateStoreRegister }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSy9ELE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFBaUQ7SUFFbEcsWUFBWSxtQkFBd0MsRUFDakQsc0JBQThDO1FBQ2hELEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BELENBQUM7OztZQU5ELFVBQVU7OztZQUpGLG1CQUFtQjtZQUhuQixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEluTWVtb3J5QWdncmVnYXRlU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFNjaGVtYUlkLCBTY2hlbWFBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeVNjaGVtYVN0b3JlOiBJbk1lbW9yeVNjaGVtYVN0b3JlLFxuXHRcdFx0XHRhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTY2hlbWFTdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxufVxuIl19