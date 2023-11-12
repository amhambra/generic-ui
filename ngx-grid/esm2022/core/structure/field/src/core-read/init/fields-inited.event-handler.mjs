import { FieldArchive } from '../field.archive';
import { FieldConverter } from './field.converter';
import { FieldsInitedEvent } from '../../core/init/fields-inited.event';
export class FieldsInitedEventHandler {
    fieldArchive;
    fieldConverter;
    constructor(fieldArchive, fieldConverter) {
        this.fieldArchive = fieldArchive;
        this.fieldConverter = fieldConverter;
    }
    static services = [
        FieldArchive,
        FieldConverter
    ];
    forEvent() {
        return FieldsInitedEvent;
    }
    handle(event) {
        if (event.ofMessageType('FieldsInitedEvent')) {
            const fields = this.fieldConverter.convert(event.getFields());
            this.fieldArchive.next(event.getAggregateId(), fields);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvY29yZS1yZWFkL2luaXQvZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJeEUsTUFBTSxPQUFPLHdCQUF3QjtJQUVQO0lBQ1Q7SUFEcEIsWUFBNkIsWUFBMEIsRUFDbkMsY0FBOEI7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCxNQUFNLENBQVUsUUFBUSxHQUFHO1FBQzFCLFlBQVk7UUFDWixjQUFjO0tBQ0wsQ0FBQztJQUVYLFFBQVE7UUFDUCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBd0I7UUFFOUIsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFFN0MsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFFOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZEO0lBRUYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRBcmNoaXZlIH0gZnJvbSAnLi4vZmllbGQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBGaWVsZENvbnZlcnRlciB9IGZyb20gJy4vZmllbGQuY29udmVydGVyJztcbmltcG9ydCB7IEZpZWxkc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vY29yZS9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWVsZHNJbml0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpZWxkc0luaXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZEFyY2hpdmU6IEZpZWxkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbnZlcnRlcjogRmllbGRDb252ZXJ0ZXIpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtcblx0XHRGaWVsZEFyY2hpdmUsXG5cdFx0RmllbGRDb252ZXJ0ZXJcblx0XSBhcyBjb25zdDtcblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8RmllbGRzSW5pdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gRmllbGRzSW5pdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IEZpZWxkc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZXZlbnQub2ZNZXNzYWdlVHlwZSgnRmllbGRzSW5pdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCBmaWVsZHMgPSB0aGlzLmZpZWxkQ29udmVydGVyLmNvbnZlcnQoZXZlbnQuZ2V0RmllbGRzKCkpO1xuXG5cdFx0XHR0aGlzLmZpZWxkQXJjaGl2ZS5uZXh0KGV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIGZpZWxkcyk7XG5cdFx0fVxuXG5cdH1cblxufVxuIl19