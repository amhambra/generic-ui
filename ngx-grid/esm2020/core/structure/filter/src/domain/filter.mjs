import { Entity } from '@generic-ui/hermes';
export class Filter extends Entity {
    constructor(filterId, fieldId, filterTypeId, filterValue) {
        super(filterId);
        this.filterId = filterId;
        this.fieldId = fieldId;
        this.filterTypeId = filterTypeId;
        this.filterValue = filterValue;
    }
    getFilterId() {
        return this.filterId;
    }
    getFilterTypeId() {
        return this.filterTypeId;
    }
    getFieldId() {
        return this.fieldId;
    }
    getFilterValue() {
        return this.filterValue;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2RvbWFpbi9maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTVDLE1BQU0sT0FBTyxNQUFPLFNBQVEsTUFBZ0I7SUFVM0MsWUFBWSxRQUFrQixFQUMzQixPQUFnQixFQUNoQixZQUEwQixFQUMxQixXQUFnQjtRQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmlsdGVySWQgfSBmcm9tICcuLi9hcGkvaWQvZmlsdGVyLmlkJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5leHBvcnQgY2xhc3MgRmlsdGVyIGV4dGVuZHMgRW50aXR5PEZpbHRlcklkPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJJZDogRmlsdGVySWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJWYWx1ZTogYW55O1xuXG5cdGNvbnN0cnVjdG9yKGZpbHRlcklkOiBGaWx0ZXJJZCxcblx0XHRcdFx0ZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsXG5cdFx0XHRcdGZpbHRlclZhbHVlOiBhbnkpIHsgLy8gVE9ETyBub3QgYW55XG5cdFx0c3VwZXIoZmlsdGVySWQpO1xuXHRcdHRoaXMuZmlsdGVySWQgPSBmaWx0ZXJJZDtcblx0XHR0aGlzLmZpZWxkSWQgPSBmaWVsZElkO1xuXHRcdHRoaXMuZmlsdGVyVHlwZUlkID0gZmlsdGVyVHlwZUlkO1xuXHRcdHRoaXMuZmlsdGVyVmFsdWUgPSBmaWx0ZXJWYWx1ZTtcblx0fVxuXG5cdGdldEZpbHRlcklkKCk6IEZpbHRlcklkIHtcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXJJZDtcblx0fVxuXG5cdGdldEZpbHRlclR5cGVJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZDtcblx0fVxuXG5cdGdldEZpZWxkSWQoKTogRmllbGRJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmllbGRJZDtcblx0fVxuXG5cdGdldEZpbHRlclZhbHVlKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVmFsdWU7XG5cdH1cblxufVxuIl19