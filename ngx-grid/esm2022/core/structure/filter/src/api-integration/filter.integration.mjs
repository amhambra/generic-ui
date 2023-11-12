import { CompositionWarehouse } from '../../../../composition/src/api/composition.warehouse';
import { hermesFilter, hermesMap, hermesSwitchMap, hermesTake } from '@generic-ui/hermes';
import { FilterWarehouse } from '../api/filter.warehouse';
import { FieldId } from '../../../field/src/domain/field/field.id';
import { FilterPublisher } from '../api/filter.publisher';
export class FilterIntegration {
    compositionWarehouse;
    filterCommandInvoker;
    filterWarehouse;
    constructor(compositionWarehouse, filterCommandInvoker, filterWarehouse) {
        this.compositionWarehouse = compositionWarehouse;
        this.filterCommandInvoker = filterCommandInvoker;
        this.filterWarehouse = filterWarehouse;
    }
    static services = [CompositionWarehouse, FilterPublisher, FilterWarehouse];
    findFilterTypes(columnName, compositionId, structureId) {
        let filterTypes = [];
        this.compositionWarehouse
            .onTemplateColumns(compositionId)
            .pipe(hermesMap((cols) => {
            return cols.find((col) => {
                return col.getName() === columnName;
            });
        }), hermesFilter((col) => {
            return col !== undefined;
        }), hermesTake(1), hermesSwitchMap((col) => {
            return this.filterWarehouse
                .onFilterTypesForFieldId(new FieldId(col.columnFieldId.getId()), structureId);
        }))
            .subscribe((types) => {
            filterTypes = types.map((type) => type.getName());
        });
        return filterTypes;
    }
    findFilters(compositionId, structureId) {
        const filters = this.filterWarehouse.findFilters(structureId).getValueOrNullOrThrowError();
        const columnNames = this.compositionWarehouse.findColumnNames(compositionId);
        const obj = {};
        for (let i = 0; i < columnNames.length; i += 1) {
            obj[columnNames[i]] = filters.filter((filter) => {
                return filter.getFieldName() === columnNames[i];
            })
                .map((filter) => {
                return {
                    columnName: filter.getFieldName(),
                    filterId: filter.getFilterId().toString(),
                    type: filter.getFilterTypeName(),
                    value: filter.getValue()
                };
            });
        }
        return obj;
    }
    filter(columnName, filterType, value, compositionId, structureId) {
        this.compositionWarehouse
            .onTemplateColumns(compositionId)
            .pipe(hermesMap((cols) => {
            return cols.find((col) => {
                return col.getName() === columnName;
            });
        }), hermesFilter((col) => {
            return col !== undefined;
        }), hermesTake(1), hermesSwitchMap((col) => {
            return this.filterWarehouse
                .onceFilterTypeId(new FieldId(col.columnFieldId.getId()), filterType, structureId)
                .pipe(hermesMap((filterTypeId) => {
                return {
                    fieldId: new FieldId(col.columnFieldId.getId()),
                    filterTypeId: filterTypeId
                };
            }));
        }))
            .subscribe((params) => {
            const { fieldId, filterTypeId } = params;
            filterTypeId.ifPresent((ftId) => {
                this.filterCommandInvoker.add(fieldId, ftId, value, structureId);
            });
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmludGVncmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS1pbnRlZ3JhdGlvbi9maWx0ZXIuaW50ZWdyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFHN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBTTFELE1BQU0sT0FBTyxpQkFBaUI7SUFFQTtJQUNUO0lBQ0E7SUFGcEIsWUFBNkIsb0JBQTBDLEVBQ25ELG9CQUFxQyxFQUNyQyxlQUFnQztRQUZ2Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQ25ELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBaUI7UUFDckMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQ3BELENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRXBGLGVBQWUsQ0FBQyxVQUFrQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFFekYsSUFBSSxXQUFXLEdBQWtCLEVBQUUsQ0FBQztRQUVwQyxJQUFJLENBQUMsb0JBQW9CO2FBQ3ZCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQzthQUNoQyxJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsSUFBNkMsRUFBRSxFQUFFO1lBQzNELE9BQU8sSUFB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LGdCQUFnQixDQUFDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDO2lCQUNqRixJQUFJLENBQ0osU0FBUyxDQUFDLENBQUMsWUFBb0MsRUFBRSxFQUFFO2dCQUNsRCxPQUFPO29CQUNOLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMvQyxZQUFZLEVBQUUsWUFBWTtpQkFDMUIsQ0FBQztZQUNILENBQUMsQ0FBQyxDQUNGLENBQUM7UUFDUixDQUFDLENBQUMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBRXJCLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsTUFBTSxDQUFDO1lBRXpDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzVCLE9BQU8sRUFDUCxJQUFJLEVBQ0osS0FBSyxFQUNMLFdBQVcsQ0FDWCxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29tcG9zaXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9zcmMvY29yZS1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciwgaGVybWVzTWFwLCBoZXJtZXNTd2l0Y2hNYXAsIGhlcm1lc1Rha2UsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uL2FwaS9maWx0ZXIud2FyZWhvdXNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVNb2RlbCB9IGZyb20gJy4uL2FwaS90eXBlL2ZpbHRlci10eXBlLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlclB1Ymxpc2hlciB9IGZyb20gJy4uL2FwaS9maWx0ZXIucHVibGlzaGVyJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uL2RvbWFpbi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEFjdGl2ZUZpbHRlck1vZGVsIH0gZnJvbSAnLi4vYXBpL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLm1vZGVsJztcbmltcG9ydCB7IEZpbHRlckZvckNvbHVtbiB9IGZyb20gJy4vZmlsdGVyLWludGVncmF0aW9uLmFwaSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlckludGVncmF0aW9uIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uV2FyZWhvdXNlOiBDb21wb3NpdGlvbldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJDb21tYW5kSW52b2tlcjogRmlsdGVyUHVibGlzaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlcldhcmVob3VzZTogRmlsdGVyV2FyZWhvdXNlKSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbQ29tcG9zaXRpb25XYXJlaG91c2UsIEZpbHRlclB1Ymxpc2hlciwgRmlsdGVyV2FyZWhvdXNlXTtcblxuXHRmaW5kRmlsdGVyVHlwZXMoY29sdW1uTmFtZTogc3RyaW5nLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBBcnJheTxzdHJpbmc+IHtcblxuXHRcdGxldCBmaWx0ZXJUeXBlczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbldhcmVob3VzZVxuXHRcdFx0Lm9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzTWFwKChjb2xzOiBSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY29scy5maW5kKChjb2w6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbC5nZXROYW1lKCkgPT09IGNvbHVtbk5hbWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGNvbDogQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbCAhPT0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0aGVybWVzVGFrZSgxKSxcblx0XHRcdFx0aGVybWVzU3dpdGNoTWFwKChjb2w6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25GaWx0ZXJUeXBlc0ZvckZpZWxkSWQobmV3IEZpZWxkSWQoY29sLmNvbHVtbkZpZWxkSWQuZ2V0SWQoKSksIHN0cnVjdHVyZUlkKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHR5cGVzOiBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+KSA9PiB7XG5cdFx0XHRcdGZpbHRlclR5cGVzID0gdHlwZXMubWFwKCh0eXBlKSA9PiB0eXBlLmdldE5hbWUoKSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBmaWx0ZXJUeXBlcztcblx0fVxuXG5cdGZpbmRGaWx0ZXJzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHsgW2tleTogc3RyaW5nXTogUmVhZG9ubHlBcnJheTxGaWx0ZXJGb3JDb2x1bW4+IH0ge1xuXG5cdFx0Y29uc3QgZmlsdGVycyA9IHRoaXMuZmlsdGVyV2FyZWhvdXNlLmZpbmRGaWx0ZXJzKHN0cnVjdHVyZUlkKS5nZXRWYWx1ZU9yTnVsbE9yVGhyb3dFcnJvcigpO1xuXG5cdFx0Y29uc3QgY29sdW1uTmFtZXMgPSB0aGlzLmNvbXBvc2l0aW9uV2FyZWhvdXNlLmZpbmRDb2x1bW5OYW1lcyhjb21wb3NpdGlvbklkKTtcblxuXHRcdGNvbnN0IG9iaiA9IHt9O1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb2x1bW5OYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0b2JqW2NvbHVtbk5hbWVzW2ldXSA9IGZpbHRlcnMuZmlsdGVyKChmaWx0ZXI6IEFjdGl2ZUZpbHRlck1vZGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IHJldHVybiBmaWx0ZXIuZ2V0RmllbGROYW1lKCkgPT09IGNvbHVtbk5hbWVzW2ldO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgfSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0IC5tYXAoKGZpbHRlcjogQWN0aXZlRmlsdGVyTW9kZWwpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgcmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjb2x1bW5OYW1lOiBmaWx0ZXIuZ2V0RmllbGROYW1lKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgZmlsdGVySWQ6IGZpbHRlci5nZXRGaWx0ZXJJZCgpLnRvU3RyaW5nKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdHlwZTogZmlsdGVyLmdldEZpbHRlclR5cGVOYW1lKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdmFsdWU6IGZpbHRlci5nZXRWYWx1ZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9XG5cblx0ZmlsdGVyKFxuXHRcdGNvbHVtbk5hbWU6IHN0cmluZyxcblx0XHRmaWx0ZXJUeXBlOiBzdHJpbmcsXG5cdFx0dmFsdWU6IGFueSxcblx0XHRjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZFxuXHQpOiB2b2lkIHtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25XYXJlaG91c2Vcblx0XHRcdC5vblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc01hcCgoY29sczogUmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbHMuZmluZCgoY29sOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiBjb2wuZ2V0TmFtZSgpID09PSBjb2x1bW5OYW1lO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KSxcblx0XHRcdFx0aGVybWVzRmlsdGVyKChjb2w6IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjb2wgIT09IHVuZGVmaW5lZDtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGhlcm1lc1Rha2UoMSksXG5cdFx0XHRcdGhlcm1lc1N3aXRjaE1hcCgoY29sOiBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IpID0+IHtcblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLmZpbHRlcldhcmVob3VzZVxuXHRcdFx0XHRcdFx0XHQgICAub25jZUZpbHRlclR5cGVJZChuZXcgRmllbGRJZChjb2wuY29sdW1uRmllbGRJZC5nZXRJZCgpKSwgZmlsdGVyVHlwZSwgc3RydWN0dXJlSWQpXG5cdFx0XHRcdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZmlsdGVyVHlwZUlkOiBPcHRpb25hbDxGaWx0ZXJUeXBlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBmaWVsZElkOiBuZXcgRmllbGRJZChjb2wuY29sdW1uRmllbGRJZC5nZXRJZCgpKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgZmlsdGVyVHlwZUlkOiBmaWx0ZXJUeXBlSWRcblx0XHRcdFx0XHRcdFx0XHRcdCAgIH07XG5cdFx0XHRcdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0XHRcdFx0ICAgKTtcblx0XHRcdFx0fSlcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IHsgZmllbGRJZCwgZmlsdGVyVHlwZUlkIH0gPSBwYXJhbXM7XG5cblx0XHRcdFx0ZmlsdGVyVHlwZUlkLmlmUHJlc2VudCgoZnRJZDogRmlsdGVyVHlwZUlkKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5maWx0ZXJDb21tYW5kSW52b2tlci5hZGQoXG5cdFx0XHRcdFx0XHRmaWVsZElkLFxuXHRcdFx0XHRcdFx0ZnRJZCxcblx0XHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdFx0c3RydWN0dXJlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cbn1cbiJdfQ==