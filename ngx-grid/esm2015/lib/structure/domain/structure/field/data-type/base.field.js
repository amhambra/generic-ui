/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BaseField {
    /**
     * @protected
     * @param {?} id
     * @param {?} accessor
     * @param {?} dataType
     * @param {?} matchers
     */
    constructor(id, accessor, dataType, matchers) {
        this.id = id;
        this.accessor = accessor;
        this.dataType = dataType;
        this.matchers = matchers;
        if (typeof accessor === 'string') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => entity.getData()[accessor]);
        }
        else if (typeof accessor === 'function') {
            this.accessorMethod = (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => accessor(entity.getData()));
        }
    }
    /**
     * @return {?}
     */
    getId() {
        return this.id;
    }
    /**
     * @return {?}
     */
    getKey() {
        return this.getId().getId();
    }
    /**
     * @return {?}
     */
    getDataType() {
        return this.dataType;
    }
    /**
     * @return {?}
     */
    getAccessor() {
        return this.accessor;
    }
    /**
     * @return {?}
     */
    getAccessorMethod() {
        return this.accessorMethod;
    }
    /**
     * @return {?}
     */
    getMatchers() {
        return this.matchers;
    }
    /**
     * @return {?}
     */
    getSearchAccessorMethod() {
        /** @type {?} */
        let matcher;
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} m
         * @return {?}
         */
        (m) => {
            matcher = m;
        }));
        if (matcher) {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                /** @type {?} */
                const val = this.accessorMethod(entity);
                return matcher(val);
            });
        }
        else {
            return (/**
             * @param {?} entity
             * @return {?}
             */
            (entity) => {
                return this.accessorMethod(entity);
            });
        }
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getValue(entity) {
        return this.accessorMethod(entity);
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSortValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSortMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
    /**
     * @param {?} entity
     * @return {?}
     */
    getSearchValue(entity) {
        /** @type {?} */
        let value = this.accessorMethod(entity);
        this.matchers
            .getSearchMatcher()
            .ifPresent((/**
         * @param {?} matcher
         * @return {?}
         */
        (matcher) => {
            value = matcher(value);
        }));
        return value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.id;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessor;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.dataType;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.accessorMethod;
    /**
     * @type {?}
     * @private
     */
    BaseField.prototype.matchers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5maWVsZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2ZpZWxkL2RhdGEtdHlwZS9iYXNlLmZpZWxkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFNQSxNQUFNLE9BQWdCLFNBQVM7Ozs7Ozs7O0lBYTlCLFlBQXNCLEVBQVcsRUFDMUIsUUFBYSxFQUNiLFFBQWtCLEVBQ2xCLFFBQXVCO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLGNBQWM7Ozs7WUFBRyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO1NBQy9FO2FBQU0sSUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7WUFDMUMsSUFBSSxDQUFDLGNBQWM7Ozs7WUFBRyxDQUFDLE1BQXdCLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQSxDQUFDO1NBQy9FO0lBRUYsQ0FBQzs7OztJQUVELEtBQUs7UUFDSixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVELE1BQU07UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsaUJBQWlCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsV0FBVztRQUNWLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsdUJBQXVCOztZQUVsQixPQUF3QjtRQUU1QixJQUFJLENBQUMsUUFBUTthQUNYLGdCQUFnQixFQUFFO2FBQ2xCLFNBQVM7Ozs7UUFBQyxDQUFDLENBQW1CLEVBQUUsRUFBRTtZQUNsQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxFQUFDLENBQUM7UUFFSixJQUFJLE9BQU8sRUFBRTtZQUNaOzs7O1lBQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRTs7c0JBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixDQUFDLEVBQUM7U0FDRjthQUFNO1lBQ047Ozs7WUFBTyxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDO1NBQ0Y7SUFDRixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxNQUF3QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsTUFBd0I7O1lBQ2hDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsUUFBUTthQUNYLGNBQWMsRUFBRTthQUNoQixTQUFTOzs7O1FBQUMsQ0FBQyxPQUF5QixFQUFFLEVBQUU7WUFDeEMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QixDQUFDLEVBQUMsQ0FBQztRQUVKLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBd0I7O1lBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUV2QyxJQUFJLENBQUMsUUFBUTthQUNYLGdCQUFnQixFQUFFO2FBQ2xCLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQXlCLEVBQUUsRUFBRTtZQUN4QyxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0NBR0Q7Ozs7OztJQXZHQSx1QkFBNkI7Ozs7O0lBRzdCLDZCQUF3Qzs7Ozs7SUFFeEMsNkJBQW9DOzs7OztJQUVwQyxtQ0FBbUU7Ozs7O0lBRW5FLDZCQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuL2ZpZWxkLmlkJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5pbXBvcnQgeyBGaWVsZE1hdGNoZXJzIH0gZnJvbSAnLi4vbWF0Y2hlci9maWVsZC5tYXRjaGVycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmllbGQge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaWQ6IEZpZWxkSWQ7XG5cblx0Ly8gVE9ET1xuXHRwcml2YXRlIHJlYWRvbmx5IGFjY2Vzc29yOiBzdHJpbmcgfCBhbnk7IC8vKHJhd0RhdGE6IGFueSkgPT4gYW55O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGF0YVR5cGU6IERhdGFUeXBlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWNjZXNzb3JNZXRob2Q6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXJzOiBGaWVsZE1hdGNoZXJzO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihpZDogRmllbGRJZCxcblx0XHRcdFx0XHRcdCAgYWNjZXNzb3I6IGFueSxcblx0XHRcdFx0XHRcdCAgZGF0YVR5cGU6IERhdGFUeXBlLFxuXHRcdFx0XHRcdFx0ICBtYXRjaGVyczogRmllbGRNYXRjaGVycykge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmFjY2Vzc29yID0gYWNjZXNzb3I7XG5cdFx0dGhpcy5kYXRhVHlwZSA9IGRhdGFUeXBlO1xuXHRcdHRoaXMubWF0Y2hlcnMgPSBtYXRjaGVycztcblxuXHRcdGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLmFjY2Vzc29yTWV0aG9kID0gKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4gZW50aXR5LmdldERhdGEoKVthY2Nlc3Nvcl07XG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgYWNjZXNzb3IgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMuYWNjZXNzb3JNZXRob2QgPSAoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiBhY2Nlc3NvcihlbnRpdHkuZ2V0RGF0YSgpKTtcblx0XHR9XG5cblx0fVxuXG5cdGdldElkKCk6IEZpZWxkSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0S2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS5nZXRJZCgpO1xuXHR9XG5cblx0Z2V0RGF0YVR5cGUoKTogRGF0YVR5cGUge1xuXHRcdHJldHVybiB0aGlzLmRhdGFUeXBlO1xuXHR9XG5cblx0Z2V0QWNjZXNzb3IoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5hY2Nlc3Nvcjtcblx0fVxuXG5cdGdldEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2Q7XG5cdH1cblxuXHRnZXRNYXRjaGVycygpOiBGaWVsZE1hdGNoZXJzIHtcblx0XHRyZXR1cm4gdGhpcy5tYXRjaGVycztcblx0fVxuXG5cdGdldFNlYXJjaEFjY2Vzc29yTWV0aG9kKCk6IChlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IGFueSB7XG5cblx0XHRsZXQgbWF0Y2hlcjogKGk6IGFueSkgPT4gYW55O1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobTogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHRtYXRjaGVyID0gbTtcblx0XHRcdH0pO1xuXG5cdFx0aWYgKG1hdGNoZXIpIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdGNvbnN0IHZhbCA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0XHRcdFx0cmV0dXJuIG1hdGNoZXIodmFsKTtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAoZW50aXR5KSA9PiB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFjY2Vzc29yTWV0aG9kKGVudGl0eSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdGdldFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblx0fVxuXG5cdGdldFNvcnRWYWx1ZShlbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpOiBhbnkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuYWNjZXNzb3JNZXRob2QoZW50aXR5KTtcblxuXHRcdHRoaXMubWF0Y2hlcnNcblx0XHRcdC5nZXRTb3J0TWF0Y2hlcigpXG5cdFx0XHQuaWZQcmVzZW50KChtYXRjaGVyOiBGaWVsZE1hdGNoZXJUeXBlKSA9PiB7XG5cdFx0XHRcdHZhbHVlID0gbWF0Y2hlcih2YWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGdldFNlYXJjaFZhbHVlKGVudGl0eTogT3JpZ2luSXRlbUVudGl0eSk6IGFueSB7XG5cdFx0bGV0IHZhbHVlID0gdGhpcy5hY2Nlc3Nvck1ldGhvZChlbnRpdHkpO1xuXG5cdFx0dGhpcy5tYXRjaGVyc1xuXHRcdFx0LmdldFNlYXJjaE1hdGNoZXIoKVxuXHRcdFx0LmlmUHJlc2VudCgobWF0Y2hlcjogRmllbGRNYXRjaGVyVHlwZSkgPT4ge1xuXHRcdFx0XHR2YWx1ZSA9IG1hdGNoZXIodmFsdWUpO1xuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXG59XG4iXX0=