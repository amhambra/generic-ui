import { DomainInitializer } from '@generic-ui/hermes';
import { FieldArchive } from '../domain-read/field.archive';
import { FieldConverter } from '../domain-read/init/field.converter';
import { FieldDomainModule } from '../domain/field.domain-module';
import { FieldPublisher } from './field.publisher';
import { FieldWarehouse } from './field.warehouse';
import { FieldDomainWarehouse } from '../domain-read/field.domain-warehouse';
import { FieldDomainPublisher } from '../domain/field.domain-publisher';
export class FieldApiModule {
    registerProviders(container) {
        container.provide(FieldPublisher, FieldDomainPublisher);
        container.provide(FieldArchive);
        container.provide(FieldConverter);
        container.provide(FieldWarehouse, FieldDomainWarehouse);
    }
}
export const fieldInitializer = new DomainInitializer(new FieldApiModule(), new FieldDomainModule());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuYXBpLW1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmllbGQvYXBpL2ZpZWxkLmFwaS1tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUEyQixpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWhGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd4RSxNQUFNLE9BQU8sY0FBYztJQUUxQixpQkFBaUIsQ0FBQyxTQUFvQjtRQUNyQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hELFNBQVMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNsQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRDtBQUVELE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxjQUFjLEVBQUUsRUFBRSxJQUFJLGlCQUFpQixFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVByb3ZpZGVycywgQ29udGFpbmVyLCBEb21haW5Jbml0aWFsaXplciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2ZpZWxkLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmllbGRDb252ZXJ0ZXIgfSBmcm9tICcuLi9kb21haW4tcmVhZC9pbml0L2ZpZWxkLmNvbnZlcnRlcic7XG5pbXBvcnQgeyBGaWVsZERvbWFpbk1vZHVsZSB9IGZyb20gJy4uL2RvbWFpbi9maWVsZC5kb21haW4tbW9kdWxlJztcbmltcG9ydCB7IEZpZWxkUHVibGlzaGVyIH0gZnJvbSAnLi9maWVsZC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRmllbGRXYXJlaG91c2UgfSBmcm9tICcuL2ZpZWxkLndhcmVob3VzZSc7XG5pbXBvcnQgeyBGaWVsZERvbWFpbldhcmVob3VzZSB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2ZpZWxkLmRvbWFpbi13YXJlaG91c2UnO1xuaW1wb3J0IHsgRmllbGREb21haW5QdWJsaXNoZXIgfSBmcm9tICcuLi9kb21haW4vZmllbGQuZG9tYWluLXB1Ymxpc2hlcic7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQXBpTW9kdWxlIGltcGxlbWVudHMgQXBpUHJvdmlkZXJzIHtcblxuXHRyZWdpc3RlclByb3ZpZGVycyhjb250YWluZXI6IENvbnRhaW5lcik6IHZvaWQge1xuXHRcdGNvbnRhaW5lci5wcm92aWRlKEZpZWxkUHVibGlzaGVyLCBGaWVsZERvbWFpblB1Ymxpc2hlcik7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmllbGRBcmNoaXZlKTtcblx0XHRjb250YWluZXIucHJvdmlkZShGaWVsZENvbnZlcnRlcik7XG5cdFx0Y29udGFpbmVyLnByb3ZpZGUoRmllbGRXYXJlaG91c2UsIEZpZWxkRG9tYWluV2FyZWhvdXNlKTtcblx0fVxufVxuXG5leHBvcnQgY29uc3QgZmllbGRJbml0aWFsaXplciA9IG5ldyBEb21haW5Jbml0aWFsaXplcihuZXcgRmllbGRBcGlNb2R1bGUoKSwgbmV3IEZpZWxkRG9tYWluTW9kdWxlKCkpO1xuXG5cbiJdfQ==