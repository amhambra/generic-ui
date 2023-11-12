import { CollectionRecordFactory } from './collection-record.factory';
export class ValueCollectionRecordFactory extends CollectionRecordFactory {
    providers = [];
    getDeps() {
        return [];
    }
    create(_setOfDeps) {
        return [...this.providers];
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsdWUtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL3Byb3ZpZGVyL2NvbGxlY3Rpb24vdmFsdWUtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUl0RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsdUJBQXVCO0lBRXZELFNBQVMsR0FBeUIsRUFBRSxDQUFDO0lBRXRELE9BQU87UUFDTixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBNkI7UUFFbkMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBYTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xsZWN0aW9uUmVjb3JkRmFjdG9yeSB9IGZyb20gJy4vY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeSc7XG5pbXBvcnQgeyBEZXBlbmRlbmN5IH0gZnJvbSAnLi4vZGVwZW5kZW5jeSc7XG5pbXBvcnQgeyBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnLi4vdmFsdWUvdmFsdWUtcHJvdmlkZXInO1xuXG5leHBvcnQgY2xhc3MgVmFsdWVDb2xsZWN0aW9uUmVjb3JkRmFjdG9yeSBleHRlbmRzIENvbGxlY3Rpb25SZWNvcmRGYWN0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyczogQXJyYXk8VmFsdWVQcm92aWRlcj4gPSBbXTtcblxuXHRnZXREZXBzKCk6IEFycmF5PEFycmF5PERlcGVuZGVuY3k+PiB7XG5cdFx0cmV0dXJuIFtdO1xuXHR9XG5cblx0Y3JlYXRlKF9zZXRPZkRlcHM6IEFycmF5PEFycmF5PGFueT4+KTogYW55IHtcblxuXHRcdHJldHVybiBbLi4udGhpcy5wcm92aWRlcnNdO1xuXHR9XG5cblx0YWRkUHJvdmlkZXIocHJvdmlkZXI6IGFueSk6IHZvaWQge1xuXHRcdHRoaXMucHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuXHR9XG59XG4iXX0=