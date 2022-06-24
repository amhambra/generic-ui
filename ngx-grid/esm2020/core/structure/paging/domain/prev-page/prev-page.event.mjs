import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export class PrevPageEvent extends StructureDomainEvent {
    constructor(aggregateId) {
        super(aggregateId, null, 'PrevPageEvent');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldi1wYWdlLmV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3ByZXYtcGFnZS9wcmV2LXBhZ2UuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFbkYsTUFBTSxPQUFPLGFBQWMsU0FBUSxvQkFBb0I7SUFFdEQsWUFBWSxXQUF3QjtRQUNuQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuZXhwb3J0IGNsYXNzIFByZXZQYWdlRXZlbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IFN0cnVjdHVyZUlkKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG51bGwsICdQcmV2UGFnZUV2ZW50Jyk7XG5cdH1cbn1cbiJdfQ==