import { StructureCommand } from '../../../../../structure-core/src/core/structure.command';
export class SetSearchPhraseCommand extends StructureCommand {
    phrase;
    initial;
    constructor(structureId, phrase, initial) {
        super(structureId, 'SetSearchPhraseCommand');
        this.phrase = phrase;
        this.initial = initial;
    }
    getPhrase() {
        return this.phrase;
    }
    isInitial() {
        return this.initial;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9jb3JlL3BocmFzZS9zZXQtcGhyYXNlL3NldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFNUYsTUFBTSxPQUFPLHNCQUF1QixTQUFRLGdCQUFnQjtJQUd2QztJQUNBO0lBRnBCLFlBQVksV0FBd0IsRUFDaEIsTUFBYyxFQUNkLE9BQWdCO1FBQ25DLEtBQUssQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUMsQ0FBQztRQUYxQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUVwQyxDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2NvcmUvc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwaHJhc2U6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbml0aWFsOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRTZWFyY2hQaHJhc2VDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQaHJhc2UoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5waHJhc2U7XG5cdH1cblxuXHRpc0luaXRpYWwoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaW5pdGlhbDtcblx0fVxuXG59XG4iXX0=