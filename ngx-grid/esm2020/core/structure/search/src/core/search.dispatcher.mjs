import { CommandDispatcher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './config/set-config-searching.command';
import { SetSearchPhraseCommand } from './phrase/set-phrase/set-search-phrase.command';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
export class SearchDispatcher {
    constructor(commandDispatcher, searchHighlightArchive, searchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    setSearchingConfig(config, structureId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.searchHighlightArchive.next(structureId, config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.searchPlaceholderArchive.next(structureId, config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    }
    search(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    searchOnInit(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    }
}
SearchDispatcher.services = [CommandDispatcher, SearchHighlightArchive, SearchPlaceholderArchive];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9zcmMvY29yZS9zZWFyY2guZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN2RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUdwRixNQUFNLE9BQU8sZ0JBQWdCO0lBRTVCLFlBQTZCLGlCQUFvQyxFQUM3QyxzQkFBOEMsRUFDOUMsd0JBQWtEO1FBRnpDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3RFLENBQUM7SUFJRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLFdBQXdCO1FBRWhFLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNwRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQWMsRUFBRSxXQUF3QjtRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFTyxZQUFZLENBQUMsTUFBYyxFQUFFLFdBQXdCO1FBQzVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7QUF6QmUseUJBQVEsR0FBRyxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHdCQUF3QixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL2FwaS9jb25maWcvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9waHJhc2Uvc2V0LXBocmFzZS9zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNlYXJjaERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0fVxuXG5cdHN0YXRpYyByZWFkb25seSBzZXJ2aWNlcyA9IFtDb21tYW5kRGlzcGF0Y2hlciwgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSwgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlXTtcblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuaGlnaGxpZ2h0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlYXJjaEhpZ2hsaWdodEFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgY29uZmlnLmhpZ2hsaWdodGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgY29uZmlnLnBsYWNlaG9sZGVyKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBocmFzZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5waHJhc2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoT25Jbml0KGNvbmZpZy5waHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlLCBmYWxzZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWFyY2hPbkluaXQocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlYXJjaFBocmFzZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBocmFzZSwgdHJ1ZSkpO1xuXHR9XG5cbn1cbiJdfQ==