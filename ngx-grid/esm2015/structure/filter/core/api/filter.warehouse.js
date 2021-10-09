/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterEnabledArchive } from './read/filter-enabled.archive';
import { QuickFilterEnabledArchive } from './read/quick-filter-enabled.archive';
import { FilterTypeArchive } from './type/filter-type.archive';
import { ActiveFilterArchive } from './active/active-filter.archive';
import { UniqueValuesArchive } from './unique/unique-values.archive';
export class FilterWarehouse {
    /**
     * @param {?} filterEnabledArchive
     * @param {?} structureQuickFilterRepository
     * @param {?} filterTypeArchive
     * @param {?} uniqueValuesArchive
     * @param {?} activeFilterArchive
     */
    constructor(filterEnabledArchive, structureQuickFilterRepository, filterTypeArchive, uniqueValuesArchive, activeFilterArchive) {
        this.filterEnabledArchive = filterEnabledArchive;
        this.structureQuickFilterRepository = structureQuickFilterRepository;
        this.filterTypeArchive = filterTypeArchive;
        this.uniqueValuesArchive = uniqueValuesArchive;
        this.activeFilterArchive = activeFilterArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilteringEnabled(structureId) {
        return this.filterEnabledArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onQuickFiltersEnabled(structureId) {
        return this.structureQuickFilterRepository.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onFilterTypes(structureId) {
        return this.filterTypeArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onActiveFilters(structureId) {
        return this.activeFilterArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onUniqueValues(structureId) {
        return this.uniqueValuesArchive.on(structureId);
    }
}
FilterWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterWarehouse.ctorParameters = () => [
    { type: FilterEnabledArchive },
    { type: QuickFilterEnabledArchive },
    { type: FilterTypeArchive },
    { type: UniqueValuesArchive },
    { type: ActiveFilterArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.filterEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.structureQuickFilterRepository;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.filterTypeArchive;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.uniqueValuesArchive;
    /**
     * @type {?}
     * @private
     */
    FilterWarehouse.prototype.activeFilterArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS9maWx0ZXIud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRWhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXJFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSXJFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQUUzQixZQUE2QixvQkFBMEMsRUFDbkQsOEJBQXlELEVBQ3pELGlCQUFvQyxFQUNwQyxtQkFBd0MsRUFDeEMsbUJBQXdDO1FBSi9CLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDbkQsbUNBQThCLEdBQTlCLDhCQUE4QixDQUEyQjtRQUN6RCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUM1RCxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLFdBQXdCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxXQUF3QjtRQUNyQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBd0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsY0FBYyxDQUFDLFdBQXdCO1FBQ3RDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7WUE1QkQsVUFBVTs7OztZQVhGLG9CQUFvQjtZQUNwQix5QkFBeUI7WUFFekIsaUJBQWlCO1lBS2pCLG1CQUFtQjtZQUZuQixtQkFBbUI7Ozs7Ozs7SUFRZiwrQ0FBMkQ7Ozs7O0lBQ3BFLHlEQUEwRTs7Ozs7SUFDMUUsNENBQXFEOzs7OztJQUNyRCw4Q0FBeUQ7Ozs7O0lBQ3pELDhDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmlsdGVyRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuL3JlYWQvZmlsdGVyLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi9yZWFkL3F1aWNrLWZpbHRlci1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUFyY2hpdmUgfSBmcm9tICcuL3R5cGUvZmlsdGVyLXR5cGUuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlTWFwIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLW1hcCc7XG5pbXBvcnQgeyBBY3RpdmVGaWx0ZXJSZWFkTW9kZWwgfSBmcm9tICcuL2FjdGl2ZS9hY3RpdmUtZmlsdGVyLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgQWN0aXZlRmlsdGVyQXJjaGl2ZSB9IGZyb20gJy4vYWN0aXZlL2FjdGl2ZS1maWx0ZXIuYXJjaGl2ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzQXJjaGl2ZSB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZXMuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlcldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWx0ZXJFbmFibGVkQXJjaGl2ZTogRmlsdGVyRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5OiBRdWlja0ZpbHRlckVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVBcmNoaXZlOiBGaWx0ZXJUeXBlQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNBcmNoaXZlOiBVbmlxdWVWYWx1ZXNBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFjdGl2ZUZpbHRlckFyY2hpdmU6IEFjdGl2ZUZpbHRlckFyY2hpdmUpIHtcblx0fVxuXG5cdG9uRmlsdGVyaW5nRW5hYmxlZChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJFbmFibGVkQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblF1aWNrRmlsdGVyc0VuYWJsZWQoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlUXVpY2tGaWx0ZXJSZXBvc2l0b3J5Lm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uRmlsdGVyVHlwZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxGaWx0ZXJUeXBlTWFwPiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0b25BY3RpdmVGaWx0ZXJzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxBY3RpdmVGaWx0ZXJSZWFkTW9kZWw+PiB7XG5cdFx0cmV0dXJuIHRoaXMuYWN0aXZlRmlsdGVyQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvblVuaXF1ZVZhbHVlcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFVuaXF1ZVZhbHVlc1JlYWRNb2RlbD4ge1xuXHRcdHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0FyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==