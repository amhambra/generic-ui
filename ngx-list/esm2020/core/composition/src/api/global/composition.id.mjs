import { AggregateId } from '@generic-ui/hermes';
import { CompositionReadModelRootId } from './composition.read-model-root-id';
export class CompositionId extends AggregateId {
    constructor(id) {
        super(id);
    }
    toReadModelRootId() {
        return new CompositionReadModelRootId(this.getId());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUU5RSxNQUFNLE9BQU8sYUFBYyxTQUFRLFdBQVc7SUFFN0MsWUFBWSxFQUFVO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxpQkFBaUI7UUFDaEIsT0FBTyxJQUFJLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBSZWFkTW9kZWxSb290SWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbklkIGV4dGVuZHMgQWdncmVnYXRlSWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbFJvb3RJZCgpOiBSZWFkTW9kZWxSb290SWQge1xuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQodGhpcy5nZXRJZCgpKTtcblx0fVxuXG59XG4iXX0=