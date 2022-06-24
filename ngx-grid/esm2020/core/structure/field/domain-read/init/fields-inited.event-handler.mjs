import { FieldArchive } from '../field.archive';
import { FieldConverter } from './field.converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
export class FieldsInitedEventHandler {
    constructor(fieldArchive, fieldConverter) {
        this.fieldArchive = fieldArchive;
        this.fieldConverter = fieldConverter;
    }
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
FieldsInitedEventHandler.services = [
    FieldArchive,
    FieldConverter
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGRzLWluaXRlZC5ldmVudC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9kb21haW4tcmVhZC9pbml0L2ZpZWxkcy1pbml0ZWQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSTFFLE1BQU0sT0FBTyx3QkFBd0I7SUFFcEMsWUFBNkIsWUFBMEIsRUFDbkMsY0FBOEI7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDbkMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFPRCxRQUFRO1FBQ1AsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQXdCO1FBRTlCLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBRTdDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUN2RDtJQUVGLENBQUM7O0FBbEJlLGlDQUFRLEdBQUc7SUFDMUIsWUFBWTtJQUNaLGNBQWM7Q0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZEFyY2hpdmUgfSBmcm9tICcuLi9maWVsZC5hcmNoaXZlJztcbmltcG9ydCB7IEZpZWxkQ29udmVydGVyIH0gZnJvbSAnLi9maWVsZC5jb252ZXJ0ZXInO1xuaW1wb3J0IHsgRmllbGRzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vaW5pdC9maWVsZHMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkc0luaXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgRmllbGRzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkQXJjaGl2ZTogRmllbGRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkQ29udmVydGVyOiBGaWVsZENvbnZlcnRlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW1xuXHRcdEZpZWxkQXJjaGl2ZSxcblx0XHRGaWVsZENvbnZlcnRlclxuXHRdIGFzIGNvbnN0O1xuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxGaWVsZHNJbml0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBGaWVsZHNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogRmllbGRzSW5pdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdGaWVsZHNJbml0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IGZpZWxkcyA9IHRoaXMuZmllbGRDb252ZXJ0ZXIuY29udmVydChldmVudC5nZXRGaWVsZHMoKSk7XG5cblx0XHRcdHRoaXMuZmllbGRBcmNoaXZlLm5leHQoZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgZmllbGRzKTtcblx0XHR9XG5cblx0fVxuXG59XG4iXX0=