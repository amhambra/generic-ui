import { AggregateFactoryArchive, AggregateRepositoryArchive } from './define';
import { CoreContainer } from '../../../api/core.container';
export class AggregateDefinitionInitializer {
    aggregateFactoryArchive = CoreContainer.resolve(AggregateFactoryArchive);
    aggregateRepositoryArchive = CoreContainer.resolve(AggregateRepositoryArchive);
    constructor() {
    }
    register(definedAggregate) {
        if (definedAggregate) {
            const set = new Set();
            const filteredDefinitions = [];
            definedAggregate.filter((def) => {
                if (!set.has(def.key)) {
                    set.add(def.key);
                    filteredDefinitions.push(def);
                }
            });
            filteredDefinitions.forEach((def) => {
                const factory = CoreContainer.resolve(def.factory), repository = CoreContainer.resolve(def.repository);
                if (!this.aggregateFactoryArchive.has(def.key)) {
                    this.aggregateFactoryArchive.add(def.key, factory);
                }
                if (!this.aggregateRepositoryArchive.has(def.key)) {
                    this.aggregateRepositoryArchive.add(def.key, repository);
                }
            });
            // console.log('Registered aggregate definition:' + filteredDefinitions.length);
            // console.log('Registered aggregate definition:', filteredDefinitions);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWRlZmluaXRpb24uaW5pdGlhbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29yZS9kb21haW4vY29tbWFuZC9jb25maWcvYWdncmVnYXRlLWRlZmluaXRpb24uaW5pdGlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLE1BQU0sVUFBVSxDQUFDO0FBRy9FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUk1RCxNQUFNLE9BQU8sOEJBQThCO0lBRXpCLHVCQUF1QixHQUFrQyxhQUFhLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFFeEcsMEJBQTBCLEdBQXFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUVsSTtJQUNBLENBQUM7SUFFRCxRQUFRLENBQ1AsZ0JBQWtEO1FBR2xELElBQUksZ0JBQWdCLEVBQUU7WUFFckIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUN0QixNQUFNLG1CQUFtQixHQUFxQyxFQUFFLENBQUM7WUFFakUsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBOEIsRUFBRSxFQUFFO2dCQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7aUJBQzlCO1lBQ0YsQ0FBQyxDQUFDLENBQUM7WUFFSCxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUE4QixFQUFFLEVBQUU7Z0JBRTlELE1BQU0sT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQXlCLEdBQUcsQ0FBQyxPQUFjLENBQUMsRUFDaEYsVUFBVSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQTZCLEdBQUcsQ0FBQyxVQUFrQixDQUFDLENBQUM7Z0JBRXhGLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDL0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2lCQUNuRDtnQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ2xELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztpQkFDekQ7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILGdGQUFnRjtZQUNoRix3RUFBd0U7U0FDeEU7SUFDRixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVEZWZpbml0aW9uIH0gZnJvbSAnLi9hZ2dyZWdhdGUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi8uLi8uLi9hcGkvdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvcmVDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29yZS5jb250YWluZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWZhY3RvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2FwaS90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlRGVmaW5pdGlvbkluaXRpYWxpemVyPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPiA9IENvcmVDb250YWluZXIucmVzb2x2ZShBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4gPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0cmVnaXN0ZXIoXG5cdFx0ZGVmaW5lZEFnZ3JlZ2F0ZTogQXJyYXk8QWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPj5cblx0KTogdm9pZCB7XG5cblx0XHRpZiAoZGVmaW5lZEFnZ3JlZ2F0ZSkge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZERlZmluaXRpb25zOiBBcnJheTxBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+PiA9IFtdO1xuXG5cdFx0XHRkZWZpbmVkQWdncmVnYXRlLmZpbHRlcigoZGVmOiBBZ2dyZWdhdGVEZWZpbml0aW9uPEksIEE+KSA9PiB7XG5cdFx0XHRcdGlmICghc2V0LmhhcyhkZWYua2V5KSkge1xuXHRcdFx0XHRcdHNldC5hZGQoZGVmLmtleSk7XG5cdFx0XHRcdFx0ZmlsdGVyZWREZWZpbml0aW9ucy5wdXNoKGRlZik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZERlZmluaXRpb25zLmZvckVhY2goKGRlZjogQWdncmVnYXRlRGVmaW5pdGlvbjxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZhY3RvcnkgPSBDb3JlQ29udGFpbmVyLnJlc29sdmU8QWdncmVnYXRlRmFjdG9yeTxJLCBBPj4oZGVmLmZhY3RvcnkgYXMgYW55KSxcblx0XHRcdFx0XHRyZXBvc2l0b3J5ID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlPEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4+KChkZWYucmVwb3NpdG9yeSBhcyBhbnkpKTtcblxuXHRcdFx0XHRpZiAoIXRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuaGFzKGRlZi5rZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5hZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgZmFjdG9yeSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuaGFzKGRlZi5rZXkpKSB7XG5cdFx0XHRcdFx0dGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5hZGQoZGVmLmtleSwgcmVwb3NpdG9yeSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBhZ2dyZWdhdGUgZGVmaW5pdGlvbjonICsgZmlsdGVyZWREZWZpbml0aW9ucy5sZW5ndGgpO1xuXHRcdFx0Ly8gY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQgYWdncmVnYXRlIGRlZmluaXRpb246JywgZmlsdGVyZWREZWZpbml0aW9ucyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==