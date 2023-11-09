import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { monthsPerQuarters } from '../../../data/months-per-quarters';
import { FabricCalendarView } from '../../../models/fabric-calendar-view';
import { FabricDateUtils } from '../../../../../common/date-utils/fabric-date-utils';
import { FabricDatePickerDefaultActiveYear } from '../../fabric-date-picker-default-values';
import * as i0 from "@angular/core";
import * as i1 from "../../fabric-date-picker-calendar.service";
import * as i2 from "../../fabric-date-picker-calendar-view.service";
import * as i3 from "@angular/common";
export class FabricDatePickerMonthsViewComponent {
    constructor(calendarService, calendarViewService) {
        this.calendarService = calendarService;
        this.calendarViewService = calendarViewService;
        this.activeYear = FabricDatePickerDefaultActiveYear;
        this.currentDay = new Date();
        this.monthsPerQuarters = monthsPerQuarters;
    }
    isMonth(date, month) {
        return FabricDateUtils.isMonth(date, month, this.activeYear);
    }
    selectMonth(month) {
        this.calendarService.selectMonth(month);
        this.calendarViewService.switchView(FabricCalendarView.DAYS);
    }
}
FabricDatePickerMonthsViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerMonthsViewComponent, deps: [{ token: i1.FabricDatePickerCalendarService }, { token: i2.FabricDatePickerCalendarViewService }], target: i0.ɵɵFactoryTarget.Component });
FabricDatePickerMonthsViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: FabricDatePickerMonthsViewComponent, selector: "gui-date-picker-months-view", inputs: { selectedDate: "selectedDate", activeYear: "activeYear" }, ngImport: i0, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerMonthsViewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-date-picker-months-view', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"gui-display-grid gui-grid-rows-gap-8 gui-py-6 gui-date-picker-view-border-top\">\n\t<div *ngFor=\"let quarter of monthsPerQuarters\"\n\t\t class=\"gui-display-grid gui-grid-cols-3\">\n\t\t<div (click)=\"selectMonth(month.nr)\"\n\t\t\t *ngFor=\"let month of quarter\"\n\t\t\t [class.gui-date-picker-current-month]=\"isMonth(currentDay, month.nr)\"\n\t\t\t [class.gui-date-picker-selected-month]=\"isMonth(selectedDate, month.nr)\"\n\t\t\t class=\"gui-date-picker-cell gui-date-picker-month\">\n\t\t\t{{month.name}}\n\t\t</div>\n\t</div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.FabricDatePickerCalendarService }, { type: i2.FabricDatePickerCalendarViewService }]; }, propDecorators: { selectedDate: [{
                type: Input
            }], activeYear: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLW1vbnRocy12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9ndWktZmFicmljL3NyYy9mb3JtL2RhdGUtcGlja2VyL2NhbGVuZGFyL3ZpZXcvbW9udGhzL2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci92aWV3L21vbnRocy9mYWJyaWMtZGF0ZS1waWNrZXItbW9udGhzLXZpZXcuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQVE1RixNQUFNLE9BQU8sbUNBQW1DO0lBWS9DLFlBQTZCLGVBQWdELEVBQ3pELG1CQUF3RDtRQUQvQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUM7UUFDekQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQztRQVA1RSxlQUFVLEdBQVcsaUNBQWlDLENBQUM7UUFFdkQsZUFBVSxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFFckIsc0JBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFJL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFVLEVBQUUsS0FBYTtRQUNoQyxPQUFPLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7aUlBdkJXLG1DQUFtQztxSEFBbkMsbUNBQW1DLHVJQ2RoRCxnakJBWUE7NEZERWEsbUNBQW1DO2tCQU4vQyxTQUFTOytCQUNDLDZCQUE2QixpQkFFeEIsaUJBQWlCLENBQUMsSUFBSSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTt3S0FLL0MsWUFBWTtzQkFEWCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9udGhzUGVyUXVhcnRlcnMgfSBmcm9tICcuLi8uLi8uLi9kYXRhL21vbnRocy1wZXItcXVhcnRlcnMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckNhbGVuZGFyVmlld1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWJyaWMtZGF0ZS1waWNrZXItY2FsZW5kYXItdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IEZhYnJpY0NhbGVuZGFyVmlldyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9mYWJyaWMtY2FsZW5kYXItdmlldyc7XG5pbXBvcnQgeyBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWNhbGVuZGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2RhdGUtdXRpbHMvZmFicmljLWRhdGUtdXRpbHMnO1xuaW1wb3J0IHsgRmFicmljRGF0ZVBpY2tlckRlZmF1bHRBY3RpdmVZZWFyIH0gZnJvbSAnLi4vLi4vZmFicmljLWRhdGUtcGlja2VyLWRlZmF1bHQtdmFsdWVzJztcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWRhdGUtcGlja2VyLW1vbnRocy12aWV3Jyxcblx0dGVtcGxhdGVVcmw6ICcuL2ZhYnJpYy1kYXRlLXBpY2tlci1tb250aHMtdmlldy5jb21wb25lbnQuaHRtbCcsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJNb250aHNWaWV3Q29tcG9uZW50IHtcblxuXHRASW5wdXQoKVxuXHRzZWxlY3RlZERhdGU/OiBEYXRlO1xuXG5cdEBJbnB1dCgpXG5cdGFjdGl2ZVllYXI6IG51bWJlciA9IEZhYnJpY0RhdGVQaWNrZXJEZWZhdWx0QWN0aXZlWWVhcjtcblxuXHRjdXJyZW50RGF5OiBEYXRlID0gbmV3IERhdGUoKTtcblxuXHRyZWFkb25seSBtb250aHNQZXJRdWFydGVycyA9IG1vbnRoc1BlclF1YXJ0ZXJzO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FsZW5kYXJTZXJ2aWNlOiBGYWJyaWNEYXRlUGlja2VyQ2FsZW5kYXJTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNhbGVuZGFyVmlld1NlcnZpY2U6IEZhYnJpY0RhdGVQaWNrZXJDYWxlbmRhclZpZXdTZXJ2aWNlKSB7XG5cdH1cblxuXHRpc01vbnRoKGRhdGU6IERhdGUsIG1vbnRoOiBudW1iZXIpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gRmFicmljRGF0ZVV0aWxzLmlzTW9udGgoZGF0ZSwgbW9udGgsIHRoaXMuYWN0aXZlWWVhcik7XG5cdH1cblxuXHRzZWxlY3RNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5jYWxlbmRhclNlcnZpY2Uuc2VsZWN0TW9udGgobW9udGgpO1xuXHRcdHRoaXMuY2FsZW5kYXJWaWV3U2VydmljZS5zd2l0Y2hWaWV3KEZhYnJpY0NhbGVuZGFyVmlldy5EQVlTKTtcblx0fVxufVxuIiwiPGRpdiBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtcm93cy1nYXAtOCBndWktcHktNiBndWktZGF0ZS1waWNrZXItdmlldy1ib3JkZXItdG9wXCI+XG5cdDxkaXYgKm5nRm9yPVwibGV0IHF1YXJ0ZXIgb2YgbW9udGhzUGVyUXVhcnRlcnNcIlxuXHRcdCBjbGFzcz1cImd1aS1kaXNwbGF5LWdyaWQgZ3VpLWdyaWQtY29scy0zXCI+XG5cdFx0PGRpdiAoY2xpY2spPVwic2VsZWN0TW9udGgobW9udGgubnIpXCJcblx0XHRcdCAqbmdGb3I9XCJsZXQgbW9udGggb2YgcXVhcnRlclwiXG5cdFx0XHQgW2NsYXNzLmd1aS1kYXRlLXBpY2tlci1jdXJyZW50LW1vbnRoXT1cImlzTW9udGgoY3VycmVudERheSwgbW9udGgubnIpXCJcblx0XHRcdCBbY2xhc3MuZ3VpLWRhdGUtcGlja2VyLXNlbGVjdGVkLW1vbnRoXT1cImlzTW9udGgoc2VsZWN0ZWREYXRlLCBtb250aC5ucilcIlxuXHRcdFx0IGNsYXNzPVwiZ3VpLWRhdGUtcGlja2VyLWNlbGwgZ3VpLWRhdGUtcGlja2VyLW1vbnRoXCI+XG5cdFx0XHR7e21vbnRoLm5hbWV9fVxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PlxuIl19