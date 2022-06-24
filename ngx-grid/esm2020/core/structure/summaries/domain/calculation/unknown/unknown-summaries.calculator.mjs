import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../../field/domain/field/data/data-type';
export class UnknownSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.UNKNOWN;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new UnknownSummarizedValues();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2RvbWFpbi9jYWxjdWxhdGlvbi91bmtub3duL3Vua25vd24tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBS3pFLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBaUQ7SUFFaEc7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWtCO0lBQzFCLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBa0IsRUFBRSxLQUE4QjtJQUNoRSxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWtCLEVBQUUsS0FBVTtJQUN4QyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBa0I7UUFDMUMsT0FBTyxJQUFJLHVCQUF1QixFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFVua25vd25TdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi91bmtub3duLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS10eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGRFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4vZmllbGQvZmllbGQuZW50aXR5JztcblxuXG5leHBvcnQgY2xhc3MgVW5rbm93blN1bW1hcmllc0NhbGN1bGF0b3IgZXh0ZW5kcyBTdW1tYXJpZXNDYWxjdWxhdG9yPGFueSwgVW5rbm93blN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRGF0YVR5cGUoZGF0YVR5cGU6IERhdGFUeXBlKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGRhdGFUeXBlID09PSBEYXRhVHlwZS5VTktOT1dOO1xuXHR9XG5cblx0cHJlcGFyZShmaWVsZDogRmllbGRFbnRpdHkpOiB2b2lkIHtcblx0fVxuXG5cdHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkRW50aXR5LCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkIHtcblx0fVxuXG5cdGFnZ3JlZ2F0ZShmaWVsZDogRmllbGRFbnRpdHksIHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGRFbnRpdHkpOiBVbmtub3duU3VtbWFyaXplZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBVbmtub3duU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==