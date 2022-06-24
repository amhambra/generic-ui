import { DataType } from '../../field/domain/field/data/data-type';
export class SearchManager {
    constructor() {
        this.searchFields = [];
        this.enabledDataTypes = [
            DataType.STRING
        ];
    }
    addSearchPhrase(fields, searchPhrase) {
        if (!searchPhrase) {
            this.searchFields = [];
            return;
        }
        const searchableFields = fields.filter((field) => {
            return this.enabledDataTypes.some((dt) => dt === field.getDataType());
        });
        if (searchableFields.length === 0) {
            return;
        }
        this.searchFields = searchableFields;
        this.searchPhrase = searchPhrase;
    }
    removeSearchFilters() {
        this.searchFields = [];
    }
    search(entities) {
        if (entities.length === 0 || this.searchFields.length === 0) {
            return entities;
        }
        const searchedItems = new Set();
        for (let i = 0; i < entities.length; i += 1) {
            this.searchFields
                .filter((field) => field.search(entities[i], this.searchPhrase))
                .forEach(() => {
                searchedItems.add(entities[i]);
            });
        }
        return Array.from(searchedItems);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLm1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvc3RydWN0dXJlL3NlYXJjaC9kb21haW4vc2VhcmNoLm1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBSW5FLE1BQU0sT0FBTyxhQUFhO0lBQTFCO1FBRVMsaUJBQVksR0FBdUIsRUFBRSxDQUFDO1FBSXRDLHFCQUFnQixHQUFvQjtZQUMzQyxRQUFRLENBQUMsTUFBTTtTQUNmLENBQUM7SUErQ0gsQ0FBQztJQTdDQSxlQUFlLENBQUMsTUFBMEIsRUFBRSxZQUFvQjtRQUUvRCxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDUDtRQUVELE1BQU0sZ0JBQWdCLEdBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFrQixFQUFFLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDakYsQ0FBQyxDQUFDLENBQUM7UUFFSixJQUFJLGdCQUFnQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBaUM7UUFFdkMsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDNUQsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUVsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBRTVDLElBQUksQ0FBQyxZQUFZO2lCQUNmLE1BQU0sQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDNUUsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDYixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uL3NvdXJjZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBGaWVsZEVudGl0eSB9IGZyb20gJy4uLy4uL2ZpZWxkL2RvbWFpbi9maWVsZC9maWVsZC5lbnRpdHknO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHNlYXJjaEZpZWxkczogQXJyYXk8RmllbGRFbnRpdHk+ID0gW107XG5cblx0cHJpdmF0ZSBzZWFyY2hQaHJhc2U6IHN0cmluZztcblxuXHRwcml2YXRlIGVuYWJsZWREYXRhVHlwZXM6IEFycmF5PERhdGFUeXBlPiA9IFtcblx0XHREYXRhVHlwZS5TVFJJTkdcblx0XTtcblxuXHRhZGRTZWFyY2hQaHJhc2UoZmllbGRzOiBBcnJheTxGaWVsZEVudGl0eT4sIHNlYXJjaFBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAoIXNlYXJjaFBocmFzZSkge1xuXHRcdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBzZWFyY2hhYmxlRmllbGRzID1cblx0XHRcdGZpZWxkcy5maWx0ZXIoKGZpZWxkOiBGaWVsZEVudGl0eSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5lbmFibGVkRGF0YVR5cGVzLnNvbWUoKGR0OiBEYXRhVHlwZSkgPT4gZHQgPT09IGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHRcdFx0fSk7XG5cblx0XHRpZiAoc2VhcmNoYWJsZUZpZWxkcy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnNlYXJjaEZpZWxkcyA9IHNlYXJjaGFibGVGaWVsZHM7XG5cblx0XHR0aGlzLnNlYXJjaFBocmFzZSA9IHNlYXJjaFBocmFzZTtcblx0fVxuXG5cdHJlbW92ZVNlYXJjaEZpbHRlcnMoKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hGaWVsZHMgPSBbXTtcblx0fVxuXG5cdHNlYXJjaChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRpZiAoZW50aXRpZXMubGVuZ3RoID09PSAwIHx8IHRoaXMuc2VhcmNoRmllbGRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdGNvbnN0IHNlYXJjaGVkSXRlbXMgPSBuZXcgU2V0PE9yaWdpbkl0ZW1FbnRpdHk+KCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGVudGl0aWVzLmxlbmd0aDsgaSArPSAxKSB7XG5cblx0XHRcdHRoaXMuc2VhcmNoRmllbGRzXG5cdFx0XHRcdC5maWx0ZXIoKGZpZWxkOiBGaWVsZEVudGl0eSkgPT4gZmllbGQuc2VhcmNoKGVudGl0aWVzW2ldLCB0aGlzLnNlYXJjaFBocmFzZSkpXG5cdFx0XHRcdC5mb3JFYWNoKCgpID0+IHtcblx0XHRcdFx0XHRzZWFyY2hlZEl0ZW1zLmFkZChlbnRpdGllc1tpXSk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBBcnJheS5mcm9tKHNlYXJjaGVkSXRlbXMpO1xuXHR9XG5cbn1cbiJdfQ==