import { FormationManager } from './formation.manager';
export class FormationManagerFactory {
    create(id) {
        return new FormationManager(id, new Set());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9kb21haW4vZm9ybWF0aW9uLm1hbmFnZXItZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxNQUFNLE9BQU8sdUJBQXVCO0lBRW5DLE1BQU0sQ0FBQyxFQUFlO1FBQ3JCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxFQUFFLEVBQUUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm1hdGlvbk1hbmFnZXIgfSBmcm9tICcuL2Zvcm1hdGlvbi5tYW5hZ2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcblxuXG5leHBvcnQgY2xhc3MgRm9ybWF0aW9uTWFuYWdlckZhY3Rvcnkge1xuXG5cdGNyZWF0ZShpZDogU3RydWN0dXJlSWQpOiBGb3JtYXRpb25NYW5hZ2VyIHtcblx0XHRyZXR1cm4gbmV3IEZvcm1hdGlvbk1hbmFnZXIoaWQsIG5ldyBTZXQoKSk7XG5cdH1cblxufVxuIl19