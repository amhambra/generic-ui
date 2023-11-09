import { CompositionDomainEvent } from '../../composition.domain-event';
export class CompositionColumnSetEnabledEvent extends CompositionDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'CompositionColumnSetEnabledEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uY29sdW1uLXNldC1lbmFibGVkLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEUsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHNCQUFzQjtJQUUzRSxZQUFZLFdBQTBCO1FBQ3JDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Eb21haW5FdmVudCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmRvbWFpbi1ldmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCBleHRlbmRzIENvbXBvc2l0aW9uRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBDb21wb3NpdGlvbklkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG51bGwsICdDb21wb3NpdGlvbkNvbHVtblNldEVuYWJsZWRFdmVudCcpO1xuXHR9XG59XG4iXX0=