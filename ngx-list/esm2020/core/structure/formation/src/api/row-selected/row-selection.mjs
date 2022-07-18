import { GenericBuilder } from '../../../../../../common/src/cdk/generic-builder';
export var RowSelectionType;
(function (RowSelectionType) {
    RowSelectionType[RowSelectionType["ROW"] = 0] = "ROW";
    RowSelectionType[RowSelectionType["CHECKBOX"] = 1] = "CHECKBOX";
    RowSelectionType[RowSelectionType["RADIO"] = 2] = "RADIO";
})(RowSelectionType || (RowSelectionType = {}));
export var RowSelectionMode;
(function (RowSelectionMode) {
    RowSelectionMode[RowSelectionMode["SINGLE"] = 0] = "SINGLE";
    RowSelectionMode[RowSelectionMode["MULTIPLE"] = 1] = "MULTIPLE";
})(RowSelectionMode || (RowSelectionMode = {}));
export class RowSelection {
    constructor(config) {
        if (config.enabled !== undefined) {
            this.enabled = config.enabled;
        }
        if (config.selectedRowIndexes !== undefined) {
            this.selectedRowIndexes = config.selectedRowIndexes;
        }
        if (config.selectedRowIds !== undefined) {
            this.selectedRowIds = config.selectedRowIds;
        }
        if (config.mode !== undefined) {
            this.mode = config.mode;
        }
        if (config.type !== undefined) {
            this.type = config.type;
        }
        if (config.matcher !== undefined) {
            this.matcher = config.matcher;
        }
    }
    isModeDefined() {
        return this.mode !== undefined;
    }
    isTypeDefined() {
        return this.type !== undefined;
    }
    isSelectedRowIndexesDefined() {
        return this.selectedRowIndexes !== undefined;
    }
    isSelectedRowIdsDefined() {
        return this.selectedRowIds !== undefined;
    }
    isEnabledDefined() {
        return this.enabled !== undefined;
    }
    isMatcherDefined() {
        return this.matcher !== undefined;
    }
    isEnabled() {
        return this.enabled;
    }
    getSelectedRowIndexes() {
        return this.selectedRowIndexes;
    }
    getSelectedRowIds() {
        return this.selectedRowIds;
    }
    getMode() {
        return this.mode;
    }
    getType() {
        return this.type;
    }
    getMatcher() {
        return this.matcher;
    }
}
// eslint-disable-next-line @typescript-eslint/member-ordering
RowSelection.Builder = class RowSelectionBuilder extends GenericBuilder {
    constructor() {
        super();
    }
    buildObject() {
        return new RowSelection({
            enabled: this.enabled,
            selectedRowIndexes: this.selectedRowIndexes,
            selectedRowIds: this.selectedRowIds,
            type: this.type,
            mode: this.mode,
            matcher: this.matcher
        });
    }
    withEnabled(enabled) {
        this.enabled = enabled;
        return this;
    }
    withSelectedRowIndexes(indexes) {
        this.selectedRowIndexes = indexes;
        return this;
    }
    withSelectedRowIds(ids) {
        this.selectedRowIds = ids;
        return this;
    }
    withType(type) {
        this.type = type;
        return this;
    }
    withMode(mode) {
        this.mode = mode;
        return this;
    }
    withMatcher(matcher) {
        this.matcher = matcher;
        return this;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LXNlbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZm9ybWF0aW9uL3NyYy9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRWxGLE1BQU0sQ0FBTixJQUFZLGdCQUlYO0FBSkQsV0FBWSxnQkFBZ0I7SUFDM0IscURBQUcsQ0FBQTtJQUNILCtEQUFRLENBQUE7SUFDUix5REFBSyxDQUFBO0FBQ04sQ0FBQyxFQUpXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFJM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzNCLDJEQUFNLENBQUE7SUFDTiwrREFBUSxDQUFBO0FBQ1QsQ0FBQyxFQUhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFHM0I7QUFFRCxNQUFNLE9BQU8sWUFBWTtJQWN4QixZQUFvQixNQU9uQjtRQUNBLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxNQUFNLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQzVDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUMsa0JBQWtCLENBQUM7U0FDcEQ7UUFFRCxJQUFJLE1BQU0sQ0FBQyxjQUFjLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztTQUM1QztRQUVELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMs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IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY29tbW9uL3NyYy9jZGsvZ2VuZXJpYy1idWlsZGVyJztcblxuZXhwb3J0IGVudW0gUm93U2VsZWN0aW9uVHlwZSB7XG5cdFJPVyxcblx0Q0hFQ0tCT1gsXG5cdFJBRElPXG59XG5cbmV4cG9ydCBlbnVtIFJvd1NlbGVjdGlvbk1vZGUge1xuXHRTSU5HTEUsXG5cdE1VTFRJUExFXG59XG5cbmV4cG9ydCBjbGFzcyBSb3dTZWxlY3Rpb24ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93SW5kZXhlczogQXJyYXk8bnVtYmVyPjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlbGVjdGVkUm93SWRzOiBBcnJheTxzdHJpbmc+O1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHlwZTogUm93U2VsZWN0aW9uVHlwZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGU7XG5cblx0cHJpdmF0ZSByZWFkb25seSBtYXRjaGVyOiAoaXRlbTogYW55KSA9PiBhbnk7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3Rvcihjb25maWc6IHtcblx0XHRlbmFibGVkPzogYm9vbGVhbixcblx0XHRzZWxlY3RlZFJvd0luZGV4ZXM/OiBBcnJheTxudW1iZXI+XG5cdFx0c2VsZWN0ZWRSb3dJZHM/OiBBcnJheTxzdHJpbmc+XG5cdFx0bW9kZT86IFJvd1NlbGVjdGlvbk1vZGUsXG5cdFx0dHlwZT86IFJvd1NlbGVjdGlvblR5cGUsXG5cdFx0bWF0Y2hlcj86IChpdGVtOiBhbnkpID0+IGFueSxcblx0fSkge1xuXHRcdGlmIChjb25maWcuZW5hYmxlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZWQgPSBjb25maWcuZW5hYmxlZDtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnNlbGVjdGVkUm93SW5kZXhlcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkUm93SW5kZXhlcyA9IGNvbmZpZy5zZWxlY3RlZFJvd0luZGV4ZXM7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5zZWxlY3RlZFJvd0lkcyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkUm93SWRzID0gY29uZmlnLnNlbGVjdGVkUm93SWRzO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcubW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLm1vZGUgPSBjb25maWcubW9kZTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnR5cGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy50eXBlID0gY29uZmlnLnR5cGU7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5tYXRjaGVyICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMubWF0Y2hlciA9IGNvbmZpZy5tYXRjaGVyO1xuXHRcdH1cblx0fVxuXG5cdGlzTW9kZURlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMubW9kZSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNUeXBlRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc1NlbGVjdGVkUm93SW5kZXhlc0RlZmluZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3dJbmRleGVzICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc1NlbGVjdGVkUm93SWRzRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvd0lkcyAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aXNFbmFibGVkRGVmaW5lZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkICE9PSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpc01hdGNoZXJEZWZpbmVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoZXIgIT09IHVuZGVmaW5lZDtcblx0fVxuXG5cdGlzRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5lbmFibGVkO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dJbmRleGVzKCk6IEFycmF5PG51bWJlcj4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93SW5kZXhlcztcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93SWRzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93SWRzO1xuXHR9XG5cblx0Z2V0TW9kZSgpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG5cblx0Z2V0VHlwZSgpOiBSb3dTZWxlY3Rpb25UeXBlIHtcblx0XHRyZXR1cm4gdGhpcy50eXBlO1xuXHR9XG5cblx0Z2V0TWF0Y2hlcigpOiAoaXRlbTogYW55KSA9PiBhbnkge1xuXHRcdHJldHVybiB0aGlzLm1hdGNoZXI7XG5cdH1cblxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuXHRzdGF0aWMgQnVpbGRlciA9IGNsYXNzIFJvd1NlbGVjdGlvbkJ1aWxkZXIgZXh0ZW5kcyBHZW5lcmljQnVpbGRlcjxSb3dTZWxlY3Rpb24+IHtcblxuXHRcdGVuYWJsZWQ6IGJvb2xlYW47XG5cblx0XHRzZWxlY3RlZFJvd0luZGV4ZXM6IEFycmF5PG51bWJlcj47XG5cblx0XHRzZWxlY3RlZFJvd0lkczogQXJyYXk8c3RyaW5nPjtcblxuXHRcdHR5cGU6IFJvd1NlbGVjdGlvblR5cGU7XG5cblx0XHRtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlO1xuXG5cdFx0bWF0Y2hlcjogKGl0ZW06IGFueSkgPT4gYW55O1xuXG5cdFx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcigpO1xuXHRcdH1cblxuXHRcdGJ1aWxkT2JqZWN0KCk6IFJvd1NlbGVjdGlvbiB7XG5cdFx0XHRyZXR1cm4gbmV3IFJvd1NlbGVjdGlvbih7XG5cdFx0XHRcdGVuYWJsZWQ6IHRoaXMuZW5hYmxlZCxcblx0XHRcdFx0c2VsZWN0ZWRSb3dJbmRleGVzOiB0aGlzLnNlbGVjdGVkUm93SW5kZXhlcyxcblx0XHRcdFx0c2VsZWN0ZWRSb3dJZHM6IHRoaXMuc2VsZWN0ZWRSb3dJZHMsXG5cdFx0XHRcdHR5cGU6IHRoaXMudHlwZSxcblx0XHRcdFx0bW9kZTogdGhpcy5tb2RlLFxuXHRcdFx0XHRtYXRjaGVyOiB0aGlzLm1hdGNoZXJcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHdpdGhFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR3aXRoU2VsZWN0ZWRSb3dJbmRleGVzKGluZGV4ZXM6IEFycmF5PG51bWJlcj4pOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dJbmRleGVzID0gaW5kZXhlcztcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHdpdGhTZWxlY3RlZFJvd0lkcyhpZHM6IEFycmF5PHN0cmluZz4pOiBSb3dTZWxlY3Rpb25CdWlsZGVyIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dJZHMgPSBpZHM7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHR3aXRoVHlwZSh0eXBlOiBSb3dTZWxlY3Rpb25UeXBlKTogUm93U2VsZWN0aW9uQnVpbGRlciB7XG5cdFx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0d2l0aE1vZGUobW9kZTogUm93U2VsZWN0aW9uTW9kZSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy5tb2RlID0gbW9kZTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdHdpdGhNYXRjaGVyKG1hdGNoZXI6IChpdGVtOiBhbnkpID0+IGFueSk6IFJvd1NlbGVjdGlvbkJ1aWxkZXIge1xuXHRcdFx0dGhpcy5tYXRjaGVyID0gbWF0Y2hlcjtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHR9O1xuXG59XG4iXX0=