import { Injectable } from '@angular/core';
import { SummariesManager } from '../summaries.manager';
import { AggregateArchive } from '@generic-ui/hermes';
export class SummariesEnabledArchive extends AggregateArchive {
    constructor() {
        super(SummariesManager.DEFAULT_ENABLED);
    }
    init(structureId) {
        this.next(structureId, SummariesManager.DEFAULT_ENABLED);
    }
}
SummariesEnabledArchive.decorators = [
    { type: Injectable }
];
SummariesEnabledArchive.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluL2VuYWJsZWQvc3VtbWFyaWVzLWVuYWJsZWQtYXJjaGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLdEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUF5QjtJQUVyRTtRQUNDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSSxDQUFDLFdBQXdCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzFELENBQUM7OztZQVRELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNNYW5hZ2VyIH0gZnJvbSAnLi4vc3VtbWFyaWVzLm1hbmFnZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlQXJjaGl2ZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN1bW1hcmllc0VuYWJsZWRBcmNoaXZlIGV4dGVuZHMgQWdncmVnYXRlQXJjaGl2ZTxib29sZWFuPiB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoU3VtbWFyaWVzTWFuYWdlci5ERUZBVUxUX0VOQUJMRUQpO1xuXHR9XG5cblx0aW5pdChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLm5leHQoc3RydWN0dXJlSWQsIFN1bW1hcmllc01hbmFnZXIuREVGQVVMVF9FTkFCTEVEKTtcblx0fVxuXG59XG4iXX0=