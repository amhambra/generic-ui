import { StructureDomainEvent } from '../../../../../structure-core/src/core/structure.domain-event';
export class StructureSourceItemEditedEvent extends StructureDomainEvent {
    beforeItem;
    afterItem;
    constructor(aggregateId, beforeItem, afterItem) {
        super(aggregateId, { beforeItem, afterItem }, 'StructureSourceItemEditedEvent');
        this.beforeItem = beforeItem;
        this.afterItem = afterItem;
    }
    getBeforeItem() {
        return this.beforeItem;
    }
    getAfterItem() {
        return this.afterItem;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvdXJjZS1pdGVtLWVkaXRlZC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc291cmNlL3NyYy9jb3JlL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5zb3VyY2UtaXRlbS1lZGl0ZWQuZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHckcsTUFBTSxPQUFPLDhCQUErQixTQUFRLG9CQUFvQjtJQUduRDtJQUNBO0lBRnBCLFlBQVksV0FBd0IsRUFDaEIsVUFBc0IsRUFDdEIsU0FBcUI7UUFDeEMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRjdELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBWTtJQUV6QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2l0ZW0vaXRlbS5lbnRpdHknO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlRG9tYWluRXZlbnQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtY29yZS9zcmMvY29yZS9zdHJ1Y3R1cmUuZG9tYWluLWV2ZW50JztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50IGV4dGVuZHMgU3RydWN0dXJlRG9tYWluRXZlbnQge1xuXG5cdGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBiZWZvcmVJdGVtOiBJdGVtRW50aXR5LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFmdGVySXRlbTogSXRlbUVudGl0eSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCB7IGJlZm9yZUl0ZW0sIGFmdGVySXRlbSB9LCAnU3RydWN0dXJlU291cmNlSXRlbUVkaXRlZEV2ZW50Jyk7XG5cdH1cblxuXHRnZXRCZWZvcmVJdGVtKCk6IEl0ZW1FbnRpdHkge1xuXHRcdHJldHVybiB0aGlzLmJlZm9yZUl0ZW07XG5cdH1cblxuXHRnZXRBZnRlckl0ZW0oKTogSXRlbUVudGl0eSB7XG5cdFx0cmV0dXJuIHRoaXMuYWZ0ZXJJdGVtO1xuXHR9XG5cbn1cbiJdfQ==