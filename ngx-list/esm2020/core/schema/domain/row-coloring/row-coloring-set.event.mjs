import { SchemaDomainEvent } from '../schema.domain-event';
export class RowColoringSetEvent extends SchemaDomainEvent {
    constructor(schemaId, rowColoring) {
        super(schemaId, rowColoring, 'RowColoringSetEvent');
        this.rowColoring = rowColoring;
    }
    getRowColoring() {
        return this.rowColoring;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWNvbG9yaW5nLXNldC5ldmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zY2hlbWEvZG9tYWluL3Jvdy1jb2xvcmluZy9yb3ctY29sb3Jpbmctc2V0LmV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzNELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxpQkFBaUI7SUFFekQsWUFBWSxRQUFrQixFQUNWLFdBQThCO1FBQ2pELEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFEakMsZ0JBQVcsR0FBWCxXQUFXLENBQW1CO0lBRWxELENBQUM7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vc2NoZW1hLmlkJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vYXBpL3Jvdy1jb2xvcmluZy9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNjaGVtYURvbWFpbkV2ZW50IH0gZnJvbSAnLi4vc2NoZW1hLmRvbWFpbi1ldmVudCc7XG5cblxuZXhwb3J0IGNsYXNzIFJvd0NvbG9yaW5nU2V0RXZlbnQgZXh0ZW5kcyBTY2hlbWFEb21haW5FdmVudCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykge1xuXHRcdHN1cGVyKHNjaGVtYUlkLCByb3dDb2xvcmluZywgJ1Jvd0NvbG9yaW5nU2V0RXZlbnQnKTtcblx0fVxuXG5cdGdldFJvd0NvbG9yaW5nKCk6IFNjaGVtYVJvd0NvbG9yaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dDb2xvcmluZztcblx0fVxufVxuIl19