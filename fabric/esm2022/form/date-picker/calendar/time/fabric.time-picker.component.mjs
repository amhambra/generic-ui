import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Direction } from '../../../../common/icons/arrow-icon/direction';
import { FabricReactive } from '../../../../common/fabric-reactive';
import { FabricTimeValues } from '../../models/fabric-time-values';
import { FabricDatePickerComposition } from '../../models/fabric-date-picker-composition';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../fabric-date-picker.service";
import * as i3 from "@angular/common";
import * as i4 from "../../../input/input.component";
import * as i5 from "../../../../general/button/button/button.component";
import * as i6 from "../../../../common/icons/arrow-icon/fabric-arrow-icon.component";
export class FabricTimePickerComponent extends FabricReactive {
    formBuilder;
    datePickerService;
    selectedDate;
    datePickerComposition = FabricDatePickerComposition.NONE;
    steps = 1;
    form;
    Direction = Direction;
    FabricDatePickerComposition = FabricDatePickerComposition;
    constructor(formBuilder, datePickerService) {
        super();
        this.formBuilder = formBuilder;
        this.datePickerService = datePickerService;
        this.form = this.formBuilder.group({
            hours: [''],
            minutes: [''],
            seconds: ['']
        });
    }
    ngOnChanges(changes) {
        if (changes['selectedDate']) {
            if (this.selectedDate) {
            }
        }
    }
    ngOnInit() {
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)) {
            // @ts-ignore
            const hours$ = this.form
                .controls['hours']
                .valueChanges;
            hours$
                // @ts-ignore
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((hour) => {
                const minHour = this.isMeridian() ? 1 : 0, maxHour = this.isMeridian() ? 12 : 23;
                if (hour > maxHour || hour < minHour) {
                    this.form.controls['hours'].setValue(minHour);
                }
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)) {
            this.form
                .controls['minutes']
                .valueChanges
                // @ts-ignore
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((value) => {
                this.controlFormItemValue(value, 'minutes', 'hours');
                this.changeSelectedDate();
            });
        }
        if (this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)) {
            this.form
                .controls['seconds']
                .valueChanges
                // @ts-ignore
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((value) => {
                this.controlFormItemValue(value, 'seconds', 'minutes');
                this.changeSelectedDate();
            });
        }
        this.setTimeFromSelectedDate();
    }
    changeTimeItem(formControlName, steps) {
        const value = this.form.controls[formControlName].value + steps;
        this.form.controls[formControlName].setValue(value);
    }
    changeSelectedDateTime() {
        this.datePickerService.next();
    }
    isActive(activeComposition, checkedComposition) {
        return !!(activeComposition & checkedComposition);
    }
    isMeridian() {
        return this.isActive(this.datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MERIDIAN);
    }
    isOnlyTimePicker() {
        return !(this.datePickerComposition & FabricDatePickerComposition.DATE_PICKER);
    }
    changeSelectedDate() {
        if (this.selectedDate) {
            const hours = this.form.controls['hours'].value, minutes = this.form.controls['minutes'].value, seconds = this.form.controls['seconds'].value, timeValues = new FabricTimeValues(hours, minutes, seconds);
            this.datePickerService.changeTime(timeValues, this.selectedDate);
        }
    }
    controlFormItemValue(value, observedFormControlName, incFormControlName) {
        if (value > 59) {
            const timeItemValue = this.form.controls[incFormControlName].value, incTimeItemValue = timeItemValue + 1;
            this.form.controls[incFormControlName].setValue(incTimeItemValue);
            this.form.controls[observedFormControlName].setValue(0o0);
        }
        else if (value < 0) {
            this.form.controls[observedFormControlName].setValue(0);
        }
    }
    setTimeFromSelectedDate() {
        if (this.selectedDate) {
            const hours = this.selectedDate.getHours(), minutes = this.selectedDate.getMinutes(), seconds = this.selectedDate.getSeconds();
            this.form.controls['hours'].setValue(hours);
            this.form.controls['minutes'].setValue(minutes);
            this.form.controls['seconds'].setValue(seconds);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTimePickerComponent, deps: [{ token: i1.FormBuilder }, { token: i2.FabricDatePickerService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: FabricTimePickerComponent, selector: "gui-time-picker", inputs: { selectedDate: "selectedDate", datePickerComposition: "datePickerComposition" }, host: { properties: { "class.only-time-picker": "isOnlyTimePicker()" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4.FabricInputComponent, selector: "input[gui-input]" }, { kind: "component", type: i5.FabricButtonComponent, selector: "button[gui-button], a[gui-button]", inputs: ["link", "text"] }, { kind: "component", type: i6.FabricArrowIconComponent, selector: "gui-arrow-icon", inputs: ["direction"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: FabricTimePickerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-time-picker', host: {
                        '[class.only-time-picker]': 'isOnlyTimePicker()'
                    }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<form [formGroup]=\"form\">\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_HOURS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"hours\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('hours', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_MINUTES)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"minutes\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('minutes', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n\t<div *ngIf=\"isActive(datePickerComposition, FabricDatePickerComposition.TIME_PICKER_SECONDS)\"\n\t\t class=\"gui-time-picker-item\">\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.TOP\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\n\t\t<input formControlName=\"seconds\"\n\t\t\t   gui-input\n\t\t\t   maxlength=\"2\"\n\t\t\t   type=\"number\">\n\n\t\t<gui-arrow-icon (click)=\"changeTimeItem('seconds', -steps)\"\n\t\t\t\t\t\t[direction]=\"Direction.BOTTOM\"\n\t\t\t\t\t\tclass=\"gui-date-picker-arrow\"></gui-arrow-icon>\n\t</div>\n\n</form>\n\n<div (click)=\"changeSelectedDateTime()\"\n\t class=\"gui-time-picker-button-wrapper\">\n\t<button [outline]=\"true\" gui-button>\n\t\tOk\n\t</button>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }, { type: i2.FabricDatePickerService }], propDecorators: { selectedDate: [{
                type: Input
            }], datePickerComposition: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLnRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3RpbWUvZmFicmljLnRpbWUtcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3RpbWUvZmFicmljLnRpbWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUErQyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxSSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXBFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFhM0MsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGNBQWM7SUFnQi9CO0lBQ1Q7SUFkcEIsWUFBWSxDQUFRO0lBR3BCLHFCQUFxQixHQUFnQywyQkFBMkIsQ0FBQyxJQUFJLENBQUM7SUFFdEYsS0FBSyxHQUFXLENBQUMsQ0FBQztJQUVsQixJQUFJLENBQVk7SUFFaEIsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUV0QiwyQkFBMkIsR0FBRywyQkFBMkIsQ0FBQztJQUUxRCxZQUE2QixXQUF3QixFQUNqQyxpQkFBMEM7UUFDN0QsS0FBSyxFQUFFLENBQUM7UUFGb0Is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QUFPLENBQUMsQ0FBQztTQUNoRDtJQUNGLENBQUM7dUdBdklXLHlCQUF5QjsyRkFBekIseUJBQXlCLHVRQ3BCdEMsNDlEQXlEQTs7MkZEckNhLHlCQUF5QjtrQkFUckMsU0FBUzsrQkFDQyxpQkFBaUIsUUFFckI7d0JBQ0wsMEJBQTBCLEVBQUUsb0JBQW9CO3FCQUNoRCxpQkFDYyxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNO3NIQUsvQyxZQUFZO3NCQURYLEtBQUs7Z0JBSU4scUJBQXFCO3NCQURwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZGlyZWN0aW9uJztcbmltcG9ydCB7IEZhYnJpY1JlYWN0aXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2ZhYnJpYy1yZWFjdGl2ZSc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhYnJpYy1kYXRlLXBpY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY1RpbWVWYWx1ZXMgfSBmcm9tICcuLi8uLi9tb2RlbHMvZmFicmljLXRpbWUtdmFsdWVzJztcbmltcG9ydCB7IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9mYWJyaWMtZGF0ZS1waWNrZXItY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS10aW1lLXBpY2tlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9mYWJyaWMudGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5vbmx5LXRpbWUtcGlja2VyXSc6ICdpc09ubHlUaW1lUGlja2VyKCknXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY1RpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBGYWJyaWNSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG5cdEBJbnB1dCgpXG5cdHNlbGVjdGVkRGF0ZT86IERhdGU7XG5cblx0QElucHV0KClcblx0ZGF0ZVBpY2tlckNvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24gPSBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uTk9ORTtcblxuXHRzdGVwczogbnVtYmVyID0gMTtcblxuXHRmb3JtOiBGb3JtR3JvdXA7XG5cblx0RGlyZWN0aW9uID0gRGlyZWN0aW9uO1xuXG5cdEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiA9IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbjtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRlUGlja2VyU2VydmljZTogRmFicmljRGF0ZVBpY2tlclNlcnZpY2UpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZm9ybSA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuXHRcdFx0aG91cnM6IFsnJ10sXG5cdFx0XHRtaW51dGVzOiBbJyddLFxuXHRcdFx0c2Vjb25kczogWycnXVxuXHRcdH0pO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXHRcdGlmIChjaGFuZ2VzWydzZWxlY3RlZERhdGUnXSkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9IT1VSUykpIHtcblxuXHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0Y29uc3QgaG91cnMkID0gdGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snaG91cnMnXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzIGFzIE9ic2VydmFibGU8bnVtYmVyPjtcblxuXHRcdFx0aG91cnMkXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0LnN1YnNjcmliZSgoaG91cjogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbWluSG91ciA9IHRoaXMuaXNNZXJpZGlhbigpID8gMSA6IDAsXG5cdFx0XHRcdFx0XHRtYXhIb3VyID0gdGhpcy5pc01lcmlkaWFuKCkgPyAxMiA6IDIzO1xuXG5cdFx0XHRcdFx0aWYgKGhvdXIgPiBtYXhIb3VyIHx8IGhvdXIgPCBtaW5Ib3VyKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbJ2hvdXJzJ10uc2V0VmFsdWUobWluSG91cik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2VsZWN0ZWREYXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzQWN0aXZlKHRoaXMuZGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfTUlOVVRFUykpIHtcblx0XHRcdHRoaXMuZm9ybVxuXHRcdFx0XHQuY29udHJvbHNbJ21pbnV0ZXMnXVxuXHRcdFx0XHQudmFsdWVDaGFuZ2VzXG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0LnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcblx0XHRcdFx0LnN1YnNjcmliZSgodmFsdWU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY29udHJvbEZvcm1JdGVtVmFsdWUodmFsdWUsICdtaW51dGVzJywgJ2hvdXJzJyk7XG5cdFx0XHRcdFx0dGhpcy5jaGFuZ2VTZWxlY3RlZERhdGUoKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNBY3RpdmUodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24sIEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbi5USU1FX1BJQ0tFUl9TRUNPTkRTKSkge1xuXHRcdFx0dGhpcy5mb3JtXG5cdFx0XHRcdC5jb250cm9sc1snc2Vjb25kcyddXG5cdFx0XHRcdC52YWx1ZUNoYW5nZXNcblx0XHRcdFx0Ly8gQHRzLWlnbm9yZVxuXHRcdFx0XHQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxuXHRcdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZTogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5jb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZSwgJ3NlY29uZHMnLCAnbWludXRlcycpO1xuXHRcdFx0XHRcdHRoaXMuY2hhbmdlU2VsZWN0ZWREYXRlKCk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblx0XHR0aGlzLnNldFRpbWVGcm9tU2VsZWN0ZWREYXRlKCk7XG5cdH1cblxuXHRjaGFuZ2VUaW1lSXRlbShmb3JtQ29udHJvbE5hbWU6IHN0cmluZywgc3RlcHM6IG51bWJlcik6IHZvaWQge1xuXHRcdGNvbnN0IHZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW2Zvcm1Db250cm9sTmFtZV0udmFsdWUgKyBzdGVwcztcblx0XHR0aGlzLmZvcm0uY29udHJvbHNbZm9ybUNvbnRyb2xOYW1lXS5zZXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHRjaGFuZ2VTZWxlY3RlZERhdGVUaW1lKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UubmV4dCgpO1xuXHR9XG5cblx0aXNBY3RpdmUoYWN0aXZlQ29tcG9zaXRpb246IEZhYnJpY0RhdGVQaWNrZXJDb21wb3NpdGlvbiwgY2hlY2tlZENvbXBvc2l0aW9uOiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gISEoYWN0aXZlQ29tcG9zaXRpb24gJiBjaGVja2VkQ29tcG9zaXRpb24pO1xuXHR9XG5cblx0aXNNZXJpZGlhbigpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pc0FjdGl2ZSh0aGlzLmRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01FUklESUFOKTtcblx0fVxuXG5cdGlzT25seVRpbWVQaWNrZXIoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICEodGhpcy5kYXRlUGlja2VyQ29tcG9zaXRpb24gJiBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uREFURV9QSUNLRVIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VTZWxlY3RlZERhdGUoKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlKSB7XG5cdFx0XHRjb25zdCBob3VycyA9IHRoaXMuZm9ybS5jb250cm9sc1snaG91cnMnXS52YWx1ZSxcblx0XHRcdFx0bWludXRlcyA9IHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnZhbHVlLFxuXHRcdFx0XHRzZWNvbmRzID0gdGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmRzJ10udmFsdWUsXG5cdFx0XHRcdHRpbWVWYWx1ZXMgPSBuZXcgRmFicmljVGltZVZhbHVlcyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XG5cblx0XHRcdHRoaXMuZGF0ZVBpY2tlclNlcnZpY2UuY2hhbmdlVGltZSh0aW1lVmFsdWVzLCB0aGlzLnNlbGVjdGVkRGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb250cm9sRm9ybUl0ZW1WYWx1ZSh2YWx1ZTogbnVtYmVyLCBvYnNlcnZlZEZvcm1Db250cm9sTmFtZTogc3RyaW5nLCBpbmNGb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSA+IDU5KSB7XG5cdFx0XHRjb25zdCB0aW1lSXRlbVZhbHVlID0gdGhpcy5mb3JtLmNvbnRyb2xzW2luY0Zvcm1Db250cm9sTmFtZV0udmFsdWUsXG5cdFx0XHRcdGluY1RpbWVJdGVtVmFsdWUgPSB0aW1lSXRlbVZhbHVlICsgMTtcblxuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzW2luY0Zvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoaW5jVGltZUl0ZW1WYWx1ZSk7XG5cdFx0XHR0aGlzLmZvcm0uY29udHJvbHNbb2JzZXJ2ZWRGb3JtQ29udHJvbE5hbWVdLnNldFZhbHVlKDBvMCk7XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSA8IDApIHtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1tvYnNlcnZlZEZvcm1Db250cm9sTmFtZV0uc2V0VmFsdWUoMCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBzZXRUaW1lRnJvbVNlbGVjdGVkRGF0ZSgpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZERhdGUpIHtcblx0XHRcdGNvbnN0IGhvdXJzID0gdGhpcy5zZWxlY3RlZERhdGUuZ2V0SG91cnMoKSxcblx0XHRcdFx0bWludXRlcyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldE1pbnV0ZXMoKSxcblx0XHRcdFx0c2Vjb25kcyA9IHRoaXMuc2VsZWN0ZWREYXRlLmdldFNlY29uZHMoKTtcblxuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydob3VycyddLnNldFZhbHVlKGhvdXJzKTtcblx0XHRcdHRoaXMuZm9ybS5jb250cm9sc1snbWludXRlcyddLnNldFZhbHVlKG1pbnV0ZXMpO1xuXHRcdFx0dGhpcy5mb3JtLmNvbnRyb2xzWydzZWNvbmRzJ10uc2V0VmFsdWUoc2Vjb25kcyk7XG5cdFx0fVxuXHR9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cblxuXHQ8ZGl2ICpuZ0lmPVwiaXNBY3RpdmUoZGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfSE9VUlMpXCJcblx0XHQgY2xhc3M9XCJndWktdGltZS1waWNrZXItaXRlbVwiPlxuXHRcdDxndWktYXJyb3ctaWNvbiAoY2xpY2spPVwiY2hhbmdlVGltZUl0ZW0oJ2hvdXJzJywgc3RlcHMpXCJcblx0XHRcdFx0XHRcdFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLlRPUFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPjwvZ3VpLWFycm93LWljb24+XG5cblx0XHQ8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiaG91cnNcIlxuXHRcdFx0ICAgZ3VpLWlucHV0XG5cdFx0XHQgICBtYXhsZW5ndGg9XCIyXCI+XG5cblx0XHQ8Z3VpLWFycm93LWljb24gKGNsaWNrKT1cImNoYW5nZVRpbWVJdGVtKCdob3VycycsIC1zdGVwcylcIlxuXHRcdFx0XHRcdFx0W2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uQk9UVE9NXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+PC9ndWktYXJyb3ctaWNvbj5cblx0PC9kaXY+XG5cblx0PGRpdiAqbmdJZj1cImlzQWN0aXZlKGRhdGVQaWNrZXJDb21wb3NpdGlvbiwgRmFicmljRGF0ZVBpY2tlckNvbXBvc2l0aW9uLlRJTUVfUElDS0VSX01JTlVURVMpXCJcblx0XHQgY2xhc3M9XCJndWktdGltZS1waWNrZXItaXRlbVwiPlxuXHRcdDxndWktYXJyb3ctaWNvbiAoY2xpY2spPVwiY2hhbmdlVGltZUl0ZW0oJ21pbnV0ZXMnLCBzdGVwcylcIlxuXHRcdFx0XHRcdFx0W2RpcmVjdGlvbl09XCJEaXJlY3Rpb24uVE9QXCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWFycm93XCI+PC9ndWktYXJyb3ctaWNvbj5cblxuXHRcdDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJtaW51dGVzXCJcblx0XHRcdCAgIGd1aS1pbnB1dFxuXHRcdFx0ICAgbWF4bGVuZ3RoPVwiMlwiXG5cdFx0XHQgICB0eXBlPVwibnVtYmVyXCI+XG5cblx0XHQ8Z3VpLWFycm93LWljb24gKGNsaWNrKT1cImNoYW5nZVRpbWVJdGVtKCdtaW51dGVzJywgLXN0ZXBzKVwiXG5cdFx0XHRcdFx0XHRbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5CT1RUT01cIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj48L2d1aS1hcnJvdy1pY29uPlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2ICpuZ0lmPVwiaXNBY3RpdmUoZGF0ZVBpY2tlckNvbXBvc2l0aW9uLCBGYWJyaWNEYXRlUGlja2VyQ29tcG9zaXRpb24uVElNRV9QSUNLRVJfU0VDT05EUylcIlxuXHRcdCBjbGFzcz1cImd1aS10aW1lLXBpY2tlci1pdGVtXCI+XG5cdFx0PGd1aS1hcnJvdy1pY29uIChjbGljayk9XCJjaGFuZ2VUaW1lSXRlbSgnc2Vjb25kcycsIHN0ZXBzKVwiXG5cdFx0XHRcdFx0XHRbZGlyZWN0aW9uXT1cIkRpcmVjdGlvbi5UT1BcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJndWktZGF0ZS1waWNrZXItYXJyb3dcIj48L2d1aS1hcnJvdy1pY29uPlxuXG5cdFx0PGlucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZHNcIlxuXHRcdFx0ICAgZ3VpLWlucHV0XG5cdFx0XHQgICBtYXhsZW5ndGg9XCIyXCJcblx0XHRcdCAgIHR5cGU9XCJudW1iZXJcIj5cblxuXHRcdDxndWktYXJyb3ctaWNvbiAoY2xpY2spPVwiY2hhbmdlVGltZUl0ZW0oJ3NlY29uZHMnLCAtc3RlcHMpXCJcblx0XHRcdFx0XHRcdFtkaXJlY3Rpb25dPVwiRGlyZWN0aW9uLkJPVFRPTVwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImd1aS1kYXRlLXBpY2tlci1hcnJvd1wiPjwvZ3VpLWFycm93LWljb24+XG5cdDwvZGl2PlxuXG48L2Zvcm0+XG5cbjxkaXYgKGNsaWNrKT1cImNoYW5nZVNlbGVjdGVkRGF0ZVRpbWUoKVwiXG5cdCBjbGFzcz1cImd1aS10aW1lLXBpY2tlci1idXR0b24td3JhcHBlclwiPlxuXHQ8YnV0dG9uIFtvdXRsaW5lXT1cInRydWVcIiBndWktYnV0dG9uPlxuXHRcdE9rXG5cdDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=