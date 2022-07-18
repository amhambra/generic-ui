import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/src/domain/field/data/data-type';
import { SummariesType } from '../../summaries.type';
export class BooleanSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    prepare(field) {
        const key = field.getKey();
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
            this.falsy.set(key, 0);
        }
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
        const booleanValue = value, // (value as any === 'true'),
        key = field.getKey(), truthyForField = this.truthy.get(key), falsyForField = this.falsy.get(key);
        if (booleanValue) {
            if (field.isSummaries(SummariesType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isSummaries(SummariesType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    }
    generateAggregatedValues(field) {
        const key = field.getKey();
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vYm9vbGVhbi9ib29sZWFuLXN1bW1hcmllcy5jYWxjdWxhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUNoRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLckQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG1CQUFxRDtJQUtwRztRQUNDLEtBQUssRUFBRSxDQUFDO1FBSlEsV0FBTSxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQ25DLFVBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUluRCxDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFrQjtRQUV6QixNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFM0IsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7UUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2QjtJQUNGLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBa0IsRUFBRSxLQUF3QjtJQUMxRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWtCLEVBQUUsS0FBYztRQUUzQyxNQUFNLFlBQVksR0FBRyxLQUFLLEVBQUUsNkJBQTZCO1FBQ3hELEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDckMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJDLElBQUksWUFBWSxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDekM7U0FDRDthQUFNO1lBQ04sSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNEO0lBRUYsQ0FBQztJQUVELHdCQUF3QixDQUFDLEtBQWtCO1FBRTFDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUzQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1bW1hcmllc0NhbGN1bGF0b3IgfSBmcm9tICcuLi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBCb29sZWFuU3VtbWFyaXplZFZhbHVlcyB9IGZyb20gJy4vYm9vbGVhbi1zdW1tYXJpemVkLnZhbHVlcyc7XG5cbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvc3JjL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9zcmMvZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxib29sZWFuLCBCb29sZWFuU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJ1dGh5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBmYWxzeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkRW50aXR5KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlRSVVRIWSkpIHtcblx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIDApO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkZBTFNZKSkge1xuXHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZEVudGl0eSwgaXRlbXM6IEFycmF5PEl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkRW50aXR5LCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYm9vbGVhblZhbHVlID0gdmFsdWUsIC8vICh2YWx1ZSBhcyBhbnkgPT09ICd0cnVlJyksXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHRydXRoeUZvckZpZWxkID0gdGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHRmYWxzeUZvckZpZWxkID0gdGhpcy5mYWxzeS5nZXQoa2V5KTtcblxuXHRcdGlmIChib29sZWFuVmFsdWUpIHtcblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlRSVVRIWSkpIHtcblx0XHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgdHJ1dGh5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRkFMU1kpKSB7XG5cdFx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgZmFsc3lGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZEVudGl0eSk6IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuU3VtbWFyaXplZFZhbHVlcyhcblx0XHRcdHRoaXMudHJ1dGh5LmdldChrZXkpLFxuXHRcdFx0dGhpcy5mYWxzeS5nZXQoa2V5KVxuXHRcdCk7XG5cdH1cblxufVxuIl19