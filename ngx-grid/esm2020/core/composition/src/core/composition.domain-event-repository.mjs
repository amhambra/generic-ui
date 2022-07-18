import { hermesFilter, hermesMap } from '@generic-ui/hermes';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionEventRepository } from '../api/composition.event-repository';
export class CompositionDomainEventRepository extends CompositionEventRepository {
    constructor() {
        super();
    }
    onColumnsChanged(compositionId) {
        return this.onEvent(compositionId, CompositionColumnsSetEvent);
    }
    onContainerWidthChanged(compositionId) {
        return this.onEvent(compositionId, CompositionContainerWidthSetEvent)
            .pipe(hermesMap((event) => {
            return event.getPayload();
        }), hermesFilter((width) => !!width));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL2NvcmUvY29tcG9zaXRpb24uZG9tYWluLWV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFFL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sbUVBQW1FLENBQUM7QUFDdEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHakYsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLDBCQUEwQjtJQUUvRTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELGdCQUFnQixDQUFDLGFBQXlDO1FBRXpELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsdUJBQXVCLENBQUMsYUFBeUM7UUFFaEUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQzthQUMvRCxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsS0FBd0MsRUFBRSxFQUFFO1lBQ3RELE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxFQUNGLFlBQVksQ0FBQyxDQUFDLEtBQWEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN4QyxDQUFDO0lBQ1IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGVybWVzRmlsdGVyLCBoZXJtZXNNYXAsIEhlcm1lc09ic2VydmFibGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYXBpL2NvbXBvc2l0aW9uLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkRvbWFpbkV2ZW50UmVwb3NpdG9yeSBleHRlbmRzIENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25Db2x1bW5zQ2hhbmdlZChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Q29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQ+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoY29tcG9zaXRpb25JZCwgQ29tcG9zaXRpb25Db2x1bW5zU2V0RXZlbnQpO1xuXHR9XG5cblx0b25Db250YWluZXJXaWR0aENoYW5nZWQoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChjb21wb3NpdGlvbklkLCBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGV2ZW50LmdldFBheWxvYWQoKTtcblx0XHRcdFx0XHQgICB9KSxcblx0XHRcdFx0XHQgICBoZXJtZXNGaWx0ZXIoKHdpZHRoOiBudW1iZXIpID0+ICEhd2lkdGgpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19