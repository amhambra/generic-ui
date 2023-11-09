export class GuiClassManager {
    constructor(nativeElement) {
        this.nativeElement = nativeElement;
        this.classes = new Set();
    }
    update(newClasses) {
        const actualClasses = Array.from(this.classes);
        const classesToAdd = [];
        const classesToRemove = [];
        for (const clazz of newClasses) {
            if (!actualClasses.some((actualClass) => actualClass === clazz)) {
                classesToAdd.push(clazz);
            }
        }
        for (const actualClass of actualClasses) {
            if (!newClasses.some((newClass) => actualClass === newClass)) {
                classesToRemove.push(actualClass);
            }
        }
        this.remove(...classesToRemove);
        this.add(...classesToAdd);
        this.classes = new Set(newClasses);
    }
    add(...classes) {
        this.addClassToDomElement(this.nativeElement, classes);
    }
    remove(...classes) {
        this.removeClassFromDomElement(this.nativeElement, classes);
    }
    addClassToDomElement(htmlElement, classes) {
        for (let i = 0; i < classes.length; i++) {
            htmlElement.classList.add(classes[i]);
        }
    }
    removeClassFromDomElement(htmlElement, classes) {
        for (let i = 0; i < classes.length; i++) {
            htmlElement.classList.remove(classes[i]);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmNsYXNzLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2ZlYXR1cmUvZ3VpLWFuZ3VsYXIvdGVtcGxhdGUvY2xhc3MvZ3VpLmNsYXNzLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxPQUFPLGVBQWU7SUFJM0IsWUFDa0IsYUFBMEI7UUFBMUIsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFIcEMsWUFBTyxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7SUFLcEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUF5QjtRQUUvQixNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvQyxNQUFNLFlBQVksR0FBa0IsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sZUFBZSxHQUFrQixFQUFFLENBQUM7UUFFMUMsS0FBSyxNQUFNLEtBQUssSUFBSSxVQUFVLEVBQUU7WUFFL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDaEUsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN6QjtTQUNEO1FBRUQsS0FBSyxNQUFNLFdBQVcsSUFBSSxhQUFhLEVBQUU7WUFFeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsRUFBRTtnQkFDN0QsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUNsQztTQUNEO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxHQUFHLENBQUMsR0FBRyxPQUFzQjtRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU8sTUFBTSxDQUFDLEdBQUcsT0FBc0I7UUFDdkMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFdBQXdCLEVBQUUsT0FBc0I7UUFDNUUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEM7SUFDRixDQUFDO0lBRU8seUJBQXlCLENBQUMsV0FBd0IsRUFBRSxPQUFzQjtRQUNqRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHdWlDbGFzc01hbmFnZXIge1xuXG5cdHByaXZhdGUgY2xhc3NlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnRcblx0KSB7XG5cdH1cblxuXHR1cGRhdGUobmV3Q2xhc3NlczogQXJyYXk8c3RyaW5nPikge1xuXG5cdFx0Y29uc3QgYWN0dWFsQ2xhc3NlcyA9IEFycmF5LmZyb20odGhpcy5jbGFzc2VzKTtcblxuXHRcdGNvbnN0IGNsYXNzZXNUb0FkZDogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXHRcdGNvbnN0IGNsYXNzZXNUb1JlbW92ZTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG5cdFx0Zm9yIChjb25zdCBjbGF6eiBvZiBuZXdDbGFzc2VzKSB7XG5cblx0XHRcdGlmICghYWN0dWFsQ2xhc3Nlcy5zb21lKChhY3R1YWxDbGFzcykgPT4gYWN0dWFsQ2xhc3MgPT09IGNsYXp6KSkge1xuXHRcdFx0XHRjbGFzc2VzVG9BZGQucHVzaChjbGF6eik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChjb25zdCBhY3R1YWxDbGFzcyBvZiBhY3R1YWxDbGFzc2VzKSB7XG5cblx0XHRcdGlmICghbmV3Q2xhc3Nlcy5zb21lKChuZXdDbGFzcykgPT4gYWN0dWFsQ2xhc3MgPT09IG5ld0NsYXNzKSkge1xuXHRcdFx0XHRjbGFzc2VzVG9SZW1vdmUucHVzaChhY3R1YWxDbGFzcyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5yZW1vdmUoLi4uY2xhc3Nlc1RvUmVtb3ZlKTtcblx0XHR0aGlzLmFkZCguLi5jbGFzc2VzVG9BZGQpO1xuXG5cdFx0dGhpcy5jbGFzc2VzID0gbmV3IFNldChuZXdDbGFzc2VzKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkKC4uLmNsYXNzZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblx0XHR0aGlzLmFkZENsYXNzVG9Eb21FbGVtZW50KHRoaXMubmF0aXZlRWxlbWVudCwgY2xhc3Nlcyk7XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZSguLi5jbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0dGhpcy5yZW1vdmVDbGFzc0Zyb21Eb21FbGVtZW50KHRoaXMubmF0aXZlRWxlbWVudCwgY2xhc3Nlcyk7XG5cdH1cblxuXHRwcml2YXRlIGFkZENsYXNzVG9Eb21FbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhc3NlczogQXJyYXk8c3RyaW5nPik6IHZvaWQge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2ldKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUNsYXNzRnJvbURvbUVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbaV0pO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=