import { Injectable } from '@angular/core';
import { SchemaCssClassesRepository } from './schema.css-classes.repository';
import { SchemaThemeSetEvent } from '../../domain/theme/schema-theme-set.event';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
import { SchemaHorizontalGridSetEvent } from '../../domain/grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
import { SchemaCssClass } from '../../api/css-classes/schema-css-class';
export class SchemaCssClassesEventHandler {
    constructor(schemaCssClassesRepository) {
        this.schemaCssClassesRepository = schemaCssClassesRepository;
    }
    publish(aggregateId) {
        if (this.rowColoring !== undefined && this.horizontalGrid !== undefined && this.verticalGrid !== undefined && this.schemaTheme !== undefined) {
            this.schemaCssClassesRepository.next(aggregateId, new SchemaCssClass(this.verticalGrid, this.horizontalGrid, this.schemaTheme, this.rowColoring));
        }
    }
    forEvents() {
        return [
            SchemaThemeSetEvent,
            RowColoringSetEvent,
            SchemaHorizontalGridSetEvent,
            SchemaVerticalGridSetEvent
        ];
    }
    handle(event) {
        if (event.ofMessageType('RowColoringSetEvent')) {
            this.rowColoring = event.getRowColoring();
        }
        if (event.ofMessageType('SchemaHorizontalGridSetEvent')) {
            this.horizontalGrid = event.getHorizontalGrid();
        }
        if (event.ofMessageType('SchemaVerticalGridSetEvent')) {
            this.verticalGrid = event.getVerticalGrid();
        }
        if (event.ofMessageType('SchemaThemeSetEvent')) {
            this.schemaTheme = event.getTheme();
        }
        this.publish(event.getAggregateId());
    }
}
SchemaCssClassesEventHandler.decorators = [
    { type: Injectable }
];
SchemaCssClassesEventHandler.ctorParameters = () => [
    { type: SchemaCssClassesRepository }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLWNzcy1jbGFzc2VzLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3Nlcy5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDdkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBV3hFLE1BQU0sT0FBTyw0QkFBNEI7SUFVeEMsWUFBb0IsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDMUUsQ0FBQztJQUVPLE9BQU8sQ0FBQyxXQUFxQjtRQUNwQyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQzdJLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQ25DLFdBQVcsRUFDWCxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQzlGLENBQUM7U0FDRjtJQUNGLENBQUM7SUFFRCxTQUFTO1FBQ1IsT0FBTztZQUNOLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsNEJBQTRCO1lBQzVCLDBCQUEwQjtTQUMxQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFnQztRQUV0QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFJLEtBQTZCLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbkU7UUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsY0FBYyxHQUFJLEtBQXNDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUNsRjtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLEdBQUksS0FBb0MsQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUM1RTtRQUVELElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUksS0FBNkIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUM3RDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFFdEMsQ0FBQzs7O1lBcERELFVBQVU7OztZQWhCRiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50VHlwZSwgTXVsdGlEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeSB9IGZyb20gJy4vc2NoZW1hLmNzcy1jbGFzc2VzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdGhlbWUvc2NoZW1hLXRoZW1lLXNldC5ldmVudCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi4vLi4vYXBpL2Nzcy1jbGFzc2VzL3NjaGVtYS1jc3MtY2xhc3MnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcblxuZXhwb3J0IHR5cGUgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSA9XG5cdFNjaGVtYVRoZW1lU2V0RXZlbnRcblx0fCBSb3dDb2xvcmluZ1NldEV2ZW50XG5cdHwgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudFxuXHR8IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50SGFuZGxlciBpbXBsZW1lbnRzIE11bHRpRG9tYWluRXZlbnRIYW5kbGVyPFNjaGVtYUlkLCBTY2hlbWFDc3NDbGFzc2VzRXZlbnRUeXBlPiB7XG5cblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWU7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeTogU2NoZW1hQ3NzQ2xhc3Nlc1JlcG9zaXRvcnkpIHtcblx0fVxuXG5cdHByaXZhdGUgcHVibGlzaChhZ2dyZWdhdGVJZDogU2NoZW1hSWQpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2NoZW1hVGhlbWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDc3NDbGFzc2VzUmVwb3NpdG9yeS5uZXh0KFxuXHRcdFx0XHRhZ2dyZWdhdGVJZCxcblx0XHRcdFx0bmV3IFNjaGVtYUNzc0NsYXNzKHRoaXMudmVydGljYWxHcmlkLCB0aGlzLmhvcml6b250YWxHcmlkLCB0aGlzLnNjaGVtYVRoZW1lLCB0aGlzLnJvd0NvbG9yaW5nKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRmb3JFdmVudHMoKTogQXJyYXk8RG9tYWluRXZlbnRUeXBlPFNjaGVtYUNzc0NsYXNzZXNFdmVudFR5cGU+PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdFNjaGVtYVRoZW1lU2V0RXZlbnQsXG5cdFx0XHRSb3dDb2xvcmluZ1NldEV2ZW50LFxuXHRcdFx0U2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCxcblx0XHRcdFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50XG5cdFx0XTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogU2NoZW1hQ3NzQ2xhc3Nlc0V2ZW50VHlwZSk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy5yb3dDb2xvcmluZyA9IChldmVudCBhcyBSb3dDb2xvcmluZ1NldEV2ZW50KS5nZXRSb3dDb2xvcmluZygpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFIb3Jpem9udGFsR3JpZFNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuaG9yaXpvbnRhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCkuZ2V0SG9yaXpvbnRhbEdyaWQoKTtcblx0XHR9XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQnKSkge1xuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWQgPSAoZXZlbnQgYXMgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpLmdldFZlcnRpY2FsR3JpZCgpO1xuXHRcdH1cblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdTY2hlbWFUaGVtZVNldEV2ZW50JykpIHtcblx0XHRcdHRoaXMuc2NoZW1hVGhlbWUgPSAoZXZlbnQgYXMgU2NoZW1hVGhlbWVTZXRFdmVudCkuZ2V0VGhlbWUoKTtcblx0XHR9XG5cblx0XHR0aGlzLnB1Ymxpc2goZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cblx0fVxuXG59XG4iXX0=