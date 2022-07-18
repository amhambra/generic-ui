import { ChangeDetectorRef, inject } from '@angular/core';
import { HermesSubject, hermesTakeUntil } from '@generic-ui/hermes';
export function useReactiveContext(stream$) {
    const changeDetector = inject(ChangeDetectorRef), unsub$ = new HermesSubject();
    let innerStream$;
    if (stream$) {
        innerStream$ = stream$.pipe(hermesTakeUntil(unsub$));
    }
    changeDetector.onDestroy(() => {
        unsub$.next();
        unsub$.complete();
    });
    const context = {
        connect: (stream$) => {
            innerStream$ = stream$.pipe(hermesTakeUntil(unsub$));
            return context;
        },
        subscribe(next, error, complete) {
            return innerStream$.subscribe(next, error, complete);
        },
        subscribeAndRender(next, error, complete) {
            return innerStream$.subscribe((v) => {
                next(v);
                changeDetector.detectChanges();
            }, error, complete);
        },
        unsubscribe() {
            unsub$.next();
            unsub$.complete();
        }
    };
    return context;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUtY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS9jb21tb24vc3JjL2Nkay9jb21wb25lbnQvbGliL3NyYy9yZWFjdGl2ZS1jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLEVBQVcsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFvQixhQUFhLEVBQXNCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBYzFHLE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxPQUE2QjtJQUVsRSxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsRUFDL0MsTUFBTSxHQUFHLElBQUksYUFBYSxFQUFRLENBQUM7SUFFcEMsSUFBSSxZQUE2QyxDQUFDO0lBRWxELElBQUksT0FBTyxFQUFFO1FBQ1osWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDckQ7SUFFQSxjQUEwQixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7UUFDMUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ25CLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxPQUFPLEdBQUc7UUFDZixPQUFPLEVBQUUsQ0FBQyxPQUE0QixFQUFFLEVBQUU7WUFDekMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckQsT0FBTyxPQUFPLENBQUM7UUFDaEIsQ0FBQztRQUNELFNBQVMsQ0FBQyxJQUF5QixFQUFFLEtBQXdCLEVBQUUsUUFBcUI7WUFDbkYsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUNELGtCQUFrQixDQUFDLElBQXlCLEVBQUUsS0FBd0IsRUFBRSxRQUFxQjtZQUM1RixPQUFPLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNSLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNoQyxDQUFDLEVBQ0QsS0FBSyxFQUNMLFFBQVEsQ0FDUixDQUFDO1FBQ0gsQ0FBQztRQUNELFdBQVc7WUFDVixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkIsQ0FBQztLQUNxQixDQUFDO0lBQ3hCLE9BQU8sT0FBTyxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgaW5qZWN0LCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBIZXJtZXNTdWJqZWN0LCBIZXJtZXNTdWJzY3JpcHRpb24sIGhlcm1lc1Rha2VVbnRpbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVhY3RpdmVDb250ZXh0PFQ+IHtcblxuXHRjb25uZWN0PFQ+KHN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4pOiBSZWFjdGl2ZUNvbnRleHQ8VD47XG5cblx0c3Vic2NyaWJlKG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsIGVycm9yPzogKGU6IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXG5cdHN1YnNjcmliZUFuZFJlbmRlcihuZXh0PzogKHZhbHVlOiBUKSA9PiB2b2lkLCBlcnJvcj86IChlOiBhbnkpID0+IHZvaWQsIGNvbXBsZXRlPzogKCkgPT4gdm9pZCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblxuXHR1bnN1YnNjcmliZSgpOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSZWFjdGl2ZUNvbnRleHQ8VD4oc3RyZWFtJD86IEhlcm1lc09ic2VydmFibGU8VD4pOiBSZWFjdGl2ZUNvbnRleHQ8VD4ge1xuXG5cdGNvbnN0IGNoYW5nZURldGVjdG9yID0gaW5qZWN0KENoYW5nZURldGVjdG9yUmVmKSxcblx0XHR1bnN1YiQgPSBuZXcgSGVybWVzU3ViamVjdDx2b2lkPigpO1xuXG5cdGxldCBpbm5lclN0cmVhbSQ6IEhlcm1lc09ic2VydmFibGU8VD4gfCB1bmRlZmluZWQ7XG5cblx0aWYgKHN0cmVhbSQpIHtcblx0XHRpbm5lclN0cmVhbSQgPSBzdHJlYW0kLnBpcGUoaGVybWVzVGFrZVVudGlsKHVuc3ViJCkpO1xuXHR9XG5cblx0KGNoYW5nZURldGVjdG9yIGFzIFZpZXdSZWYpLm9uRGVzdHJveSgoKSA9PiB7XG5cdFx0dW5zdWIkLm5leHQoKTtcblx0XHR1bnN1YiQuY29tcGxldGUoKTtcblx0fSk7XG5cblx0Y29uc3QgY29udGV4dCA9IHtcblx0XHRjb25uZWN0OiAoc3RyZWFtJDogSGVybWVzT2JzZXJ2YWJsZTxUPikgPT4ge1xuXHRcdFx0aW5uZXJTdHJlYW0kID0gc3RyZWFtJC5waXBlKGhlcm1lc1Rha2VVbnRpbCh1bnN1YiQpKTtcblx0XHRcdHJldHVybiBjb250ZXh0O1xuXHRcdH0sXG5cdFx0c3Vic2NyaWJlKG5leHQ/OiAodmFsdWU6IFQpID0+IHZvaWQsIGVycm9yPzogKGU6IGFueSkgPT4gdm9pZCwgY29tcGxldGU/OiAoKSA9PiB2b2lkKTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblx0XHRcdHJldHVybiBpbm5lclN0cmVhbSQuc3Vic2NyaWJlKG5leHQsIGVycm9yLCBjb21wbGV0ZSk7XG5cdFx0fSxcblx0XHRzdWJzY3JpYmVBbmRSZW5kZXIobmV4dD86ICh2YWx1ZTogVCkgPT4gdm9pZCwgZXJyb3I/OiAoZTogYW55KSA9PiB2b2lkLCBjb21wbGV0ZT86ICgpID0+IHZvaWQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXHRcdFx0cmV0dXJuIGlubmVyU3RyZWFtJC5zdWJzY3JpYmUoKHYpID0+IHtcblx0XHRcdFx0XHRuZXh0KHYpO1xuXHRcdFx0XHRcdGNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3IsXG5cdFx0XHRcdGNvbXBsZXRlXG5cdFx0XHQpO1xuXHRcdH0sXG5cdFx0dW5zdWJzY3JpYmUoKTogdm9pZCB7XG5cdFx0XHR1bnN1YiQubmV4dCgpO1xuXHRcdFx0dW5zdWIkLmNvbXBsZXRlKCk7XG5cdFx0fVxuXHR9IGFzIFJlYWN0aXZlQ29udGV4dDxUPjtcblx0cmV0dXJuIGNvbnRleHQ7XG59XG4iXX0=