var _a;
import { Modifier } from '../core/modifier';
export class ClassModifier extends Modifier {
    constructor(htmlElement) {
        super(htmlElement);
        this.htmlElement = htmlElement;
    }
    createModifier(htmlElement) {
        return new ClassModifier.ClassModifier(htmlElement);
    }
}
// eslint-disable-next-line
ClassModifier.ClassModifier = (_a = class {
        constructor(htmlElement) {
            this.htmlElement = htmlElement;
        }
        add(...classes) {
            this.addClassToDomElement(this.htmlElement, classes);
        }
        remove(...classes) {
            this.removeClassFromDomElement(this.htmlElement, classes);
        }
        clear() {
            this.htmlElement.removeAttribute(ClassModifier.ClassModifier.CLASS);
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
    },
    _a.CLASS = 'class',
    _a);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3MtbW9kaWZpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvZG9tL2NsYXNzL2NsYXNzLW1vZGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHNUMsTUFBTSxPQUFPLGFBQWMsU0FBUSxRQUEwQjtJQUU1RCxZQUNrQixXQUF5QjtRQUUxQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFGRixnQkFBVyxHQUFYLFdBQVcsQ0FBYztJQUczQyxDQUFDO0lBRVMsY0FBYyxDQUFDLFdBQXdCO1FBQ2hELE9BQU8sSUFBSSxhQUFhLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7O0FBRUQsMkJBQTJCO0FBQ0gsMkJBQWEsU0FBRztRQUl2QyxZQUNrQixXQUF3QjtZQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUUxQyxDQUFDO1FBRUQsR0FBRyxDQUFDLEdBQUcsT0FBc0I7WUFDNUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUVELE1BQU0sQ0FBQyxHQUFHLE9BQXNCO1lBQy9CLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFFRCxLQUFLO1lBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyRSxDQUFDO1FBRU8sb0JBQW9CLENBQUMsV0FBd0IsRUFBRSxPQUFzQjtZQUU1RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDdEM7UUFDRixDQUFDO1FBRU8seUJBQXlCLENBQUMsV0FBd0IsRUFBRSxPQUFzQjtZQUVqRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDekM7UUFDRixDQUFDO0tBRUQ7SUFqQ3dCLFFBQUssR0FBRyxPQUFRO1FBaUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsYXNzTW9kaWZpZXJBcGkgfSBmcm9tICcuL2NsYXNzLW1vZGlmaWVyLWFwaSc7XG5pbXBvcnQgeyBNb2RpZmllciB9IGZyb20gJy4uL2NvcmUvbW9kaWZpZXInO1xuXG5cbmV4cG9ydCBjbGFzcyBDbGFzc01vZGlmaWVyIGV4dGVuZHMgTW9kaWZpZXI8Q2xhc3NNb2RpZmllckFwaT4ge1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcmVhZG9ubHkgaHRtbEVsZW1lbnQ/OiBIVE1MRWxlbWVudFxuXHQpIHtcblx0XHRzdXBlcihodG1sRWxlbWVudCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgY3JlYXRlTW9kaWZpZXIoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQ2xhc3NNb2RpZmllckFwaSB7XG5cdFx0cmV0dXJuIG5ldyBDbGFzc01vZGlmaWVyLkNsYXNzTW9kaWZpZXIoaHRtbEVsZW1lbnQpO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IENsYXNzTW9kaWZpZXIgPSBjbGFzcyBpbXBsZW1lbnRzIENsYXNzTW9kaWZpZXJBcGkge1xuXG5cdFx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgQ0xBU1MgPSAnY2xhc3MnO1xuXG5cdFx0Y29uc3RydWN0b3IoXG5cdFx0XHRwcml2YXRlIHJlYWRvbmx5IGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudFxuXHRcdCkge1xuXHRcdH1cblxuXHRcdGFkZCguLi5jbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0XHR0aGlzLmFkZENsYXNzVG9Eb21FbGVtZW50KHRoaXMuaHRtbEVsZW1lbnQsIGNsYXNzZXMpO1xuXHRcdH1cblxuXHRcdHJlbW92ZSguLi5jbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cdFx0XHR0aGlzLnJlbW92ZUNsYXNzRnJvbURvbUVsZW1lbnQodGhpcy5odG1sRWxlbWVudCwgY2xhc3Nlcyk7XG5cdFx0fVxuXG5cdFx0Y2xlYXIoKTogdm9pZCB7XG5cdFx0XHR0aGlzLmh0bWxFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShDbGFzc01vZGlmaWVyLkNsYXNzTW9kaWZpZXIuQ0xBU1MpO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgYWRkQ2xhc3NUb0RvbUVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc2VzOiBBcnJheTxzdHJpbmc+KTogdm9pZCB7XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHByaXZhdGUgcmVtb3ZlQ2xhc3NGcm9tRG9tRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXNzZXM6IEFycmF5PHN0cmluZz4pOiB2b2lkIHtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH07XG5cbn1cbiJdfQ==