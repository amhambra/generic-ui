import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class ChangePagesizeCommand extends StructureCommand {
    pageSize;
    constructor(structureId, pageSize) {
        super(structureId, 'ChangePagesizeCommand');
        this.pageSize = pageSize;
    }
    getPageSize() {
        return this.pageSize;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvY29yZS9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFekYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGdCQUFnQjtJQUd0QztJQURwQixZQUFZLFdBQXdCLEVBQ2hCLFFBQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUR6QixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBRXBDLENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYWdlc2l6ZUNvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGFnZVNpemU6IG51bWJlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnQ2hhbmdlUGFnZXNpemVDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYWdlU2l6ZSgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLnBhZ2VTaXplO1xuXHR9XG59XG4iXX0=