import { EntityId } from '@generic-ui/hermes';
export class BaseFilterType extends EntityId {
    // private readonly filterTypeId: FilterTypeId;
    constructor(filterTypeId) {
        super(filterTypeId);
        // this.filterTypeId = filterTypeId;
    }
    // getId(): FilterTypeId {
    // 	return this.filterTypeId;
    // }
    toString() {
        return this.getId().toString();
    }
    filterMany(entities, field, value) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.filter((item) => {
            return this.filterEntity(item, field, value);
        });
    }
    filterOne(entity, field, value) {
        return this.filterEntity(entity, field, value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1maWx0ZXItdHlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi90eXBlL2Jhc2UtZmlsdGVyLXR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE1BQU0sT0FBZ0IsY0FBa0IsU0FBUSxRQUFzQjtJQUVyRSwrQ0FBK0M7SUFFL0MsWUFBc0IsWUFBMEI7UUFDL0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BCLG9DQUFvQztJQUNyQyxDQUFDO0lBTUQsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixJQUFJO0lBRUosUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxVQUFVLENBQUMsUUFBaUMsRUFBRSxLQUFrQixFQUFFLEtBQVE7UUFFekUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLFFBQVEsQ0FBQztTQUNoQjtRQUVELE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQXNCLEVBQUUsRUFBRTtZQUNqRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBd0IsRUFBRSxLQUFrQixFQUFFLEtBQVE7UUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBFbnRpdHlJZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRmlsdGVyVHlwZTxUPiBleHRlbmRzIEVudGl0eUlkPEZpbHRlclR5cGVJZD4ge1xuXG5cdC8vIHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKSB7XG5cdFx0c3VwZXIoZmlsdGVyVHlwZUlkKTtcblx0XHQvLyB0aGlzLmZpbHRlclR5cGVJZCA9IGZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGFic3RyYWN0IGdldE5hbWUoKTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBmaWx0ZXJFbnRpdHkoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGRFbnRpdHksIHZhbHVlOiBUKTogYm9vbGVhbjtcblxuXHQvLyBnZXRJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHQvLyBcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZDtcblx0Ly8gfVxuXG5cdHRvU3RyaW5nKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0SWQoKS50b1N0cmluZygpO1xuXHR9XG5cblx0ZmlsdGVyTWFueShlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkOiBGaWVsZEVudGl0eSwgdmFsdWU6IFQpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gZW50aXRpZXM7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVudGl0aWVzLmZpbHRlcigoaXRlbTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXHRcdFx0cmV0dXJuIHRoaXMuZmlsdGVyRW50aXR5KGl0ZW0sIGZpZWxkLCB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmaWx0ZXJPbmUoZW50aXR5OiBPcmlnaW5JdGVtRW50aXR5LCBmaWVsZDogRmllbGRFbnRpdHksIHZhbHVlOiBUKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyRW50aXR5KGVudGl0eSwgZmllbGQsIHZhbHVlKTtcblx0fVxufVxuIl19