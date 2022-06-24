import { ListViewDomainEvent } from '../list-view.domain-event';
export class ListViewModeSetEvent extends ListViewDomainEvent {
    constructor(schemaId, mode) {
        super(schemaId, mode, 'ListViewModeSetEvent');
        this.mode = mode;
    }
    getTheme() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL2xpc3Qtdmlldy9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG1CQUFtQjtJQUU1RCxZQUFZLFFBQW9CLEVBQ1osSUFBa0I7UUFDckMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztRQUQzQixTQUFJLEdBQUosSUFBSSxDQUFjO0lBRXRDLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbkV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZVNldEV2ZW50IGV4dGVuZHMgTGlzdFZpZXdEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IExpc3RWaWV3SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbW9kZTogTGlzdFZpZXdNb2RlKSB7XG5cdFx0c3VwZXIoc2NoZW1hSWQsIG1vZGUsICdMaXN0Vmlld01vZGVTZXRFdmVudCcpO1xuXHR9XG5cblx0Z2V0VGhlbWUoKTogTGlzdFZpZXdNb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG59XG4iXX0=