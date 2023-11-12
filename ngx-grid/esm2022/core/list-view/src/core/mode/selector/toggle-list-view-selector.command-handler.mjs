import { ToggleListViewSelectorCommand } from './toggle-list-view-selector.command';
export class ToggleListViewSelectorCommandHandler {
    forCommand() {
        return ToggleListViewSelectorCommand;
    }
    handle(listViewAggregate, command) {
        const enabled = command.isEnabled();
        listViewAggregate.toggleModeSelector(enabled);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L3NyYy9jb3JlL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJcEYsTUFBTSxPQUFPLG9DQUFvQztJQUVoRCxVQUFVO1FBQ1QsT0FBTyw2QkFBNkIsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLGlCQUFvQyxFQUFFLE9BQXNDO1FBRWxGLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVwQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZCB9IGZyb20gJy4vdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxMaXN0Vmlld0FnZ3JlZ2F0ZSwgVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQ+IHtcblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKGxpc3RWaWV3QWdncmVnYXRlOiBMaXN0Vmlld0FnZ3JlZ2F0ZSwgY29tbWFuZDogVG9nZ2xlTGlzdFZpZXdTZWxlY3RvckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGVuYWJsZWQgPSBjb21tYW5kLmlzRW5hYmxlZCgpO1xuXG5cdFx0bGlzdFZpZXdBZ2dyZWdhdGUudG9nZ2xlTW9kZVNlbGVjdG9yKGVuYWJsZWQpO1xuXHR9XG5cbn1cbiJdfQ==