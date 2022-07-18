import { UnselectAllUniqueFilterCommand } from './unselect-all-unique-filter.command';
export class UnselectAllUniqueFilterCommandHandler {
    forCommand() {
        return UnselectAllUniqueFilterCommand;
    }
    handle(structure, command) {
        const fieldId = command.getFieldId();
        structure.unselectAllUniqueFilter(fieldId);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5zZWxlY3QtYWxsLXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2NvcmUvdW5pcXVlL3Vuc2VsZWN0LWFsbC91bnNlbGVjdC1hbGwtdW5pcXVlLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFLdEYsTUFBTSxPQUFPLHFDQUFxQztJQUVqRCxVQUFVO1FBQ1QsT0FBTyw4QkFBOEIsQ0FBQztJQUN2QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQTZCLEVBQUUsT0FBdUM7UUFFNUUsTUFBTSxPQUFPLEdBQVksT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBRTlDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcblxuXG5leHBvcnQgY2xhc3MgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kPiB7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kO1xuXHR9XG5cblx0aGFuZGxlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBVbnNlbGVjdEFsbFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKTtcblxuXHRcdHN0cnVjdHVyZS51bnNlbGVjdEFsbFVuaXF1ZUZpbHRlcihmaWVsZElkKTtcblx0fVxuXG59XG4iXX0=