import { SummariesValues } from '../summaries.values';
export class NumberSummarizedValues extends SummariesValues {
    constructor(sum, min, max, average, median) {
        super();
        this.sum = this.setValueWithPrecision(sum);
        this.min = this.setValueWithPrecision(min);
        this.max = this.setValueWithPrecision(max);
        this.average = this.setValueWithPrecision(average);
        this.median = this.setValueWithPrecision(median);
    }
    setValueWithPrecision(value) {
        if (!value && value !== 0) {
            return null;
        }
        if (value === 0) {
            return 0;
        }
        return +((value).toFixed(2));
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXN1bW1hcml6ZWQudmFsdWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9zdW1tYXJpZXMvc3JjL2RvbWFpbi9jYWxjdWxhdGlvbi9udW1iZXIvbnVtYmVyLXN1bW1hcml6ZWQudmFsdWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV0RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZUFBZTtJQVExRCxZQUFZLEdBQVcsRUFDcEIsR0FBVyxFQUNYLEdBQVcsRUFDWCxPQUFlLEVBQ2YsTUFBYztRQUNoQixLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFTyxxQkFBcUIsQ0FBQyxLQUFhO1FBQzFDLElBQUksQ0FBQyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQztTQUNaO1FBRUQsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1Q7UUFFRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1bW1hcmllc1ZhbHVlcyB9IGZyb20gJy4uL3N1bW1hcmllcy52YWx1ZXMnO1xuXG5leHBvcnQgY2xhc3MgTnVtYmVyU3VtbWFyaXplZFZhbHVlcyBleHRlbmRzIFN1bW1hcmllc1ZhbHVlcyB7XG5cblx0cHVibGljIHJlYWRvbmx5IHN1bTogbnVtYmVyO1xuXHRwdWJsaWMgcmVhZG9ubHkgbWluOiBudW1iZXI7XG5cdHB1YmxpYyByZWFkb25seSBtYXg6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IGF2ZXJhZ2U6IG51bWJlcjtcblx0cHVibGljIHJlYWRvbmx5IG1lZGlhbjogbnVtYmVyO1xuXG5cdGNvbnN0cnVjdG9yKHN1bTogbnVtYmVyLFxuXHRcdFx0XHRtaW46IG51bWJlcixcblx0XHRcdFx0bWF4OiBudW1iZXIsXG5cdFx0XHRcdGF2ZXJhZ2U6IG51bWJlcixcblx0XHRcdFx0bWVkaWFuOiBudW1iZXIpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuc3VtID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24oc3VtKTtcblx0XHR0aGlzLm1pbiA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKG1pbik7XG5cdFx0dGhpcy5tYXggPSB0aGlzLnNldFZhbHVlV2l0aFByZWNpc2lvbihtYXgpO1xuXHRcdHRoaXMuYXZlcmFnZSA9IHRoaXMuc2V0VmFsdWVXaXRoUHJlY2lzaW9uKGF2ZXJhZ2UpO1xuXHRcdHRoaXMubWVkaWFuID0gdGhpcy5zZXRWYWx1ZVdpdGhQcmVjaXNpb24obWVkaWFuKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0VmFsdWVXaXRoUHJlY2lzaW9uKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuXHRcdGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGlmICh2YWx1ZSA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICsoKHZhbHVlKS50b0ZpeGVkKDIpKTtcblx0fVxuXG59XG4iXX0=