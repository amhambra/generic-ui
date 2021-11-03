import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { InlineDialogCords } from './inline-dialog-cords';
export class InlineDialogGeometryService {
    constructor(platformId) {
        this.platformId = platformId;
        this.inlineDialogState$ = new Subject();
    }
    observeInlineDialogCords() {
        return this.inlineDialogState$.asObservable();
    }
    changeGeometry(inlineDialogRef) {
        this.inlineDialogGeometry = inlineDialogRef;
    }
    getInlineDialogCords(invokerElementRef, placement, offset) {
        if (isPlatformBrowser(this.platformId)) {
            const inlineDialogCords = new InlineDialogCords(invokerElementRef, this.inlineDialogGeometry, window, placement, offset);
            this.inlineDialogState$.next(inlineDialogCords);
        }
    }
}
InlineDialogGeometryService.decorators = [
    { type: Injectable }
];
InlineDialogGeometryService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWlubGluZS1kaWFsb2ctZ2VvbWV0cnkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9tb2RhbC9pbmxpbmUtZGlhbG9nL2ZhYnJpYy1pbmxpbmUtZGlhbG9nLWdlb21ldHJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLMUQsTUFBTSxPQUFPLDJCQUEyQjtJQUt2QyxZQUF5QyxVQUFlO1FBQWYsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUZ2Qyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBcUIsQ0FBQztJQUd2RSxDQUFDO0lBRUQsd0JBQXdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxjQUFjLENBQUMsZUFBMkI7UUFDekMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLGVBQWUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsaUJBQTZCLEVBQUUsU0FBMkIsRUFBRSxNQUFlO1FBRS9GLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0saUJBQWlCLEdBQ3RCLElBQUksaUJBQWlCLENBQ3BCLGlCQUFpQixFQUNqQixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxDQUFDLENBQUM7WUFFVixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDaEQ7SUFDRixDQUFDOzs7WUE5QkQsVUFBVTs7OzRDQU1HLE1BQU0sU0FBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5saW5lRGlhbG9nQ29yZHMgfSBmcm9tICcuL2lubGluZS1kaWFsb2ctY29yZHMnO1xuaW1wb3J0IHsgRmFicmljUGxhY2VtZW50IH0gZnJvbSAnLi4vLi4vY29tbW9uL21vZGFsL2NvcmRzL2ZhYnJpYy1wbGFjZW1lbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbmxpbmVEaWFsb2dHZW9tZXRyeVNlcnZpY2Uge1xuXG5cdHByaXZhdGUgaW5saW5lRGlhbG9nR2VvbWV0cnk6IEVsZW1lbnRSZWY7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5saW5lRGlhbG9nU3RhdGUkID0gbmV3IFN1YmplY3Q8SW5saW5lRGlhbG9nQ29yZHM+KCk7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkOiBhbnkpIHtcblx0fVxuXG5cdG9ic2VydmVJbmxpbmVEaWFsb2dDb3JkcygpOiBPYnNlcnZhYmxlPElubGluZURpYWxvZ0NvcmRzPiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5saW5lRGlhbG9nU3RhdGUkLmFzT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0Y2hhbmdlR2VvbWV0cnkoaW5saW5lRGlhbG9nUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XG5cdFx0dGhpcy5pbmxpbmVEaWFsb2dHZW9tZXRyeSA9IGlubGluZURpYWxvZ1JlZjtcblx0fVxuXG5cdGdldElubGluZURpYWxvZ0NvcmRzKGludm9rZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwbGFjZW1lbnQ/OiBGYWJyaWNQbGFjZW1lbnQsIG9mZnNldD86IG51bWJlcik6IHZvaWQge1xuXG5cdFx0aWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcblx0XHRcdGNvbnN0IGlubGluZURpYWxvZ0NvcmRzID1cblx0XHRcdFx0bmV3IElubGluZURpYWxvZ0NvcmRzKFxuXHRcdFx0XHRcdGludm9rZXJFbGVtZW50UmVmLFxuXHRcdFx0XHRcdHRoaXMuaW5saW5lRGlhbG9nR2VvbWV0cnksXG5cdFx0XHRcdFx0d2luZG93LFxuXHRcdFx0XHRcdHBsYWNlbWVudCxcblx0XHRcdFx0XHRvZmZzZXQpO1xuXG5cdFx0XHR0aGlzLmlubGluZURpYWxvZ1N0YXRlJC5uZXh0KGlubGluZURpYWxvZ0NvcmRzKTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==