import { GenericBuilder } from '../../../common/src/cdk/generic-builder';
import { PagingDefinition } from '../../../feature/structure/paging/src/paging-definition';
export class StructureDefinitionBuilder extends GenericBuilder {
    constructor(headerEnabled, bottomPaging, topPaging) {
        super();
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = true;
    }
    withHeader(enabled) {
        this.headerEnabled = enabled;
        return this;
    }
    withBottomPaging(paging) {
        this.bottomPaging = paging;
        return this;
    }
    withTopPaging(paging) {
        this.topPaging = paging;
        return this;
    }
    withBorder(enabled) {
        this.border = enabled;
        return this;
    }
    buildObject() {
        return new StructureDefinition(this.headerEnabled, this.bottomPaging, this.topPaging, this.border);
    }
}
export class StructureDefinitionDefaultBuilder extends StructureDefinitionBuilder {
    constructor() {
        super(StructureDefinitionDefaultBuilder.defaultHeaderEnabled, StructureDefinitionDefaultBuilder.defaultBottomPaging, StructureDefinitionDefaultBuilder.defaultTopPaging);
    }
}
StructureDefinitionDefaultBuilder.defaultHeaderEnabled = true;
StructureDefinitionDefaultBuilder.defaultBottomPaging = new PagingDefinition.DefaultBuilder().build();
StructureDefinitionDefaultBuilder.defaultTopPaging = new PagingDefinition.DefaultBuilder().build();
export class StructureDefinition {
    constructor(headerEnabled, bottomPaging, topPaging, border) {
        this.headerEnabled = headerEnabled;
        this.bottomPaging = bottomPaging;
        this.topPaging = topPaging;
        this.border = border;
    }
    isHeaderEnabled() {
        return this.headerEnabled;
    }
    isBorderEnabled() {
        return this.border;
    }
    getBottomPaging() {
        return this.bottomPaging;
    }
    getTopPaging() {
        return this.topPaging;
    }
}
StructureDefinition.Builder = StructureDefinitionBuilder;
StructureDefinition.DefaultBuilder = StructureDefinitionDefaultBuilder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLWRlZmluaXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL3N0cnVjdHVyZS1kZWZpbml0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUUzRixNQUFNLE9BQU8sMEJBQTJCLFNBQVEsY0FBbUM7SUFJbEYsWUFBb0IsYUFBc0IsRUFDL0IsWUFBOEIsRUFDOUIsU0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFIVyxrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUMvQixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFDOUIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFKOUIsV0FBTSxHQUFZLElBQUksQ0FBQztJQU0vQixDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQXdCO1FBQ3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUF3QjtRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUN4QixPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxVQUFVLENBQUMsT0FBZ0I7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDdEIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRVMsV0FBVztRQUNwQixPQUFPLElBQUksbUJBQW1CLENBQzdCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FDWCxDQUFDO0lBQ0gsQ0FBQztDQUVEO0FBRUQsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLDBCQUEwQjtJQU1oRjtRQUNDLEtBQUssQ0FDSixpQ0FBaUMsQ0FBQyxvQkFBb0IsRUFDdEQsaUNBQWlDLENBQUMsbUJBQW1CLEVBQ3JELGlDQUFpQyxDQUFDLGdCQUFnQixDQUNsRCxDQUFDO0lBQ0gsQ0FBQzs7QUFWdUIsc0RBQW9CLEdBQVksSUFBSSxDQUFDO0FBQ3JDLHFEQUFtQixHQUFxQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3RGLGtEQUFnQixHQUFxQixJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0FBVzVHLE1BQU0sT0FBTyxtQkFBbUI7SUFjL0IsWUFBWSxhQUFzQixFQUMvQixZQUE4QixFQUM5QixTQUEyQixFQUMzQixNQUFlO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxlQUFlO1FBQ2QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7O0FBcENNLDJCQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFFckMsa0NBQWMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdlbmVyaWNCdWlsZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3NyYy9jZGsvZ2VuZXJpYy1idWlsZGVyJztcbmltcG9ydCB7IFBhZ2luZ0RlZmluaXRpb24gfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlL3N0cnVjdHVyZS9wYWdpbmcvc3JjL3BhZ2luZy1kZWZpbml0aW9uJztcblxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyIGV4dGVuZHMgR2VuZXJpY0J1aWxkZXI8U3RydWN0dXJlRGVmaW5pdGlvbj4ge1xuXG5cdHByaXZhdGUgYm9yZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgYm90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHRwcml2YXRlIHRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHR3aXRoSGVhZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5oZWFkZXJFbmFibGVkID0gZW5hYmxlZDtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHdpdGhCb3R0b21QYWdpbmcocGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uKTogU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXHRcdHRoaXMuYm90dG9tUGFnaW5nID0gcGFnaW5nO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0d2l0aFRvcFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSBwYWdpbmc7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR3aXRoQm9yZGVyKGVuYWJsZWQ6IGJvb2xlYW4pOiBTdHJ1Y3R1cmVEZWZpbml0aW9uQnVpbGRlciB7XG5cdFx0dGhpcy5ib3JkZXIgPSBlbmFibGVkO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJvdGVjdGVkIGJ1aWxkT2JqZWN0KCk6IFN0cnVjdHVyZURlZmluaXRpb24ge1xuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlRGVmaW5pdGlvbihcblx0XHRcdHRoaXMuaGVhZGVyRW5hYmxlZCxcblx0XHRcdHRoaXMuYm90dG9tUGFnaW5nLFxuXHRcdFx0dGhpcy50b3BQYWdpbmcsXG5cdFx0XHR0aGlzLmJvcmRlclxuXHRcdCk7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyIGV4dGVuZHMgU3RydWN0dXJlRGVmaW5pdGlvbkJ1aWxkZXIge1xuXG5cdHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGRlZmF1bHRIZWFkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdEJvdHRvbVBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblx0cHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdFRvcFBhZ2luZzogUGFnaW5nRGVmaW5pdGlvbiA9IG5ldyBQYWdpbmdEZWZpbml0aW9uLkRlZmF1bHRCdWlsZGVyKCkuYnVpbGQoKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0SGVhZGVyRW5hYmxlZCxcblx0XHRcdFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlci5kZWZhdWx0Qm90dG9tUGFnaW5nLFxuXHRcdFx0U3RydWN0dXJlRGVmaW5pdGlvbkRlZmF1bHRCdWlsZGVyLmRlZmF1bHRUb3BQYWdpbmdcblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVEZWZpbml0aW9uIHtcblxuXHRzdGF0aWMgQnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25CdWlsZGVyO1xuXG5cdHN0YXRpYyBEZWZhdWx0QnVpbGRlciA9IFN0cnVjdHVyZURlZmluaXRpb25EZWZhdWx0QnVpbGRlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3R0b21QYWdpbmc6IFBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSB0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb247XG5cblx0cHJpdmF0ZSByZWFkb25seSBib3JkZXI6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IoaGVhZGVyRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0Ym90dG9tUGFnaW5nOiBQYWdpbmdEZWZpbml0aW9uLFxuXHRcdFx0XHR0b3BQYWdpbmc6IFBhZ2luZ0RlZmluaXRpb24sXG5cdFx0XHRcdGJvcmRlcjogYm9vbGVhbikge1xuXHRcdHRoaXMuaGVhZGVyRW5hYmxlZCA9IGhlYWRlckVuYWJsZWQ7XG5cdFx0dGhpcy5ib3R0b21QYWdpbmcgPSBib3R0b21QYWdpbmc7XG5cdFx0dGhpcy50b3BQYWdpbmcgPSB0b3BQYWdpbmc7XG5cdFx0dGhpcy5ib3JkZXIgPSBib3JkZXI7XG5cdH1cblxuXHRpc0hlYWRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQm9yZGVyRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5ib3JkZXI7XG5cdH1cblxuXHRnZXRCb3R0b21QYWdpbmcoKTogUGFnaW5nRGVmaW5pdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuYm90dG9tUGFnaW5nO1xuXHR9XG5cblx0Z2V0VG9wUGFnaW5nKCk6IFBhZ2luZ0RlZmluaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLnRvcFBhZ2luZztcblx0fVxuXG59XG4iXX0=