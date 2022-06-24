import { ListViewDispatcher } from './list-view.dispatcher';
import { listViewKey } from '../api/list-view.api-module';
import { SetListViewModeCommandHandler } from './mode/set-list-view-mode.command-handler';
import { ToggleListViewSelectorCommandHandler } from './mode/selector/toggle-list-view-selector.command-handler';
import { ListViewModeSetEventHandler } from '../api/mode/list-view-mode-set.event-handler';
import { ListViewSelectorToggledEventHandler } from '../api/mode/selector/list-view-selector-toggled.event-handler';
import { CreateListViewCommandHandler } from './create/create-list-view.command-handler';
import { ListViewAggregateFactory } from './list-view.aggregate-factory';
import { InMemoryListViewAggregateRepository } from '../infrastructure/in-memory/in-memory.list-view.aggregate-repository';
export class ListViewDomainModule {
    defineAggregate() {
        return {
            aggregateKey: listViewKey,
            createCommandHandler: CreateListViewCommandHandler,
            factory: ListViewAggregateFactory,
            repository: InMemoryListViewAggregateRepository
        };
    }
    registerKey() {
        return listViewKey;
    }
    registerProviders(container) {
        container.provide(ListViewDispatcher);
    }
    registerCommandHandlers() {
        return [
            SetListViewModeCommandHandler,
            ToggleListViewSelectorCommandHandler
        ];
    }
    registerDomainEventHandler() {
        return [
            ListViewModeSetEventHandler,
            ListViewSelectorToggledEventHandler
        ];
    }
    registerMultiDomainEventHandler() {
        return [];
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRvbWFpbi1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvbGlzdC12aWV3L2RvbWFpbi9saXN0LXZpZXcuZG9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDMUYsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDakgsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDM0YsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFDcEgsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDekYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFHM0gsTUFBTSxPQUFPLG9CQUFvQjtJQUVoQyxlQUFlO1FBQ2QsT0FBTztZQUNOLFlBQVksRUFBRSxXQUFXO1lBQ3pCLG9CQUFvQixFQUFFLDRCQUE0QjtZQUNsRCxPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLFVBQVUsRUFBRSxtQ0FBbUM7U0FDL0MsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1YsT0FBTyxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQW9CO1FBQ3JDLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsdUJBQXVCO1FBQ3RCLE9BQU87WUFDTiw2QkFBNkI7WUFDN0Isb0NBQW9DO1NBQ3BDLENBQUM7SUFDSCxDQUFDO0lBRUQsMEJBQTBCO1FBQ3pCLE9BQU87WUFDTiwyQkFBMkI7WUFDM0IsbUNBQW1DO1NBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsK0JBQStCO1FBQzlCLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlRGVmaW5pdGlvbiwgQWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3QsIENvbW1hbmQsIENvbnRhaW5lciwgRG9tYWluRXZlbnQsIERvbWFpblByb3ZpZGVycyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3RGlzcGF0Y2hlciB9IGZyb20gJy4vbGlzdC12aWV3LmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgbGlzdFZpZXdLZXkgfSBmcm9tICcuLi9hcGkvbGlzdC12aWV3LmFwaS1tb2R1bGUnO1xuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2V0LWxpc3Qtdmlldy1tb2RlLmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL21vZGUvc2VsZWN0b3IvdG9nZ2xlLWxpc3Qtdmlldy1zZWxlY3Rvci5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdNb2RlU2V0RXZlbnRIYW5kbGVyIH0gZnJvbSAnLi4vYXBpL21vZGUvbGlzdC12aWV3LW1vZGUtc2V0LmV2ZW50LWhhbmRsZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgfSBmcm9tICcuLi9hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyJztcbmltcG9ydCB7IENyZWF0ZUxpc3RWaWV3Q29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NyZWF0ZS9jcmVhdGUtbGlzdC12aWV3LmNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcblxuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdEb21haW5Nb2R1bGUgaW1wbGVtZW50cyBEb21haW5Qcm92aWRlcnMge1xuXG5cdGRlZmluZUFnZ3JlZ2F0ZSgpOiBBZ2dyZWdhdGVEZWZpbml0aW9uPGFueSwgYW55LCBhbnk+IHwgbnVsbCB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGFnZ3JlZ2F0ZUtleTogbGlzdFZpZXdLZXksXG5cdFx0XHRjcmVhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlTGlzdFZpZXdDb21tYW5kSGFuZGxlcixcblx0XHRcdGZhY3Rvcnk6IExpc3RWaWV3QWdncmVnYXRlRmFjdG9yeSxcblx0XHRcdHJlcG9zaXRvcnk6IEluTWVtb3J5TGlzdFZpZXdBZ2dyZWdhdGVSZXBvc2l0b3J5XG5cdFx0fTtcblx0fVxuXG5cdHJlZ2lzdGVyS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIGxpc3RWaWV3S2V5O1xuXHR9XG5cblx0cmVnaXN0ZXJQcm92aWRlcnMoY29udGFpbmVyOiBDb250YWluZXIpOiB2b2lkIHtcblx0XHRjb250YWluZXIucHJvdmlkZShMaXN0Vmlld0Rpc3BhdGNoZXIpO1xuXHR9XG5cblx0cmVnaXN0ZXJDb21tYW5kSGFuZGxlcnM8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRTZXRMaXN0Vmlld01vZGVDb21tYW5kSGFuZGxlcixcblx0XHRcdFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kSGFuZGxlclxuXHRcdF07XG5cdH1cblxuXHRyZWdpc3RlckRvbWFpbkV2ZW50SGFuZGxlcjxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEUgZXh0ZW5kcyBEb21haW5FdmVudDxJPj4oKTogQXJyYXk8YW55PiB7XG5cdFx0cmV0dXJuIFtcblx0XHRcdExpc3RWaWV3TW9kZVNldEV2ZW50SGFuZGxlcixcblx0XHRcdExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyXG5cdFx0XTtcblx0fVxuXG5cdHJlZ2lzdGVyTXVsdGlEb21haW5FdmVudEhhbmRsZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBFIGV4dGVuZHMgRG9tYWluRXZlbnQ8ST4+KCk6IEFycmF5PGFueT4ge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG59XG5cbiJdfQ==