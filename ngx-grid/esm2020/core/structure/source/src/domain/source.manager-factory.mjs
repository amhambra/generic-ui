import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../../../formation/src/domain/formation.manager-factory';
export class SourceManagerFactory {
    constructor(formationManagerFactory) {
        this.formationManagerFactory = formationManagerFactory;
    }
    createDefault(id) {
        const fm = this.formationManagerFactory.create(id);
        return new SourceManager(fm);
    }
    create(id) {
        const fm = this.formationManagerFactory.create(id);
        return new SourceManager(fm);
    }
}
SourceManagerFactory.services = [FormationManagerFactory];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9kb21haW4vc291cmNlLm1hbmFnZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFJbEcsTUFBTSxPQUFPLG9CQUFvQjtJQUVoQyxZQUE2Qix1QkFBZ0Q7UUFBaEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtJQUM3RSxDQUFDO0lBSUQsYUFBYSxDQUFDLEVBQWU7UUFFNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVuRCxPQUFPLElBQUksYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxNQUFNLENBQUMsRUFBZTtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7QUFiZSw2QkFBUSxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdXJjZU1hbmFnZXIgfSBmcm9tICcuL3NvdXJjZS5tYW5hZ2VyJztcbmltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5IH0gZnJvbSAnLi4vLi4vLi4vZm9ybWF0aW9uL3NyYy9kb21haW4vZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNvdXJjZU1hbmFnZXJGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5OiBGb3JtYXRpb25NYW5hZ2VyRmFjdG9yeSkge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0Zvcm1hdGlvbk1hbmFnZXJGYWN0b3J5XTtcblxuXHRjcmVhdGVEZWZhdWx0KGlkOiBTdHJ1Y3R1cmVJZCk6IFNvdXJjZU1hbmFnZXIge1xuXG5cdFx0Y29uc3QgZm0gPSB0aGlzLmZvcm1hdGlvbk1hbmFnZXJGYWN0b3J5LmNyZWF0ZShpZCk7XG5cblx0XHRyZXR1cm4gbmV3IFNvdXJjZU1hbmFnZXIoZm0pO1xuXHR9XG5cblx0Y3JlYXRlKGlkOiBTdHJ1Y3R1cmVJZCk6IFNvdXJjZU1hbmFnZXIge1xuXHRcdGNvbnN0IGZtID0gdGhpcy5mb3JtYXRpb25NYW5hZ2VyRmFjdG9yeS5jcmVhdGUoaWQpO1xuXG5cdFx0cmV0dXJuIG5ldyBTb3VyY2VNYW5hZ2VyKGZtKTtcblx0fVxuXG59XG4iXX0=