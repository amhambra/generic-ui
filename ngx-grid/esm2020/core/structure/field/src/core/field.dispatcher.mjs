import { InitFieldsCommand } from './init/init-fields.command';
import { CommandDispatcher, CoreContainer } from '@generic-ui/hermes';
export class FieldDispatcher {
    constructor() {
        this.commandDispatcher = CoreContainer.resolve(CommandDispatcher);
    }
    initFields(fieldConfigs, structureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZGlzcGF0Y2hlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2NvcmUvZmllbGQuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdEUsTUFBTSxPQUFPLGVBQWU7SUFBNUI7UUFFa0Isc0JBQWlCLEdBQXNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQU9sRyxDQUFDO0lBSkEsVUFBVSxDQUFDLFlBQWdDLEVBQUUsV0FBd0I7UUFDcEUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29yZUNvbnRhaW5lciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkRGlzcGF0Y2hlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIgPSBDb3JlQ29udGFpbmVyLnJlc29sdmUoQ29tbWFuZERpc3BhdGNoZXIpO1xuXG5cblx0aW5pdEZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdEZpZWxkc0NvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncykpO1xuXHR9XG5cbn1cbiJdfQ==