export class Modifier {
    constructor(hostElement) {
        this.hostElement = hostElement;
    }
    getElement(htmlElement) {
        return this.createModifier(htmlElement);
    }
    getHost() {
        if (!this.hostElement) {
            throw new Error('Missing host element in DomRenderer constructor.');
        }
        return this.createModifier(this.hostElement);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL2Nkay9kb20vY29yZS9tb2RpZmllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxNQUFNLE9BQWdCLFFBQVE7SUFFN0IsWUFDa0IsV0FBeUI7UUFBekIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7SUFFM0MsQ0FBQztJQUlELFVBQVUsQ0FBQyxXQUF3QjtRQUNsQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELE9BQU87UUFFTixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7U0FDcEU7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGlmaWVyQXBpIH0gZnJvbSAnLi9tb2RpZmllci1hcGknO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTW9kaWZpZXI8VCBleHRlbmRzIE1vZGlmaWVyQXBpPiB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaG9zdEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0fVxuXG5cdHByb3RlY3RlZCBhYnN0cmFjdCBjcmVhdGVNb2RpZmllcihodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBUO1xuXG5cdGdldEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogVCB7XG5cdFx0cmV0dXJuIHRoaXMuY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0Z2V0SG9zdCgpOiBUIHtcblxuXHRcdGlmICghdGhpcy5ob3N0RWxlbWVudCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGhvc3QgZWxlbWVudCBpbiBEb21SZW5kZXJlciBjb25zdHJ1Y3Rvci4nKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5jcmVhdGVNb2RpZmllcih0aGlzLmhvc3RFbGVtZW50KTtcblx0fVxufVxuIl19