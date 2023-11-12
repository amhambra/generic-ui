import { HermesSubscription } from '../subscription/hermes.subscription';
import { HermesSubscriber } from './subscriber/hermes.subscriber';
export class HermesObservable {
    generatorFn;
    source;
    // private operator: HermesObservable<T>;
    // eslint-disable-next-line
    generatorFinalize;
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
        return this.getSubscription(subscriber);
    }
    createSubscriber(next, error, complete) {
        return new HermesSubscriber({
            next,
            error,
            complete
        });
    }
    getSubscription(subscriber) {
        return new HermesSubscription(subscriber);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLm9ic2VydmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9jb3JlL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFRbEUsTUFBTSxPQUFPLGdCQUFnQjtJQUVULFdBQVcsQ0FBTTtJQUU1QixNQUFNLENBQXNCO0lBRXBDLHlDQUF5QztJQUV6QywyQkFBMkI7SUFDbkIsaUJBQWlCLENBQWE7SUFFdEMsWUFBWSxTQUFrRDtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxDQUFDLEdBQUcsVUFBbUQ7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFbkIsS0FBSyxNQUFNLFNBQVMsSUFBSSxVQUFVLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQWFELFNBQVMsQ0FDUixHQUFRO1FBR1IsSUFBSSxVQUErQixDQUFDO1FBRXBDLElBQUksR0FBRyxZQUFZLGdCQUFnQixFQUFFO1lBQ3BDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUVoRCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUM7WUFFdEMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFFTixVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0U7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdEQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvQztRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRVMsZ0JBQWdCLENBQ3pCLElBQXlCLEVBQ3pCLEtBQTRCLEVBQzVCLFFBQXFCO1FBRXJCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQztZQUMzQixJQUFJO1lBQ0osS0FBSztZQUNMLFFBQVE7U0FDUixDQUFDLENBQUM7SUFDSixDQUFDO0lBRVMsZUFBZSxDQUFDLFVBQStCO1FBQ3hELE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRU8sU0FBUyxDQUFPLFNBQXVDLEVBQUUsT0FBNEI7UUFDNUYsT0FBTyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDdEIsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRU8sVUFBVSxDQUFDLFFBQWE7UUFDL0IsT0FBTyxPQUFPLFFBQVEsS0FBSyxRQUFRLENBQUM7SUFDckMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4vc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZlciB9IGZyb20gJy4vaGVybWVzLm9ic2VydmVyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEhlcm1lc09wZXJhdG9yRnVuY3Rpb248VCwgUj4ge1xuXHQoc291cmNlOiBIZXJtZXNPYnNlcnZhYmxlPFQ+KTogSGVybWVzT2JzZXJ2YWJsZTxSPlxufVxuXG5leHBvcnQgY2xhc3MgSGVybWVzT2JzZXJ2YWJsZTxUPiB7XG5cblx0cHJvdGVjdGVkIHJlYWRvbmx5IGdlbmVyYXRvckZuOiBhbnk7XG5cblx0cHJpdmF0ZSBzb3VyY2U6IEhlcm1lc09ic2VydmFibGU8VD47XG5cblx0Ly8gcHJpdmF0ZSBvcGVyYXRvcjogSGVybWVzT2JzZXJ2YWJsZTxUPjtcblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcblx0cHJpdmF0ZSBnZW5lcmF0b3JGaW5hbGl6ZTogKCkgPT4gdm9pZDtcblxuXHRjb25zdHJ1Y3RvcihnZW5lcmF0b3I/OiAob2JzZXJ2ZXI/OiBIZXJtZXNPYnNlcnZlcjxUPikgPT4gdm9pZCkge1xuXHRcdHRoaXMuZ2VuZXJhdG9yRm4gPSBnZW5lcmF0b3I7XG5cdH1cblxuXHRwaXBlKC4uLm9wZXJhdGlvbnM6IEFycmF5PEhlcm1lc09wZXJhdG9yRnVuY3Rpb248YW55LCBhbnk+Pik6IEhlcm1lc09ic2VydmFibGU8YW55PiB7XG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzO1xuXG5cdFx0Zm9yIChjb25zdCBvcGVyYXRpb24gb2Ygb3BlcmF0aW9ucykge1xuXHRcdFx0dGhpcy5zb3VyY2UgPSB0aGlzLmlubmVyUGlwZShvcGVyYXRpb24sIHRoaXMuc291cmNlKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuc291cmNlO1xuXHR9XG5cblx0c3Vic2NyaWJlKFxuXHRcdG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0c3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxUPlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRvYnNlcnZlcjogUGFydGlhbDxIZXJtZXNPYnNlcnZlcjxUPj5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdGxldCBzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+O1xuXG5cdFx0aWYgKGFyZyBpbnN0YW5jZW9mIEhlcm1lc1N1YnNjcmliZXIpIHtcblx0XHRcdHN1YnNjcmliZXIgPSBhcmc7XG5cdFx0fSBlbHNlIGlmIChhcmcgIT09IG51bGwgJiYgdGhpcy5pc09ic2VydmVyKGFyZykpIHtcblxuXHRcdFx0Y29uc3QgeyBuZXh0LCBlcnJvciwgY29tcGxldGUgfSA9IGFyZztcblxuXHRcdFx0c3Vic2NyaWJlciA9IHRoaXMuY3JlYXRlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHN1YnNjcmliZXIgPSB0aGlzLmNyZWF0ZVN1YnNjcmliZXIoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0sIGFyZ3VtZW50c1syXSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZ2VuZXJhdG9yRm4pIHtcblx0XHRcdHRoaXMuZ2VuZXJhdG9yRmluYWxpemUgPSB0aGlzLmdlbmVyYXRvckZuKHN1YnNjcmliZXIpO1xuXHRcdFx0c3Vic2NyaWJlci5zZXRGaW5hbGl6ZSh0aGlzLmdlbmVyYXRvckZpbmFsaXplKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5nZXRTdWJzY3JpcHRpb24oc3Vic2NyaWJlcik7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlU3Vic2NyaWJlcihcblx0XHRuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmliZXI8VD4ge1xuXHRcdHJldHVybiBuZXcgSGVybWVzU3Vic2NyaWJlcih7XG5cdFx0XHRuZXh0LFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRjb21wbGV0ZVxuXHRcdH0pO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFN1YnNjcmlwdGlvbihzdWJzY3JpYmVyOiBIZXJtZXNTdWJzY3JpYmVyPFQ+KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc1N1YnNjcmlwdGlvbihzdWJzY3JpYmVyKTtcblx0fVxuXG5cdHByaXZhdGUgaW5uZXJQaXBlPFQsIFI+KG9wZXJhdGlvbjogSGVybWVzT3BlcmF0b3JGdW5jdGlvbjxULCBSPiwgc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPik6IEhlcm1lc09ic2VydmFibGU8Uj4ge1xuXHRcdHJldHVybiAoKGlucHV0OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiBvcGVyYXRpb24oaW5wdXQpO1xuXHRcdH0pKHN0cmVhbSQpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc09ic2VydmVyKG9ic2VydmVyOiBhbnkpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHlwZW9mIG9ic2VydmVyID09PSAnb2JqZWN0Jztcblx0fVxuXG59XG4iXX0=