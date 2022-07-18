export class UniqueValueCollectionModel {
    constructor(map) {
        this.map = new Map();
        this.allSelected = new Map();
        this.allDisabled = new Map();
        this.map = map;
        this.calculateSelection();
    }
    getValues(fieldId) {
        return this.map.get(fieldId.toString());
    }
    areAllSelected(fieldId) {
        return this.allSelected.get(fieldId.toString());
    }
    areAllDisabled(fieldId) {
        return this.allDisabled.get(fieldId.toString());
    }
    isSelectAllChecked(fieldId) {
        return this.areAllSelected(fieldId);
    }
    isIndeterminate(fieldId) {
        return !(this.areAllSelected(fieldId) || this.areAllDisabled(fieldId));
    }
    calculateSelection() {
        for (const key of Array.from(this.map.keys())) {
            const values = this.map.get(key);
            this.allSelected.set(key, !values.some((r) => !r.isEnabled()));
            this.allDisabled.set(key, !values.some((r) => r.isEnabled()));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24ubW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL3VuaXF1ZS91bmlxdWUtdmFsdWUtY29sbGVjdGlvbi5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sMEJBQTBCO0lBUXRDLFlBQVksR0FBeUM7UUFOcEMsUUFBRyxHQUFHLElBQUksR0FBRyxFQUFtQyxDQUFDO1FBRWpELGdCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRS9ELGdCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFtQixDQUFDO1FBRy9FLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBZ0I7UUFDOUIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsY0FBYyxDQUFDLE9BQWdCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGtCQUFrQixDQUFDLE9BQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWdCO1FBQy9CLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxrQkFBa0I7UUFFekIsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUU5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDbkIsR0FBRyxFQUNILENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDbkMsQ0FBQztZQUVGLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUNuQixHQUFHLEVBQ0gsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDbEMsQ0FBQztTQUNGO0lBQ0YsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLm1vZGVsJztcblxuZXhwb3J0IGNsYXNzIFVuaXF1ZVZhbHVlQ29sbGVjdGlvbk1vZGVsIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZU1vZGVsPj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGFsbFNlbGVjdGVkOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXA8c3RyaW5nLCBib29sZWFuPigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgYWxsRGlzYWJsZWQ6IE1hcDxzdHJpbmcsIGJvb2xlYW4+ID0gbmV3IE1hcDxzdHJpbmcsIGJvb2xlYW4+KCk7XG5cblx0Y29uc3RydWN0b3IobWFwOiBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZU1vZGVsPj4pIHtcblx0XHR0aGlzLm1hcCA9IG1hcDtcblx0XHR0aGlzLmNhbGN1bGF0ZVNlbGVjdGlvbigpO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGZpZWxkSWQ6IEZpZWxkSWQpOiBBcnJheTxVbmlxdWVWYWx1ZU1vZGVsPiB7XG5cdFx0cmV0dXJuIHRoaXMubWFwLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsU2VsZWN0ZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbFNlbGVjdGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0YXJlQWxsRGlzYWJsZWQoZmllbGRJZDogRmllbGRJZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmFsbERpc2FibGVkLmdldChmaWVsZElkLnRvU3RyaW5nKCkpO1xuXHR9XG5cblx0aXNTZWxlY3RBbGxDaGVja2VkKGZpZWxkSWQ6IEZpZWxkSWQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKTtcblx0fVxuXG5cdGlzSW5kZXRlcm1pbmF0ZShmaWVsZElkOiBGaWVsZElkKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5hcmVBbGxTZWxlY3RlZChmaWVsZElkKSB8fCB0aGlzLmFyZUFsbERpc2FibGVkKGZpZWxkSWQpKTtcblx0fVxuXG5cdHByaXZhdGUgY2FsY3VsYXRlU2VsZWN0aW9uKCk6IHZvaWQge1xuXG5cdFx0Zm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLm1hcC5rZXlzKCkpKSB7XG5cblx0XHRcdGNvbnN0IHZhbHVlcyA9IHRoaXMubWFwLmdldChrZXkpO1xuXG5cdFx0XHR0aGlzLmFsbFNlbGVjdGVkLnNldChcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHQhdmFsdWVzLnNvbWUoKHIpID0+ICFyLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy5hbGxEaXNhYmxlZC5zZXQoXG5cdFx0XHRcdGtleSxcblx0XHRcdFx0IXZhbHVlcy5zb21lKChyKSA9PiByLmlzRW5hYmxlZCgpKVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cbn1cbiJdfQ==