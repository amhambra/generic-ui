import { UniqueFilterCalculatedEvent } from './unique-filter-calculated.event';
import { StructureAggregateEvent } from '../../../../core/domain/structure.aggregate-event';
export class UniqueFilterCalculatedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, map) {
        super(aggregateId, 'UniqueFilterCalculatedAggregateEvent');
        this.map = map;
    }
    toDomainEvent() {
        return new UniqueFilterCalculatedEvent(this.getAggregateId(), this.map);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFL0UsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFHNUYsTUFBTSxPQUFPLG9DQUFxQyxTQUFRLHVCQUF1QjtJQUVoRixZQUFZLFdBQXdCLEVBQ2hCLEdBQW9DO1FBQ3ZELEtBQUssQ0FBQyxXQUFXLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztRQUR4QyxRQUFHLEdBQUgsR0FBRyxDQUFpQztJQUV4RCxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSwyQkFBMkIsQ0FDckMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUNyQixJQUFJLENBQUMsR0FBRyxDQUNSLENBQUM7SUFDSCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQgfSBmcm9tICcuL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4uL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1hcDogTWFwPHN0cmluZywgQXJyYXk8VW5pcXVlVmFsdWU+Pikge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCAnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEFnZ3JlZ2F0ZUV2ZW50Jyk7XG5cdH1cblxuXHR0b0RvbWFpbkV2ZW50KCk6IERvbWFpbkV2ZW50PFN0cnVjdHVyZUlkPiB7XG5cdFx0cmV0dXJuIG5ldyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQoXG5cdFx0XHR0aGlzLmdldEFnZ3JlZ2F0ZUlkKCksXG5cdFx0XHR0aGlzLm1hcFxuXHRcdCk7XG5cdH1cblxufVxuIl19