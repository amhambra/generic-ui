import { Injectable } from '@angular/core';
import { SelectedRowChangedEvent } from '../../domain/selected-row-changed.event';
import { RowSelectedArchive } from './row-selected.archive';
import { RowSelectedReadModel } from './row-selected.read-model';
export class SelectedRowChangedEventHandler {
    constructor(rowSelectedRepository) {
        this.rowSelectedRepository = rowSelectedRepository;
    }
    forEvent() {
        return SelectedRowChangedEvent;
    }
    handle(rowChangedEvent) {
        if (rowChangedEvent.ofMessageType('SelectedRowChangedEvent')) {
            const rowSelectedRead = new RowSelectedReadModel(rowChangedEvent.getSelectedRows(), rowChangedEvent.isAllSelected(), rowChangedEvent.isAllUnselected());
            this.rowSelectedRepository.next(rowChangedEvent.getAggregateId(), rowSelectedRead);
        }
    }
}
SelectedRowChangedEventHandler.decorators = [
    { type: Injectable }
];
SelectedRowChangedEventHandler.ctorParameters = () => [
    { type: RowSelectedArchive }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL2Zvcm1hdGlvbi9jb3JlL2FwaS9yb3ctc2VsZWN0ZWQvc2VsZWN0ZWQtcm93LWNoYW5nZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSWpFLE1BQU0sT0FBTyw4QkFBOEI7SUFFMUMsWUFBNkIscUJBQXlDO1FBQXpDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBb0I7SUFDdEUsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7SUFFRCxNQUFNLENBQUMsZUFBd0M7UUFFOUMsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFFN0QsTUFBTSxlQUFlLEdBQUcsSUFBSSxvQkFBb0IsQ0FDL0MsZUFBZSxDQUFDLGVBQWUsRUFBRSxFQUNqQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQy9CLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FDakMsQ0FBQztZQUVGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7O1lBdEJELFVBQVU7OztZQUxGLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZWxlY3RlZC1yb3ctY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RlZEFyY2hpdmUgfSBmcm9tICcuL3Jvdy1zZWxlY3RlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGVkUmVhZE1vZGVsIH0gZnJvbSAnLi9yb3ctc2VsZWN0ZWQucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlbGVjdGVkUm93Q2hhbmdlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHJvd1NlbGVjdGVkUmVwb3NpdG9yeTogUm93U2VsZWN0ZWRBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8U2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0ZWRSb3dDaGFuZ2VkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUocm93Q2hhbmdlZEV2ZW50OiBTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKHJvd0NoYW5nZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdTZWxlY3RlZFJvd0NoYW5nZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IHJvd1NlbGVjdGVkUmVhZCA9IG5ldyBSb3dTZWxlY3RlZFJlYWRNb2RlbChcblx0XHRcdFx0cm93Q2hhbmdlZEV2ZW50LmdldFNlbGVjdGVkUm93cygpLFxuXHRcdFx0XHRyb3dDaGFuZ2VkRXZlbnQuaXNBbGxTZWxlY3RlZCgpLFxuXHRcdFx0XHRyb3dDaGFuZ2VkRXZlbnQuaXNBbGxVbnNlbGVjdGVkKClcblx0XHRcdCk7XG5cblx0XHRcdHRoaXMucm93U2VsZWN0ZWRSZXBvc2l0b3J5Lm5leHQocm93Q2hhbmdlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHJvd1NlbGVjdGVkUmVhZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==