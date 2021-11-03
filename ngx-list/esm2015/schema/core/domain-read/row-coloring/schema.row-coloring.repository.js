import { Injectable } from '@angular/core';
import { EventDrivenRepository } from '@generic-ui/hermes';
import { RowColoringSetEvent } from '../../domain/row-coloring/row-coloring-set.event';
export class SchemaRowColoringRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return RowColoringSetEvent;
    }
}
SchemaRowColoringRepository.decorators = [
    { type: Injectable }
];
SchemaRowColoringRepository.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zY2hlbWEvY29yZS9kb21haW4tcmVhZC9yb3ctY29sb3Jpbmcvc2NoZW1hLnJvdy1jb2xvcmluZy5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFtQixxQkFBcUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRzVFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBR3ZGLE1BQU0sT0FBTywyQkFBNEIsU0FBUSxxQkFBdUU7SUFFdkg7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDOzs7WUFURCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBFdmVudERyaXZlblJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nU2V0RXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZy1zZXQuZXZlbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2NoZW1hUm93Q29sb3JpbmdSZXBvc2l0b3J5IGV4dGVuZHMgRXZlbnREcml2ZW5SZXBvc2l0b3J5PFNjaGVtYUlkLCBSb3dDb2xvcmluZ1NldEV2ZW50LCBTY2hlbWFSb3dDb2xvcmluZz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8Um93Q29sb3JpbmdTZXRFdmVudD4ge1xuXHRcdHJldHVybiBSb3dDb2xvcmluZ1NldEV2ZW50O1xuXHR9XG5cbn1cbiJdfQ==