import { EventDrivenRepository } from '@generic-ui/hermes';
import { SchemaVerticalGridSetEvent } from '../../domain/grid/vertical/schema-vertical-grid-set.event';
export class SchemaVerticalGridRepository extends EventDrivenRepository {
    constructor() {
        super();
    }
    forEvent() {
        return SchemaVerticalGridSetEvent;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnZlcnRpY2FsLWdyaWQucmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zY2hlbWEvZG9tYWluLXJlYWQvdmVydGljYWwtZ3JpZC9zY2hlbWEudmVydGljYWwtZ3JpZC5yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBbUIscUJBQXFCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU1RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUd2RyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEscUJBQW9FO0lBRXJIO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sMEJBQTBCLENBQUM7SUFDbkMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRG9tYWluRXZlbnRUeXBlLCBFdmVudERyaXZlblJlcG9zaXRvcnkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU2NoZW1hSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL2dyaWQvdmVydGljYWwvc2NoZW1hLXZlcnRpY2FsLWdyaWQtc2V0LmV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hVmVydGljYWxHcmlkUmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50RHJpdmVuUmVwb3NpdG9yeTxTY2hlbWFJZCwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQsIGJvb2xlYW4+IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50PiB7XG5cdFx0cmV0dXJuIFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50O1xuXHR9XG5cbn1cbiJdfQ==