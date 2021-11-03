import { Injectable } from '@angular/core';
import { FieldReadModel } from './field.read-model';
export class FieldUiConverter {
    convert(fields) {
        return fields.map((field) => {
            return this.convertOne(field);
        });
    }
    convertOne(field) {
        return new FieldReadModel(field.getId(), field.getDataType(), field.getName());
    }
}
FieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9zdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLcEQsTUFBTSxPQUFPLGdCQUFnQjtJQUU1QixPQUFPLENBQUMsTUFBb0I7UUFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVPLFVBQVUsQ0FBQyxLQUFZO1FBRTlCLE9BQU8sSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUFaRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWVsZFJlYWRNb2RlbCB9IGZyb20gJy4vZmllbGQucmVhZC1tb2RlbCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkVWlDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnQoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxGaWVsZFJlYWRNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGQpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBGaWVsZCk6IEZpZWxkUmVhZE1vZGVsIHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRSZWFkTW9kZWwoZmllbGQuZ2V0SWQoKSwgZmllbGQuZ2V0RGF0YVR5cGUoKSwgZmllbGQuZ2V0TmFtZSgpKTtcblx0fVxufVxuIl19