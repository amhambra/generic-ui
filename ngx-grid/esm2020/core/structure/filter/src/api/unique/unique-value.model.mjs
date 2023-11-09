export class UniqueValueModel {
    constructor(id, value, enabled) {
        this.id = id;
        this.value = value;
        this.enabled = enabled;
    }
    getId() {
        return this.id;
    }
    getValue() {
        return this.value;
    }
    geDisplayValue() {
        return this.displayValue;
    }
    isEnabled() {
        return this.enabled;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWx0ZXIvc3JjL2FwaS91bmlxdWUvdW5pcXVlLXZhbHVlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxnQkFBZ0I7SUFVNUIsWUFDQyxFQUFpQixFQUNqQixLQUFVLEVBQ1YsT0FBZ0I7UUFFaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0lBRUQsU0FBUztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUtaWQnO1xuXG5leHBvcnQgY2xhc3MgVW5pcXVlVmFsdWVNb2RlbCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBpZDogVW5pcXVlVmFsdWVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHZhbHVlOiBhbnk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkaXNwbGF5VmFsdWU6IHN0cmluZztcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0aWQ6IFVuaXF1ZVZhbHVlSWQsXG5cdFx0dmFsdWU6IGFueSxcblx0XHRlbmFibGVkOiBib29sZWFuXG5cdCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5lbmFibGVkID0gZW5hYmxlZDtcblx0fVxuXG5cdGdldElkKCk6IFVuaXF1ZVZhbHVlSWQge1xuXHRcdHJldHVybiB0aGlzLmlkO1xuXHR9XG5cblx0Z2V0VmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG5cdGdlRGlzcGxheVZhbHVlKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuZGlzcGxheVZhbHVlO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19