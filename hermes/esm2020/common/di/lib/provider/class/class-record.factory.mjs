import { RecordFactory } from '../record.factory';
export class ClassRecordFactory extends RecordFactory {
    constructor(provider) {
        super(provider);
    }
    create(depsInstances) {
        return new this.provider(...depsInstances);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtcmVjb3JkLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWhlcm1lcy9zcmMvY29tbW9uL2RpL2xpYi9wcm92aWRlci9jbGFzcy9jbGFzcy1yZWNvcmQuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7SUFFcEQsWUFBWSxRQUF1QjtRQUNsQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxhQUFpQztRQUN2QyxPQUFPLElBQUssSUFBSSxDQUFDLFFBQWdCLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGFzc1Byb3ZpZGVyIH0gZnJvbSAnLi9jbGFzcy1wcm92aWRlcic7XG5pbXBvcnQgeyBSZWNvcmRGYWN0b3J5IH0gZnJvbSAnLi4vcmVjb3JkLmZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgQ2xhc3NSZWNvcmRGYWN0b3J5IGV4dGVuZHMgUmVjb3JkRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJvdmlkZXI6IENsYXNzUHJvdmlkZXIpIHtcblx0XHRzdXBlcihwcm92aWRlcik7XG5cdH1cblxuXHRjcmVhdGUoZGVwc0luc3RhbmNlczogUmVhZG9ubHlBcnJheTxhbnk+KTogYW55IHtcblx0XHRyZXR1cm4gbmV3ICh0aGlzLnByb3ZpZGVyIGFzIGFueSkoLi4uZGVwc0luc3RhbmNlcyk7XG5cdH1cblxufVxuIl19