/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SummariesType } from '../summaries.type';
/**
 * @abstract
 * @template T, A
 */
export class SummariesCalculator {
    /**
     * @param {?} fields
     * @param {?} items
     * @return {?}
     */
    calculate(fields, items) {
        /** @type {?} */
        const filteredFields = fields.filter((/**
         * @param {?} field
         * @return {?}
         */
        (field) => this.forDataType(field.getDataType())));
        if (!filteredFields || filteredFields.length === 0 || items.length === 0) {
            return null;
        }
        /** @type {?} */
        let count = new Map();
        /** @type {?} */
        let distinct = new Map();
        // init
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getKey();
            count.set(key, 0);
            distinct.set(key, new Set());
            this.prepare(field);
        }));
        // calculate
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            filteredFields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                /** @type {?} */
                const key = field.getKey();
                /** @type {?} */
                const value = field.getValue(item);
                if (value !== null || value !== undefined || value !== '') {
                    if (field.isSummaries(SummariesType.COUNT)) {
                        /** @type {?} */
                        const countForField = count.get(key);
                        count.set(key, countForField + 1);
                    }
                    if (field.isSummaries(SummariesType.DISTINCT)) {
                        /** @type {?} */
                        const distinctSet = distinct.get(key);
                        distinctSet.add(value);
                    }
                }
                this.aggregate(field, value);
            }));
        }));
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            this.postCalculate(field, items);
        }));
        /** @type {?} */
        let summaries = new Map();
        filteredFields.forEach((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            /** @type {?} */
            const key = field.getKey();
            /** @type {?} */
            let aggregatedValues = this.generateAggregatedValues(field);
            if (field.isSummaries(SummariesType.COUNT)) {
                aggregatedValues.setCount(count.get(key));
            }
            if (field.isSummaries(SummariesType.DISTINCT)) {
                aggregatedValues.setDistinct((distinct.get(key)).size);
            }
            summaries.set(key, aggregatedValues);
        }));
        return summaries;
    }
}
if (false) {
    /**
     * @abstract
     * @param {?} dataType
     * @return {?}
     */
    SummariesCalculator.prototype.forDataType = function (dataType) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.prepare = function (field) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    SummariesCalculator.prototype.postCalculate = function (field, items) { };
    /**
     * @abstract
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    SummariesCalculator.prototype.aggregate = function (field, value) { };
    /**
     * @abstract
     * @param {?} field
     * @return {?}
     */
    SummariesCalculator.prototype.generateAggregatedValues = function (field) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmNhbGN1bGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdW1tYXJpZXMvY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFJbEQsTUFBTSxPQUFnQixtQkFBbUI7Ozs7OztJQVl4QyxTQUFTLENBQUMsTUFBb0IsRUFBRSxLQUE4Qjs7Y0FFdkQsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUM7UUFFN0YsSUFBSSxDQUFDLGNBQWMsSUFBSSxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN6RSxPQUFPLElBQUksQ0FBQztTQUNaOztZQUVHLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBa0I7O1lBQ3BDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBdUI7UUFFMUMsT0FBTztRQUNQLGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTs7a0JBRWpDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1lBRTFCLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztZQUU3QixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWTtRQUNaLEtBQUssQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFFeEMsY0FBYyxDQUFDLE9BQU87Ozs7WUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztzQkFFakMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O3NCQUN6QixLQUFLLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBRTdCLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLEVBQUU7b0JBRTFELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7OzhCQUNyQyxhQUFhLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztxQkFDbEM7b0JBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTs7OEJBQ3hDLFdBQVcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDckMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztxQkFDdkI7aUJBQ0Q7Z0JBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztRQUVILGNBQWMsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUV2QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUVsQyxDQUFDLEVBQUMsQ0FBQzs7WUFFQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFFekIsY0FBYyxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLEtBQVksRUFBRSxFQUFFOztrQkFFakMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2dCQUV0QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDO1lBRTNELElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQzNDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDMUM7WUFFRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUM5QyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkQ7WUFFRCxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxTQUFTLENBQUM7SUFDbEIsQ0FBQztDQUVEOzs7Ozs7O0lBckZBLG9FQUFrRDs7Ozs7O0lBRWxELDZEQUFxQzs7Ozs7OztJQUVyQywwRUFBMkU7Ozs7Ozs7SUFFM0Usc0VBQWlEOzs7Ozs7SUFFakQsOEVBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3VtbWFyaWVzVmFsdWVzIH0gZnJvbSAnLi9zdW1tYXJpZXMudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN1bW1hcmllc0NhbGN1bGF0b3I8VCwgQSBleHRlbmRzIFN1bW1hcmllc1ZhbHVlcz4ge1xuXG5cdGFic3RyYWN0IGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW47XG5cblx0YWJzdHJhY3QgcHJlcGFyZShmaWVsZDogRmllbGQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHBvc3RDYWxjdWxhdGUoZmllbGQ6IEZpZWxkLCBpdGVtczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiB2b2lkO1xuXG5cdGFic3RyYWN0IGFnZ3JlZ2F0ZShmaWVsZDogRmllbGQsIHZhbHVlOiBUKTogdm9pZDtcblxuXHRhYnN0cmFjdCBnZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogQTtcblxuXHRjYWxjdWxhdGUoZmllbGRzOiBBcnJheTxGaWVsZD4sIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IE1hcDxzdHJpbmcsIEE+IHtcblxuXHRcdGNvbnN0IGZpbHRlcmVkRmllbGRzID0gZmllbGRzLmZpbHRlcigoZmllbGQ6IEZpZWxkKSA9PiB0aGlzLmZvckRhdGFUeXBlKGZpZWxkLmdldERhdGFUeXBlKCkpKTtcblxuXHRcdGlmICghZmlsdGVyZWRGaWVsZHMgfHwgZmlsdGVyZWRGaWVsZHMubGVuZ3RoID09PSAwIHx8IGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXG5cdFx0bGV0IGNvdW50ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKSxcblx0XHRcdGRpc3RpbmN0ID0gbmV3IE1hcDxzdHJpbmcsIFNldDxzdHJpbmc+PigpO1xuXG5cdFx0Ly8gaW5pdFxuXHRcdGZpbHRlcmVkRmllbGRzLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xuXG5cdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdFx0Y291bnQuc2V0KGtleSwgMCk7XG5cdFx0XHRkaXN0aW5jdC5zZXQoa2V5LCBuZXcgU2V0KCkpO1xuXG5cdFx0XHR0aGlzLnByZXBhcmUoZmllbGQpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gY2FsY3VsYXRlXG5cdFx0aXRlbXMuZm9yRWFjaCgoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdFx0XHR2YWx1ZSA9IGZpZWxkLmdldFZhbHVlKGl0ZW0pO1xuXG5cdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdW5kZWZpbmVkIHx8IHZhbHVlICE9PSAnJykge1xuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuQ09VTlQpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb3VudEZvckZpZWxkID0gY291bnQuZ2V0KGtleSk7XG5cdFx0XHRcdFx0XHRjb3VudC5zZXQoa2V5LCBjb3VudEZvckZpZWxkICsgMSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRElTVElOQ1QpKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBkaXN0aW5jdFNldCA9IGRpc3RpbmN0LmdldChrZXkpO1xuXHRcdFx0XHRcdFx0ZGlzdGluY3RTZXQuYWRkKHZhbHVlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0aGlzLmFnZ3JlZ2F0ZShmaWVsZCwgdmFsdWUpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0dGhpcy5wb3N0Q2FsY3VsYXRlKGZpZWxkLCBpdGVtcyk7XG5cblx0XHR9KTtcblxuXHRcdGxldCBzdW1tYXJpZXMgPSBuZXcgTWFwKCk7XG5cblx0XHRmaWx0ZXJlZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogRmllbGQpID0+IHtcblxuXHRcdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRcdGxldCBhZ2dyZWdhdGVkVmFsdWVzID0gdGhpcy5nZW5lcmF0ZUFnZ3JlZ2F0ZWRWYWx1ZXMoZmllbGQpO1xuXG5cdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5DT1VOVCkpIHtcblx0XHRcdFx0YWdncmVnYXRlZFZhbHVlcy5zZXRDb3VudChjb3VudC5nZXQoa2V5KSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkRJU1RJTkNUKSkge1xuXHRcdFx0XHRhZ2dyZWdhdGVkVmFsdWVzLnNldERpc3RpbmN0KChkaXN0aW5jdC5nZXQoa2V5KSkuc2l6ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHN1bW1hcmllcy5zZXQoa2V5LCBhZ2dyZWdhdGVkVmFsdWVzKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiBzdW1tYXJpZXM7XG5cdH1cblxufVxuIl19