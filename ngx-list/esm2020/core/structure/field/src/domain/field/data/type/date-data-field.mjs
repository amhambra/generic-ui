import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../summaries/src/domain/summaries.type';
export class DateDataField extends DataField {
    constructor(accessor, matchers, summariesConfig) {
        super(accessor, DataType.DATE, matchers, summariesConfig);
    }
    assignDefaultSummaries() {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    }
    assignPossibleSummaries() {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    }
    search(item, searchPhrase) {
        return false;
    }
    sort(dateOne, dateTwo) {
        return dateOne - dateTwo;
    }
    filter(value, filterPhrase) {
        return false;
    }
    equals(item, value) {
        return this.getValue(item).getTime() === value.getTime();
    }
    getDisplayValue(item) {
        return item.toDateString();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvdHlwZS9kYXRlLWRhdGEtZmllbGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUt0RixNQUFNLE9BQU8sYUFBYyxTQUFRLFNBQWU7SUFFakQsWUFBWSxRQUFhLEVBQ3RCLFFBQXVCLEVBQ3ZCLGVBQXVDO1FBQ3pDLEtBQUssQ0FDSixRQUFRLEVBQ1IsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLEVBQ1IsZUFBZSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHNCQUFzQjtRQUNyQixPQUFPLENBQUMsQ0FBQztRQUNULCtCQUErQjtRQUMvQiwyQkFBMkI7SUFDNUIsQ0FBQztJQUVELHVCQUF1QjtRQUN0QixPQUFPLGFBQWEsQ0FBQyxLQUFLO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFnQixFQUFFLFlBQW9CO1FBQzVDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFhLEVBQUUsT0FBYTtRQUNoQyxPQUFPLE9BQWMsR0FBSSxPQUFlLENBQUM7SUFDMUMsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFXLEVBQUUsWUFBa0I7UUFDckMsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWdCLEVBQUUsS0FBVztRQUNuQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFRCxlQUFlLENBQUMsSUFBVTtRQUN6QixPQUFPLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM1QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhRmllbGQgfSBmcm9tICcuLi9kYXRhLWZpZWxkJztcbmltcG9ydCB7IENvbHVtblN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL3NyYy9hcGkvY29sdW1uL2NvbHVtbi1zdW1tYXJpZXMuY29uZmlnJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vZGF0YS10eXBlJztcbmltcG9ydCB7IFN1bW1hcmllc1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zdW1tYXJpZXMvc3JjL2RvbWFpbi9zdW1tYXJpZXMudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vLi4vLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc291cmNlL3NyYy9kb21haW4vaXRlbS9pdGVtLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIERhdGVEYXRhRmllbGQgZXh0ZW5kcyBEYXRhRmllbGQ8RGF0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGFjY2Vzc29yOiBhbnksXG5cdFx0XHRcdG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzLFxuXHRcdFx0XHRzdW1tYXJpZXNDb25maWc/OiBDb2x1bW5TdW1tYXJpZXNDb25maWcpIHtcblx0XHRzdXBlcihcblx0XHRcdGFjY2Vzc29yLFxuXHRcdFx0RGF0YVR5cGUuREFURSxcblx0XHRcdG1hdGNoZXJzLFxuXHRcdFx0c3VtbWFyaWVzQ29uZmlnKTtcblx0fVxuXG5cdGFzc2lnbkRlZmF1bHRTdW1tYXJpZXMoKTogU3VtbWFyaWVzVHlwZSB7XG5cdFx0cmV0dXJuIDA7XG5cdFx0Ly8gcmV0dXJuIFN1bW1hcmllc1R5cGUuQ09VTlQgfFxuXHRcdC8vIFx0U3VtbWFyaWVzVHlwZS5ESVNUSU5DVDtcblx0fVxuXG5cdGFzc2lnblBvc3NpYmxlU3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHRcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRzZWFyY2goaXRlbTogSXRlbUVudGl0eSwgc2VhcmNoUGhyYXNlOiBzdHJpbmcpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzb3J0KGRhdGVPbmU6IERhdGUsIGRhdGVUd286IERhdGUpOiBudW1iZXIge1xuXHRcdHJldHVybiBkYXRlT25lIGFzIGFueSAtIChkYXRlVHdvIGFzIGFueSk7XG5cdH1cblxuXHRmaWx0ZXIodmFsdWU6IERhdGUsIGZpbHRlclBocmFzZTogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGVxdWFscyhpdGVtOiBJdGVtRW50aXR5LCB2YWx1ZTogRGF0ZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldFZhbHVlKGl0ZW0pLmdldFRpbWUoKSA9PT0gdmFsdWUuZ2V0VGltZSgpO1xuXHR9XG5cblx0Z2V0RGlzcGxheVZhbHVlKGl0ZW06IERhdGUpOiBzdHJpbmcge1xuXHRcdHJldHVybiBpdGVtLnRvRGF0ZVN0cmluZygpO1xuXHR9XG5cbn1cbiJdfQ==