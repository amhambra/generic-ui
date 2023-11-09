import { HermesObservable } from '../observable/hermes.observable';
import { subscriberForOperator } from './operator-utils';
export function hermesTap(operation) {
    return (source) => {
        return new HermesObservable(observer => {
            const subscriber = subscriberForOperator(observer, (value) => {
                operation(value);
                observer.next(value);
            });
            return source.subscribe(subscriber).getFinalize();
        });
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVybWVzLnRhcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vc3RyZWFtL2NvcmUvb3BlcmF0b3IvaGVybWVzLnRhcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE1BQU0saUNBQWlDLENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFekQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxTQUE2QjtJQUN6RCxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDakIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBRXRDLE1BQU0sVUFBVSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1RCxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJy4uL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgc3Vic2NyaWJlckZvck9wZXJhdG9yIH0gZnJvbSAnLi9vcGVyYXRvci11dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXJtZXNUYXA8VD4ob3BlcmF0aW9uOiAodmFsdWU6IFQpID0+IHZvaWQpOiBIZXJtZXNPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcblx0cmV0dXJuIChzb3VyY2UpID0+IHtcblx0XHRyZXR1cm4gbmV3IEhlcm1lc09ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuXG5cdFx0XHRjb25zdCBzdWJzY3JpYmVyID0gc3Vic2NyaWJlckZvck9wZXJhdG9yKG9ic2VydmVyLCAodmFsdWUpID0+IHtcblx0XHRcdFx0b3BlcmF0aW9uKHZhbHVlKTtcblx0XHRcdFx0b2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHNvdXJjZS5zdWJzY3JpYmUoc3Vic2NyaWJlcikuZ2V0RmluYWxpemUoKTtcblx0XHR9KTtcblx0fTtcbn1cbiJdfQ==