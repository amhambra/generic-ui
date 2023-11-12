import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SetRowHeightBasedOnThemeCommand extends StructureCommand {
    theme;
    constructor(structureId, theme) {
        super(structureId, 'SetRowHeightBasedOnThemeCommand');
        this.theme = theme;
    }
    getTheme() {
        return this.theme;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NyYy9jb3JlL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFekYsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGdCQUFnQjtJQUdoRDtJQURwQixZQUFZLFdBQXdCLEVBQ2hCLEtBQWtCO1FBQ3JDLEtBQUssQ0FBQyxXQUFXLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQURuQyxVQUFLLEdBQUwsS0FBSyxDQUFhO0lBRXRDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL3NyYy9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHRoZW1lOiBTY2hlbWFUaGVtZSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy50aGVtZTtcblx0fVxuXG59XG4iXX0=