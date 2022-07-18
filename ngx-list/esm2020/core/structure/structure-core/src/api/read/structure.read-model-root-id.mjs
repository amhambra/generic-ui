import { ReadModelRootId } from '@generic-ui/hermes';
import { StructureId } from '../global/structure.id';
export class StructureReadModelRootId extends ReadModelRootId {
    constructor(id) {
        super(id);
    }
    toAggregateId() {
        return new StructureId(this.toString());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdC1pZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFlLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUdyRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZUFBZTtJQUU1RCxZQUFZLEVBQVU7UUFDckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkLCBSZWFkTW9kZWxSb290SWQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQgZXh0ZW5kcyBSZWFkTW9kZWxSb290SWQge1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcpIHtcblx0XHRzdXBlcihpZCk7XG5cdH1cblxuXHR0b0FnZ3JlZ2F0ZUlkKCk6IEFnZ3JlZ2F0ZUlkIHtcblx0XHRyZXR1cm4gbmV3IFN0cnVjdHVyZUlkKHRoaXMudG9TdHJpbmcoKSk7XG5cdH1cbn1cbiJdfQ==