import { DataType } from '../../../../field/src/domain/field/data/data-type';
import { ContainsFilterType } from './filter-types/contains-filter-type';
import { FilterTypeIdGenerator } from './filter-type.id-generator';
import { FilterTypeModel } from '../../api/type/filter-type.model';
export class FilterTypeManager {
    constructor(fields) {
        this.fieldIds = [];
        this.map = new WeakMap();
        this.filterTypeMap = new WeakMap();
        this.dataTypeToFilterType = new Map();
        this.filterTypeIdGenerator = new FilterTypeIdGenerator();
        this.assignFilterTypes();
        this.addFields(fields);
    }
    getFilterType(filterTypeId) {
        return this.filterTypeMap.get(filterTypeId);
    }
    getFieldIdsToFilterTypes() {
        const map = new Map();
        for (const fieldId of this.fieldIds) {
            const filterTypes = this.map.get(fieldId), readModels = filterTypes.map(f => {
                return new FilterTypeModel(f.getId(), f.getName());
            });
            map.set(fieldId.toString(), readModels);
        }
        return map;
    }
    addFields(fields) {
        for (const field of fields) {
            this.addField(field);
        }
    }
    addField(field) {
        const fieldId = field.getId(), dataType = field.getDataType();
        const filterTypesFromDataType = this.dataTypeToFilterType.get(dataType);
        this.fieldIds.push(fieldId);
        this.map.set(fieldId, Array.from(filterTypesFromDataType));
    }
    assignFilterTypes() {
        this.assignFilterTypesForDataTypeUnknown();
        this.assignFilterTypesForDataTypeNumber();
        this.assignFilterTypesForDataTypeString();
        this.assignFilterTypesForDataTypeBoolean();
        this.assignFilterTypesForDataTypeDate();
        this.assignFilterTypesForDataTypeCustom();
    }
    assignFilterTypesForDataTypeUnknown() {
        this.dataTypeToFilterType.set(DataType.UNKNOWN, []);
    }
    assignFilterTypesForDataTypeNumber() {
        this.dataTypeToFilterType.set(DataType.NUMBER, []);
    }
    assignFilterTypesForDataTypeString() {
        const filterTypes = [
            new ContainsFilterType(this.generateId())
        ];
        this.dataTypeToFilterType.set(DataType.STRING, filterTypes);
        this.addFilterTypes(filterTypes);
    }
    assignFilterTypesForDataTypeBoolean() {
        this.dataTypeToFilterType.set(DataType.BOOLEAN, []);
    }
    assignFilterTypesForDataTypeDate() {
        this.dataTypeToFilterType.set(DataType.DATE, []);
    }
    assignFilterTypesForDataTypeCustom() {
        this.dataTypeToFilterType.set(DataType.CUSTOM, []);
    }
    generateId() {
        return this.filterTypeIdGenerator.generate();
    }
    addFilterTypes(filterTypes) {
        for (const filterType of filterTypes) {
            this.filterTypeMap.set(filterType.getId(), filterType);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUubWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmlsdGVyL3NyYy9kb21haW4vdHlwZS9maWx0ZXItdHlwZS5tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM3RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHbkUsTUFBTSxPQUFPLGlCQUFpQjtJQVk3QixZQUFZLE1BQTBCO1FBVnJCLGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBRTlCLFFBQUcsR0FBRyxJQUFJLE9BQU8sRUFBdUMsQ0FBQztRQUV6RCxrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFxQyxDQUFDO1FBRWpFLHlCQUFvQixHQUFHLElBQUksR0FBRyxFQUF3QyxDQUFDO1FBRXZFLDBCQUFxQixHQUEwQixJQUFJLHFCQUFxQixFQUFFLENBQUM7UUFHM0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsYUFBYSxDQUFDLFlBQTBCO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELHdCQUF3QjtRQUN2QixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBRXRCLEtBQUssTUFBTSxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNwQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFDeEMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBRUosR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7U0FDeEM7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNaLENBQUM7SUFFTyxTQUFTLENBQUMsTUFBMEI7UUFDM0MsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUFNLEVBQUU7WUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtJQUNGLENBQUM7SUFFTyxRQUFRLENBQUMsS0FBa0I7UUFFbEMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWhDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVPLGlCQUFpQjtRQUN4QixJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsbUNBQW1DLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU8sbUNBQW1DO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sa0NBQWtDO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sa0NBQWtDO1FBRXpDLE1BQU0sV0FBVyxHQUFHO1lBQ25CLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3pDLENBQUM7UUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFNUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sbUNBQW1DO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sZ0NBQWdDO1FBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU8sa0NBQWtDO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRU8sVUFBVTtRQUNqQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRU8sY0FBYyxDQUFDLFdBQXVDO1FBQzdELEtBQUssTUFBTSxVQUFVLElBQUksV0FBVyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpZWxkRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvc3JjL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHknO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL3NyYy9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgQ29udGFpbnNGaWx0ZXJUeXBlIH0gZnJvbSAnLi9maWx0ZXItdHlwZXMvY29udGFpbnMtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWx0ZXItdHlwZS5pZC1nZW5lcmF0b3InO1xuaW1wb3J0IHsgQmFzZUZpbHRlclR5cGUgfSBmcm9tICcuL2Jhc2UtZmlsdGVyLXR5cGUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1vZGVsIH0gZnJvbSAnLi4vLi4vYXBpL3R5cGUvZmlsdGVyLXR5cGUubW9kZWwnO1xuXG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkczogQXJyYXk8RmllbGRJZD4gPSBbXTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IG1hcCA9IG5ldyBXZWFrTWFwPEZpZWxkSWQsIEFycmF5PEJhc2VGaWx0ZXJUeXBlPGFueT4+PigpO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZU1hcCA9IG5ldyBXZWFrTWFwPEZpbHRlclR5cGVJZCwgQmFzZUZpbHRlclR5cGU8YW55Pj4oKTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRhdGFUeXBlVG9GaWx0ZXJUeXBlID0gbmV3IE1hcDxEYXRhVHlwZSwgQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4+KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlSWRHZW5lcmF0b3I6IEZpbHRlclR5cGVJZEdlbmVyYXRvciA9IG5ldyBGaWx0ZXJUeXBlSWRHZW5lcmF0b3IoKTtcblxuXHRjb25zdHJ1Y3RvcihmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5Pikge1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXMoKTtcblxuXHRcdHRoaXMuYWRkRmllbGRzKGZpZWxkcyk7XG5cdH1cblxuXHRnZXRGaWx0ZXJUeXBlKGZpbHRlclR5cGVJZDogRmlsdGVyVHlwZUlkKTogQmFzZUZpbHRlclR5cGU8YW55PiB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZU1hcC5nZXQoZmlsdGVyVHlwZUlkKTtcblx0fVxuXG5cdGdldEZpZWxkSWRzVG9GaWx0ZXJUeXBlcygpOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlTW9kZWw+PiB7XG5cdFx0Y29uc3QgbWFwID0gbmV3IE1hcCgpO1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZElkIG9mIHRoaXMuZmllbGRJZHMpIHtcblx0XHRcdGNvbnN0IGZpbHRlclR5cGVzID0gdGhpcy5tYXAuZ2V0KGZpZWxkSWQpLFxuXHRcdFx0XHRyZWFkTW9kZWxzID0gZmlsdGVyVHlwZXMubWFwKGYgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBuZXcgRmlsdGVyVHlwZU1vZGVsKGYuZ2V0SWQoKSwgZi5nZXROYW1lKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0bWFwLnNldChmaWVsZElkLnRvU3RyaW5nKCksIHJlYWRNb2RlbHMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkcyhmaWVsZHM6IEFycmF5PEZpZWxkRW50aXR5Pik6IHZvaWQge1xuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmFkZEZpZWxkKGZpZWxkKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGFkZEZpZWxkKGZpZWxkOiBGaWVsZEVudGl0eSk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCksXG5cdFx0XHRkYXRhVHlwZSA9IGZpZWxkLmdldERhdGFUeXBlKCk7XG5cblx0XHRjb25zdCBmaWx0ZXJUeXBlc0Zyb21EYXRhVHlwZSA9IHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuZ2V0KGRhdGFUeXBlKTtcblxuXHRcdHRoaXMuZmllbGRJZHMucHVzaChmaWVsZElkKTtcblx0XHR0aGlzLm1hcC5zZXQoZmllbGRJZCwgQXJyYXkuZnJvbShmaWx0ZXJUeXBlc0Zyb21EYXRhVHlwZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlcygpOiB2b2lkIHtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVVbmtub3duKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk7XG5cdFx0dGhpcy5hc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpO1xuXHRcdHRoaXMuYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZURhdGUoKTtcblx0XHR0aGlzLmFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVDdXN0b20oKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZVVua25vd24oKTogdm9pZCB7XG5cdFx0dGhpcy5kYXRhVHlwZVRvRmlsdGVyVHlwZS5zZXQoRGF0YVR5cGUuVU5LTk9XTiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlTnVtYmVyKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLk5VTUJFUiwgW10pO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlU3RyaW5nKCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmlsdGVyVHlwZXMgPSBbXG5cdFx0XHRuZXcgQ29udGFpbnNGaWx0ZXJUeXBlKHRoaXMuZ2VuZXJhdGVJZCgpKVxuXHRcdF07XG5cblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5TVFJJTkcsIGZpbHRlclR5cGVzKTtcblxuXHRcdHRoaXMuYWRkRmlsdGVyVHlwZXMoZmlsdGVyVHlwZXMpO1xuXHR9XG5cblx0cHJpdmF0ZSBhc3NpZ25GaWx0ZXJUeXBlc0ZvckRhdGFUeXBlQm9vbGVhbigpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5CT09MRUFOLCBbXSk7XG5cdH1cblxuXHRwcml2YXRlIGFzc2lnbkZpbHRlclR5cGVzRm9yRGF0YVR5cGVEYXRlKCk6IHZvaWQge1xuXHRcdHRoaXMuZGF0YVR5cGVUb0ZpbHRlclR5cGUuc2V0KERhdGFUeXBlLkRBVEUsIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgYXNzaWduRmlsdGVyVHlwZXNGb3JEYXRhVHlwZUN1c3RvbSgpOiB2b2lkIHtcblx0XHR0aGlzLmRhdGFUeXBlVG9GaWx0ZXJUeXBlLnNldChEYXRhVHlwZS5DVVNUT00sIFtdKTtcblx0fVxuXG5cdHByaXZhdGUgZ2VuZXJhdGVJZCgpOiBGaWx0ZXJUeXBlSWQge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclR5cGVJZEdlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBhZGRGaWx0ZXJUeXBlcyhmaWx0ZXJUeXBlczogQXJyYXk8QmFzZUZpbHRlclR5cGU8YW55Pj4pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGZpbHRlclR5cGUgb2YgZmlsdGVyVHlwZXMpIHtcblx0XHRcdHRoaXMuZmlsdGVyVHlwZU1hcC5zZXQoZmlsdGVyVHlwZS5nZXRJZCgpLCBmaWx0ZXJUeXBlKTtcblx0XHR9XG5cdH1cblxufVxuIl19