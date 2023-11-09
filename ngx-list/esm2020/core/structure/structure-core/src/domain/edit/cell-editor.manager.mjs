export class CellEditorManager {
    constructor(config) {
        this.enabled = false;
        this.rowEdit = () => true;
        this.cellEdit = () => true;
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.rowEdit !== undefined) {
            this.rowEdit = config.rowEdit;
        }
        if (config.cellEdit !== undefined) {
            this.cellEdit = config.cellEdit;
        }
    }
    isEnabled(value, item, index) {
        return this.enabled && this.rowEdit(value, item, index) && this.cellEdit(value, item, index);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1lZGl0b3IubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9lZGl0L2NlbGwtZWRpdG9yLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLGlCQUFpQjtJQVE3QixZQUFZLE1BQXNCO1FBTmpCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTyxHQUFzRCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFFeEUsYUFBUSxHQUFzRCxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFJekYsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUM5QjtRQUVELElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2hDO0lBQ0YsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLEtBQWE7UUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDOUYsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VsbEVkaXRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZWRpdC9jZWxsLWVkaXQuY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIENlbGxFZGl0b3JNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHJvd0VkaXQ6ICh2YWx1ZTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY2VsbEVkaXQ6ICh2YWx1ZTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW4gPSAoKSA9PiB0cnVlO1xuXG5cdGNvbnN0cnVjdG9yKGNvbmZpZzogQ2VsbEVkaXRDb25maWcpIHtcblxuXHRcdGlmIChjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnJvd0VkaXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5yb3dFZGl0ID0gY29uZmlnLnJvd0VkaXQ7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5jZWxsRWRpdCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNlbGxFZGl0ID0gY29uZmlnLmNlbGxFZGl0O1xuXHRcdH1cblx0fVxuXG5cdGlzRW5hYmxlZCh2YWx1ZTogYW55LCBpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICYmIHRoaXMucm93RWRpdCh2YWx1ZSwgaXRlbSwgaW5kZXgpICYmIHRoaXMuY2VsbEVkaXQodmFsdWUsIGl0ZW0sIGluZGV4KTtcblx0fVxuXG59XG4iXX0=