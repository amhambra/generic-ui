import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetRowHeightBasedOnThemeCommand } from './set-row-height-based-on-theme.command';
import { RowHeightSetBasedOnThemeEvent } from './row-height-set-based-on-theme.event';
export class SetRowHeightBasedOnThemeCommandHandler {
    constructor() {
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetRowHeightBasedOnThemeCommand;
    }
    handle(structure, command) {
        const theme = command.getTheme();
        structure.setTheme(theme);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publish(new RowHeightSetBasedOnThemeEvent(command.getAggregateId()));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vZG9tYWluL3NldC1yb3ctaGVpZ2h0LXRoZW1lL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQStCLGFBQWEsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTFGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBR3RGLE1BQU0sT0FBTyxzQ0FBc0M7SUFBbkQ7UUFFa0IseUJBQW9CLEdBQXlCLGFBQWEsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQWlCM0csQ0FBQztJQWZBLFVBQVU7UUFDVCxPQUFPLCtCQUErQixDQUFDO0lBQ3hDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUF3QztRQUU3RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBd0M7UUFDOUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLDZCQUE2QixDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEcsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBDb3JlQ29udGFpbmVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQgfSBmcm9tICcuL3NldC1yb3ctaGVpZ2h0LWJhc2VkLW9uLXRoZW1lLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBSb3dIZWlnaHRTZXRCYXNlZE9uVGhlbWVFdmVudCB9IGZyb20gJy4vcm93LWhlaWdodC1zZXQtYmFzZWQtb24tdGhlbWUuZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRCYXNlZE9uVGhlbWVDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyID0gQ29yZUNvbnRhaW5lci5yZXNvbHZlKERvbWFpbkV2ZW50UHVibGlzaGVyKTtcblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgdGhlbWUgPSBjb21tYW5kLmdldFRoZW1lKCk7XG5cblx0XHRzdHJ1Y3R1cmUuc2V0VGhlbWUodGhlbWUpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUm93SGVpZ2h0U2V0QmFzZWRPblRoZW1lRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxufVxuIl19