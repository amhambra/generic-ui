import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
export class HermesObservable {
    constructor(generator) {
        this.generatorFn = generator;
    }
    pipe(...operations) {
        this.source = this;
        for (const operation of operations) {
            this.source = this.innerPipe(operation, this.source);
        }
        return this.source;
    }
    subscribe(arg) {
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
    createSubscriber(next, error, complete) {
        return new HermesSubscriber({
            next,
            error,
            complete
        });
    }
    getSubscription() {
        return new HermesSubscription(this.generatorFinalize);
    }
    innerPipe(operation, stream$) {
        return ((input) => {
            return operation(input);
        })(stream$);
    }
    isObserver(observer) {
        return typeof observer === 'object';
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9ic2VydmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFRbEUsTUFBTSxPQUFPLGdCQUFnQjtJQVc1QixZQUFZLFNBQWtEO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJLENBQUMsR0FBRyxVQUFtRDtRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVuQixLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtZQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyRDtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBYUQsU0FBUyxDQUNSLEdBQVE7UUFHUixJQUFJLFVBQStCLENBQUM7UUFFcEMsSUFBSSxHQUFHLFlBQVksZ0JBQWdCLEVBQUU7WUFDcEMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUNqQjthQUFNLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBRWhELE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUV0QyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDMUQ7YUFBTTtZQUVOLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RTtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0RCxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQy9DO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVTLGdCQUFnQixDQUN6QixJQUF5QixFQUN6QixLQUE0QixFQUM1QixRQUFxQjtRQUVyQixPQUFPLElBQUksZ0JBQWdCLENBQUM7WUFDM0IsSUFBSTtZQUNKLEtBQUs7WUFDTCxRQUFRO1NBQ1IsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxTQUFTLENBQU8sU0FBdUMsRUFBRSxPQUE0QjtRQUM1RixPQUFPLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTtZQUN0QixPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTyxVQUFVLENBQUMsUUFBYTtRQUMvQixPQUFPLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi9zdWJzY3JpcHRpb24vaGVybWVzLnN1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpYmVyIH0gZnJvbSAnLi9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmVyIH0gZnJvbSAnLi9oZXJtZXMub2JzZXJ2ZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiB7XG5cdChzb3VyY2U6IEhlcm1lc09ic2VydmFibGU8VD4pOiBIZXJtZXNPYnNlcnZhYmxlPFI+XG59XG5cbmV4cG9ydCBjbGFzcyBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblxuXHRwcm90ZWN0ZWQgcmVhZG9ubHkgZ2VuZXJhdG9yRm46IGFueTtcblxuXHRwcml2YXRlIHNvdXJjZTogSGVybWVzT2JzZXJ2YWJsZTxUPjtcblxuXHQvLyBwcml2YXRlIG9wZXJhdG9yOiBIZXJtZXNPYnNlcnZhYmxlPFQ+O1xuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuXHRwcml2YXRlIGdlbmVyYXRvckZpbmFsaXplOiAoKSA9PiB2b2lkO1xuXG5cdGNvbnN0cnVjdG9yKGdlbmVyYXRvcj86IChvYnNlcnZlcj86IEhlcm1lc09ic2VydmVyPFQ+KSA9PiB2b2lkKSB7XG5cdFx0dGhpcy5nZW5lcmF0b3JGbiA9IGdlbmVyYXRvcjtcblx0fVxuXG5cdHBpcGUoLi4ub3BlcmF0aW9uczogQXJyYXk8SGVybWVzT3BlcmF0b3JGdW5jdGlvbjxhbnksIGFueT4+KTogSGVybWVzT2JzZXJ2YWJsZTxhbnk+IHtcblx0XHR0aGlzLnNvdXJjZSA9IHRoaXM7XG5cblx0XHRmb3IgKGNvbnN0IG9wZXJhdGlvbiBvZiBvcGVyYXRpb25zKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IHRoaXMuaW5uZXJQaXBlKG9wZXJhdGlvbiwgdGhpcy5zb3VyY2UpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5zb3VyY2U7XG5cdH1cblxuXHRzdWJzY3JpYmUoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+XG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdG9ic2VydmVyOiBQYXJ0aWFsPEhlcm1lc09ic2VydmVyPFQ+PlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRhcmc6IGFueVxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXG5cdFx0bGV0IHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8VD47XG5cblx0XHRpZiAoYXJnIGluc3RhbmNlb2YgSGVybWVzU3Vic2NyaWJlcikge1xuXHRcdFx0c3Vic2NyaWJlciA9IGFyZztcblx0XHR9IGVsc2UgaWYgKGFyZyAhPT0gbnVsbCAmJiB0aGlzLmlzT2JzZXJ2ZXIoYXJnKSkge1xuXG5cdFx0XHRjb25zdCB7IG5leHQsIGVycm9yLCBjb21wbGV0ZSB9ID0gYXJnO1xuXG5cdFx0XHRzdWJzY3JpYmVyID0gdGhpcy5jcmVhdGVTdWJzY3JpYmVyKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0c3Vic2NyaWJlciA9IHRoaXMuY3JlYXRlU3Vic2NyaWJlcihhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5nZW5lcmF0b3JGbikge1xuXHRcdFx0dGhpcy5nZW5lcmF0b3JGaW5hbGl6ZSA9IHRoaXMuZ2VuZXJhdG9yRm4oc3Vic2NyaWJlcik7XG5cdFx0XHRzdWJzY3JpYmVyLnNldEZpbmFsaXplKHRoaXMuZ2VuZXJhdG9yRmluYWxpemUpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmdldFN1YnNjcmlwdGlvbigpO1xuXHR9XG5cblx0cHJvdGVjdGVkIGNyZWF0ZVN1YnNjcmliZXIoXG5cdFx0bmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCxcblx0XHRlcnJvcj86IChlcnJvcjogYW55KSA9PiB2b2lkLFxuXHRcdGNvbXBsZXRlPzogKCkgPT4gdm9pZFxuXHQpOiBIZXJtZXNTdWJzY3JpYmVyPFQ+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc1N1YnNjcmliZXIoe1xuXHRcdFx0bmV4dCxcblx0XHRcdGVycm9yLFxuXHRcdFx0Y29tcGxldGVcblx0XHR9KTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTdWJzY3JpcHRpb24oKTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc1N1YnNjcmlwdGlvbih0aGlzLmdlbmVyYXRvckZpbmFsaXplKTtcblx0fVxuXG5cdHByaXZhdGUgaW5uZXJQaXBlPFQsIFI+KG9wZXJhdGlvbjogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiwgc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPik6IEhlcm1lc09ic2VydmFibGU8Uj4ge1xuXHRcdHJldHVybiAoKGlucHV0OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiBvcGVyYXRpb24oaW5wdXQpO1xuXHRcdH0pKHN0cmVhbSQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc09ic2VydmVyKG9ic2VydmVyOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIG9ic2VydmVyID09PSAnb2JqZWN0Jztcblx0fVxuXG59XG4iXX0=