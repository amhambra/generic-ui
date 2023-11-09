import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FabricDatePickerYears {
    constructor() {
        this.rowsForDisplay = [];
        this.minYear = 0;
        this.maxYear = 0;
        this.selectedYear = 0;
        this.inc = 10;
    }
    getYears(selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        const yearsRange = this.maxYear - this.minYear;
        let years = [], rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    }
    prevYearRange(year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear > this.minYear) {
            this.selectedYear -= this.inc;
        }
        if (this.selectedYear > this.minYear) {
            return this.getYears(this.selectedYear);
        }
        else {
            return this.rowsForDisplay;
        }
    }
    nextYearRange(year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear < this.maxYear) {
            this.selectedYear += this.inc;
        }
        if (this.selectedYear < this.maxYear) {
            return this.getYears(this.selectedYear);
        }
        else {
            return this.rowsForDisplay;
        }
    }
    createYearsPool(minYear, yearsRange, years) {
        for (let i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    }
    divideYearsPool(years, rows) {
        for (let i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    }
    createRowsForDisplay(rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (let i = 0; i < rows.length; i++) {
                if (rows[i].indexOf(selectedYear) > -1) {
                    if (!rows[i - 1]) {
                        return [rows[i], rows[i + 1], rows[i + 2], rows[i + 3], rows[i + 4]];
                    }
                    if (!rows[i - 2]) {
                        return [rows[i - 1], rows[i], rows[i + 1], rows[i + 2], rows[i + 3]];
                    }
                    if (!rows[i + 1]) {
                        return [rows[i - 4], rows[i - 3], rows[i - 2], rows[i - 1], rows[i]];
                    }
                    if (!rows[i + 2]) {
                        return [rows[i - 3], rows[i - 2], rows[i - 1], rows[i], rows[i + 1]];
                    }
                    return this.rowsForDisplay = [rows[i - 2], rows[i - 1], rows[i], rows[i + 1], rows[i + 2]];
                }
            }
        }
        return [[]];
    }
}
FabricDatePickerYears.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerYears, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
FabricDatePickerYears.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerYears });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: FabricDatePickerYears, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL2d1aS1mYWJyaWMvc3JjL2Zvcm0vZGF0ZS1waWNrZXIvY2FsZW5kYXIveWVhcnMvZmFicmljLWRhdGUtcGlja2VyLnllYXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFHUyxtQkFBYyxHQUF5QixFQUFFLENBQUM7UUFFMUMsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWhCLFFBQUcsR0FBVyxFQUFFLENBQUM7S0FrR2xDO0lBaEdBLFFBQVEsQ0FBQyxZQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWpDLE1BQU0sVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN2RCxJQUFJLEtBQUssR0FBa0IsRUFBRSxFQUM1QixJQUFJLEdBQXlCLEVBQUUsQ0FBQztRQUVqQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUU5RCxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFekMsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELGFBQWEsQ0FBQyxJ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a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGYWJyaWNEYXRlUGlja2VyWWVhcnMge1xuXG5cdHByaXZhdGUgcm93c0ZvckRpc3BsYXk6IEFycmF5PEFycmF5PG51bWJlcj4+ID0gW107XG5cblx0cHJpdmF0ZSBtaW5ZZWFyOiBudW1iZXIgPSAwO1xuXG5cdHByaXZhdGUgbWF4WWVhcjogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIHNlbGVjdGVkWWVhcjogbnVtYmVyID0gMDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGluYzogbnVtYmVyID0gMTA7XG5cblx0Z2V0WWVhcnMoc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0dGhpcy5taW5ZZWFyID0gc2VsZWN0ZWRZZWFyIC0gNTA7XG5cdFx0dGhpcy5tYXhZZWFyID0gc2VsZWN0ZWRZZWFyICsgNTA7XG5cblx0XHRjb25zdCB5ZWFyc1JhbmdlOiBudW1iZXIgPSB0aGlzLm1heFllYXIgLSB0aGlzLm1pblllYXI7XG5cdFx0bGV0IHllYXJzOiBBcnJheTxudW1iZXI+ID0gW10sXG5cdFx0XHRyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG5cdFx0eWVhcnMgPSB0aGlzLmNyZWF0ZVllYXJzUG9vbCh0aGlzLm1pblllYXIsIHllYXJzUmFuZ2UsIHllYXJzKTtcblxuXHRcdHJvd3MgPSB0aGlzLmRpdmlkZVllYXJzUG9vbCh5ZWFycywgcm93cyk7XG5cblx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheSA9IHRoaXMuY3JlYXRlUm93c0ZvckRpc3BsYXkocm93cywgc2VsZWN0ZWRZZWFyKTtcblx0fVxuXG5cdHByZXZZZWFyUmFuZ2UoeWVhcjogbnVtYmVyKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkWWVhciA+IHRoaXMubWluWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgLT0gdGhpcy5pbmM7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyID4gdGhpcy5taW5ZZWFyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRZZWFycyh0aGlzLnNlbGVjdGVkWWVhcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5O1xuXHRcdH1cblxuXHR9XG5cblx0bmV4dFllYXJSYW5nZSh5ZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cblx0XHRpZiAoIXRoaXMuc2VsZWN0ZWRZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHllYXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyIDwgdGhpcy5tYXhZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciArPSB0aGlzLmluYztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFllYXIgPCB0aGlzLm1heFllYXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVllYXJzUG9vbChtaW5ZZWFyOiBudW1iZXIsIHllYXJzUmFuZ2U6IG51bWJlciwgeWVhcnM6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB5ZWFyc1JhbmdlOyBpKyspIHtcblx0XHRcdHllYXJzLnB1c2gobWluWWVhciArIGkpO1xuXHRcdH1cblx0XHRyZXR1cm4geWVhcnM7XG5cdH1cblxuXHRwcml2YXRlIGRpdmlkZVllYXJzUG9vbCh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4pOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkgKz0gNSkge1xuXHRcdFx0cm93cy5wdXNoKHllYXJzLnNsaWNlKGksIGkgKyA1KSk7XG5cdFx0fVxuXHRcdHJldHVybiByb3dzO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb3dzRm9yRGlzcGxheShyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+Piwgc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0aWYgKHNlbGVjdGVkWWVhciA+PSB0aGlzLm1pblllYXIgfHwgc2VsZWN0ZWRZZWFyIDw9IHRoaXMubWF4WWVhcikge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHRpZiAocm93c1tpXS5pbmRleE9mKHNlbGVjdGVkWWVhcikgPiAtMSkge1xuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl0sIHJvd3NbaSArIDNdLCByb3dzW2kgKyA0XV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdLCByb3dzW2kgKyAzXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSA0XSwgcm93c1tpIC0gM10sIHJvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAzXSwgcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXkgPSBbcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFtbXV07XG5cdH1cblxufVxuIl19