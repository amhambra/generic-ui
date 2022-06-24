import { AggregateFactory } from '@generic-ui/hermes';
import { SchemaAggregate } from '../schema.aggregate';
export class SchemaAggregateFactory extends AggregateFactory {
    constructor() {
        super();
    }
    create(aggregateId) {
        return new SchemaAggregate(aggregateId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmFnZ3JlZ2F0ZS1mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3NjaGVtYS9kb21haW4vY3JlYXRlL3NjaGVtYS5hZ2dyZWdhdGUtZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdEQsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUEyQztJQUV0RjtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFxQjtRQUMzQixPQUFPLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi9zY2hlbWEuYWdncmVnYXRlJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hQWdncmVnYXRlRmFjdG9yeSBleHRlbmRzIEFnZ3JlZ2F0ZUZhY3Rvcnk8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRjcmVhdGUoYWdncmVnYXRlSWQ6IFNjaGVtYUlkKTogU2NoZW1hQWdncmVnYXRlIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUFnZ3JlZ2F0ZShhZ2dyZWdhdGVJZCk7XG5cdH1cbn1cbiJdfQ==