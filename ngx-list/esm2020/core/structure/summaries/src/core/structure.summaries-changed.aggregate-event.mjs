import { StructureSummariesChangedEvent } from './structure.summaries-changed.event';
import { StructureAggregateEvent } from '../../../structure-core/src/core/structure.aggregate-event';
export class StructureSummariesChangedAggregateEvent extends StructureAggregateEvent {
    constructor(aggregateId, summarizedValues) {
        super(aggregateId, 'StructureSummariesChangedAggregateEvent');
        this.summarizedValues = summarizedValues;
    }
    toDomainEvent() {
        return new StructureSummariesChangedEvent(this.getAggregateId(), this.summarizedValues);
    }
    getSummaries() {
        return this.summarizedValues;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1jaGFuZ2VkLmFnZ3JlZ2F0ZS1ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9jb3JlL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5hZ2dyZWdhdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUEsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDckYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFHckcsTUFBTSxPQUFPLHVDQUF3QyxTQUFRLHVCQUF1QjtJQUVuRixZQUFZLFdBQXdCLEVBQ2hCLGdCQUE4QztRQUNqRSxLQUFLLENBQUMsV0FBVyxFQUFFLHlDQUF5QyxDQUFDLENBQUM7UUFEM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUE4QjtJQUVsRSxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELFlBQVk7UUFDWCxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCwgRG9tYWluRXZlbnQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNWYWx1ZXMgfSBmcm9tICcuLi9kb21haW4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLnZhbHVlcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkRXZlbnQgfSBmcm9tICcuL3N0cnVjdHVyZS5zdW1tYXJpZXMtY2hhbmdlZC5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5hZ2dyZWdhdGUtZXZlbnQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTdW1tYXJpZXNDaGFuZ2VkQWdncmVnYXRlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVBZ2dyZWdhdGVFdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN1bW1hcml6ZWRWYWx1ZXM6IE1hcDxzdHJpbmcsIFN1bW1hcmllc1ZhbHVlcz4pIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgJ1N0cnVjdHVyZVN1bW1hcmllc0NoYW5nZWRBZ2dyZWdhdGVFdmVudCcpO1xuXHR9XG5cblx0dG9Eb21haW5FdmVudCgpOiBEb21haW5FdmVudDxTdHJ1Y3R1cmVJZD4ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlU3VtbWFyaWVzQ2hhbmdlZEV2ZW50KHRoaXMuZ2V0QWdncmVnYXRlSWQoKSwgdGhpcy5zdW1tYXJpemVkVmFsdWVzKTtcblx0fVxuXG5cdGdldFN1bW1hcmllcygpOiBNYXA8c3RyaW5nLCBTdW1tYXJpZXNWYWx1ZXM+IHtcblx0XHRyZXR1cm4gdGhpcy5zdW1tYXJpemVkVmFsdWVzO1xuXHR9XG59XG4iXX0=