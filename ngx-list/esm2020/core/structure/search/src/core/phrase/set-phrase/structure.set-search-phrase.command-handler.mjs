import { CoreContainer, DomainEventPublisher } from '@generic-ui/hermes';
import { SetSearchPhraseCommand } from './set-search-phrase.command';
import { SearchPhraseSetDomainEvent } from './search-phrase-set.domain-event';
import { SourceDomainEventPublisher } from '../../../../../source/src/core/source.domain-event.publisher';
export class StructureSetSearchPhraseCommandHandler {
    constructor(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
        this.domainEventPublisher = CoreContainer.resolve(DomainEventPublisher);
    }
    forCommand() {
        return SetSearchPhraseCommand;
    }
    handle(aggregate, command) {
        const phrase = command.getPhrase();
        aggregate.addSearchPhrase(phrase);
    }
    publish(aggregate, command) {
        const phrase = command.getPhrase(), initial = command.isInitial();
        this.domainEventPublisher.publish(new SearchPhraseSetDomainEvent(command.getAggregateId(), phrase, initial));
        this.structureSourceDomainEventPublisher.publish(aggregate.getEvents());
    }
}
StructureSetSearchPhraseCommandHandler.services = [SourceDomainEventPublisher];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9jb3JlL3BocmFzZS9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUErQixhQUFhLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUkxRyxNQUFNLE9BQU8sc0NBQXNDO0lBSWxELFlBQTZCLG1DQUErRDtRQUEvRCx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQTRCO1FBRjNFLHlCQUFvQixHQUF5QixhQUFhLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFHMUcsQ0FBQztJQUlELFVBQVU7UUFDVCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUErQjtRQUVwRSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbkMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxDQUFDLFNBQTZCLEVBQUUsT0FBK0I7UUFFckUsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUNqQyxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSwwQkFBMEIsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLG1DQUFtQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDOztBQXBCZSwrQ0FBUSxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgQ29yZUNvbnRhaW5lciwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50IH0gZnJvbSAnLi9zZWFyY2gtcGhyYXNlLXNldC5kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zb3VyY2Uvc3JjL2NvcmUvc291cmNlLmRvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0U2VhcmNoUGhyYXNlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFNlYXJjaFBocmFzZUNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlciA9IENvcmVDb250YWluZXIucmVzb2x2ZShEb21haW5FdmVudFB1Ymxpc2hlcik7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcjogU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcl07XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRTZWFyY2hQaHJhc2VDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFNlYXJjaFBocmFzZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFNlYXJjaFBocmFzZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBocmFzZSA9IGNvbW1hbmQuZ2V0UGhyYXNlKCk7XG5cblx0XHRhZ2dyZWdhdGUuYWRkU2VhcmNoUGhyYXNlKHBocmFzZSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwaHJhc2UgPSBjb21tYW5kLmdldFBocmFzZSgpLFxuXHRcdFx0aW5pdGlhbCA9IGNvbW1hbmQuaXNJbml0aWFsKCk7XG5cblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFNlYXJjaFBocmFzZVNldERvbWFpbkV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSwgcGhyYXNlLCBpbml0aWFsKSk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKSk7XG5cdH1cblxufVxuIl19