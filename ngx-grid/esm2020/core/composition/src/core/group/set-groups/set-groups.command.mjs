import { CompositionCommand } from '../../composition.command';
export class SetGroupsCommand extends CompositionCommand {
    constructor(compositionId, configs) {
        super(compositionId, 'SetGroupsCommand');
        this.compositionId = compositionId;
        this.configs = configs;
    }
    getConfigs() {
        return this.configs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWdyb3Vwcy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlL2dyb3VwL3NldC1ncm91cHMvc2V0LWdyb3Vwcy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSS9ELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxrQkFBa0I7SUFFdkQsWUFBcUIsYUFBNEIsRUFDN0IsT0FBZ0Q7UUFDbkUsS0FBSyxDQUFDLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRnJCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLFlBQU8sR0FBUCxPQUFPLENBQXlDO0lBRXBFLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU2V0R3JvdXBzQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnU2V0R3JvdXBzQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlncygpOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3M7XG5cdH1cblxufVxuIl19