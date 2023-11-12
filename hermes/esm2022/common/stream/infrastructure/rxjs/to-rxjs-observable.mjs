import { Observable } from 'rxjs';
export function toRxJsObservable(source$) {
    return new Observable((observer) => {
        const subscription = source$.subscribe((value) => observer.next(value), (error) => observer.error(error), () => observer.complete());
        return () => subscription.unsubscribe();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG8tcnhqcy1vYnNlcnZhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvbW1vbi9zdHJlYW0vaW5mcmFzdHJ1Y3R1cmUvcnhqcy90by1yeGpzLW9ic2VydmFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxNQUFNLFVBQVUsZ0JBQWdCLENBQUksT0FBNEI7SUFDL0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1FBQ2xDLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQ3JDLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUNsQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDckMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUN6QixDQUFDO1FBQ0YsT0FBTyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekMsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJy4uLy4uL2NvcmUvb2JzZXJ2YWJsZS9oZXJtZXMub2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1J4SnNPYnNlcnZhYmxlPFQ+KHNvdXJjZSQ6IEhlcm1lc09ic2VydmFibGU8VD4pOiBPYnNlcnZhYmxlPFQ+IHtcblx0cmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuXHRcdGNvbnN0IHN1YnNjcmlwdGlvbiA9IHNvdXJjZSQuc3Vic2NyaWJlKFxuXHRcdFx0KHZhbHVlOiBUKSA9PiBvYnNlcnZlci5uZXh0KHZhbHVlKSxcblx0XHRcdChlcnJvcjogYW55KSA9PiBvYnNlcnZlci5lcnJvcihlcnJvciksXG5cdFx0XHQoKSA9PiBvYnNlcnZlci5jb21wbGV0ZSgpXG5cdFx0KTtcblx0XHRyZXR1cm4gKCkgPT4gc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG5cdH0pO1xufVxuIl19