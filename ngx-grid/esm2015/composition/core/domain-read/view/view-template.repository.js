import { Injectable } from '@angular/core';
import { ViewTemplateFactory } from './view-template.factory';
export class ViewTemplateRepository {
    constructor(columnTemplateFactory) {
        this.columnTemplateFactory = columnTemplateFactory;
    }
    findTemplate(view) {
        const typeToTemplate = this.columnTemplateFactory.getTemplates();
        return typeToTemplate.get(view);
    }
}
ViewTemplateRepository.decorators = [
    { type: Injectable }
];
ViewTemplateRepository.ctorParameters = () => [
    { type: ViewTemplateFactory }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb21wb3NpdGlvbi9jb3JlL2RvbWFpbi1yZWFkL3ZpZXcvdmlldy10ZW1wbGF0ZS5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLOUQsTUFBTSxPQUFPLHNCQUFzQjtJQUVsQyxZQUE2QixxQkFBMEM7UUFBMUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFxQjtJQUN2RSxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQWM7UUFDMUIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBRWpFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFWRCxVQUFVOzs7WUFKRixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld1RlbXBsYXRlRmFjdG9yeSB9IGZyb20gJy4vdmlldy10ZW1wbGF0ZS5mYWN0b3J5JztcbmltcG9ydCB7IENlbGxWaWV3IH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbHVtbi9jZWxsLXZpZXcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3VGVtcGxhdGVSZXBvc2l0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbHVtblRlbXBsYXRlRmFjdG9yeTogVmlld1RlbXBsYXRlRmFjdG9yeSkge1xuXHR9XG5cblx0ZmluZFRlbXBsYXRlKHZpZXc6IENlbGxWaWV3KTogVGVtcGxhdGVSZWY8YW55PiB7XG5cdFx0Y29uc3QgdHlwZVRvVGVtcGxhdGUgPSB0aGlzLmNvbHVtblRlbXBsYXRlRmFjdG9yeS5nZXRUZW1wbGF0ZXMoKTtcblxuXHRcdHJldHVybiB0eXBlVG9UZW1wbGF0ZS5nZXQodmlldyk7XG5cdH1cblxufVxuIl19