import { Message } from '../../domain/message/message';
export class DomainEvent extends Message {
    constructor(aggregateId, payload, messageType) {
        super(aggregateId, messageType);
        this.payload = payload;
    }
    isSameType(event) {
        return this.constructor.name === event.constructor.name;
    }
    getPayload() {
        return this.payload;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1oZXJtZXMvc3JjL2NvcmUvYXBpL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFHdkQsTUFBTSxPQUFnQixXQUFpRCxTQUFRLE9BQVU7SUFJeEYsWUFBc0IsV0FBYyxFQUM3QixPQUFZLEVBQ1osV0FBbUI7UUFDekIsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9kb21haW4vbWVzc2FnZS9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQ8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkID0gQWdncmVnYXRlSWQ+IGV4dGVuZHMgTWVzc2FnZTxJPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYXlsb2FkOiBhbnk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwYXlsb2FkOiBhbnksXG5cdFx0XHRcdFx0XHQgIG1lc3NhZ2VUeXBlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbWVzc2FnZVR5cGUpO1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRpc1NhbWVUeXBlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxufVxuIl19