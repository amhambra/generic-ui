import { CompositionAggregateEvents } from './composition.events';
import { CompositionResizeWidthSetEvent } from './width/resize-width/composition-resize-width-set.event';
import { CompositionColumnsSetEvent } from './column/set-columns/composition.columns-set.event';
import { CompositionContainerWidthSetEvent } from './width/set-container-width/composition-container-width-set.event';
import { CompositionWidthSetEvent } from './width/set-width/composition-width-set.event';
import { CompositionColumnSetEnabledEvent } from './column/set-enabled/composition.column-set-enabled.event';
import { CompositionColumnMovedLeftEvent } from './column/move/left/composition.column-moved-left.event';
import { CompositionColumnMovedRightEvent } from './column/move/right/composition.column-moved-right.event';
import { CompositionGroupsSetEvent } from './group/set-groups/composition.groups-set.event';
export class CompositionEventConverter {
    convert(arg) {
        if (Array.isArray(arg)) {
            return this.convertEvents(arg);
        }
        else {
            return this.convertEvent(arg);
        }
    }
    convertEvents(aggregateEvents) {
        return aggregateEvents.map((event) => {
            return this.convertEvent(event);
        });
    }
    convertEvent(aggregateEvent) {
        switch (aggregateEvent.getType()) {
            case CompositionAggregateEvents.CompositionResizeWidthSetAggregateEvent:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.ColumnsSetAggregateEvent:
                return new CompositionColumnsSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionContainerWidthSetAggregateEvent:
                const payload = aggregateEvent.containerWidth;
                return new CompositionContainerWidthSetEvent(aggregateEvent.getAggregateId(), payload);
            case CompositionAggregateEvents.CompositionWidthSetAggregateEvent:
                return new CompositionWidthSetEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnSetEnabledAggregateEvent:
                return new CompositionColumnSetEnabledEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedLeftAggregateEvent:
                return new CompositionColumnMovedLeftEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.CompositionColumnMovedRightAggregateEvent:
                return new CompositionColumnMovedRightEvent(aggregateEvent.getAggregateId());
            case CompositionAggregateEvents.GroupsSetAggregateEvent:
                return new CompositionGroupsSetEvent(aggregateEvent.getAggregateId());
            default:
                return new CompositionResizeWidthSetEvent(aggregateEvent.getAggregateId());
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uZXZlbnQtY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlL2NvbXBvc2l0aW9uLmV2ZW50LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUVoRyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN0SCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUM3RyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUU1RyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUc1RixNQUFNLE9BQU8seUJBQXlCO0lBSXJDLE9BQU8sQ0FBQyxHQUF5RTtRQUVoRixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDRixDQUFDO0lBRU8sYUFBYSxDQUFDLGVBQXFEO1FBQzFFLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQW9DLEVBQUUsRUFBRTtZQUNuRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sWUFBWSxDQUFDLGNBQTZDO1FBRWpFLFFBQVEsY0FBYyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2pDLEtBQUssMEJBQTBCLENBQUMsdUNBQXVDO2dCQUV0RSxPQUFPLElBQUksOEJBQThCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFNUUsS0FBSywwQkFBMEIsQ0FBQyx3QkFBd0I7Z0JBRXZELE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUV4RSxLQUFLLDBCQUEwQixDQUFDLDBDQUEwQztnQkFFekUsTUFBTSxPQUFPLEdBQUksY0FBNkQsQ0FBQyxjQUFjLENBQUM7Z0JBRTlGLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFeEYsS0FBSywwQkFBMEIsQ0FBQyxpQ0FBaUM7Z0JBRWhFLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUV0RSxLQUFLLDBCQUEwQixDQUFDLHlDQUF5QztnQkFFeEUsT0FBTyxJQUFJLGdDQUFnQyxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLEtBQUssMEJBQTBCLENBQUMsd0NBQXdDO2dCQUV2RSxPQUFPLElBQUksK0JBQStCLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFFN0UsS0FBSywwQkFBMEIsQ0FBQyx5Q0FBeUM7Z0JBRXhFLE9BQU8sSUFBSSxnQ0FBZ0MsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztZQUU5RSxLQUFLLDBCQUEwQixDQUFDLHVCQUF1QjtnQkFFdEQsT0FBTyxJQUFJLHlCQUF5QixDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXZFO2dCQUNDLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUM1RTtJQUVGLENBQUM7Q0FHRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUV2ZW50LCBEb21haW5FdmVudCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5ldmVudHMnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50IH0gZnJvbSAnLi93aWR0aC9yZXNpemUtd2lkdGgvY29tcG9zaXRpb24tcmVzaXplLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbnNTZXRFdmVudCB9IGZyb20gJy4vY29sdW1uL3NldC1jb2x1bW5zL2NvbXBvc2l0aW9uLmNvbHVtbnMtc2V0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4vd2lkdGgvc2V0LWNvbnRhaW5lci13aWR0aC9jb21wb3NpdGlvbi1jb250YWluZXItd2lkdGgtc2V0LmFnZ3JlZ2F0ZS1ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC1jb250YWluZXItd2lkdGgvY29tcG9zaXRpb24tY29udGFpbmVyLXdpZHRoLXNldC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbldpZHRoU2V0RXZlbnQgfSBmcm9tICcuL3dpZHRoL3NldC13aWR0aC9jb21wb3NpdGlvbi13aWR0aC1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQgfSBmcm9tICcuL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5jb2x1bW4tc2V0LWVuYWJsZWQuZXZlbnQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvbGVmdC9jb21wb3NpdGlvbi5jb2x1bW4tbW92ZWQtbGVmdC5ldmVudCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudCB9IGZyb20gJy4vY29sdW1uL21vdmUvcmlnaHQvY29tcG9zaXRpb24uY29sdW1uLW1vdmVkLXJpZ2h0LmV2ZW50JztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uR3JvdXBzU2V0RXZlbnQgfSBmcm9tICcuL2dyb3VwL3NldC1ncm91cHMvY29tcG9zaXRpb24uZ3JvdXBzLXNldC5ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uRXZlbnRDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD47XG5cdGNvbnZlcnQoZXZlbnRzOiBBcnJheTxBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPj4pOiBBcnJheTxEb21haW5FdmVudDxDb21wb3NpdGlvbklkPj47XG5cdGNvbnZlcnQoYXJnOiBBZ2dyZWdhdGVFdmVudDxDb21wb3NpdGlvbklkPiB8IEFycmF5PEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+Pik6IERvbWFpbkV2ZW50PENvbXBvc2l0aW9uSWQ+IHwgQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRFdmVudHMoYXJnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydEV2ZW50KGFyZyk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnRzKGFnZ3JlZ2F0ZUV2ZW50czogQXJyYXk8QWdncmVnYXRlRXZlbnQ8Q29tcG9zaXRpb25JZD4+KTogQXJyYXk8RG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4+IHtcblx0XHRyZXR1cm4gYWdncmVnYXRlRXZlbnRzLm1hcCgoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0RXZlbnQoZXZlbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0RXZlbnQoYWdncmVnYXRlRXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PENvbXBvc2l0aW9uSWQ+KTogRG9tYWluRXZlbnQ8Q29tcG9zaXRpb25JZD4ge1xuXG5cdFx0c3dpdGNoIChhZ2dyZWdhdGVFdmVudC5nZXRUeXBlKCkpIHtcblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbHVtbnNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uc1NldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gKGFnZ3JlZ2F0ZUV2ZW50IGFzIENvbXBvc2l0aW9uQ29udGFpbmVyV2lkdGhTZXRBZ2dyZWdhdGVFdmVudCkuY29udGFpbmVyV2lkdGg7XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbnRhaW5lcldpZHRoU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgcGF5bG9hZCk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25XaWR0aFNldEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25XaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXG5cdFx0XHRjYXNlIENvbXBvc2l0aW9uQWdncmVnYXRlRXZlbnRzLkNvbXBvc2l0aW9uQ29sdW1uU2V0RW5hYmxlZEFnZ3JlZ2F0ZUV2ZW50OlxuXG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25Db2x1bW5TZXRFbmFibGVkRXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZExlZnRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uQ29sdW1uTW92ZWRMZWZ0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGNhc2UgQ29tcG9zaXRpb25BZ2dyZWdhdGVFdmVudHMuQ29tcG9zaXRpb25Db2x1bW5Nb3ZlZFJpZ2h0QWdncmVnYXRlRXZlbnQ6XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBDb21wb3NpdGlvbkNvbHVtbk1vdmVkUmlnaHRFdmVudChhZ2dyZWdhdGVFdmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblxuXHRcdFx0Y2FzZSBDb21wb3NpdGlvbkFnZ3JlZ2F0ZUV2ZW50cy5Hcm91cHNTZXRBZ2dyZWdhdGVFdmVudDpcblxuXHRcdFx0XHRyZXR1cm4gbmV3IENvbXBvc2l0aW9uR3JvdXBzU2V0RXZlbnQoYWdncmVnYXRlRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZXNpemVXaWR0aFNldEV2ZW50KGFnZ3JlZ2F0ZUV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCkpO1xuXHRcdH1cblxuXHR9XG5cblxufVxuIl19