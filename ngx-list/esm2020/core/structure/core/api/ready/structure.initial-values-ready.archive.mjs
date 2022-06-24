import { AggregateArchive, hermesFilter, singleFromObservable } from '@generic-ui/hermes';
export class StructureInitialValuesReadyArchive extends AggregateArchive {
    constructor() {
        super(StructureInitialValuesReadyArchive.default);
    }
    on(aggregateId) {
        return super.on(aggregateId)
            .pipe(hermesFilter(v => v));
    }
    once(aggregateId) {
        return singleFromObservable(this.on(aggregateId));
    }
}
StructureInitialValuesReadyArchive.default = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluaXRpYWwtdmFsdWVzLXJlYWR5LmFyY2hpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2NvcmUvYXBpL3JlYWR5L3N0cnVjdHVyZS5pbml0aWFsLXZhbHVlcy1yZWFkeS5hcmNoaXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBZSxZQUFZLEVBQWtDLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkksTUFBTSxPQUFPLGtDQUFtQyxTQUFRLGdCQUF5QjtJQUloRjtRQUNDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsRUFBRSxDQUFDLFdBQXdCO1FBQzFCLE9BQU8sS0FBSyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7YUFDeEIsSUFBSSxDQUNKLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNwQixDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksQ0FBQyxXQUF3QjtRQUM1QixPQUFPLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDOztBQWZlLDBDQUFPLEdBQUcsS0FBSyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSwgQWdncmVnYXRlSWQsIGhlcm1lc0ZpbHRlciwgSGVybWVzT2JzZXJ2YWJsZSwgSGVybWVzU2luZ2xlLCBzaW5nbGVGcm9tT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUgZXh0ZW5kcyBBZ2dyZWdhdGVBcmNoaXZlPGJvb2xlYW4+IHtcblxuXHRzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdCA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKFN0cnVjdHVyZUluaXRpYWxWYWx1ZXNSZWFkeUFyY2hpdmUuZGVmYXVsdCk7XG5cdH1cblxuXHRvbihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gc3VwZXIub24oYWdncmVnYXRlSWQpXG5cdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRoZXJtZXNGaWx0ZXIodiA9PiB2KVxuXHRcdFx0XHRcdCk7XG5cdH1cblxuXHRvbmNlKGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCk6IEhlcm1lc1NpbmdsZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIHNpbmdsZUZyb21PYnNlcnZhYmxlKHRoaXMub24oYWdncmVnYXRlSWQpKTtcblx0fVxuXG59XG4iXX0=