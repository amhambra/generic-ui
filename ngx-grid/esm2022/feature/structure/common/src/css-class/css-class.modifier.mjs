import { ClassModifier } from '../../../../common/component/src/dom/class/class-modifier';
import { CssClass } from './css-class';
export class CssClassModifier {
    classModifier = new ClassModifier();
    select(htmlElement) {
        this.classModifier.getElement(htmlElement).add(CssClass.SELECTED);
    }
    unselect(htmlElement) {
        this.classModifier.getElement(htmlElement).remove(CssClass.SELECTED);
    }
    add(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).add(clazzName);
    }
    remove(htmlElement, clazzName) {
        this.classModifier.getElement(htmlElement).remove(clazzName);
    }
    toggle(htmlElement) {
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLWNsYXNzLm1vZGlmaWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlL3N0cnVjdHVyZS9jb21tb24vc3JjL2Nzcy1jbGFzcy9jc3MtY2xhc3MubW9kaWZpZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFHdkMsTUFBTSxPQUFPLGdCQUFnQjtJQUVYLGFBQWEsR0FBa0IsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUVwRSxNQUFNLENBQUMsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELEdBQUcsQ0FBQyxXQUF3QixFQUFFLFNBQWlCO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQXdCLEVBQUUsU0FBaUI7UUFDakQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxNQUFNLENBQUMsV0FBd0I7SUFDL0IsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xhc3NNb2RpZmllciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jb21wb25lbnQvc3JjL2RvbS9jbGFzcy9jbGFzcy1tb2RpZmllcic7XG5pbXBvcnQgeyBDc3NDbGFzcyB9IGZyb20gJy4vY3NzLWNsYXNzJztcblxuXG5leHBvcnQgY2xhc3MgQ3NzQ2xhc3NNb2RpZmllciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjbGFzc01vZGlmaWVyOiBDbGFzc01vZGlmaWVyID0gbmV3IENsYXNzTW9kaWZpZXIoKTtcblxuXHRzZWxlY3QoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLmFkZChDc3NDbGFzcy5TRUxFQ1RFRCk7XG5cdH1cblxuXHR1bnNlbGVjdChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudChodG1sRWxlbWVudCkucmVtb3ZlKENzc0NsYXNzLlNFTEVDVEVEKTtcblx0fVxuXG5cdGFkZChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQsIGNsYXp6TmFtZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0dGhpcy5jbGFzc01vZGlmaWVyLmdldEVsZW1lbnQoaHRtbEVsZW1lbnQpLmFkZChjbGF6ek5hbWUpO1xuXHR9XG5cblx0cmVtb3ZlKGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCwgY2xhenpOYW1lOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLmNsYXNzTW9kaWZpZXIuZ2V0RWxlbWVudChodG1sRWxlbWVudCkucmVtb3ZlKGNsYXp6TmFtZSk7XG5cdH1cblxuXHR0b2dnbGUoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG5cdH1cblxufVxuIl19