import { Injectable } from '@angular/core';
import { SetVerticalScrollEnabledCommand } from './set-enabled/set-vertical-scroll-enabled.command';
import { SetScrollBarPositionCommand } from './scroll-bar/set-scroll-bar-position.command';
import { SetScrollPositionCommand } from './scroll-position/set-scroll-position.command';
import { CommandDispatcher } from '@generic-ui/hermes';
export class VerticalFormationDispatcher {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    setVirtualScrollEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new SetVerticalScrollEnabledCommand(structureId, enabled));
    }
    scrollTo(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollBarPositionCommand(structureId, position));
    }
    setScrollPosition(position, structureId) {
        this.commandDispatcher.dispatch(new SetScrollPositionCommand(structureId, position));
    }
}
VerticalFormationDispatcher.decorators = [
    { type: Injectable }
];
VerticalFormationDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLFlBQTZCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ2pFLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwrQkFBK0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsUUFBUSxDQUFDLFFBQWdCLEVBQUUsV0FBd0I7UUFDbEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDJCQUEyQixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxRQUFnQixFQUFFLFdBQXdCO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUFoQkQsVUFBVTs7O1lBSEYsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZCB9IGZyb20gJy4vc2V0LWVuYWJsZWQvc2V0LXZlcnRpY2FsLXNjcm9sbC1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9zY3JvbGwtYmFyL3NldC1zY3JvbGwtYmFyLXBvc2l0aW9uLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi9zY3JvbGwtcG9zaXRpb24vc2V0LXNjcm9sbC1wb3NpdGlvbi5jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25EaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c2V0VmlydHVhbFNjcm9sbEVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0VmVydGljYWxTY3JvbGxFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2Nyb2xsVG8ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cblx0c2V0U2Nyb2xsUG9zaXRpb24ocG9zaXRpb246IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2Nyb2xsUG9zaXRpb25Db21tYW5kKHN0cnVjdHVyZUlkLCBwb3NpdGlvbikpO1xuXHR9XG5cbn1cbiJdfQ==