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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3NjaGVtYS9zcmMvY29yZS9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU5RCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsaUJBQWlCO0lBRWhFLFlBQVksUUFBa0IsRUFDVixZQUFxQjtRQUN4QyxLQUFLLENBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRHpDLGlCQUFZLEdBQVosWUFBWSxDQUFTO0lBRXpDLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vLi4vc2NoZW1hLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFWZXJ0aWNhbEdyaWRTZXRFdmVudCBleHRlbmRzIFNjaGVtYURvbWFpbkV2ZW50IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFJZDogU2NoZW1hSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxHcmlkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsIHZlcnRpY2FsR3JpZCwgJ1NjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRWZXJ0aWNhbEdyaWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudmVydGljYWxHcmlkO1xuXHR9XG59XG4iXX0=