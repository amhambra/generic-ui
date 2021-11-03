import { Injectable } from '@angular/core';
import { HermesSubject } from '@generic-ui/hermes';
export class StructureCellEditCloseAllService {
    constructor() {
        this.closeAll$ = new HermesSubject();
    }
    closeAll() {
        this.closeAll$.next();
    }
    onCloseAll() {
        return this.closeAll$.toObservable();
    }
}
StructureCellEditCloseAllService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNlbGwtZWRpdC1jbG9zZS1hbGwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL2dyaWQvZmVhdHVyZS9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQtY2xvc2UtYWxsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQW9CLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3JFLE1BQU0sT0FBTyxnQ0FBZ0M7SUFEN0M7UUFHa0IsY0FBUyxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFTeEQsQ0FBQztJQVBBLFFBQVE7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RDLENBQUM7OztZQVhELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNlbGxFZGl0Q2xvc2VBbGxTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNsb3NlQWxsJCA9IG5ldyBIZXJtZXNTdWJqZWN0PHZvaWQ+KCk7XG5cblx0Y2xvc2VBbGwoKTogdm9pZCB7XG5cdFx0dGhpcy5jbG9zZUFsbCQubmV4dCgpO1xuXHR9XG5cblx0b25DbG9zZUFsbCgpOiBIZXJtZXNPYnNlcnZhYmxlPHZvaWQ+IHtcblx0XHRyZXR1cm4gdGhpcy5jbG9zZUFsbCQudG9PYnNlcnZhYmxlKCk7XG5cdH1cbn1cbiJdfQ==