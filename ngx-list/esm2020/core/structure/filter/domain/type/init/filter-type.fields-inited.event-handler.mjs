import { FieldsInitedEvent } from '../../../../field/domain/init/fields-inited.event';
// TODO Remove
export class FilterTypeFieldsInitedEventHandler {
    // constructor(private readonly filterTypeManagerRepository: FilterTypeManagerRepository,
    // 			private readonly domainEventPublisher: DomainEventPublisher) {
    // }
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(fieldsInitedEvent) {
        // if (fieldsInitedEvent.ofMessageType('FieldsInitedEvent')) {
        //
        // 	const fields = fieldsInitedEvent.getFields();
        //
        // 	const manager = new FilterTypeManager(fields);
        //
        // 	this.filterTypeManagerRepository.next(fieldsInitedEvent.getAggregateId(), manager);
        //
        // 	this.domainEventPublisher.publish(new FilterTypesInitedEvent(fieldsInitedEvent.getAggregateId(), manager.getFieldIdsToFieldTypes()));
        // }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZS5maWVsZHMtaW5pdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFdEYsY0FBYztBQUdkLE1BQU0sT0FBTyxrQ0FBa0M7SUFFOUMseUZBQXlGO0lBQ3pGLG9FQUFvRTtJQUNwRSxJQUFJO0lBRUosUUFBUTtRQUNQLE9BQU8saUJBQWlCLENBQUM7SUFDMUIsQ0FBQztJQUVELE1BQU0sQ0FBQyxpQkFBb0M7UUFFMUMsOERBQThEO1FBQzlELEVBQUU7UUFDRixpREFBaUQ7UUFDakQsRUFBRTtRQUNGLGtEQUFrRDtRQUNsRCxFQUFFO1FBQ0YsdUZBQXVGO1FBQ3ZGLEVBQUU7UUFDRix5SUFBeUk7UUFDekksSUFBSTtJQUNMLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2luaXQvZmllbGRzLWluaXRlZC5ldmVudCc7XG5cbi8vIFRPRE8gUmVtb3ZlXG5cblxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cblx0Ly8gY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlTWFuYWdlclJlcG9zaXRvcnk6IEZpbHRlclR5cGVNYW5hZ2VyUmVwb3NpdG9yeSxcblx0Ly8gXHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0Ly8gfVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxGaWVsZHNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWVsZHNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWVsZHNJbml0ZWRFdmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdC8vIGlmIChmaWVsZHNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cdFx0Ly9cblx0XHQvLyBcdGNvbnN0IGZpZWxkcyA9IGZpZWxkc0luaXRlZEV2ZW50LmdldEZpZWxkcygpO1xuXHRcdC8vXG5cdFx0Ly8gXHRjb25zdCBtYW5hZ2VyID0gbmV3IEZpbHRlclR5cGVNYW5hZ2VyKGZpZWxkcyk7XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuZmlsdGVyVHlwZU1hbmFnZXJSZXBvc2l0b3J5Lm5leHQoZmllbGRzSW5pdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgbWFuYWdlcik7XG5cdFx0Ly9cblx0XHQvLyBcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgRmlsdGVyVHlwZXNJbml0ZWRFdmVudChmaWVsZHNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBtYW5hZ2VyLmdldEZpZWxkSWRzVG9GaWVsZFR5cGVzKCkpKTtcblx0XHQvLyB9XG5cdH1cblxufVxuIl19