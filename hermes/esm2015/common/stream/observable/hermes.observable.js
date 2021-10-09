/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
/**
 * @record
 * @template T, R
 */
export function HermesOperatorFunction() { }
/**
 * @template T
 */
export class HermesObservable {
    /**
     * @param {?=} generator
     */
    constructor(generator) {
        this.generatorFn = generator;
    }
    /**
     * @template T, R
     * @param {...?} operations
     * @return {?}
     */
    pipe(...operations) {
        this.source = this;
        for (const operation of operations) {
            this.source = this.innerPipe(operation, this.source);
        }
        return this.source;
    }
    /**
     * @private
     * @template T, R
     * @param {?} operation
     * @param {?} stream$
     * @return {?}
     */
    innerPipe(operation, stream$) {
        return ((/**
         * @param {?} input
         * @return {?}
         */
        (input) => {
            return operation(input);
        }))(stream$);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        /** @type {?} */
        let subscriber;
        if (arg instanceof HermesSubscriber) {
            subscriber = arg;
        }
        else if (arg !== null && this.isObserver(arg)) {
            const { next, error, complete } = arg;
            subscriber = this.createSubscriber(next, error, complete);
        }
        else {
            subscriber = this.createSubscriber(arguments[0], arguments[1], arguments[2]);
        }
        if (this.generatorFn) {
            this.generatorFinalize = this.generatorFn(subscriber);
            subscriber.setFinalize(this.generatorFinalize);
        }
        return this.getSubscription();
    }
    /**
     * @protected
     * @param {?=} next
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    createSubscriber(next, error, complete) {
        return new HermesSubscriber({
            next,
            error,
            complete
        });
    }
    /**
     * @protected
     * @return {?}
     */
    getSubscription() {
        return new HermesSubscription(this.generatorFinalize);
    }
    /**
     * @private
     * @param {?} observer
     * @return {?}
     */
    isObserver(observer) {
        return typeof observer === 'object';
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.source;
    /**
     * @type {?}
     * @protected
     */
    HermesObservable.prototype.generatorFn;
    /**
     * @type {?}
     * @private
     */
    HermesObservable.prototype.generatorFinalize;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9ic2VydmFibGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQUlsRSw0Q0FFQzs7OztBQUVELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFVNUIsWUFBWSxTQUFrRDtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCxJQUFJLENBQU8sR0FBRyxVQUFtRDtRQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDOzs7Ozs7OztJQUVPLFNBQVMsQ0FBTyxTQUF1QyxFQUFFLE9BQTRCO1FBQzVGLE9BQU87Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsQ0FBQzs7Ozs7SUFhRCxTQUFTLENBQ1IsR0FBUTs7WUFHSixVQUErQjtRQUVuQyxJQUFJLEdBQUcsWUFBWSxnQkFBZ0IsRUFBRTtZQUNwQyxVQUFVLEdBQUcsR0FBRyxDQUFDO1NBQ2pCO2FBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7a0JBRTFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHO1lBRXJDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMxRDthQUFNO1lBRU4sVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdFO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RELFVBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0M7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMvQixDQUFDOzs7Ozs7OztJQUVTLGdCQUFnQixDQUN6QixJQUF5QixFQUN6QixLQUE0QixFQUM1QixRQUFxQjtRQUVyQixPQUFPLElBQUksZ0JBQWdCLENBQUM7WUFDM0IsSUFBSTtZQUNKLEtBQUs7WUFDTCxRQUFRO1NBQ1IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFUyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsUUFBYTtRQUMvQixPQUFPLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0NBRUQ7Ozs7OztJQXBGQSxrQ0FBb0M7Ozs7O0lBSXBDLHVDQUFvQzs7Ozs7SUFFcEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4vaGVybWVzLm9ic2VydmVyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuXHQoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogSGVybWVzT2JzZXJ2YWJsZTxSPlxufVxuXG5leHBvcnQgY2xhc3MgSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0cHJpdmF0ZSBzb3VyY2U6IEhlcm1lc09ic2VydmFibGU8VD47XG5cblx0Ly8gcHJpdmF0ZSBvcGVyYXRvcjogSGVybWVzT2JzZXJ2YWJsZTxUPjtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ2VuZXJhdG9yRm46IGFueTtcblxuXHRwcml2YXRlIGdlbmVyYXRvckZpbmFsaXplOiAoKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKGdlbmVyYXRvcj86IChvYnNlcnZlcj86IEhlcm1lc09ic2VydmVyPFQ+KSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5nZW5lcmF0b3JGbiA9IGdlbmVyYXRvcjtcblx0fVxuXG5cdHBpcGU8VCwgUj4oLi4ub3BlcmF0aW9uczogQXJyYXk8SGVybWVzT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT4+KTogSGVybWVzT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHR0aGlzLnNvdXJjZSA9IHRoaXM7XG5cblx0XHRmb3IgKGNvbnN0IG9wZXJhdGlvbiBvZiBvcGVyYXRpb25zKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IHRoaXMuaW5uZXJQaXBlKG9wZXJhdGlvbiwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRwcml2YXRlIGlubmVyUGlwZTxULCBSPihvcGVyYXRpb246IEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4sIHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4pOiBIZXJtZXNPYnNlcnZhYmxlPFI+IHtcblx0XHRyZXR1cm4gKChpbnB1dDogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4gb3BlcmF0aW9uKGlucHV0KTtcblx0XHR9KShzdHJlYW0kKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0b2JzZXJ2ZXI6IFBhcnRpYWw8SGVybWVzT2JzZXJ2ZXI8VD4+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdGFyZzogYW55XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbiB7XG5cblx0XHRsZXQgc3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPjtcblxuXHRcdGlmIChhcmcgaW5zdGFuY2VvZiBIZXJtZXNTdWJzY3JpYmVyKSB7XG5cdFx0XHRzdWJzY3JpYmVyID0gYXJnO1xuXHRcdH0gZWxzZSBpZiAoYXJnICE9PSBudWxsICYmIHRoaXMuaXNPYnNlcnZlcihhcmcpKSB7XG5cblx0XHRcdGNvbnN0IHsgbmV4dCwgZXJyb3IsIGNvbXBsZXRlIH0gPSBhcmc7XG5cblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIobmV4dCwgZXJyb3IsIGNvbXBsZXRlKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRzdWJzY3JpYmVyID0gdGhpcy5jcmVhdGVTdWJzY3JpYmVyKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmdlbmVyYXRvckZuKSB7XG5cdFx0XHR0aGlzLmdlbmVyYXRvckZpbmFsaXplID0gdGhpcy5nZW5lcmF0b3JGbihzdWJzY3JpYmVyKTtcblx0XHRcdHN1YnNjcmliZXIuc2V0RmluYWxpemUodGhpcy5nZW5lcmF0b3JGaW5hbGl6ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZ2V0U3Vic2NyaXB0aW9uKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlU3Vic2NyaWJlcihcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRuZXh0LFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRjb21wbGV0ZVxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFN1YnNjcmlwdGlvbigpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzU3Vic2NyaXB0aW9uKHRoaXMuZ2VuZXJhdG9yRmluYWxpemUpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc09ic2VydmVyKG9ic2VydmVyOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIG9ic2VydmVyID09PSAnb2JqZWN0Jztcblx0fVxuXG59XG4iXX0=