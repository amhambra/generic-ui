import { Injectable } from '@angular/core';
import { ViewTemplateRepository } from '../view/view-template.repository';
import { EditTemplateRepository } from '../edit/edit-template.repository';
import { ColumnEntity } from '../../domain/column/column.entity';
import { ColumnDefinition } from './column-definition';
import { CellView } from '../../domain/column/cell-view';
import { ColumnDefinitionId } from '../../api/column/column-definition-id';
export class ColumnDefinitionFactory {
    constructor(viewTemplateRepository, editTemplateRepository) {
        this.viewTemplateRepository = viewTemplateRepository;
        this.editTemplateRepository = editTemplateRepository;
    }
    create(column) {
        if (column instanceof ColumnEntity) {
            return this.createFromColumnEntity(column);
        }
        else {
            return this.createFromActiveColumnEntity(column);
        }
    }
    createFromColumnEntity(column) {
        const columnDef = new ColumnDefinition(column.getField(), new ColumnDefinitionId(column.getId().toString()), column.isEnabled(), column.getDataType(), column.getView(), column.getAlign(), column.getHeader(), column.isCellEditingEnabled(), column.getSortStatus(), column.isSortingEnabled());
        if (column.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = column.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(column.getCellView());
        }
        if (typeof column.getHeader() === 'function') {
            columnDef.headerTemplate = this.findViewTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        }
        columnDef.setTemplateFunction(column.getTemplateFunction());
        columnDef.setFormatterFunction(column.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(column.getDataType());
        columnDef.width = +column.getWidth();
        return columnDef;
    }
    createFromActiveColumnEntity(activeColumn) {
        const columnDef = new ColumnDefinition(activeColumn.getField(), new ColumnDefinitionId(activeColumn.getId().toString()), true, // remove,
        activeColumn.getDataType(), activeColumn.getView(), activeColumn.getAlign(), activeColumn.getHeader(), activeColumn.isCellEditingEnabled(), activeColumn.getSortStatus(), activeColumn.isSortingEnabled());
        if (activeColumn.getCellView() === CellView.NG_TEMPLATE) {
            columnDef.cellTemplate = activeColumn.getColumnConfig().templateRef;
        }
        else {
            columnDef.cellTemplate = this.findViewTemplate(activeColumn.getCellView());
        }
        if (typeof activeColumn.getHeader() === 'function') {
            columnDef.headerTemplate = this.findViewTemplate(CellView.FUNCTION);
        }
        else {
            columnDef.headerTemplate = this.findViewTemplate(CellView.TEXT);
        }
        columnDef.setTemplateFunction(activeColumn.getTemplateFunction());
        columnDef.setFormatterFunction(activeColumn.getFormatterFunction());
        columnDef.editTemplate = this.findEditTemplate(activeColumn.getDataType());
        columnDef.width = +activeColumn.getWidth();
        return columnDef;
    }
    createColumns(columns) {
        return columns.map((column) => this.create(column));
    }
    findViewTemplate(view) {
        if (view === CellView.FUNCTION) {
            return this.viewTemplateRepository.findTemplate(CellView.FUNCTION);
        }
        else {
            return this.viewTemplateRepository.findTemplate(view);
        }
    }
    findEditTemplate(dataType) {
        return this.editTemplateRepository.findTemplate(dataType);
    }
}
ColumnDefinitionFactory.decorators = [
    { type: Injectable }
];
ColumnDefinitionFactory.ctorParameters = () => [
    { type: ViewTemplateRepository },
    { type: EditTemplateRepository }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29tcG9zaXRpb24vY29yZS9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBZSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3pELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSTNFLE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBNkIsc0JBQThDLEVBQ3ZELHNCQUE4QztRQURyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQ3ZELDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDbEUsQ0FBQztJQUlELE1BQU0sQ0FBQyxNQUF5QztRQUUvQyxJQUFJLE1BQU0sWUFBWSxZQUFZLEVBQUU7WUFDbkMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0M7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2pEO0lBQ0YsQ0FBQztJQUVPLHNCQUFzQixDQUFDLE1BQW9CO1FBRWxELE1BQU0sU0FBUyxHQUFHLElBQUksZ0JBQWdCLENBQ3JDLE1BQU0s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QVMsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO1FBRXBFLFNBQVMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRTNFLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0MsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUE0QjtRQUN6QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVPLGdCQUFnQixDQUFDLElBQWM7UUFFdEMsSUFBSSxJQUFJLEtBQUssUUFBUSxDQUFDLFFBQVEsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25FO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7SUFDRixDQUFDO0lBRU8sZ0JBQWdCLENBQUMsUUFBa0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTNHRCxVQUFVOzs7WUFWRixzQkFBc0I7WUFDdEIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVmlld1RlbXBsYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEVkaXRUZW1wbGF0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9lZGl0L2VkaXQtdGVtcGxhdGUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbiB9IGZyb20gJy4vY29sdW1uLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgQ2VsbFZpZXcgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2NlbGwtdmlldyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuLi8uLi9kb21haW4vY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi1kZWZpbml0aW9uLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRGVmaW5pdGlvbkZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdmlld1RlbXBsYXRlUmVwb3NpdG9yeTogVmlld1RlbXBsYXRlUmVwb3NpdG9yeSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlZGl0VGVtcGxhdGVSZXBvc2l0b3J5OiBFZGl0VGVtcGxhdGVSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uO1xuXHRjcmVhdGUoY29sdW1uOiBDb2x1bW5FbnRpdHkgfCBBY3RpdmVDb2x1bW5FbnRpdHkpOiBDb2x1bW5EZWZpbml0aW9uIHtcblxuXHRcdGlmIChjb2x1bW4gaW5zdGFuY2VvZiBDb2x1bW5FbnRpdHkpIHtcblx0XHRcdHJldHVybiB0aGlzLmNyZWF0ZUZyb21Db2x1bW5FbnRpdHkoY29sdW1uKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlRnJvbUFjdGl2ZUNvbHVtbkVudGl0eShjb2x1bW4pO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlRnJvbUNvbHVtbkVudGl0eShjb2x1bW46IENvbHVtbkVudGl0eSk6IENvbHVtbkRlZmluaXRpb24ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmID0gbmV3IENvbHVtbkRlZmluaXRpb24oXG5cdFx0XHRjb2x1bW4uZ2V0RmllbGQoKSxcblx0XHRcdG5ldyBDb2x1bW5EZWZpbml0aW9uSWQoY29sdW1uLmdldElkKCkudG9TdHJpbmcoKSksXG5cdFx0XHRjb2x1bW4uaXNFbmFibGVkKCksXG5cdFx0XHRjb2x1bW4uZ2V0RGF0YVR5cGUoKSxcblx0XHRcdGNvbHVtbi5nZXRWaWV3KCksXG5cdFx0XHRjb2x1bW4uZ2V0QWxpZ24oKSxcblx0XHRcdGNvbHVtbi5nZXRIZWFkZXIoKSxcblx0XHRcdGNvbHVtbi5pc0NlbGxFZGl0aW5nRW5hYmxlZCgpLFxuXHRcdFx0Y29sdW1uLmdldFNvcnRTdGF0dXMoKSxcblx0XHRcdGNvbHVtbi5pc1NvcnRpbmdFbmFibGVkKClcblx0XHQpO1xuXG5cdFx0aWYgKGNvbHVtbi5nZXRDZWxsVmlldygpID09PSBDZWxsVmlldy5OR19URU1QTEFURSkge1xuXHRcdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IGNvbHVtbi5nZXRDb2x1bW5Db25maWcoKS50ZW1wbGF0ZVJlZjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sdW1uRGVmLmNlbGxUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShjb2x1bW4uZ2V0Q2VsbFZpZXcoKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHR5cGVvZiBjb2x1bW4uZ2V0SGVhZGVyKCkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5GVU5DVElPTik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbHVtbkRlZi5oZWFkZXJUZW1wbGF0ZSA9IHRoaXMuZmluZFZpZXdUZW1wbGF0ZShDZWxsVmlldy5URVhUKTtcblx0XHR9XG5cblx0XHRjb2x1bW5EZWYuc2V0VGVtcGxhdGVGdW5jdGlvbihjb2x1bW4uZ2V0VGVtcGxhdGVGdW5jdGlvbigpKTtcblx0XHRjb2x1bW5EZWYuc2V0Rm9ybWF0dGVyRnVuY3Rpb24oY29sdW1uLmdldEZvcm1hdHRlckZ1bmN0aW9uKCkpO1xuXG5cdFx0Y29sdW1uRGVmLmVkaXRUZW1wbGF0ZSA9IHRoaXMuZmluZEVkaXRUZW1wbGF0ZShjb2x1bW4uZ2V0RGF0YVR5cGUoKSk7XG5cblx0XHRjb2x1bW5EZWYud2lkdGggPSArY29sdW1uLmdldFdpZHRoKCk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVGcm9tQWN0aXZlQ29sdW1uRW50aXR5KGFjdGl2ZUNvbHVtbjogQWN0aXZlQ29sdW1uRW50aXR5KTogQ29sdW1uRGVmaW5pdGlvbiB7XG5cblx0XHRjb25zdCBjb2x1bW5EZWYgPSBuZXcgQ29sdW1uRGVmaW5pdGlvbihcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRGaWVsZCgpLFxuXHRcdFx0bmV3IENvbHVtbkRlZmluaXRpb25JZChhY3RpdmVDb2x1bW4uZ2V0SWQoKS50b1N0cmluZygpKSxcblx0XHRcdHRydWUsIC8vIHJlbW92ZSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldFZpZXcoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbi5nZXRBbGlnbigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmdldEhlYWRlcigpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmlzQ2VsbEVkaXRpbmdFbmFibGVkKCksXG5cdFx0XHRhY3RpdmVDb2x1bW4uZ2V0U29ydFN0YXR1cygpLFxuXHRcdFx0YWN0aXZlQ29sdW1uLmlzU29ydGluZ0VuYWJsZWQoKVxuXHRcdCk7XG5cblx0XHRpZiAoYWN0aXZlQ29sdW1uLmdldENlbGxWaWV3KCkgPT09IENlbGxWaWV3Lk5HX1RFTVBMQVRFKSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gYWN0aXZlQ29sdW1uLmdldENvbHVtbkNvbmZpZygpLnRlbXBsYXRlUmVmO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb2x1bW5EZWYuY2VsbFRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXRDZWxsVmlldygpKTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIGFjdGl2ZUNvbHVtbi5nZXRIZWFkZXIoKSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LkZVTkNUSU9OKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29sdW1uRGVmLmhlYWRlclRlbXBsYXRlID0gdGhpcy5maW5kVmlld1RlbXBsYXRlKENlbGxWaWV3LlRFWFQpO1xuXHRcdH1cblxuXHRcdGNvbHVtbkRlZi5zZXRUZW1wbGF0ZUZ1bmN0aW9uKGFjdGl2ZUNvbHVtbi5nZXRUZW1wbGF0ZUZ1bmN0aW9uKCkpO1xuXHRcdGNvbHVtbkRlZi5zZXRGb3JtYXR0ZXJGdW5jdGlvbihhY3RpdmVDb2x1bW4uZ2V0Rm9ybWF0dGVyRnVuY3Rpb24oKSk7XG5cblx0XHRjb2x1bW5EZWYuZWRpdFRlbXBsYXRlID0gdGhpcy5maW5kRWRpdFRlbXBsYXRlKGFjdGl2ZUNvbHVtbi5nZXREYXRhVHlwZSgpKTtcblxuXHRcdGNvbHVtbkRlZi53aWR0aCA9ICthY3RpdmVDb2x1bW4uZ2V0V2lkdGgoKTtcblxuXHRcdHJldHVybiBjb2x1bW5EZWY7XG5cdH1cblxuXHRjcmVhdGVDb2x1bW5zKGNvbHVtbnM6IEFycmF5PENvbHVtbkVudGl0eT4pOiBBcnJheTxDb2x1bW5EZWZpbml0aW9uPiB7XG5cdFx0cmV0dXJuIGNvbHVtbnMubWFwKChjb2x1bW46IENvbHVtbkVudGl0eSkgPT4gdGhpcy5jcmVhdGUoY29sdW1uKSk7XG5cdH1cblxuXHRwcml2YXRlIGZpbmRWaWV3VGVtcGxhdGUodmlldzogQ2VsbFZpZXcpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcblxuXHRcdGlmICh2aWV3ID09PSBDZWxsVmlldy5GVU5DVElPTikge1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1RlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoQ2VsbFZpZXcuRlVOQ1RJT04pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3VGVtcGxhdGVSZXBvc2l0b3J5LmZpbmRUZW1wbGF0ZSh2aWV3KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGZpbmRFZGl0VGVtcGxhdGUoZGF0YVR5cGU6IERhdGFUeXBlKTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZWRpdFRlbXBsYXRlUmVwb3NpdG9yeS5maW5kVGVtcGxhdGUoZGF0YVR5cGUpO1xuXHR9XG5cbn1cbiJdfQ==