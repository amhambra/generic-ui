import { ColumnWidthType } from './column-width-type';
export class ColumnWidth {
    constructor(width) {
        this.baseWidth = width;
        this.setWidthAndType(width);
    }
    getWidth() {
        return this.width;
    }
    getColumnType() {
        return this.template;
    }
    isTypePercentage() {
        return this.template === ColumnWidthType.PERCENTAGE;
    }
    isTypeAuto() {
        return this.template === ColumnWidthType.AUTO;
    }
    isTypeNumber() {
        return this.template === ColumnWidthType.NUMBER;
    }
    setWidth(width) {
        this.width = width;
    }
    setWidthAndType(width) {
        if (width === undefined || width === null || width === 'auto') {
            this.template = ColumnWidthType.AUTO;
            this.setWidth(null);
        }
        else if (this.isPercentage(width)) {
            this.template = ColumnWidthType.PERCENTAGE;
            this.setWidth(this.percentageToNumber('' + width));
        }
        else if (this.isStringNumber(width)) {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
        else {
            this.template = ColumnWidthType.NUMBER;
            this.setWidth(+width);
        }
    }
    clone() {
        return new ColumnWidth(this.baseWidth);
    }
    isPercentage(width) {
        return typeof width === 'string' && width[width.length - 1] === '%';
    }
    /**
     * Width needs to be in format '89%'
     * @param width
     */
    percentageToNumber(width) {
        return +(width.slice(0, -1));
    }
    isStringNumber(width) {
        const widthAsNumber = +width;
        return Number.isNaN(widthAsNumber);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXdpZHRoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLXdpZHRoL2NvbHVtbi13aWR0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFdEQsTUFBTSxPQUFPLFdBQVc7SUFRdkIsWUFBWSxLQUF1QjtRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssZUFBZSxDQUFDLFVBQVUsQ0FBQztJQUNyRCxDQUFDO0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxlQUFlLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUM7SUFDakQsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBc0I7UUFFckMsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUU5RCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUVwQjthQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUVwQyxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FFbkQ7YUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFFdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBRU4sSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtJQUNGLENBQUM7SUFFRCxLQUFLO1FBQ0osT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVPLFlBQVksQ0FBQyxLQUFzQjtRQUMxQyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDckUsQ0FBQztJQUVEOzs7T0FHRztJQUNLLGtCQUFrQixDQUFDLEtBQWE7UUFDdkMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxjQUFjLENBQUMsS0FBc0I7UUFDNUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFN0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbHVtbldpZHRoVHlwZSB9IGZyb20gJy4vY29sdW1uLXdpZHRoLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgQ29sdW1uV2lkdGgge1xuXG5cdHByaXZhdGUgdGVtcGxhdGU6IENvbHVtbldpZHRoVHlwZTtcblxuXHRwcml2YXRlIGJhc2VXaWR0aDogbnVtYmVyIHwgc3RyaW5nO1xuXG5cdHByaXZhdGUgd2lkdGg6IG51bWJlcjtcblxuXHRjb25zdHJ1Y3Rvcih3aWR0aD86IG51bWJlciB8IHN0cmluZykge1xuXHRcdHRoaXMuYmFzZVdpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5zZXRXaWR0aEFuZFR5cGUod2lkdGgpO1xuXHR9XG5cblx0Z2V0V2lkdGgoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy53aWR0aDtcblx0fVxuXG5cdGdldENvbHVtblR5cGUoKTogQ29sdW1uV2lkdGhUeXBlIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZTtcblx0fVxuXG5cdGlzVHlwZVBlcmNlbnRhZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5QRVJDRU5UQUdFO1xuXHR9XG5cblx0aXNUeXBlQXV0bygpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50ZW1wbGF0ZSA9PT0gQ29sdW1uV2lkdGhUeXBlLkFVVE87XG5cdH1cblxuXHRpc1R5cGVOdW1iZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMudGVtcGxhdGUgPT09IENvbHVtbldpZHRoVHlwZS5OVU1CRVI7XG5cdH1cblxuXHRzZXRXaWR0aCh3aWR0aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHR9XG5cblx0c2V0V2lkdGhBbmRUeXBlKHdpZHRoOiBudW1iZXIgfCBzdHJpbmcpOiB2b2lkIHtcblxuXHRcdGlmICh3aWR0aCA9PT0gdW5kZWZpbmVkIHx8IHdpZHRoID09PSBudWxsIHx8IHdpZHRoID09PSAnYXV0bycpIHtcblxuXHRcdFx0dGhpcy50ZW1wbGF0ZSA9IENvbHVtbldpZHRoVHlwZS5BVVRPO1xuXHRcdFx0dGhpcy5zZXRXaWR0aChudWxsKTtcblxuXHRcdH0gZWxzZSBpZiAodGhpcy5pc1BlcmNlbnRhZ2Uod2lkdGgpKSB7XG5cblx0XHRcdHRoaXMudGVtcGxhdGUgPSBDb2x1bW5XaWR0aFR5cGUuUEVSQ0VOVEFHRTtcblx0XHRcdHRoaXMuc2V0V2lkdGgodGhpcy5wZXJjZW50YWdlVG9OdW1iZXIoJycgKyB3aWR0aCkpO1xuXG5cdFx0fSBlbHNlIGlmICh0aGlzLmlzU3RyaW5nTnVtYmVyKHdpZHRoKSkge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0XHRcdHRoaXMuc2V0V2lkdGgoK3dpZHRoKTtcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLnRlbXBsYXRlID0gQ29sdW1uV2lkdGhUeXBlLk5VTUJFUjtcblx0XHRcdHRoaXMuc2V0V2lkdGgoK3dpZHRoKTtcblx0XHR9XG5cdH1cblxuXHRjbG9uZSgpOiBDb2x1bW5XaWR0aCB7XG5cdFx0cmV0dXJuIG5ldyBDb2x1bW5XaWR0aCh0aGlzLmJhc2VXaWR0aCk7XG5cdH1cblxuXHRwcml2YXRlIGlzUGVyY2VudGFnZSh3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHR5cGVvZiB3aWR0aCA9PT0gJ3N0cmluZycgJiYgd2lkdGhbd2lkdGgubGVuZ3RoIC0gMV0gPT09ICclJztcblx0fVxuXG5cdC8qKlxuXHQgKiBXaWR0aCBuZWVkcyB0byBiZSBpbiBmb3JtYXQgJzg5JSdcblx0ICogQHBhcmFtIHdpZHRoXG5cdCAqL1xuXHRwcml2YXRlIHBlcmNlbnRhZ2VUb051bWJlcih3aWR0aDogc3RyaW5nKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gKyh3aWR0aC5zbGljZSgwLCAtMSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBpc1N0cmluZ051bWJlcih3aWR0aDogbnVtYmVyIHwgc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0Y29uc3Qgd2lkdGhBc051bWJlciA9ICt3aWR0aDtcblxuXHRcdHJldHVybiBOdW1iZXIuaXNOYU4od2lkdGhBc051bWJlcik7XG5cdH1cbn1cbiJdfQ==