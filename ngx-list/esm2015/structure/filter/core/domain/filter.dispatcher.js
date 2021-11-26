import { SetConfigFilterCommand } from './config/set-config-filter.command';
import { AddFilterCommand } from './core/add/add-filter.command';
import { RemoveAllFiltersCommand } from './core/remove-all/remove-all-filters.command';
import { RemoveFilterCommand } from './core/remove/remove-filter.command';
import { SelectAllUniqueFilterCommand } from './unique/select-all/select-all-unique-filter.command';
import { UnselectAllUniqueFilterCommand } from './unique/unselect-all/unselect-all-unique-filter.command';
import { SelectUniqueFilterCommand } from './unique/select/select-unique-filter.command';
import { UnselectUniqueFilterCommand } from './unique/unselect/unselect-unique-filter.command';
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
export class FilterDispatcher {
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    setConfig(config, structureId) {
        this.commandDispatcher.dispatch(new SetConfigFilterCommand(structureId, config));
    }
    add(fieldId, filterTypeId, value, structureId) {
        this.commandDispatcher.dispatch(new AddFilterCommand(structureId, fieldId, filterTypeId, value));
    }
    removeAll(structureId) {
        this.commandDispatcher.dispatch(new RemoveAllFiltersCommand(structureId));
    }
    remove(filterId, structureId) {
        this.commandDispatcher.dispatch(new RemoveFilterCommand(structureId, filterId));
    }
    selectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new SelectAllUniqueFilterCommand(structureId, fieldId));
    }
    unselectAllUniqueFilter(fieldId, structureId) {
        this.commandDispatcher.dispatch(new UnselectAllUniqueFilterCommand(structureId, fieldId));
    }
    selectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
    unselectUniqueFilter(fieldId, uniqueValueId, structureId) {
        this.commandDispatcher.dispatch(new UnselectUniqueFilterCommand(structureId, fieldId, uniqueValueId));
    }
}
FilterDispatcher.decorators = [
    { type: Injectable }
];
FilterDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vZmlsdGVyLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFHNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFdkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDcEcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDekYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDL0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxNQUFNLE9BQU8sZ0JBQWdCO0lBRTVCLFlBQTZCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ2pFLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBb0IsRUFBRSxXQUF3QjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVELEdBQUcsQ0FBQyxPQUFnQixFQUFFLFlBQTBCLEVBQUUsS0FBVSxFQUFFLFdBQXdCO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxTQUFTLENBQUMsV0FBd0I7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFrQixFQUFFLFdBQXdCO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBZ0IsRUFBRSxXQUF3QjtRQUMvRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNEJBQTRCLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHVCQUF1QixDQUFDLE9BQWdCLEVBQUUsV0FBd0I7UUFDakUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLDhCQUE4QixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxPQUFnQixFQUFFLGFBQTRCLEVBQUUsV0FBd0I7UUFDMUYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsT0FBZ0IsRUFBRSxhQUE0QixFQUFFLFdBQXdCO1FBQzVGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSwyQkFBMkIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7O1lBcENELFVBQVU7OztZQUZGLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbHRlckNvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvZmlsdGVyLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi90eXBlL2ZpbHRlci10eXBlLmlkJztcbmltcG9ydCB7IEFkZEZpbHRlckNvbW1hbmQgfSBmcm9tICcuL2NvcmUvYWRkL2FkZC1maWx0ZXIuY29tbWFuZCc7XG5pbXBvcnQgeyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCB9IGZyb20gJy4vY29yZS9yZW1vdmUtYWxsL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kJztcbmltcG9ydCB7IEZpbHRlcklkIH0gZnJvbSAnLi4vYXBpL2ZpbHRlci5pZCc7XG5pbXBvcnQgeyBSZW1vdmVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi9jb3JlL3JlbW92ZS9yZW1vdmUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vdW5pcXVlL3NlbGVjdC1hbGwvc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QtYWxsL3Vuc2VsZWN0LWFsbC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIH0gZnJvbSAnLi91bmlxdWUvdW5zZWxlY3QvdW5zZWxlY3QtdW5pcXVlLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlckRpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRDb25maWcoY29uZmlnOiBGaWx0ZXJDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ0ZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0YWRkKGZpZWxkSWQ6IEZpZWxkSWQsIGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBBZGRGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCBmaWx0ZXJUeXBlSWQsIHZhbHVlKSk7XG5cdH1cblxuXHRyZW1vdmVBbGwoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxuXG5cdHJlbW92ZShmaWx0ZXJJZDogRmlsdGVySWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFJlbW92ZUZpbHRlckNvbW1hbmQoc3RydWN0dXJlSWQsIGZpbHRlcklkKSk7XG5cdH1cblxuXHRzZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0QWxsVW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCkpO1xuXHR9XG5cblx0dW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RBbGxVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkKSk7XG5cdH1cblxuXHRzZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRJZCwgdW5pcXVlVmFsdWVJZCkpO1xuXHR9XG5cblx0dW5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgVW5zZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZElkLCB1bmlxdWVWYWx1ZUlkKSk7XG5cdH1cbn1cbiJdfQ==