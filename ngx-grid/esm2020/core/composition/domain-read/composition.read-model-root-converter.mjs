import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionReadModeRoot } from './composition.read-mode-root';
export class CompositionReadModelRootConverter {
    constructor(columnDefinitionFactory) {
        this.columnDefinitionFactory = columnDefinitionFactory;
    }
    convert(aggregate) {
        const ready = aggregate.isReady(), allColumns = aggregate.getColumns(), activeColumns = aggregate.getActiveColumns(), allColumnDefs = this.convertToColumnDef(allColumns), activeColumnDefs = this.convertActiveColumnsToColumnDef(activeColumns), width = aggregate.getWidth(), resizeWidth = aggregate.isResizeEnabled(), aggregateId = aggregate.getId();
        return new CompositionReadModeRoot(aggregateId.toReadModelRootId(), ready, allColumnDefs, activeColumnDefs, width, resizeWidth);
    }
    convertToColumnDef(columns) {
        const columnDefs = [];
        columns.forEach((column) => {
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        });
        return columnDefs;
    }
    convertActiveColumnsToColumnDef(activeColumns) {
        const columnDefs = [];
        activeColumns.forEach((column) => {
            const columnDef = this.columnDefinitionFactory.create(column);
            columnDefs.push(columnDef);
        });
        return columnDefs;
    }
}
CompositionReadModelRootConverter.services = [ColumnDefinitionFactory];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9jb21wb3NpdGlvbi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTXZFLE1BQU0sT0FBTyxpQ0FBaUM7SUFFN0MsWUFBb0IsdUJBQWdEO1FBQWhELDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7SUFDcEUsQ0FBQztJQUlELE9BQU8sQ0FBQyxTQUErQjtRQUV0QyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQ2hDLFVBQVUsR0FBd0IsU0FBUyxDQUFDLFVBQVUsRUFBRSxFQUN4RCxhQUFhLEdBQThCLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxFQUN2RSxhQUFhLEdBQTRCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFDNUUsZ0JBQWdCLEdBQTRCLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxhQUFhLENBQUMsRUFDL0YsS0FBSyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFDNUIsV0FBVyxHQUFHLFNBQVMsQ0FBQyxlQUFlLEVBQUUsRUFDekMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQyxPQUFPLElBQUksdUJBQXVCLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakksQ0FBQztJQUVPLGtCQUFrQixDQUFDLE9BQTRCO1FBRXRELE1BQU0sVUFBVSxHQUE0QixFQUFFLENBQUM7UUFFL0MsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQW9CLEVBQUUsRUFBRTtZQUV4QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTlELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLFVBQVUsQ0FBQztJQUNuQixDQUFDO0lBRU8sK0JBQStCLENBQUMsYUFBd0M7UUFFL0UsTUFBTSxVQUFVLEdBQTRCLEVBQUUsQ0FBQztRQUUvQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBMEIsRUFBRSxFQUFFO1lBRXBELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFOUQsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7O0FBMUNlLDBDQUFRLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29sdW1uRGVmaW5pdGlvbkZhY3RvcnkgfSBmcm9tICcuL2RlZmluaXRpb24vY29sdW1uLWRlZmluaXRpb24uZmFjdG9yeSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QgfSBmcm9tICcuL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmVudGl0eSc7XG5pbXBvcnQgeyBDb2x1bW5EZWZpbml0aW9uIH0gZnJvbSAnLi9kZWZpbml0aW9uL2NvbHVtbi1kZWZpbml0aW9uJztcbmltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbHVtbkRlZmluaXRpb25GYWN0b3J5OiBDb2x1bW5EZWZpbml0aW9uRmFjdG9yeSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0NvbHVtbkRlZmluaXRpb25GYWN0b3J5XTtcblxuXHRjb252ZXJ0KGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cblx0XHRjb25zdCByZWFkeSA9IGFnZ3JlZ2F0ZS5pc1JlYWR5KCksXG5cdFx0XHRhbGxDb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+ID0gYWdncmVnYXRlLmdldENvbHVtbnMoKSxcblx0XHRcdGFjdGl2ZUNvbHVtbnM6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4gPSBhZ2dyZWdhdGUuZ2V0QWN0aXZlQ29sdW1ucygpLFxuXHRcdFx0YWxsQ29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSB0aGlzLmNvbnZlcnRUb0NvbHVtbkRlZihhbGxDb2x1bW5zKSxcblx0XHRcdGFjdGl2ZUNvbHVtbkRlZnM6IEFycmF5PENvbHVtbkRlZmluaXRpb24+ID0gdGhpcy5jb252ZXJ0QWN0aXZlQ29sdW1uc1RvQ29sdW1uRGVmKGFjdGl2ZUNvbHVtbnMpLFxuXHRcdFx0d2lkdGggPSBhZ2dyZWdhdGUuZ2V0V2lkdGgoKSxcblx0XHRcdHJlc2l6ZVdpZHRoID0gYWdncmVnYXRlLmlzUmVzaXplRW5hYmxlZCgpLFxuXHRcdFx0YWdncmVnYXRlSWQgPSBhZ2dyZWdhdGUuZ2V0SWQoKTtcblxuXHRcdHJldHVybiBuZXcgQ29tcG9zaXRpb25SZWFkTW9kZVJvb3QoYWdncmVnYXRlSWQudG9SZWFkTW9kZWxSb290SWQoKSwgcmVhZHksIGFsbENvbHVtbkRlZnMsIGFjdGl2ZUNvbHVtbkRlZnMsIHdpZHRoLCByZXNpemVXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUb0NvbHVtbkRlZihjb2x1bW5zOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG5cdHByaXZhdGUgY29udmVydEFjdGl2ZUNvbHVtbnNUb0NvbHVtbkRlZihhY3RpdmVDb2x1bW5zOiBBcnJheTxBY3RpdmVDb2x1bW5FbnRpdHk+KTogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4ge1xuXG5cdFx0Y29uc3QgY29sdW1uRGVmczogQXJyYXk8Q29sdW1uRGVmaW5pdGlvbj4gPSBbXTtcblxuXHRcdGFjdGl2ZUNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBBY3RpdmVDb2x1bW5FbnRpdHkpID0+IHtcblxuXHRcdFx0Y29uc3QgY29sdW1uRGVmID0gdGhpcy5jb2x1bW5EZWZpbml0aW9uRmFjdG9yeS5jcmVhdGUoY29sdW1uKTtcblxuXHRcdFx0Y29sdW1uRGVmcy5wdXNoKGNvbHVtbkRlZik7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gY29sdW1uRGVmcztcblx0fVxuXG59XG4iXX0=