/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DataField } from '../data-field';
import { DataType } from '../data-type';
import { SummariesType } from '../../../../../../core/domain/summaries/summaries.type';
var DateDataField = /** @class */ (function (_super) {
    tslib_1.__extends(DateDataField, _super);
    function DateDataField(accessor, matchers, summariesConfig) {
        return _super.call(this, accessor, DataType.DATE, matchers, summariesConfig) || this;
    }
    /**
     * @return {?}
     */
    DateDataField.prototype.assignDefaultSummaries = /**
     * @return {?}
     */
    function () {
        return 0;
        // return SummariesType.COUNT |
        // 	SummariesType.DISTINCT;
    };
    /**
     * @return {?}
     */
    DateDataField.prototype.assignPossibleSummaries = /**
     * @return {?}
     */
    function () {
        return SummariesType.COUNT |
            SummariesType.DISTINCT;
    };
    /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    DateDataField.prototype.search = /**
     * @param {?} item
     * @param {?} searchPhrase
     * @return {?}
     */
    function (item, searchPhrase) {
        return false;
    };
    /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    DateDataField.prototype.sort = /**
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    function (dateOne, dateTwo) {
        return (/** @type {?} */ (dateOne)) - ((/** @type {?} */ (dateTwo)));
    };
    /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    DateDataField.prototype.filter = /**
     * @param {?} value
     * @param {?} filterPhrase
     * @return {?}
     */
    function (value, filterPhrase) {
        return false;
    };
    /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    DateDataField.prototype.equals = /**
     * @param {?} item
     * @param {?} value
     * @return {?}
     */
    function (item, value) {
        return this.getValue(item).getTime() === value.getTime();
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DateDataField.prototype.getDisplayValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        return item.toDateString();
    };
    return DateDataField;
}(DataField));
export { DateDataField };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1kYXRhLWZpZWxkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZGF0YS90eXBlL2RhdGUtZGF0YS1maWVsZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFLdkY7SUFBbUMseUNBQWU7SUFFakQsdUJBQVksUUFBYSxFQUN0QixRQUF1QixFQUN2QixlQUF1QztlQUN6QyxrQkFDQyxRQUFRLEVBQ1IsUUFBUSxDQUFDLElBQUksRUFDYixRQUFRLEVBQ1IsZUFBZSxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCw4Q0FBc0I7OztJQUF0QjtRQUNDLE9BQU8sQ0FBQyxDQUFDO1FBQ1QsK0JBQStCO1FBQy9CLDJCQUEyQjtJQUM1QixDQUFDOzs7O0lBRUQsK0NBQXVCOzs7SUFBdkI7UUFDQyxPQUFPLGFBQWEsQ0FBQyxLQUFLO1lBQ3pCLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQsOEJBQU07Ozs7O0lBQU4sVUFBTyxJQUFzQixFQUFFLFlBQW9CO1FBQ2xELE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7O0lBRUQsNEJBQUk7Ozs7O0lBQUosVUFBSyxPQUFhLEVBQUUsT0FBYTtRQUNoQyxPQUFPLG1CQUFBLE9BQU8sRUFBTyxHQUFHLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFFRCw4QkFBTTs7Ozs7SUFBTixVQUFPLEtBQVcsRUFBRSxZQUFrQjtRQUNyQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7Ozs7OztJQUVELDhCQUFNOzs7OztJQUFOLFVBQU8sSUFBc0IsRUFBRSxLQUFXO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUQsQ0FBQzs7Ozs7SUFFRCx1Q0FBZTs7OztJQUFmLFVBQWdCLElBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVGLG9CQUFDO0FBQUQsQ0FBQyxBQTNDRCxDQUFtQyxTQUFTLEdBMkMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGFGaWVsZCB9IGZyb20gJy4uL2RhdGEtZmllbGQnO1xuaW1wb3J0IHsgQ29sdW1uU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4tc3VtbWFyaWVzLmNvbmZpZyc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3VtbWFyaWVzL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRlRGF0YUZpZWxkIGV4dGVuZHMgRGF0YUZpZWxkPERhdGU+IHtcblxuXHRjb25zdHJ1Y3RvcihhY2Nlc3NvcjogYW55LFxuXHRcdFx0XHRtYXRjaGVyczogRmllbGRNYXRjaGVycyxcblx0XHRcdFx0c3VtbWFyaWVzQ29uZmlnPzogQ29sdW1uU3VtbWFyaWVzQ29uZmlnKSB7XG5cdFx0c3VwZXIoXG5cdFx0XHRhY2Nlc3Nvcixcblx0XHRcdERhdGFUeXBlLkRBVEUsXG5cdFx0XHRtYXRjaGVycyxcblx0XHRcdHN1bW1hcmllc0NvbmZpZyk7XG5cdH1cblxuXHRhc3NpZ25EZWZhdWx0U3VtbWFyaWVzKCk6IFN1bW1hcmllc1R5cGUge1xuXHRcdHJldHVybiAwO1xuXHRcdC8vIHJldHVybiBTdW1tYXJpZXNUeXBlLkNPVU5UIHxcblx0XHQvLyBcdFN1bW1hcmllc1R5cGUuRElTVElOQ1Q7XG5cdH1cblxuXHRhc3NpZ25Qb3NzaWJsZVN1bW1hcmllcygpOiBTdW1tYXJpZXNUeXBlIHtcblx0XHRyZXR1cm4gU3VtbWFyaWVzVHlwZS5DT1VOVCB8XG5cdFx0XHRTdW1tYXJpZXNUeXBlLkRJU1RJTkNUO1xuXHR9XG5cblx0c2VhcmNoKGl0ZW06IE9yaWdpbkl0ZW1FbnRpdHksIHNlYXJjaFBocmFzZTogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c29ydChkYXRlT25lOiBEYXRlLCBkYXRlVHdvOiBEYXRlKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gZGF0ZU9uZSBhcyBhbnkgLSAoZGF0ZVR3byBhcyBhbnkpO1xuXHR9XG5cblx0ZmlsdGVyKHZhbHVlOiBEYXRlLCBmaWx0ZXJQaHJhc2U6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRlcXVhbHMoaXRlbTogT3JpZ2luSXRlbUVudGl0eSwgdmFsdWU6IERhdGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRWYWx1ZShpdGVtKS5nZXRUaW1lKCkgPT09IHZhbHVlLmdldFRpbWUoKTtcblx0fVxuXG5cdGdldERpc3BsYXlWYWx1ZShpdGVtOiBEYXRlKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gaXRlbS50b0RhdGVTdHJpbmcoKTtcblx0fVxuXG59XG4iXX0=