import { SchemaDispatcher } from './schema.dispatcher';
import { StructurePublisher } from '../../../structure/structure-core/src/api/structure.publisher';
import { FabricModalThemeService, Theme } from '@generic-ui/fabric';
import { SchemaTheme } from '../api/theme/schema-theme';
import { RowColoring } from '../api/row-coloring/row-coloring';
import { SchemaRowColoring } from '../api/row-coloring/schema-row-coloring';
import { SchemaPublisher } from '../api/schema.publisher';
import { SchemaRowClassArchive } from './styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from './styling/schema.row-style.archive';
export class SchemaDomainPublisher extends SchemaPublisher {
    constructor(schemaDispatcher, structurePublisher, fabricModalThemeService, schemaRowClassArchive, schemaRowStyleArchive) {
        super();
        this.schemaDispatcher = schemaDispatcher;
        this.structurePublisher = structurePublisher;
        this.fabricModalThemeService = fabricModalThemeService;
        this.schemaRowClassArchive = schemaRowClassArchive;
        this.schemaRowStyleArchive = schemaRowStyleArchive;
    }
    create(schemaId) {
        this.schemaDispatcher.create(schemaId.toAggregateId());
    }
    setTheme(theme, schemaId, structureId) {
        this.schemaDispatcher.setTheme(theme, schemaId.toAggregateId());
        this.fabricModalThemeService.changeTheme(this.toFabricTheme(theme)); // TODO github #2162
        this.structurePublisher.setRowHeightBasedOnTheme(theme, structureId);
    }
    setRowColoring(rowColoring, schemaId) {
        const schemaRowColoring = this.toSchemaRowColoring(rowColoring);
        this.schemaDispatcher.setRowColoring(schemaRowColoring, schemaId.toAggregateId());
    }
    setVerticalGrid(verticalGrid, schemaId) {
        this.schemaDispatcher.setVerticalGrid(verticalGrid, schemaId.toAggregateId());
    }
    setHorizontalGrid(horizontalGrid, schemaId) {
        this.schemaDispatcher.setHorizontalGrid(horizontalGrid, schemaId.toAggregateId());
    }
    setRowClass(schemaRowClass, schemaId) {
        return this.schemaRowClassArchive.next(schemaId.toAggregateId(), schemaRowClass);
    }
    setRowStyle(rowStyle, schemaId) {
        return this.schemaRowStyleArchive.next(schemaId.toAggregateId(), rowStyle);
    }
    // move to function
    toSchemaRowColoring(coloring) {
        switch (coloring) {
            case RowColoring.NONE:
                return SchemaRowColoring.NONE;
            case RowColoring.ODD:
                return SchemaRowColoring.ODD;
            case RowColoring.EVEN:
                return SchemaRowColoring.EVEN;
            default:
                return SchemaRowColoring.NONE;
        }
    }
    // move to function
    toFabricTheme(schemaTheme) {
        switch (schemaTheme) {
            case SchemaTheme.DARK: {
                return Theme.DARK;
            }
            case SchemaTheme.FABRIC: {
                return Theme.FABRIC;
            }
            case SchemaTheme.GENERIC: {
                return Theme.GENERIC;
            }
            case SchemaTheme.LIGHT: {
                return Theme.LIGHT;
            }
            case SchemaTheme.MATERIAL: {
                return Theme.MATERIAL;
            }
            default:
                return Theme.FABRIC;
        }
    }
}
SchemaDomainPublisher.services = [
    SchemaDispatcher,
    StructurePublisher,
    FabricModalThemeService,
    SchemaRowClassArchive,
    SchemaRowStyleArchive
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1wdWJsaXNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc2NoZW1hL3NyYy9jb3JlL3NjaGVtYS5kb21haW4tcHVibGlzaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUcxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUczRSxNQUFNLE9BQU8scUJBQXNCLFNBQVEsZUFBZTtJQUV6RCxZQUE2QixnQkFBa0MsRUFDM0Msa0JBQXNDLEVBQ3RDLHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMscUJBQTRDO1FBQy9ELEtBQUssRUFBRSxDQUFDO1FBTG9CLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtJQUVoRSxD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TyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBRXJCO0lBQ0YsQ0FBQzs7QUExRmUsOEJBQVEsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0NBQ1osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYURpc3BhdGNoZXIgfSBmcm9tICcuL3NjaGVtYS5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVB1Ymxpc2hlciB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3N0cnVjdHVyZS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsIFRoZW1lIH0gZnJvbSAnQGdlbmVyaWMtdWkvZmFicmljJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uL2FwaS9nbG9iYWwvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uL2FwaS90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vYXBpL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi9hcGkvcm93LWNvbG9yaW5nL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU2NoZW1hUHVibGlzaGVyIH0gZnJvbSAnLi4vYXBpL3NjaGVtYS5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU2NoZW1hUm93Q2xhc3MgfSBmcm9tICcuLi9hcGkvc3R5bGluZy9zY2hlbWEucm93LWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlIH0gZnJvbSAnLi4vYXBpL3N0eWxpbmcvc2NoZW1hLnJvdy1zdHlsZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDbGFzc0FyY2hpdmUgfSBmcm9tICcuL3N0eWxpbmcvc2NoZW1hLnJvdy1jbGFzcy5hcmNoaXZlJztcbmltcG9ydCB7IFNjaGVtYVJvd1N0eWxlQXJjaGl2ZSB9IGZyb20gJy4vc3R5bGluZy9zY2hlbWEucm93LXN0eWxlLmFyY2hpdmUnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFEb21haW5QdWJsaXNoZXIgZXh0ZW5kcyBTY2hlbWFQdWJsaXNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hRGlzcGF0Y2hlcjogU2NoZW1hRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVQdWJsaXNoZXI6IFN0cnVjdHVyZVB1Ymxpc2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmYWJyaWNNb2RhbFRoZW1lU2VydmljZTogRmFicmljTW9kYWxUaGVtZVNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93Q2xhc3NBcmNoaXZlOiBTY2hlbWFSb3dDbGFzc0FyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUm93U3R5bGVBcmNoaXZlOiBTY2hlbWFSb3dTdHlsZUFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1xuXHRcdFNjaGVtYURpc3BhdGNoZXIsXG5cdFx0U3RydWN0dXJlUHVibGlzaGVyLFxuXHRcdEZhYnJpY01vZGFsVGhlbWVTZXJ2aWNlLFxuXHRcdFNjaGVtYVJvd0NsYXNzQXJjaGl2ZSxcblx0XHRTY2hlbWFSb3dTdHlsZUFyY2hpdmVcblx0XSBhcyBjb25zdDtcblxuXHRjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5jcmVhdGUoc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFRoZW1lKHRoZW1lOiBTY2hlbWFUaGVtZSxcblx0XHRcdCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZFxuXHQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLnRvQWdncmVnYXRlSWQoKSk7XG5cdFx0dGhpcy5mYWJyaWNNb2RhbFRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGlzLnRvRmFicmljVGhlbWUodGhlbWUpKTsgLy8gVE9ETyBnaXRodWIgIzIxNjJcblx0XHR0aGlzLnN0cnVjdHVyZVB1Ymxpc2hlci5zZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWUodGhlbWUsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBSb3dDb2xvcmluZywgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qgc2NoZW1hUm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nID0gdGhpcy50b1NjaGVtYVJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nKTtcblxuXHRcdHRoaXMuc2NoZW1hRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyhzY2hlbWFSb3dDb2xvcmluZywgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblx0XHR0aGlzLnNjaGVtYURpc3BhdGNoZXIuc2V0VmVydGljYWxHcmlkKHZlcnRpY2FsR3JpZCwgc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFEaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkLCBzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCkpO1xuXHR9XG5cblx0c2V0Um93Q2xhc3Moc2NoZW1hUm93Q2xhc3M6IFNjaGVtYVJvd0NsYXNzLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZCB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hUm93Q2xhc3NBcmNoaXZlLm5leHQoc2NoZW1hSWQudG9BZ2dyZWdhdGVJZCgpLCBzY2hlbWFSb3dDbGFzcyk7XG5cdH1cblxuXHRzZXRSb3dTdHlsZShyb3dTdHlsZTogU2NoZW1hUm93U3R5bGUsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFSb3dTdHlsZUFyY2hpdmUubmV4dChzY2hlbWFJZC50b0FnZ3JlZ2F0ZUlkKCksIHJvd1N0eWxlKTtcblx0fVxuXG5cdC8vIG1vdmUgdG8gZnVuY3Rpb25cblx0cHJpdmF0ZSB0b1NjaGVtYVJvd0NvbG9yaW5nKGNvbG9yaW5nOiBSb3dDb2xvcmluZyk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRzd2l0Y2ggKGNvbG9yaW5nKSB7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuTk9ORTpcblx0XHRcdFx0cmV0dXJuIFNjaGVtYVJvd0NvbG9yaW5nLk5PTkU7XG5cblx0XHRcdGNhc2UgUm93Q29sb3JpbmcuT0REOlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuT0REO1xuXG5cdFx0XHRjYXNlIFJvd0NvbG9yaW5nLkVWRU46XG5cdFx0XHRcdHJldHVybiBTY2hlbWFSb3dDb2xvcmluZy5FVkVOO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gU2NoZW1hUm93Q29sb3JpbmcuTk9ORTtcblx0XHR9XG5cdH1cblxuXHQvLyBtb3ZlIHRvIGZ1bmN0aW9uXG5cdHByaXZhdGUgdG9GYWJyaWNUaGVtZShzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUpOiBUaGVtZSB7XG5cblx0XHRzd2l0Y2ggKHNjaGVtYVRoZW1lKSB7XG5cdFx0XHRjYXNlIFNjaGVtYVRoZW1lLkRBUks6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLkRBUks7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuRkFCUklDOiB7XG5cdFx0XHRcdHJldHVybiBUaGVtZS5GQUJSSUM7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuR0VORVJJQzoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuR0VORVJJQztcblx0XHRcdH1cblxuXHRcdFx0Y2FzZSBTY2hlbWFUaGVtZS5MSUdIVDoge1xuXHRcdFx0XHRyZXR1cm4gVGhlbWUuTElHSFQ7XG5cdFx0XHR9XG5cblx0XHRcdGNhc2UgU2NoZW1hVGhlbWUuTUFURVJJQUw6IHtcblx0XHRcdFx0cmV0dXJuIFRoZW1lLk1BVEVSSUFMO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gVGhlbWUuRkFCUklDO1xuXG5cdFx0fVxuXHR9XG59XG4iXX0=