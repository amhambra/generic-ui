import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class InitFieldsCommand extends StructureCommand {
    fieldConfigs;
    constructor(structureId, fieldConfigs) {
        super(structureId, 'InitFieldsCommand');
        this.fieldConfigs = fieldConfigs;
    }
    getFieldConfigs() {
        return this.fieldConfigs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmllbGQvc3JjL2NvcmUvaW5pdC9pbml0LWZpZWxkcy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBR3pGLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxnQkFBZ0I7SUFHbEM7SUFEcEIsWUFBWSxXQUF3QixFQUNoQixZQUFnQztRQUNuRCxLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLENBQUM7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQW9CO0lBRXBELENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgSW5pdEZpZWxkc0NvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ0luaXRGaWVsZHNDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRGaWVsZENvbmZpZ3MoKTogQXJyYXk8RmllbGRDb25maWc+IHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZENvbmZpZ3M7XG5cdH1cblxufVxuIl19