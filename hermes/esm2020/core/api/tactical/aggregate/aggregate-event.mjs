export class AggregateEvent {
    constructor(aggregateId, type) {
        this.aggregateId = aggregateId;
        this.type = type;
    }
    getAggregateId() {
        return this.aggregateId;
    }
    getType() {
        return this.type;
    }
    equals(event) {
        return this.equalsByType(event) &&
            this.getAggregateId().equals(event.getAggregateId());
    }
    equalsByType(event) {
        return this.getType() === event.getType();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvYXBpL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFnQixjQUFjO0lBRW5DLFlBQ2tCLFdBQWMsRUFDZCxJQUFZO1FBRFosZ0JBQVcsR0FBWCxXQUFXLENBQUc7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQzlCLENBQUM7SUFJRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBd0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxZQUFZLENBQUMsS0FBd0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNDLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi9ldmVudC9kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWdncmVnYXRlRXZlbnQ8VCBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlSWQ6IFQsXG5cdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBzdHJpbmcpIHtcblx0fVxuXG5cdGFic3RyYWN0IHRvRG9tYWluRXZlbnQoKTogRG9tYWluRXZlbnQ8VD47XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogQWdncmVnYXRlSWQge1xuXHRcdHJldHVybiB0aGlzLmFnZ3JlZ2F0ZUlkO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxuXHRlcXVhbHMoZXZlbnQ6IEFnZ3JlZ2F0ZUV2ZW50PFQ+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZXF1YWxzQnlUeXBlKGV2ZW50KSAmJlxuXHRcdFx0dGhpcy5nZXRBZ2dyZWdhdGVJZCgpLmVxdWFscyhldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0fVxuXG5cdGVxdWFsc0J5VHlwZShldmVudDogQWdncmVnYXRlRXZlbnQ8VD4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRUeXBlKCkgPT09IGV2ZW50LmdldFR5cGUoKTtcblx0fVxuXG59XG4iXX0=