import { Inject, Injectable } from '@angular/core';
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
SummariesManagerFactory.decorators = [
    { type: Injectable }
];
SummariesManagerFactory.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [SUMMARIES_CALCULATORS,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLm1hbmFnZXIuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9zdW1tYXJpZXMubWFuYWdlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR2xGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZELE1BQU0sT0FBTyx1QkFBdUI7SUFFbkMsWUFBNEQsV0FBaUQ7UUFBakQsZ0JBQVcsR0FBWCxXQUFXLENBQXNDO0lBQzdHLENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0I7UUFDOUIsT0FBTyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7O1lBUkQsVUFBVTs7O1lBRytELEtBQUssdUJBQWpFLE1BQU0sU0FBQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU1VNTUFSSUVTX0NBTENVTEFUT1JTIH0gZnJvbSAnLi9jYWxjdWxhdGlvbi9zdW1tYXJpZXMuY2FsY3VsYXRvcnMudG9rZW4nO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3InO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzTWFuYWdlciB9IGZyb20gJy4vc3VtbWFyaWVzLm1hbmFnZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNNYW5hZ2VyRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMpIHByaXZhdGUgcmVhZG9ubHkgY2FsY3VsYXRvcnM6IEFycmF5PFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBhbnk+Pikge1xuXHR9XG5cblx0Y3JlYXRlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFN1bW1hcmllc01hbmFnZXIge1xuXHRcdHJldHVybiBuZXcgU3VtbWFyaWVzTWFuYWdlcihzdHJ1Y3R1cmVJZCwgdGhpcy5jYWxjdWxhdG9ycyk7XG5cdH1cblxufVxuIl19