/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ActiveColumnEntity } from './active-column.entity';
var ActiveColumnEntityConverter = /** @class */ (function () {
    function ActiveColumnEntityConverter() {
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    ActiveColumnEntityConverter.prototype.convertMany = /**
     * @param {?} entities
     * @return {?}
     */
    function (entities) {
        var _this = this;
        return entities.map((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return _this.convert(e); }));
    };
    /**
     * @param {?} entity
     * @return {?}
     */
    ActiveColumnEntityConverter.prototype.convert = /**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        return new ActiveColumnEntity(entity.getColumnId(), entity.getField(), entity.getHeader(), entity.getView(), entity.getColumnConfig());
    };
    return ActiveColumnEntityConverter;
}());
export { ActiveColumnEntityConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvY29tcG9zaXRpb24vZG9tYWluL2NvbW1hbmQvY29sdW1uL2FjdGl2ZS9hY3RpdmUtY29sdW1uLmVudGl0eS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzVEO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7SUFoQkEsaURBQVc7Ozs7SUFBWCxVQUFZLFFBQTZCO1FBQXpDLGlCQUVDO1FBREEsT0FBTyxRQUFRLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FBQztJQUMzQyxDQUFDOzs7OztJQUVELDZDQUFPOzs7O0lBQVAsVUFBUSxNQUFvQjtRQUUzQixPQUFPLElBQUksa0JBQWtCLENBQzVCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDcEIsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUNqQixNQUFNLENBQUMsU0FBUyxFQUFFLEVBQ2xCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFDaEIsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUN4QixDQUFDO0lBQ0gsQ0FBQztJQUdGLGtDQUFDO0FBQUQsQ0FBQyxBQWxCRCxJQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2ZUNvbHVtbkVudGl0eSB9IGZyb20gJy4vYWN0aXZlLWNvbHVtbi5lbnRpdHknO1xuaW1wb3J0IHsgQ29sdW1uRW50aXR5IH0gZnJvbSAnLi4vY29sdW1uLmVudGl0eSc7XG5cbmV4cG9ydCBjbGFzcyBBY3RpdmVDb2x1bW5FbnRpdHlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnRNYW55KGVudGl0aWVzOiBBcnJheTxDb2x1bW5FbnRpdHk+KTogQXJyYXk8QWN0aXZlQ29sdW1uRW50aXR5PiB7XG5cdFx0cmV0dXJuIGVudGl0aWVzLm1hcChlID0+IHRoaXMuY29udmVydChlKSk7XG5cdH1cblxuXHRjb252ZXJ0KGVudGl0eTogQ29sdW1uRW50aXR5KTogQWN0aXZlQ29sdW1uRW50aXR5IHtcblxuXHRcdHJldHVybiBuZXcgQWN0aXZlQ29sdW1uRW50aXR5KFxuXHRcdFx0ZW50aXR5LmdldENvbHVtbklkKCksXG5cdFx0XHRlbnRpdHkuZ2V0RmllbGQoKSxcblx0XHRcdGVudGl0eS5nZXRIZWFkZXIoKSxcblx0XHRcdGVudGl0eS5nZXRWaWV3KCksXG5cdFx0XHRlbnRpdHkuZ2V0Q29sdW1uQ29uZmlnKClcblx0XHQpO1xuXHR9XG5cblxufVxuIl19