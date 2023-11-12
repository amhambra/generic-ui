import { Dependency } from '../dependency';
import { CollectionRecordFactory } from './collection-record.factory';
export class ClassCollectionRecordFactory extends CollectionRecordFactory {
    providers = [];
    getDeps() {
        return this.providers
            .map((provider) => {
            return (provider.services || [])
                .map((service) => {
                return new Dependency(service);
            });
        });
    }
    create(setOfDeps) {
        return setOfDeps
            .map((deps, index) => {
            return new this.providers[index](...deps);
        });
    }
    addProvider(provider) {
        this.providers.push(provider);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktaGVybWVzL3NyYy9jb21tb24vZGkvbGliL3Byb3ZpZGVyL2NvbGxlY3Rpb24vY2xhc3MtY29sbGVjdGlvbi1yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXRFLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSx1QkFBdUI7SUFFdkQsU0FBUyxHQUF5QixFQUFFLENBQUM7SUFFdEQsT0FBTztRQUVOLE9BQU8sSUFBSSxDQUFDLFNBQVM7YUFDZixHQUFHLENBQUMsQ0FBQyxRQUF1QixFQUFFLEVBQUU7WUFDaEMsT0FBTyxDQUFFLFFBQWdCLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztpQkFDdkMsR0FBRyxDQUFDLENBQUMsT0FBWSxFQUFFLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNEI7UUFFbEMsT0FBTyxTQUFTO2FBQ2QsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUF1QjtRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc1Byb3ZpZGVyIH0gZnJvbSAnLi4vY2xhc3MvY2xhc3MtcHJvdmlkZXInO1xuaW1wb3J0IHsgRGVwZW5kZW5jeSB9IGZyb20gJy4uL2RlcGVuZGVuY3knO1xuaW1wb3J0IHsgQ29sbGVjdGlvblJlY29yZEZhY3RvcnkgfSBmcm9tICcuL2NvbGxlY3Rpb24tcmVjb3JkLmZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NDb2xsZWN0aW9uUmVjb3JkRmFjdG9yeSBleHRlbmRzIENvbGxlY3Rpb25SZWNvcmRGYWN0b3J5IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyczogQXJyYXk8Q2xhc3NQcm92aWRlcj4gPSBbXTtcblxuXHRnZXREZXBzKCk6IEFycmF5PEFycmF5PERlcGVuZGVuY3k+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy5wcm92aWRlcnNcblx0XHRcdFx0ICAgLm1hcCgocHJvdmlkZXI6IENsYXNzUHJvdmlkZXIpID0+IHtcblx0XHRcdFx0XHQgICByZXR1cm4gKChwcm92aWRlciBhcyBhbnkpLnNlcnZpY2VzIHx8IFtdKVxuXHRcdFx0XHRcdFx0ICAgLm1hcCgoc2VydmljZTogYW55KSA9PiB7XG5cdFx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgRGVwZW5kZW5jeShzZXJ2aWNlKTtcblx0XHRcdFx0XHRcdCAgIH0pO1xuXHRcdFx0XHQgICB9KTtcblx0fVxuXG5cdGNyZWF0ZShzZXRPZkRlcHM6IEFycmF5PEFycmF5PGFueT4+KTogYW55IHtcblxuXHRcdHJldHVybiBzZXRPZkRlcHNcblx0XHRcdC5tYXAoKGRlcHM6IEFycmF5PGFueT4sIGluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiBuZXcgKHRoaXMucHJvdmlkZXJzW2luZGV4XSBhcyBhbnkpKC4uLmRlcHMpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRhZGRQcm92aWRlcihwcm92aWRlcjogQ2xhc3NQcm92aWRlcikge1xuXHRcdHRoaXMucHJvdmlkZXJzLnB1c2gocHJvdmlkZXIpO1xuXHR9XG5cbn1cbiJdfQ==