import { ListViewDomainEvent } from '../list-view.domain-event';
export class ListViewCreatedEvent extends ListViewDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'ListViewCreatedEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LWNyZWF0ZWQuZXZlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L2RvbWFpbi9jcmVhdGUvbGlzdC12aWV3LWNyZWF0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHaEUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG1CQUFtQjtJQUU1RCxZQUFZLFdBQXVCO1FBQ2xDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLHNCQUFzQixDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0RvbWFpbkV2ZW50IH0gZnJvbSAnLi4vbGlzdC12aWV3LmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIExpc3RWaWV3Q3JlYXRlZEV2ZW50IGV4dGVuZHMgTGlzdFZpZXdEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IExpc3RWaWV3SWQpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbnVsbCwgJ0xpc3RWaWV3Q3JlYXRlZEV2ZW50Jyk7XG5cdH1cbn1cbiJdfQ==