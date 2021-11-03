import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SetScrollBarPositionCommand } from './set-scroll-bar-position.command';
export class SetScrollBarPositionCommandHandler {
    constructor(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    forCommand() {
        return SetScrollBarPositionCommand;
    }
    handle(structure, command) {
        const index = command.getPosition();
        structure.scrollToIndex(index);
    }
    publish(aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    }
}
SetScrollBarPositionCommandHandler.decorators = [
    { type: Injectable }
];
SetScrollBarPositionCommandHandler.ctorParameters = () => [
    { type: DomainEventPublisher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL2NvcmUvZG9tYWluL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS2hGLE1BQU0sT0FBTyxrQ0FBa0M7SUFFOUMsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUFvQztRQUV6RSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFcEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBb0M7UUFDMUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQW5CRCxVQUFVOzs7WUFMMkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4vc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8U2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBpbmRleCA9IGNvbW1hbmQuZ2V0UG9zaXRpb24oKTtcblxuXHRcdHN0cnVjdHVyZS5zY3JvbGxUb0luZGV4KGluZGV4KTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=