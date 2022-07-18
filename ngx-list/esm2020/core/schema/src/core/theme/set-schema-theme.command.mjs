import { SchemaCommand } from '../schema.command';
export class SetSchemaThemeCommand extends SchemaCommand {
    constructor(schemaId, theme) {
        super(schemaId, 'SetSchemaThemeCommand');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS10aGVtZS5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3NjaGVtYS9zcmMvY29yZS90aGVtZS9zZXQtc2NoZW1hLXRoZW1lLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2xELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxhQUFhO0lBRXZELFlBQVksUUFBa0IsRUFDVixLQUFrQjtRQUNyQyxLQUFLLENBQUMsUUFBUSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEdEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtJQUV0QyxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hQ29tbWFuZCB9IGZyb20gJy4uL3NjaGVtYS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0U2NoZW1hVGhlbWVDb21tYW5kIGV4dGVuZHMgU2NoZW1hQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCAnU2V0U2NoZW1hVGhlbWVDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxufVxuIl19