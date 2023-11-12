import { HermesObservable } from '../../core/observable/hermes.observable';
export function fromRxJsObservable(source$) {
    return new HermesObservable((observer) => {
        const subscription = source$.subscribe((value) => observer.next(value), (error) => observer.error(error), () => observer.complete());
        return () => subscription.unsubscribe();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1yeGpzLW9ic2VydmFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL3N0cmVhbS9pbmZyYXN0cnVjdHVyZS9yeGpzL2Zyb20tcnhqcy1vYnNlcnZhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzNFLE1BQU0sVUFBVSxrQkFBa0IsQ0FBSSxPQUFzQjtJQUMzRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN4QyxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUNyQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFDbEMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQ3JDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FDekIsQ0FBQztRQUNGLE9BQU8sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi9jb3JlL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZnJvbVJ4SnNPYnNlcnZhYmxlPFQ+KHNvdXJjZSQ6IE9ic2VydmFibGU8VD4pOiBIZXJtZXNPYnNlcnZhYmxlPFQ+IHtcblx0cmV0dXJuIG5ldyBIZXJtZXNPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNvdXJjZSQuc3Vic2NyaWJlKFxuXHRcdFx0KHZhbHVlOiBUKSA9PiBvYnNlcnZlci5uZXh0KHZhbHVlKSxcblx0XHRcdChlcnJvcjogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlcnJvciksXG5cdFx0XHQoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0KTtcblx0XHRyZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH0pO1xufVxuIl19