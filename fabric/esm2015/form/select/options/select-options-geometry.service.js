/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { SelectOptionsCords } from './select-options.cords';
import { ReplaySubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { SelectOptionsGeometry } from './select-geometry';
export class SelectOptionsGeometryService {
    /**
     * @param {?} platformId
     */
    constructor(platformId) {
        this.platformId = platformId;
        this.selectOptionsCords$ = new ReplaySubject(1);
    }
    /**
     * @return {?}
     */
    onSelectOptionsCords() {
        return this.selectOptionsCords$.asObservable();
    }
    /**
     * @param {?} selectContainerRef
     * @return {?}
     */
    setGeometry(selectContainerRef) {
        this.selectContainerGeometry = new SelectOptionsGeometry(selectContainerRef);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    nextCords(element) {
        if (isPlatformBrowser(this.platformId)) {
            /** @type {?} */
            const selectOptionsCords = new SelectOptionsCords(element, this.selectContainerGeometry, window);
            this.selectOptionsCords$.next(selectOptionsCords);
        }
    }
}
SelectOptionsGeometryService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SelectOptionsGeometryService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectOptionsGeometryService.prototype.selectContainerGeometry;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsGeometryService.prototype.selectOptionsCords$;
    /**
     * @type {?}
     * @private
     */
    SelectOptionsGeometryService.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2ZhYnJpYy8iLCJzb3VyY2VzIjpbImZvcm0vc2VsZWN0L29wdGlvbnMvc2VsZWN0LW9wdGlvbnMtZ2VvbWV0cnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHMUQsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQU14QyxZQUFrRCxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUZoRCx3QkFBbUIsR0FBRyxJQUFJLGFBQWEsQ0FBcUIsQ0FBQyxDQUFDLENBQUM7SUFHaEYsQ0FBQzs7OztJQUVELG9CQUFvQjtRQUNuQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxrQkFBOEI7UUFDekMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUkscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxPQUFtQjtRQUU1QixJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7a0JBQ2pDLGtCQUFrQixHQUN2QixJQUFJLGtCQUFrQixDQUNyQixPQUFPLEVBQ1AsSUFBSSxDQUFDLHVCQUF1QixFQUM1QixNQUFNLENBQUM7WUFFVCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDbEQ7SUFDRixDQUFDOzs7WUE3QkQsVUFBVTs7Ozs0Q0FPRyxNQUFNLFNBQUMsV0FBVzs7Ozs7OztJQUovQiwrREFBdUQ7Ozs7O0lBRXZELDJEQUFnRjs7Ozs7SUFFcEUsa0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VsZWN0T3B0aW9uc0NvcmRzIH0gZnJvbSAnLi9zZWxlY3Qtb3B0aW9ucy5jb3Jkcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RPcHRpb25zR2VvbWV0cnkgfSBmcm9tICcuL3NlbGVjdC1nZW9tZXRyeSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RPcHRpb25zR2VvbWV0cnlTZXJ2aWNlIHtcblxuXHRwcml2YXRlIHNlbGVjdENvbnRhaW5lckdlb21ldHJ5OiBTZWxlY3RPcHRpb25zR2VvbWV0cnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RPcHRpb25zQ29yZHMkID0gbmV3IFJlcGxheVN1YmplY3Q8U2VsZWN0T3B0aW9uc0NvcmRzPigxKTtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHJlYWRvbmx5IHBsYXRmb3JtSWQ6IGFueSkge1xuXHR9XG5cblx0b25TZWxlY3RPcHRpb25zQ29yZHMoKTogT2JzZXJ2YWJsZTxTZWxlY3RPcHRpb25zQ29yZHM+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RPcHRpb25zQ29yZHMkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0R2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5zZWxlY3RDb250YWluZXJHZW9tZXRyeSA9IG5ldyBTZWxlY3RPcHRpb25zR2VvbWV0cnkoc2VsZWN0Q29udGFpbmVyUmVmKTtcblx0fVxuXG5cdG5leHRDb3JkcyhlbGVtZW50OiBFbGVtZW50UmVmKTogdm9pZCB7XG5cblx0XHRpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuXHRcdFx0Y29uc3Qgc2VsZWN0T3B0aW9uc0NvcmRzID1cblx0XHRcdFx0bmV3IFNlbGVjdE9wdGlvbnNDb3Jkcyhcblx0XHRcdFx0XHRlbGVtZW50LFxuXHRcdFx0XHRcdHRoaXMuc2VsZWN0Q29udGFpbmVyR2VvbWV0cnksXG5cdFx0XHRcdFx0d2luZG93KTtcblxuXHRcdFx0dGhpcy5zZWxlY3RPcHRpb25zQ29yZHMkLm5leHQoc2VsZWN0T3B0aW9uc0NvcmRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==