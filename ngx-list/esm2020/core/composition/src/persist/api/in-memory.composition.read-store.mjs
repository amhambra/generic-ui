import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../core-read/composition.read-model-root-converter';
export class InMemoryCompositionReadStore extends InMemoryReadModelStore {
    constructor(inMemoryCompositionStore, compositionConverter) {
        super(inMemoryCompositionStore);
        this.inMemoryCompositionStore = inMemoryCompositionStore;
        this.compositionConverter = compositionConverter;
    }
    toReadModel(aggregate) {
        return this.compositionConverter.convert(aggregate);
    }
}
InMemoryCompositionReadStore.services = [InMemoryCompositionStore, CompositionReadModelRootConverter];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvY29tcG9zaXRpb24vc3JjL3BlcnNpc3QvYXBpL2luLW1lbW9yeS5jb21wb3NpdGlvbi5yZWFkLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSTVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBSzFHLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxzQkFHNUI7SUFFckIsWUFBb0Isd0JBQWtELEVBQzNELG9CQUF1RDtRQUNqRSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUZiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFtQztJQUVsRSxDQUFDO0lBSUQsV0FBVyxDQUFDLFNBQStCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOztBQUplLHFDQUFRLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vY29yZS1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZS1yb290JztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vY29yZS1yZWFkL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2FwaS9nbG9iYWwvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdElkLFxuXHRDb21wb3NpdGlvblJlYWRNb2RlUm9vdCxcblx0Q29tcG9zaXRpb25JZCxcblx0Q29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uQ29udmVydGVyOiBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUpO1xuXHR9XG5cblx0c3RhdGljIHJlYWRvbmx5IHNlcnZpY2VzID0gW0luTWVtb3J5Q29tcG9zaXRpb25TdG9yZSwgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyXTtcblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Qge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uQ29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=