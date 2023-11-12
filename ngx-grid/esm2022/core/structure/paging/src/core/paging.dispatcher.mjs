import { CommandDispatcher } from '@generic-ui/hermes';
import { SetPagingCommand } from './set/set-paging.command';
import { ChangePagesizeCommand } from './change-pagesize/change-pagesize.command';
import { NextPageCommand } from './next-page/next-page.command';
import { PrevPageCommand } from './prev-page/prev-page.command';
export class PagingDispatcher {
    commandDispatcher;
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    static services = [CommandDispatcher];
    setPaging(paging, structureId) {
        this.commandDispatcher.dispatch(new SetPagingCommand(structureId, paging));
    }
    changePageSize(pageSize, structureId) {
        this.commandDispatcher.dispatch(new ChangePagesizeCommand(structureId, pageSize));
    }
    nextPage(structureId) {
        this.commandDispatcher.dispatch(new NextPageCommand(structureId));
    }
    prevPage(structureId) {
        this.commandDispatcher.dispatch(new PrevPageCommand(structureId));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvY29yZS9wYWdpbmcuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR2hFLE1BQU0sT0FBTyxnQkFBZ0I7SUFFQztJQUE3QixZQUE2QixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUNqRSxDQUFDO0lBRUQsTUFBTSxDQUFVLFFBQVEsR0FBRyxDQUFDLGlCQUFpQixDQUFVLENBQUM7SUFFeEQsU0FBUyxDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxjQUFjLENBQUMsUUFBZ0IsRUFBRSxXQUF3QjtRQUN4RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUkscUJBQXFCLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELFFBQVEsQ0FBQyxXQUF3QjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vYXBpL2NvbmZpZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFNldFBhZ2luZ0NvbW1hbmQgfSBmcm9tICcuL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgQ2hhbmdlUGFnZXNpemVDb21tYW5kIH0gZnJvbSAnLi9jaGFuZ2UtcGFnZXNpemUvY2hhbmdlLXBhZ2VzaXplLmNvbW1hbmQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb21tYW5kIH0gZnJvbSAnLi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQnO1xuaW1wb3J0IHsgUHJldlBhZ2VDb21tYW5kIH0gZnJvbSAnLi9wcmV2LXBhZ2UvcHJldi1wYWdlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBQYWdpbmdEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0NvbW1hbmREaXNwYXRjaGVyXSBhcyBjb25zdDtcblxuXHRzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFBhZ2luZ0NvbW1hbmQoc3RydWN0dXJlSWQsIHBhZ2luZykpO1xuXHR9XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgQ2hhbmdlUGFnZXNpemVDb21tYW5kKHN0cnVjdHVyZUlkLCBwYWdlU2l6ZSkpO1xuXHR9XG5cblx0bmV4dFBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgTmV4dFBhZ2VDb21tYW5kKHN0cnVjdHVyZUlkKSk7XG5cdH1cblxuXHRwcmV2UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBQcmV2UGFnZUNvbW1hbmQoc3RydWN0dXJlSWQpKTtcblx0fVxufVxuIl19