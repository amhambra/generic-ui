import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export class SelectionModeSetEvent extends StructureDomainEvent {
    constructor(aggregateId, mode) {
        super(aggregateId, mode, 'SelectionModeSetEvent');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aW9uLW1vZGUtc2V0LmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9mb3JtYXRpb24vc3JjL2NvcmUvbW9kZS9zZWxlY3Rpb24tbW9kZS1zZXQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFFbEcsTUFBTSxPQUFPLHFCQUFzQixTQUFRLG9CQUFvQjtJQUU5RCxZQUFZLFdBQXdCLEVBQ2hCLElBQXNCO1FBQ3pDLEtBQUssQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixDQUFDLENBQUM7UUFEL0IsU0FBSSxHQUFKLElBQUksQ0FBa0I7SUFFMUMsQ0FBQztJQUVELE9BQU87UUFDTixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93U2VsZWN0aW9uTW9kZSB9IGZyb20gJy4uLy4uL2FwaS9yb3ctc2VsZWN0ZWQvcm93LXNlbGVjdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEb21haW5FdmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL3N0cnVjdHVyZS1jb3JlL3NyYy9jb3JlL3N0cnVjdHVyZS5kb21haW4tZXZlbnQnO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aW9uTW9kZVNldEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1vZGUsICdTZWxlY3Rpb25Nb2RlU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldE1vZGUoKTogUm93U2VsZWN0aW9uTW9kZSB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZTtcblx0fVxuXG59XG4iXX0=