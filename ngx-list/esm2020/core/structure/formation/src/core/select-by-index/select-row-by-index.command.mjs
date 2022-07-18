import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SelectRowByIndexCommand extends StructureCommand {
    constructor(structureId, indexes) {
        super(structureId, 'SelectRowByIndexCommand');
        this.indexes = indexes;
    }
    getIndexes() {
        return this.indexes;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJvdy1ieS1pbmRleC5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvc2VsZWN0LWJ5LWluZGV4L3NlbGVjdC1yb3ctYnktaW5kZXguY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUV6RixNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBRTVELFlBQVksV0FBd0IsRUFDaEIsT0FBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRDNCLFlBQU8sR0FBUCxPQUFPLENBQWU7SUFFMUMsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFNlbGVjdFJvd0J5SW5kZXhDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGluZGV4ZXM6IEFycmF5PG51bWJlcj4pIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NlbGVjdFJvd0J5SW5kZXhDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRJbmRleGVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLmluZGV4ZXM7XG5cdH1cblxufVxuIl19