import { FieldModel } from '../../api/model/field.model';
export class FieldConverter {
    convert(fields) {
        return fields.map((field) => {
            return this.convertOne(field);
        });
    }
    convertOne(field) {
        return new FieldModel(field.getId(), field.getDataType(), field.getName());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9kb21haW4tcmVhZC9pbml0L2ZpZWxkLmNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJekQsTUFBTSxPQUFPLGNBQWM7SUFFMUIsT0FBTyxDQUFDLE1BQTBCO1FBQ2pDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sVUFBVSxDQUFDLEtBQWtCO1FBRXBDLE9BQU8sSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZE1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL21vZGVsL2ZpZWxkLm1vZGVsJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi4vLi4vZG9tYWluL2ZpZWxkL2ZpZWxkLmVudGl0eSc7XG5cblxuZXhwb3J0IGNsYXNzIEZpZWxkQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGZpZWxkczogQXJyYXk8RmllbGRFbnRpdHk+KTogQXJyYXk8RmllbGRNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogRmllbGRFbnRpdHkpID0+IHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRPbmUoZmllbGQpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0T25lKGZpZWxkOiBGaWVsZEVudGl0eSk6IEZpZWxkTW9kZWwge1xuXG5cdFx0cmV0dXJuIG5ldyBGaWVsZE1vZGVsKGZpZWxkLmdldElkKCksIGZpZWxkLmdldERhdGFUeXBlKCksIGZpZWxkLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==