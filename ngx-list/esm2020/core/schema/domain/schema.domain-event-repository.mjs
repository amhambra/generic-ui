import { hermesMap } from '@generic-ui/hermes';
import { SchemaThemeSetEvent } from './theme/schema-theme-set.event';
import { SchemaHorizontalGridSetEvent } from './grid/horizontal/schema-horizontal-grid-set.event';
import { SchemaVerticalGridSetEvent } from './grid/vertical/schema-vertical-grid-set.event';
import { RowColoringSetEvent } from './row-coloring/row-coloring-set.event';
import { SchemaEventRepository } from '../api/schema.event-repository';
export class SchemaDomainEventRepository extends SchemaEventRepository {
    constructor() {
        super();
    }
    onThemeChanged(schemaId) {
        return this.onEvent(schemaId, SchemaThemeSetEvent)
            .pipe(hermesMap((event) => {
            return event.getTheme();
        }));
    }
    onHorizontalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaHorizontalGridSetEvent)
            .pipe(hermesMap((event) => event.getHorizontalGrid()));
    }
    onVerticalGridChanged(schemaId) {
        return this.onEvent(schemaId, SchemaVerticalGridSetEvent)
            .pipe(hermesMap((event) => event.getVerticalGrid()));
    }
    onRowColoring(schemaId) {
        return this.onEvent(schemaId, RowColoringSetEvent)
            .pipe(hermesMap((event) => event.getRowColoring()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3NjaGVtYS9kb21haW4vc2NoZW1hLmRvbWFpbi1ldmVudC1yZXBvc2l0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sb0JBQW9CLENBQUM7QUFHakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFFNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHdkUsTUFBTSxPQUFPLDJCQUE0QixTQUFRLHFCQUFxQjtJQUVyRTtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUErQjtRQUU3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO2FBQzVDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUU7WUFDeEMsT0FBTyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQ0YsQ0FBQztJQUNSLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxRQUErQjtRQUV0RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLDRCQUE0QixDQUFDO2FBQ3JELElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxLQUFtQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUM3RSxDQUFDO0lBQ1IsQ0FBQztJQUVELHFCQUFxQixDQUFDLFFBQStCO1FBRXBELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsMEJBQTBCLENBQUM7YUFDbkQsSUFBSSxDQUNKLFNBQVMsQ0FBQyxDQUFDLEtBQWlDLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUN6RSxDQUFDO0lBQ1IsQ0FBQztJQUVELGFBQWEsQ0FBQyxRQUErQjtRQUU1QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDO2FBQzVDLElBQUksQ0FDSixTQUFTLENBQUMsQ0FBQyxLQUEwQixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FDakUsQ0FBQztJQUNSLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhlcm1lc01hcCwgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9hcGkvdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lU2V0RXZlbnQgfSBmcm9tICcuL3RoZW1lL3NjaGVtYS10aGVtZS1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU2NoZW1hSG9yaXpvbnRhbEdyaWRTZXRFdmVudCB9IGZyb20gJy4vZ3JpZC9ob3Jpem9udGFsL3NjaGVtYS1ob3Jpem9udGFsLWdyaWQtc2V0LmV2ZW50JztcbmltcG9ydCB7IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50IH0gZnJvbSAnLi9ncmlkL3ZlcnRpY2FsL3NjaGVtYS12ZXJ0aWNhbC1ncmlkLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2FwaS9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZ1NldEV2ZW50IH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvcm93LWNvbG9yaW5nLXNldC5ldmVudCc7XG5pbXBvcnQgeyBTY2hlbWFFdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi9hcGkvc2NoZW1hLmV2ZW50LXJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFEb21haW5FdmVudFJlcG9zaXRvcnkgZXh0ZW5kcyBTY2hlbWFFdmVudFJlcG9zaXRvcnkge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRvblRoZW1lQ2hhbmdlZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hVGhlbWVTZXRFdmVudClcblx0XHRcdFx0ICAgLnBpcGUoXG5cdFx0XHRcdFx0ICAgaGVybWVzTWFwKChldmVudDogU2NoZW1hVGhlbWVTZXRFdmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ICAgcmV0dXJuIGV2ZW50LmdldFRoZW1lKCk7XG5cdFx0XHRcdFx0ICAgfSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uSG9yaXpvbnRhbEdyaWRDaGFuZ2VkKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IFNjaGVtYUhvcml6b250YWxHcmlkU2V0RXZlbnQpID0+IGV2ZW50LmdldEhvcml6b250YWxHcmlkKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxuXHRvblZlcnRpY2FsR3JpZENoYW5nZWQoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMub25FdmVudChzY2hlbWFJZCwgU2NoZW1hVmVydGljYWxHcmlkU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IFNjaGVtYVZlcnRpY2FsR3JpZFNldEV2ZW50KSA9PiBldmVudC5nZXRWZXJ0aWNhbEdyaWQoKSlcblx0XHRcdFx0ICAgKTtcblx0fVxuXG5cdG9uUm93Q29sb3Jpbmcoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hUm93Q29sb3Jpbmc+IHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQoc2NoZW1hSWQsIFJvd0NvbG9yaW5nU2V0RXZlbnQpXG5cdFx0XHRcdCAgIC5waXBlKFxuXHRcdFx0XHRcdCAgIGhlcm1lc01hcCgoZXZlbnQ6IFJvd0NvbG9yaW5nU2V0RXZlbnQpID0+IGV2ZW50LmdldFJvd0NvbG9yaW5nKCkpXG5cdFx0XHRcdCAgICk7XG5cdH1cblxufVxuIl19