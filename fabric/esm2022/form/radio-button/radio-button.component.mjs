import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricRadioButtonComponent {
    elementRef;
    renderer;
    name = '';
    checked = false;
    disabled = false;
    changed = new EventEmitter();
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    ngOnChanges() {
        if (this.disabled) {
            this.renderer.addClass(this.elementRef.nativeElement, 'gui-disabled');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'gui-disabled');
        }
    }
    check() {
        this.checked = true;
        this.changed.emit(this.checked);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricRadioButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricRadioButtonComponent, selector: "gui-radio-button", inputs: { name: "name", checked: "checked", disabled: "disabled" }, outputs: { changed: "changed" }, host: { properties: { "class.gui-radio-button": "true" } }, usesOnChanges: true, ngImport: i0, template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[attr.name]=\"name\"\n\t\t[checked]=\"checked\"\n\t\t[disabled]=\"disabled\"\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.gui-radio-button]': 'true'
                    }, template: "<label>\n\t<input\n\t\t(click)=\"check()\"\n\t\t[attr.name]=\"name\"\n\t\t[checked]=\"checked\"\n\t\t[disabled]=\"disabled\"\n\t\ttype=\"radio\">\n\t<span class=\"gui-radio-checkmark\"></span>\n\t<ng-content></ng-content>\n</label>\n", styles: [".gui-radio-button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;font:14px Arial;line-height:18px;padding-left:32px;position:relative}.gui-radio-button label{cursor:pointer}.gui-radio-button label:hover .gui-radio-checkmark{border-color:#999}.gui-radio-button input{height:0;opacity:0;position:absolute;width:0}.gui-radio-button .gui-radio-checkmark{border-color:#d6d6d6;border-radius:50%;border-style:solid;border-width:1px;box-sizing:content-box;height:16px;left:0;position:absolute;width:16px}.gui-radio-button input:checked+.gui-radio-checkmark{border-color:#999}.gui-radio-button input:focus+.gui-radio-checkmark{border-color:#6fb4e8}.gui-radio-button.gui-disabled.gui-radio-button{color:#ccc;pointer-events:none}.gui-radio-button .gui-radio-checkmark:after{content:\"\";display:none;position:absolute}.gui-radio-button input:checked+.gui-radio-checkmark:after{box-sizing:content-box;display:block}.gui-radio-button .gui-radio-checkmark:after{background:#333;border-radius:50%;height:16px;-ms-transform:scale(.5);transform:scale(.5);width:16px}\n", ".gui-material .gui-radio-button{font-family:Roboto,Helvetica Neue,sans-serif}\n", ".gui-dark .gui-radio-button{color:#bdbdbd}.gui-dark .gui-radio-button .gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:checked+.gui-radio-checkmark{border-color:#878787}.gui-dark .gui-radio-button input:focus+.gui-radio-checkmark{border-color:#ce93d8}.gui-dark .gui-radio-button .gui-radio-checkmark:after{background:#878787}.gui-dark .gui-radio-button.gui-disabled.gui-radio-button{opacity:.36}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { name: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL3JhZGlvLWJ1dHRvbi9yYWRpby1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vcmFkaW8tYnV0dG9uL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFhLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQWdCckosTUFBTSxPQUFPLDBCQUEwQjtJQWNUO0lBQ1Q7SUFacEIsSUFBSSxHQUFXLEVBQUUsQ0FBQztJQUdsQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBR3pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFHakIsT0FBTyxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBRTdELFlBQTZCLFVBQXNCLEVBQy9CLFFBQW1CO1FBRFYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQ3ZDLENBQUM7SUFFRCxXQUFXO1FBQ1YsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3RFO2FBQU07WUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUN6RTtJQUNGLENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7dUdBN0JXLDBCQUEwQjsyRkFBMUIsMEJBQTBCLDhPQ2hCdkMsMk9BVUE7OzJGRE1hLDBCQUEwQjtrQkFkdEMsU0FBUzsrQkFDQyxrQkFBa0IsbUJBT1gsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxRQUMvQjt3QkFDTCwwQkFBMEIsRUFBRSxNQUFNO3FCQUNsQzt1R0FLRCxJQUFJO3NCQURILEtBQUs7Z0JBSU4sT0FBTztzQkFETixLQUFLO2dCQUlOLFFBQVE7c0JBRFAsS0FBSztnQkFJRyxPQUFPO3NCQURmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICdndWktcmFkaW8tYnV0dG9uJyxcblx0dGVtcGxhdGVVcmw6ICcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogW1xuXHRcdCcuL3JhZGlvLWJ1dHRvbi5jb21wb25lbnQuc2NzcycsXG5cdFx0Jy4vdGhlbWVzL3JhZGlvLWJ1dHRvbi5tYXRlcmlhbC5zY3NzJyxcblx0XHQnLi90aGVtZXMvcmFkaW8tYnV0dG9uLmRhcmsuc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzLmd1aS1yYWRpby1idXR0b25dJzogJ3RydWUnXG5cdH1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljUmFkaW9CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXG5cdEBJbnB1dCgpXG5cdGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRASW5wdXQoKVxuXHRkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBPdXRwdXQoKVxuXHRyZWFkb25seSBjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKCkge1xuXHRcdGlmICh0aGlzLmRpc2FibGVkKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZ3VpLWRpc2FibGVkJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdndWktZGlzYWJsZWQnKTtcblx0XHR9XG5cdH1cblxuXHRjaGVjaygpOiB2b2lkIHtcblx0XHR0aGlzLmNoZWNrZWQgPSB0cnVlO1xuXHRcdHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuY2hlY2tlZCk7XG5cdH1cbn1cbiIsIjxsYWJlbD5cblx0PGlucHV0XG5cdFx0KGNsaWNrKT1cImNoZWNrKClcIlxuXHRcdFthdHRyLm5hbWVdPVwibmFtZVwiXG5cdFx0W2NoZWNrZWRdPVwiY2hlY2tlZFwiXG5cdFx0W2Rpc2FibGVkXT1cImRpc2FibGVkXCJcblx0XHR0eXBlPVwicmFkaW9cIj5cblx0PHNwYW4gY2xhc3M9XCJndWktcmFkaW8tY2hlY2ttYXJrXCI+PC9zcGFuPlxuXHQ8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2xhYmVsPlxuIl19