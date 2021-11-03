import { Injectable } from '@angular/core';
import { RandomStringGenerator } from '@generic-ui/hermes';
import { ColumnEntity } from './column.entity';
import { ViewEntity } from './view.entity';
import { ColumnId } from '../../api/column/column.id';
import { ColumnPresentationConverter } from './presentation/column.presentation.converter';
export class ColumnEntityFactory {
    constructor(columnPresentationConverter) {
        this.columnPresentationConverter = columnPresentationConverter;
    }
    create(source) {
        if (Array.isArray(source)) {
            return this.createColumns(source);
        }
        else {
            return this.createColumn(source);
        }
    }
    createColumn(params) {
        const columnConfig = params.getColumn(), field = params.getField(), dataType = field.getDataType(), width = this.convertWidth(columnConfig.width) || undefined;
        let view, enabled;
        if (columnConfig.view !== undefined) {
            view = new ViewEntity(columnConfig.view);
        }
        if (columnConfig.enabled !== undefined) {
            enabled = columnConfig.enabled;
        }
        else {
            enabled = true;
        }
        const presentation = this.getPresentation(dataType);
        const columnEntity = new ColumnEntity(new ColumnId(RandomStringGenerator.generate()), field, columnConfig, enabled, presentation, undefined, columnConfig.align, view, width);
        if (columnConfig.header !== undefined) {
            columnEntity.setHeader(columnConfig.header);
        }
        return columnEntity;
    }
    createColumns(columns) {
        const columnEntities = [];
        columns.forEach((column) => {
            columnEntities.push(this.createColumn(column));
        });
        return columnEntities;
    }
    convertWidth(width) {
        return +width;
    }
    getPresentation(dataType) {
        return this.columnPresentationConverter.convert(dataType);
    }
}
ColumnEntityFactory.decorators = [
    { type: Injectable }
];
ColumnEntityFactory.ctorParameters = () => [
    { type: ColumnPresentationConverter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLWVudGl0eS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9jb2x1bW4vY29sdW1uLWVudGl0eS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3RELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBSTNGLE1BQU0sT0FBTyxtQkFBbUI7SUFFL0IsWUFBNkIsMkJBQXdEO1FBQXhELGdDQUEyQixHQUEzQiwyQkFBMkIsQ0FBNkI7SUFDckYsQ0FBQztJQUlELE1BQU0sQ0FBQyxNQUEwQztRQUVoRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDakM7SUFDRixDQUFDO0lBRU8sWUFBWSxDQUFDLE1BQW9CO1FBRXhDLE1BQU0sWUFBWSxHQUFpQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ3BELEtBQUssR0FBZ0IsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUN0QyxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDO1FBRTVELElBQUksSUFBZ0IsRUFDbkIsT0FBZ0IsQ0FBQztRQUVsQixJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQ3BDLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLFlBQVksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDO1NBQy9CO2FBQU07WUFDTixPQUFPLEdBQUcsSUFBSSxDQUFDO1NBQ2Y7UUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXBELE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUNwQyxJQUFJLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUM5QyxLQUFLLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxZQUFZLEVBQ1osU0FBUyxFQUNULFlBQVksQ0FBQyxLQUFLLEVBQ2xCLElBQUksRUFDSixLQUFLLENBQ0wsQ0FBQztRQUVGLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDdEMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFFRCxPQUFPLFlBQVksQ0FBQztJQUNyQixDQUFDO0lBRU8sYUFBYSxDQUFDLE9BQTRCO1FBRWpELE1BQU0sY0FBYyxHQUFHLEVBQXlCLENBQUM7UUFFakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUN4QyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sY0FBYyxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBc0I7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFTyxlQUFlLENBQUMsUUFBa0I7UUFFekMsT0FBTyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQTVFRCxVQUFVOzs7WUFIRiwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vc2V0LWNvbHVtbnMvY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2NvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IENvbHVtbkZpZWxkIH0gZnJvbSAnLi9maWVsZC9jb2x1bW4tZmllbGQnO1xuaW1wb3J0IHsgVmlld0VudGl0eSB9IGZyb20gJy4vdmlldy5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBDb2x1bW5QcmVzZW50YXRpb24gfSBmcm9tICcuL3ByZXNlbnRhdGlvbi9jb2x1bW4ucHJlc2VudGF0aW9uJztcbmltcG9ydCB7IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlciB9IGZyb20gJy4vcHJlc2VudGF0aW9uL2NvbHVtbi5wcmVzZW50YXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29sdW1uRW50aXR5RmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXI6IENvbHVtblByZXNlbnRhdGlvbkNvbnZlcnRlcikge1xuXHR9XG5cblx0Y3JlYXRlKHBhcmFtczogQ29sdW1uUGFyYW1zKTogQ29sdW1uRW50aXR5O1xuXHRjcmVhdGUocGFyYW1zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5Pjtcblx0Y3JlYXRlKHNvdXJjZTogQ29sdW1uUGFyYW1zIHwgQXJyYXk8Q29sdW1uUGFyYW1zPik6IENvbHVtbkVudGl0eSB8IEFycmF5PENvbHVtbkVudGl0eT4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyhzb3VyY2UpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW4oc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbHVtbihwYXJhbXM6IENvbHVtblBhcmFtcyk6IENvbHVtbkVudGl0eSB7XG5cblx0XHRjb25zdCBjb2x1bW5Db25maWc6IENvbHVtbkNvbmZpZyA9IHBhcmFtcy5nZXRDb2x1bW4oKSxcblx0XHRcdGZpZWxkOiBDb2x1bW5GaWVsZCA9IHBhcmFtcy5nZXRGaWVsZCgpLFxuXHRcdFx0ZGF0YVR5cGUgPSBmaWVsZC5nZXREYXRhVHlwZSgpLFxuXHRcdFx0d2lkdGggPSB0aGlzLmNvbnZlcnRXaWR0aChjb2x1bW5Db25maWcud2lkdGgpIHx8IHVuZGVmaW5lZDtcblxuXHRcdGxldCB2aWV3OiBWaWV3RW50aXR5LFxuXHRcdFx0ZW5hYmxlZDogYm9vbGVhbjtcblxuXHRcdGlmIChjb2x1bW5Db25maWcudmlldyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2aWV3ID0gbmV3IFZpZXdFbnRpdHkoY29sdW1uQ29uZmlnLnZpZXcpO1xuXHRcdH1cblxuXHRcdGlmIChjb2x1bW5Db25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRlbmFibGVkID0gY29sdW1uQ29uZmlnLmVuYWJsZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVuYWJsZWQgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IHByZXNlbnRhdGlvbiA9IHRoaXMuZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlKTtcblxuXHRcdGNvbnN0IGNvbHVtbkVudGl0eSA9IG5ldyBDb2x1bW5FbnRpdHkoXG5cdFx0XHRuZXcgQ29sdW1uSWQoUmFuZG9tU3RyaW5nR2VuZXJhdG9yLmdlbmVyYXRlKCkpLFxuXHRcdFx0ZmllbGQsXG5cdFx0XHRjb2x1bW5Db25maWcsXG5cdFx0XHRlbmFibGVkLFxuXHRcdFx0cHJlc2VudGF0aW9uLFxuXHRcdFx0dW5kZWZpbmVkLFxuXHRcdFx0Y29sdW1uQ29uZmlnLmFsaWduLFxuXHRcdFx0dmlldyxcblx0XHRcdHdpZHRoXG5cdFx0KTtcblxuXHRcdGlmIChjb2x1bW5Db25maWcuaGVhZGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGNvbHVtbkVudGl0eS5zZXRIZWFkZXIoY29sdW1uQ29uZmlnLmhlYWRlcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0eTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29sdW1ucyhjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KTogQXJyYXk8Q29sdW1uRW50aXR5PiB7XG5cblx0XHRjb25zdCBjb2x1bW5FbnRpdGllcyA9IFtdIGFzIEFycmF5PENvbHVtbkVudGl0eT47XG5cblx0XHRjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uUGFyYW1zKSA9PiB7XG5cdFx0XHRjb2x1bW5FbnRpdGllcy5wdXNoKHRoaXMuY3JlYXRlQ29sdW1uKGNvbHVtbikpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGNvbHVtbkVudGl0aWVzO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0V2lkdGgod2lkdGg6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XG5cdFx0cmV0dXJuICt3aWR0aDtcblx0fVxuXG5cdHByaXZhdGUgZ2V0UHJlc2VudGF0aW9uKGRhdGFUeXBlOiBEYXRhVHlwZSk6IENvbHVtblByZXNlbnRhdGlvbiB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb2x1bW5QcmVzZW50YXRpb25Db252ZXJ0ZXIuY29udmVydChkYXRhVHlwZSk7XG5cdH1cbn1cbiJdfQ==