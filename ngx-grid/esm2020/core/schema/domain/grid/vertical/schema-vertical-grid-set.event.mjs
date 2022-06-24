import { SchemaDomainEvent } from '../../schema.domain-event';
export class SchemaVerticalGridSetEvent extends SchemaDomainEvent {
    constructor(schemaId, verticalGrid) {
        super(schemaId, verticalGrid, 'SchemaVerticalGridSetEvent');
        this.verticalGrid = verticalGrid;
    }
    getVerticalGrid() {
        return this.verticalGrid;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3NjaGVtYS9kb21haW4vZ3JpZC92ZXJ0aWNhbC9zY2hlbWEtdmVydGljYWwtZ3JpZC1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFOUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGlCQUFpQjtJQUVoRSxZQUFZLFFBQWtCLEVBQ1YsWUFBcUI7UUFDeEMsS0FBSyxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUR6QyxpQkFBWSxHQUFaLFlBQVksQ0FBUztJQUV6QyxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFJZCB9IGZyb20gJy4uLy4uL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFEb21haW5FdmVudCB9IGZyb20gJy4uLy4uL3NjaGVtYS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQgZXh0ZW5kcyBTY2hlbWFEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsR3JpZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCB2ZXJ0aWNhbEdyaWQsICdTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VmVydGljYWxHcmlkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLnZlcnRpY2FsR3JpZDtcblx0fVxufVxuIl19