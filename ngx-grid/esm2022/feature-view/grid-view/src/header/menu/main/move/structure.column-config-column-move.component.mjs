import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { PureComponent } from '../../../../../../../feature/common/component/src/pure-component';
import { StructureArrowPosition } from '../../../../../../../feature/common/icons/arrow/strucutre.arrow-position';
import * as i0 from "@angular/core";
import * as i1 from "../../../../../../../feature/common/icons/arrow/structure.arrow-icon.component";
import * as i2 from "../../../../../../../feature/l10n/src/translation.pipe";
export class StructureColumnConfigColumnMoveComponent extends PureComponent {
    column;
    movedLeft = new EventEmitter();
    movedRight = new EventEmitter();
    StructureArrowPosition = StructureArrowPosition;
    constructor(elRef) {
        super(elRef);
    }
    moveLeft() {
        this.movedLeft.emit();
    }
    moveRight() {
        this.movedRight.emit();
    }
    getSelectorName() {
        return 'gui-structure-column-config-column-move';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigColumnMoveComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureColumnConfigColumnMoveComponent, selector: "div[gui-structure-column-config-column-move][column]", inputs: { column: "column" }, outputs: { movedLeft: "movedLeft", movedRight: "movedRight" }, usesInheritance: true, ngImport: i0, template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [position]=\"StructureArrowPosition.LEFT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div [position]=\"StructureArrowPosition.RIGHT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t</div>\n</div>\n", dependencies: [{ kind: "component", type: i1.StructureArrowIconComponent, selector: "div[gui-structure-arrow-icon]", inputs: ["position", "sort"] }, { kind: "pipe", type: i2.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureColumnConfigColumnMoveComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-column-config-column-move][column]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"gui-header-menu-column-move\">\n\t<div (click)=\"moveLeft()\"\n\t\t class=\"gui-header-menu-column-move-item left\">\n\t\t<div [position]=\"StructureArrowPosition.LEFT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t\t{{'headerMenuMainTabMoveLeft' | guiTranslate}}\n\t</div>\n\n\t<div (click)=\"moveRight()\"\n\t\t class=\"gui-header-menu-column-move-item right\">\n\t\t{{'headerMenuMainTabMoveRight' | guiTranslate}}\n\t\t<div [position]=\"StructureArrowPosition.RIGHT\"\n\t\t\t gui-structure-arrow-icon></div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { column: [{
                type: Input
            }], movedLeft: [{
                type: Output
            }], movedRight: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvbWVudS9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9oZWFkZXIvbWVudS9tYWluL21vdmUvc3RydWN0dXJlLmNvbHVtbi1jb25maWctY29sdW1uLW1vdmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvSCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDakcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEVBQTBFLENBQUM7Ozs7QUFRbEgsTUFBTSxPQUFPLHdDQUF5QyxTQUFRLGFBQWE7SUFHMUUsTUFBTSxDQUEwQjtJQUdoQyxTQUFTLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUdyQyxVQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUV0QyxzQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQUVoRCxZQUFZLEtBQWlCO1FBQzVCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsU0FBUztRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVTLGVBQWU7UUFDeEIsT0FBTyx5Q0FBeUMsQ0FBQztJQUNsRCxDQUFDO3VHQTNCVyx3Q0FBd0M7MkZBQXhDLHdDQUF3QyxnTkNackQsK2hCQWVBOzsyRkRIYSx3Q0FBd0M7a0JBTnBELFNBQVM7K0JBQ0Msc0RBQXNELG1CQUUvQyx1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOytFQUtyQyxNQUFNO3NCQURMLEtBQUs7Z0JBSU4sU0FBUztzQkFEUixNQUFNO2dCQUlQLFVBQVU7c0JBRFQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9jb3JlLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vY29tcG9uZW50L3NyYy9wdXJlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBcnJvd1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9jb21tb24vaWNvbnMvYXJyb3cvc3RydWN1dHJlLmFycm93LXBvc2l0aW9uJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZV1bY29sdW1uXScsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdHJ1Y3R1cmUuY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZS5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUNvbHVtbkNvbmZpZ0NvbHVtbk1vdmVDb21wb25lbnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW46IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0O1xuXG5cdEBPdXRwdXQoKVxuXHRtb3ZlZExlZnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0QE91dHB1dCgpXG5cdG1vdmVkUmlnaHQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cblx0U3RydWN0dXJlQXJyb3dQb3NpdGlvbiA9IFN0cnVjdHVyZUFycm93UG9zaXRpb247XG5cblx0Y29uc3RydWN0b3IoZWxSZWY6IEVsZW1lbnRSZWYpIHtcblx0XHRzdXBlcihlbFJlZik7XG5cdH1cblxuXHRtb3ZlTGVmdCgpOiB2b2lkIHtcblx0XHR0aGlzLm1vdmVkTGVmdC5lbWl0KCk7XG5cdH1cblxuXHRtb3ZlUmlnaHQoKTogdm9pZCB7XG5cdFx0dGhpcy5tb3ZlZFJpZ2h0LmVtaXQoKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtY29sdW1uLWNvbmZpZy1jb2x1bW4tbW92ZSc7XG5cdH1cblxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1oZWFkZXItbWVudS1jb2x1bW4tbW92ZVwiPlxuXHQ8ZGl2IChjbGljayk9XCJtb3ZlTGVmdCgpXCJcblx0XHQgY2xhc3M9XCJndWktaGVhZGVyLW1lbnUtY29sdW1uLW1vdmUtaXRlbSBsZWZ0XCI+XG5cdFx0PGRpdiBbcG9zaXRpb25dPVwiU3RydWN0dXJlQXJyb3dQb3NpdGlvbi5MRUZUXCJcblx0XHRcdCBndWktc3RydWN0dXJlLWFycm93LWljb24+PC9kaXY+XG5cdFx0e3snaGVhZGVyTWVudU1haW5UYWJNb3ZlTGVmdCcgfCBndWlUcmFuc2xhdGV9fVxuXHQ8L2Rpdj5cblxuXHQ8ZGl2IChjbGljayk9XCJtb3ZlUmlnaHQoKVwiXG5cdFx0IGNsYXNzPVwiZ3VpLWhlYWRlci1tZW51LWNvbHVtbi1tb3ZlLWl0ZW0gcmlnaHRcIj5cblx0XHR7eydoZWFkZXJNZW51TWFpblRhYk1vdmVSaWdodCcgfCBndWlUcmFuc2xhdGV9fVxuXHRcdDxkaXYgW3Bvc2l0aW9uXT1cIlN0cnVjdHVyZUFycm93UG9zaXRpb24uUklHSFRcIlxuXHRcdFx0IGd1aS1zdHJ1Y3R1cmUtYXJyb3ctaWNvbj48L2Rpdj5cblx0PC9kaXY+XG48L2Rpdj5cbiJdfQ==