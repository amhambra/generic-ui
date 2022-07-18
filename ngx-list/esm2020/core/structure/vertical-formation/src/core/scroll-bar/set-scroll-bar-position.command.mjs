import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export class SetScrollBarPositionCommand extends StructureCommand {
    constructor(structureId, position) {
        super(structureId, 'SetScrollBarPositionCommand');
        this.position = position;
    }
    getPosition() {
        return this.position;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvdmVydGljYWwtZm9ybWF0aW9uL3NyYy9jb3JlL3Njcm9sbC1iYXIvc2V0LXNjcm9sbC1iYXItcG9zaXRpb24uY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUd6RixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCO0lBRWhFLFlBQVksV0FBd0IsRUFDaEIsUUFBZ0I7UUFDbkMsS0FBSyxDQUFDLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1FBRC9CLGFBQVEsR0FBUixRQUFRLENBQVE7SUFFcEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0U2Nyb2xsQmFyUG9zaXRpb25Db21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHBvc2l0aW9uOiBudW1iZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFNjcm9sbEJhclBvc2l0aW9uQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5wb3NpdGlvbjtcblx0fVxuXG59XG4iXX0=