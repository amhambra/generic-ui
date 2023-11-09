export class Dictionary {
    constructor() {
        this.translation = new Map();
        this.resolver = (key, value) => value;
    }
    changeTranslation(change) {
        for (const key of Object.keys(change)) {
            this.translation.set(key, change[key]);
        }
    }
    getTranslation() {
        return Array.from(this.translation)
            .reduce((obj, [key, value]) => (Object.assign(obj, { [key]: this.resolver(key, value) })), {});
    }
    setResolver(resolver) {
        this.resolver = resolver;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvY29yZS9sMTBuL3NyYy9jb3JlL2RpY3Rpb25hcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsTUFBTSxPQUFPLFVBQVU7SUFBdkI7UUFFa0IsZ0JBQVcsR0FBd0IsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFFdEUsYUFBUSxHQUEyQyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztJQW1CbEcsQ0FBQztJQWpCQSxpQkFBaUIsQ0FBQyxNQUF1QztRQUN4RCxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQztJQUVELGNBQWM7UUFDYixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUMvQixNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQzlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQ3hELEVBQUUsRUFBRSxDQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0Q7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRpb25DaGFuZ2UgfSBmcm9tICcuLi9hcGkvdHJhbnNsYXRpb24tY2hhbmdlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uJztcblxuZXhwb3J0IGNsYXNzIERpY3Rpb25hcnkge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJhbnNsYXRpb246IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuXG5cdHByaXZhdGUgcmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nID0gKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB2YWx1ZTtcblxuXHRjaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhjaGFuZ2UpKSB7XG5cdFx0XHR0aGlzLnRyYW5zbGF0aW9uLnNldChrZXksIGNoYW5nZVtrZXldKTtcblx0XHR9XG5cdH1cblxuXHRnZXRUcmFuc2xhdGlvbigpOiBUcmFuc2xhdGlvbiB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20odGhpcy50cmFuc2xhdGlvbilcblx0XHRcdFx0XHQucmVkdWNlKChvYmosIFtrZXksIHZhbHVlXSkgPT4gKFxuXHRcdFx0XHRcdFx0T2JqZWN0LmFzc2lnbihvYmosIHsgW2tleV06IHRoaXMucmVzb2x2ZXIoa2V5LCB2YWx1ZSkgfSlcblx0XHRcdFx0XHQpLCB7fSkgYXMgVHJhbnNsYXRpb247XG5cdH1cblxuXHRzZXRSZXNvbHZlcihyZXNvbHZlcjogKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnJlc29sdmVyID0gcmVzb2x2ZXI7XG5cdH1cblxufVxuIl19