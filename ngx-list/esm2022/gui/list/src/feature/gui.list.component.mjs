import { Component, ViewEncapsulation } from '@angular/core';
import { GuiListGateway } from './gui.list.gateway';
import { guiListProviders } from './gui.list.providers';
import * as i0 from "@angular/core";
import * as i1 from "../../../../feature-view/list-view/src/list-view.component";
import * as i2 from "../../../../feature-view/list-view/src/gate/paging/list-view-paging.gate";
import * as i3 from "../../../../feature-view/list-view/src/gate/mode/list-view-mode.gate";
import * as i4 from "../../../../feature-view/list-view/src/gate/template/list-view-template.gate";
import * as i5 from "../../../../feature-view/list-view/src/gate/field/list-view-field.gate";
import * as i6 from "../../../../feature-view/list-view/src/gate/searching/list-view-searching.gate";
import * as i7 from "../../../../feature-view/list-view/src/gate/l10n/list-view-l10n.gate";
import * as i8 from "../../../../feature-view/list-view/src/gate/source/list-view-source.gate";
export class GuiListComponent extends GuiListGateway {
    constructor() {
        super();
    }
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
    onPageSizeChange(pageSize) {
        this.pageSizeChanged.emit(pageSize);
    }
    onSearchPhraseChange(phrase) {
        this.searchPhraseChanged.emit(phrase);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: GuiListComponent, selector: "gui-list", host: { properties: { "class.gui-list": "\"true\"" } }, providers: guiListProviders, usesInheritance: true, ngImport: i0, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n", styles: [""], dependencies: [{ kind: "component", type: i1.ListViewComponent, selector: "gui-list-view" }, { kind: "directive", type: i2.ListViewPagingGate, selector: "gui-list-view[paging]" }, { kind: "directive", type: i3.ListViewModeGate, selector: "gui-list-view[mode]", inputs: ["mode", "modeSelector"] }, { kind: "directive", type: i4.ListViewTemplateGate, selector: "gui-list-view[mode]", inputs: ["template", "cardTemplate"] }, { kind: "directive", type: i5.ListViewFieldGate, selector: "gui-list-view[fields]", inputs: ["fields"] }, { kind: "directive", type: i6.ListViewSearchingGate, selector: "gui-list-view[searching]" }, { kind: "directive", type: i7.ListViewL10nGate, selector: "gui-list-view[localization]", inputs: ["localization"] }, { kind: "directive", type: i8.ListViewSourceGate, selector: "gui-list-view[items]" }], encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: GuiListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'gui-list', providers: guiListProviders, host: {
                        '[class.gui-list]': '"true"'
                    }, encapsulation: ViewEncapsulation.None, template: "<gui-list-view\n\t(pageChanged)=\"onPageChange($event)\"\n\t(pageSizeChanged)=\"onPageSizeChange($event)\"\n\t(searchPhraseChanged)=\"onSearchPhraseChange($event)\"\n\t[cardTemplate]=\"listCardTemplate\"\n\t[fields]=\"listFields\"\n\t[items]=\"source\"\n\t[localization]=\"localization\"\n\t[modeSelector]=\"listViewModeSelector\"\n\t[mode]=\"listViewMode\"\n\t[paging]=\"paging\"\n\t[searching]=\"searchConfig\"\n\t[template]=\"containerTemplate\"\n>\n</gui-list-view>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9ndWkvbGlzdC9zcmMvZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2d1aS9saXN0L3NyYy9mZWF0dXJlL2d1aS5saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7O0FBZXhELE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxjQUFjO0lBRW5EO1FBQ0MsS0FBSyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQVk7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLFFBQWdCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxNQUFjO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQzt1R0FoQlcsZ0JBQWdCOzJGQUFoQixnQkFBZ0IsMkZBTmpCLGdCQUFnQixpRENaNUIseWRBZUE7OzJGREdhLGdCQUFnQjtrQkFaNUIsU0FBUzsrQkFDQyxVQUFVLGFBS1QsZ0JBQWdCLFFBQ3JCO3dCQUNMLGtCQUFrQixFQUFFLFFBQVE7cUJBQzVCLGlCQUNjLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEd1aUxpc3RHYXRld2F5IH0gZnJvbSAnLi9ndWkubGlzdC5nYXRld2F5JztcbmltcG9ydCB7IGd1aUxpc3RQcm92aWRlcnMgfSBmcm9tICcuL2d1aS5saXN0LnByb3ZpZGVycyc7XG5cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3QnLFxuXHR0ZW1wbGF0ZVVybDogJy4vZ3VpLmxpc3QuY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFtcblx0XHQnLi9ndWkubGlzdC5uZ3guc2Nzcydcblx0XSxcblx0cHJvdmlkZXJzOiBndWlMaXN0UHJvdmlkZXJzLFxuXHRob3N0OiB7XG5cdFx0J1tjbGFzcy5ndWktbGlzdF0nOiAnXCJ0cnVlXCInXG5cdH0sXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgR3VpTGlzdENvbXBvbmVudCBleHRlbmRzIEd1aUxpc3RHYXRld2F5IHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG5cdG9uUGFnZVNpemVDaGFuZ2UocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZVNpemVDaGFuZ2VkLmVtaXQocGFnZVNpemUpO1xuXHR9XG5cblx0b25TZWFyY2hQaHJhc2VDaGFuZ2UocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaFBocmFzZUNoYW5nZWQuZW1pdChwaHJhc2UpO1xuXHR9XG5cbn1cbiIsIjxndWktbGlzdC12aWV3XG5cdChwYWdlQ2hhbmdlZCk9XCJvblBhZ2VDaGFuZ2UoJGV2ZW50KVwiXG5cdChwYWdlU2l6ZUNoYW5nZWQpPVwib25QYWdlU2l6ZUNoYW5nZSgkZXZlbnQpXCJcblx0KHNlYXJjaFBocmFzZUNoYW5nZWQpPVwib25TZWFyY2hQaHJhc2VDaGFuZ2UoJGV2ZW50KVwiXG5cdFtjYXJkVGVtcGxhdGVdPVwibGlzdENhcmRUZW1wbGF0ZVwiXG5cdFtmaWVsZHNdPVwibGlzdEZpZWxkc1wiXG5cdFtpdGVtc109XCJzb3VyY2VcIlxuXHRbbG9jYWxpemF0aW9uXT1cImxvY2FsaXphdGlvblwiXG5cdFttb2RlU2VsZWN0b3JdPVwibGlzdFZpZXdNb2RlU2VsZWN0b3JcIlxuXHRbbW9kZV09XCJsaXN0Vmlld01vZGVcIlxuXHRbcGFnaW5nXT1cInBhZ2luZ1wiXG5cdFtzZWFyY2hpbmddPVwic2VhcmNoQ29uZmlnXCJcblx0W3RlbXBsYXRlXT1cImNvbnRhaW5lclRlbXBsYXRlXCJcbj5cbjwvZ3VpLWxpc3Qtdmlldz5cbiJdfQ==