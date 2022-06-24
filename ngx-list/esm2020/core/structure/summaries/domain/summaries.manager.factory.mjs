import { SUMMARIES_CALCULATORS } from './calculation/summaries.calculators.token';
import { SummariesManager } from './summaries.manager';
export class SummariesManagerFactory {
    constructor(calculators) {
        this.calculators = calculators;
    }
    create(structureId) {
        return new SummariesManager(structureId, this.calculators);
    }
}
SummariesManagerFactory.services = [{ inject: SUMMARIES_CALCULATORS, collection: true }];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBNkIsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO0lBQzlFLENBQUM7SUFJRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7QUFKZSxnQ0FBUSxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMgfSBmcm9tICcuL2NhbGN1bGF0aW9uL3N1bW1hcmllcy5jYWxjdWxhdG9ycy50b2tlbic7XG5pbXBvcnQgeyBTdW1tYXJpZXNDYWxjdWxhdG9yIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4vc3VtbWFyaWVzLm1hbmFnZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjYWxjdWxhdG9yczogQXJyYXk8U3VtbWFyaWVzQ2FsY3VsYXRvcjxhbnksIGFueT4+KSB7XG5cdH1cblxuXHRzdGF0aWMgcmVhZG9ubHkgc2VydmljZXMgPSBbeyBpbmplY3Q6IFNVTU1BUklFU19DQUxDVUxBVE9SUywgY29sbGVjdGlvbjogdHJ1ZSB9XTtcblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogU3VtbWFyaWVzTWFuYWdlciB7XG5cdFx0cmV0dXJuIG5ldyBTdW1tYXJpZXNNYW5hZ2VyKHN0cnVjdHVyZUlkLCB0aGlzLmNhbGN1bGF0b3JzKTtcblx0fVxuXG59XG4iXX0=