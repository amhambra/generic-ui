import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { STRUCTURE_CSS_CLASS_NAME } from './structure-tokens';
import { StreamCloser } from '../../../../common/src/cdk/reactive/stream-closer';
import * as i0 from "@angular/core";
import * as i1 from "../structure-definition";
import * as i2 from "../../../../core/structure/structure-core/src/api/global/structure.id";
import * as i3 from "../../../../core/structure/structure-core/src/api/structure.warehouse";
import * as i4 from "../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive";
import * as i5 from "../../../../core/structure/paging/src/api/paging.warehouse";
import * as i6 from "../../../../core/structure/summaries/src/api/summaries.warehouse";
import * as i7 from "../../../../core/structure/filter/src/api/filter.warehouse";
import * as i8 from "../../../../core/structure/search/src/api/search.warehouse";
import * as i9 from "../header/structure-header-top-enabled.archive";
import * as i10 from "../header/structure-header-bottom-enabled.archive";
import * as i11 from "../panel/banner-panels/title-panel/structure.title-panel.config-archive";
import * as i12 from "../panel/banner-panels/footer-panel/structure.footer-panel.config-archive";
import * as i13 from "@angular/common";
import * as i14 from "../../../../feature/structure/paging/src/paging.component";
import * as i15 from "../../../../feature/structure/summaries/src/panel/structure.summaries-panel.component";
import * as i16 from "../panel/info/structure.info-panel.component";
import * as i17 from "../panel/top/structure.top-panel.component";
import * as i18 from "../../../../feature/structure/source/src/empty/empty-source.component";
import * as i19 from "../header/structure-header.component";
import * as i20 from "../content/structure-container.component";
import * as i21 from "../panel/banner-panels/title-panel/structure.title-panel.component";
import * as i22 from "../panel/banner-panels/footer-panel/structure.footer-panel.component";
export class StructureBlueprintComponent extends SmartComponent {
    constructor(changeDetectorRef, elementRef, structureDefinition, structureId, structureWarehouse, structureInfoPanelArchive, pagingWarehouse, summariesWarehouse, filterWarehouse, searchWarehouse, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive, structureFooterPanelConfigArchive, className) {
        super(changeDetectorRef, elementRef);
        this.changeDetectorRef = changeDetectorRef;
        this.structureDefinition = structureDefinition;
        this.structureId = structureId;
        this.structureWarehouse = structureWarehouse;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.pagingWarehouse = pagingWarehouse;
        this.summariesWarehouse = summariesWarehouse;
        this.filterWarehouse = filterWarehouse;
        this.searchWarehouse = searchWarehouse;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        this.structureTitlePanelConfigArchive = structureTitlePanelConfigArchive;
        this.structureFooterPanelConfigArchive = structureFooterPanelConfigArchive;
        this.className = className;
        this.searchEnabled = false;
        this.topSummariesPanelEnabled = false;
        this.bottomSummariesPanelEnabled = false;
        this.quickFiltersEnabled = false;
        this.infoPanelEnabled = false;
        this.items = [];
        this.localStreamCloser = new StreamCloser();
        this.headerCssClass = `gui-${this.className}-header`;
        this.contentCssClass = `gui-${this.className}-content`;
    }
    ngOnInit() {
        this.subscribe(this.structureHeaderTopEnabledArchive.on(), (topHeaderEnabled) => {
            this.topHeaderEnabled = topHeaderEnabled;
        });
        this.subscribe(this.structureHeaderBottomEnabledArchive.on(), (bottomHeaderEnabled) => {
            this.bottomHeaderEnabled = bottomHeaderEnabled;
        });
        this.subscribe(this.structureWarehouse.on(this.structureId), (structure) => {
            this.structure = structure;
            this.items = structure.getEntities();
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.subscribe(this.pagingWarehouse.onPaging(this.structureId), (paging) => {
            this.pagingReadModel = paging;
        });
        this.subscribe(this.searchWarehouse.onSearchEnabled(this.structureId), (enabled) => {
            this.searchEnabled = enabled;
        });
        this.subscribe(this.filterWarehouse.onQuickFiltersEnabled(this.structureId), (enabled) => {
            this.quickFiltersEnabled = enabled;
        });
        this.subscribe(this.summariesWarehouse.onBottomEnabled(this.structureId), (enabled) => {
            this.bottomSummariesPanelEnabled = enabled;
        });
        this.subscribe(this.summariesWarehouse.onTopEnabled(this.structureId), (enabled) => {
            this.topSummariesPanelEnabled = enabled;
        });
        this.subscribe(this.structureInfoPanelArchive.on(), (infoPanel) => {
            this.infoPanelEnabled = infoPanel.isEnabled();
        });
        this.subscribe(this.structureTitlePanelConfigArchive.on(), (titlePanel) => {
            this.titlePanelEnabled = titlePanel.enabled;
        });
        this.subscribe(this.structureFooterPanelConfigArchive.on(), (footerPanel) => {
            this.footerPanelEnabled = footerPanel.enabled;
        });
    }
    ngOnDestroy() {
        this.localStreamCloser.unsubscribe();
        super.ngOnDestroy();
    }
    getHeaderTopClasses() {
        return this.headerCssClass + ' gui-header-top';
    }
    getHeaderBottomClasses() {
        return this.headerCssClass + ' gui-header-bottom';
    }
    isColumnHeaderTopEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.topHeaderEnabled;
    }
    isColumnHeaderBottomEnabled() {
        return this.structureDefinition.isHeaderEnabled() && this.bottomHeaderEnabled;
    }
    isPagingTopEnabled() {
        return this.structureDefinition.getTopPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerTop();
    }
    isPagingBottomEnabled() {
        return this.structureDefinition.getBottomPaging().isEnabled() && this.pagingReadModel && this.pagingReadModel.isPagerBottom();
    }
    isSourceEmpty() {
        return this.structure && this.structure.getEntities().length === 0;
    }
    getSelectorName() {
        return 'gui-structure-blueprint';
    }
}
StructureBlueprintComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBlueprintComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i1.StructureDefinition }, { token: i2.StructureId }, { token: i3.StructureWarehouse }, { token: i4.StructureInfoPanelArchive }, { token: i5.PagingWarehouse }, { token: i6.SummariesWarehouse }, { token: i7.FilterWarehouse }, { token: i8.SearchWarehouse }, { token: i9.StructureHeaderTopEnabledArchive }, { token: i10.StructureHeaderBottomEnabledArchive }, { token: i11.StructureTitlePanelConfigArchive }, { token: i12.StructureFooterPanelConfigArchive }, { token: STRUCTURE_CSS_CLASS_NAME }], target: i0.ɵɵFactoryTarget.Component });
StructureBlueprintComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.3", type: StructureBlueprintComponent, selector: "div[gui-structure-blueprint]", usesInheritance: true, ngImport: i0, template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n", dependencies: [{ kind: "directive", type: i13.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i13.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i14.PagingComponent, selector: "div[gui-paging][position]", inputs: ["position", "minimal"] }, { kind: "component", type: i15.StructureSummariesPanelComponent, selector: "div[gui-structure-summaries-panel][enabled]", inputs: ["enabled"] }, { kind: "component", type: i16.StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]" }, { kind: "component", type: i17.StructureTopPanelComponent, selector: "div[gui-structure-top-panel]" }, { kind: "component", type: i18.EmptySourceComponent, selector: "div[gui-empty-source][items]", inputs: ["items"] }, { kind: "component", type: i19.StructureHeaderComponent, selector: "div[gui-structure-header]" }, { kind: "component", type: i20.StructureContainerComponent, selector: "div[gui-structure-container]" }, { kind: "component", type: i21.StructureTitlePanelComponent, selector: "div[gui-structure-title-panel]" }, { kind: "component", type: i22.StructureFooterPanelComponent, selector: "div[gui-structure-footer-panel]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.3", ngImport: i0, type: StructureBlueprintComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-blueprint]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<!---------- TOP ---------->\n<div *ngIf=\"titlePanelEnabled\" gui-structure-title-panel></div>\n\n<div *ngIf=\"searchEnabled\" gui-structure-top-panel></div>\n\n<!--<div gui-structure-quick-filters *ngIf=\"quickFiltersEnabled\">-->\n<!--</div>-->\n\n<div *ngIf=\"isPagingTopEnabled()\" [position]=\"0\"\n\t gui-paging>\n</div>\n\n<div [enabled]=\"topSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-top\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"isColumnHeaderTopEnabled()\" [ngClass]=\"getHeaderTopClasses()\"\n\t gui-structure-header>\n</div>\n\n\n<!---------- MAIN ---------->\n<div [ngClass]=\"contentCssClass\" gui-structure-container>\n</div>\n\n<div [items]=\"items\" gui-empty-source>\n</div>\n\n\n<!---------- BOTTOM ---------->\n<div *ngIf=\"isColumnHeaderBottomEnabled()\" [ngClass]=\"getHeaderBottomClasses()\"\n\t gui-structure-header>\n</div>\n\n<div [enabled]=\"bottomSummariesPanelEnabled\" class=\"gui-structure-summaries-panel-bottom\"\n\t gui-structure-summaries-panel>\n</div>\n\n<div *ngIf=\"footerPanelEnabled\" gui-structure-footer-panel></div>\n\n<div *ngIf=\"isPagingBottomEnabled()\" [position]=\"1\"\n\t gui-paging>\n</div>\n\n<div *ngIf=\"infoPanelEnabled\" gui-structure-info-panel></div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i1.StructureDefinition }, { type: i2.StructureId }, { type: i3.StructureWarehouse }, { type: i4.StructureInfoPanelArchive }, { type: i5.PagingWarehouse }, { type: i6.SummariesWarehouse }, { type: i7.FilterWarehouse }, { type: i8.SearchWarehouse }, { type: i9.StructureHeaderTopEnabledArchive }, { type: i10.StructureHeaderBottomEnabledArchive }, { type: i11.StructureTitlePanelConfigArchive }, { type: i12.StructureFooterPanelConfigArchive }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [STRUCTURE_CSS_CLASS_NAME]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUtdmlldy9ncmlkLXZpZXcvc3JjL2JsdWVwcmludC9zdHJ1Y3R1cmUuYmx1ZXByaW50LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvYmx1ZXByaW50L3N0cnVjdHVyZS5ibHVlcHJpbnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFxQixTQUFTLEVBQWMsTUFBTSxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzRUFBc0UsQ0FBQztBQVV0RyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU85RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sbURBQW1ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdqRixNQUFNLE9BQU8sMkJBQTRCLFNBQVEsY0FBYztJQWdDOUQsWUFBNkIsaUJBQW9DLEVBQzlELFVBQXNCLEVBQ0wsbUJBQXdDLEVBQ3hDLFdBQXdCLEVBQ3hCLGtCQUFzQyxFQUN0Qyx5QkFBb0QsRUFDcEQsZUFBZ0MsRUFDaEMsa0JBQXNDLEVBQ3RDLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLGdDQUFrRSxFQUNsRSxtQ0FBd0UsRUFDeEUsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUMzQyxTQUFpQjtRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFmVCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQUNsRSx3Q0FBbUMsR0FBbkMsbUNBQW1DLENBQXFDO1FBQ3hFLHFDQUFnQyxHQUFoQyxnQ0FBZ0MsQ0FBa0M7UUFDbEUsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUMzQyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBMUM5RCxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUUvQiw2QkFBd0IsR0FBWSxLQUFLLENBQUM7UUFFMUMsZ0NBQTJCLEdBQVksS0FBSyxDQUFDO1FBRTdDLHdCQUFtQixHQUFZLEtBQUssQ0FBQztRQUVyQyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFjbEMsVUFBSyxHQUFlLEVBQUUsQ0FBQztRQUlOLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFtQnZELElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxJQUFJLENBQUMsU0FBUyxTQUFTLENBQUM7UUFDckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLElBQUksQ0FBQyxTQUFTLFVBQVUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsUUFBUTtRQUVQLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLEVBQUUsRUFBRSxFQUMxQyxDQUFDLGdCQUF5QixFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBQzFDLENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsbUNBQW1DLENBQUMsRUFBRSxFQUFFLEVBQzdDLENBQUMsbUJBQTRCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDaEQsQ0FBQyxDQUNELENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUM1QyxDQUFDLFNBQWlDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMvQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMvQyxDQUFDLE1BQW1CLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN0RCxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM5QixDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQzVELENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxDQUNELENBQUM7UUFFRixJQUFJLENBQUMsU0FBUyxDQUNiLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUN6RCxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUNwQixJQUFJLENBQUMsMkJBQTJCLEdBQUcsT0FBTyxDQUFDO1FBQzVDLENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDdEQsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDcEIsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE9BQU8sQ0FBQztRQUN6QyxDQUFDLENBQ0QsQ0FBQztRQUVGLElBQUksQ0FBQyxTQUFTLENBQ2IsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUNuQyxDQUFDLFNBQW1DLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9DLENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsZ0NBQWdDLENBQUMsRUFBRSxFQUFFLEVBQzFDLENBQUMsVUFBc0MsRUFBRSxFQUFFO1lBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQzdDLENBQUMsQ0FDRCxDQUFDO1FBRUYsSUFBSSxDQUFDLFNBQVMsQ0FDYixJQUFJLENBQUMsaUNBQWlDLENBQUMsRUFBRSxFQUFFLEVBQzNDLENBQUMsV0FBdUMsRUFBRSxFQUFFO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQy9DLENBQUMsQ0FDRCxDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxtQkFBbUI7UUFDbEIsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLGlCQUFpQixDQUFDO0lBQ2hELENBQUM7SUFFRCxzQkFBc0I7UUFDckIsT0FBTyxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ25ELENBQUM7SUFFRCx3QkFBd0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzVFLENBQUM7SUFFRCwyQkFBMkI7UUFDMUIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDO0lBQy9FLENBQUM7SUFFRCxrQkFBa0I7UUFDakIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pILENBQUM7SUFFRCxxQkFBcUI7UUFDcEIsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQy9ILENBQUM7SUFFRCxhQUFhO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLHlCQUF5QixDQUFDO0lBQ2xDLENBQUM7O3dIQWhMVywyQkFBMkIsNGhCQThDNUIsd0JBQXdCOzRHQTlDdkIsMkJBQTJCLDJGQzlCeEMscXVDQTZDQTsyRkRmYSwyQkFBMkI7a0JBTnZDLFNBQVM7K0JBQ0MsOEJBQThCLG1CQUV2Qix1QkFBdUIsQ0FBQyxNQUFNLGlCQUNoQyxpQkFBaUIsQ0FBQyxJQUFJOzswQkFnRGpDLE1BQU07MkJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL3NyYy9jZGsvY29tcG9uZW50L2xpYi9zcmMvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBQYWdpbmdNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL21vZGVsL3BhZ2luZy5tb2RlbCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi4vc3RydWN0dXJlLWRlZmluaXRpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9zdHJ1Y3R1cmUud2FyZWhvdXNlJztcbmltcG9ydCB7IFBhZ2luZ1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3BhZ2luZy9zcmMvYXBpL3BhZ2luZy53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IEZpbHRlcldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL2ZpbHRlci9zcmMvYXBpL2ZpbHRlci53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc2VhcmNoL3NyYy9hcGkvc2VhcmNoLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUgfSBmcm9tICcuL3N0cnVjdHVyZS10b2tlbnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvc3RydWN0dXJlLWhlYWRlci10b3AtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvdGl0bGUtcGFuZWwvc3RydWN0dXJlLnRpdGxlLXBhbmVsLmNvbmZpZy1hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL3BhbmVsL2Jhbm5lci1wYW5lbHMvZm9vdGVyLXBhbmVsL3N0cnVjdHVyZS5mb290ZXItcGFuZWwuY29uZmlnLWFyY2hpdmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29yZS9zcmMvYXBpL3BhbmVsL2luZm8vc3RydWN0dXJlLmluZm8tcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN0cmVhbUNsb3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9zcmMvY2RrL3JlYWN0aXZlL3N0cmVhbS1jbG9zZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcgfSBmcm9tICcuLi9wYW5lbC9iYW5uZXItcGFuZWxzL3N0cnVjdHVyZS1iYW5uZXItcGFuZWwuY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc1dhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N1bW1hcmllcy9zcmMvYXBpL3N1bW1hcmllcy53YXJlaG91c2UnO1xuXG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2RpdltndWktc3RydWN0dXJlLWJsdWVwcmludF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmJsdWVwcmludC5jb21wb25lbnQuaHRtbCcsXG5cdGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXHRlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZUJsdWVwcmludENvbXBvbmVudCBleHRlbmRzIFNtYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXHRzdHJ1Y3R1cmU6IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3Q7XG5cblx0c2VhcmNoRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdHF1aWNrRmlsdGVyc0VuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRpbmZvUGFuZWxFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XG5cblx0cmVhZG9ubHkgY29udGVudENzc0NsYXNzOiBzdHJpbmc7XG5cblx0cmVhZG9ubHkgaGVhZGVyQ3NzQ2xhc3M6IHN0cmluZztcblxuXHR0b3BIZWFkZXJFbmFibGVkOiBib29sZWFuO1xuXG5cdGJvdHRvbUhlYWRlckVuYWJsZWQ6IGJvb2xlYW47XG5cblx0dGl0bGVQYW5lbEVuYWJsZWQ6IGJvb2xlYW47XG5cblx0Zm9vdGVyUGFuZWxFbmFibGVkOiBib29sZWFuO1xuXG5cdGl0ZW1zOiBBcnJheTxhbnk+ID0gW107XG5cblx0cHJpdmF0ZSBwYWdpbmdSZWFkTW9kZWw6IFBhZ2luZ01vZGVsO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgbG9jYWxTdHJlYW1DbG9zZXIgPSBuZXcgU3RyZWFtQ2xvc2VyKCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlV2FyZWhvdXNlOiBTdHJ1Y3R1cmVXYXJlaG91c2UsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdXYXJlaG91c2U6IFBhZ2luZ1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdW1tYXJpZXNXYXJlaG91c2U6IFN1bW1hcmllc1dhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWx0ZXJXYXJlaG91c2U6IEZpbHRlcldhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hXYXJlaG91c2U6IFNlYXJjaFdhcmVob3VzZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVUaXRsZVBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVGb290ZXJQYW5lbENvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZSxcblx0XHRcdFx0QEluamVjdChTVFJVQ1RVUkVfQ1NTX0NMQVNTX05BTUUpIHByaXZhdGUgY2xhc3NOYW1lOiBzdHJpbmcpIHtcblx0XHRzdXBlcihjaGFuZ2VEZXRlY3RvclJlZiwgZWxlbWVudFJlZik7XG5cblx0XHR0aGlzLmhlYWRlckNzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1oZWFkZXJgO1xuXHRcdHRoaXMuY29udGVudENzc0NsYXNzID0gYGd1aS0ke3RoaXMuY2xhc3NOYW1lfS1jb250ZW50YDtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLm9uKCksXG5cdFx0XHQodG9wSGVhZGVyRW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLnRvcEhlYWRlckVuYWJsZWQgPSB0b3BIZWFkZXJFbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmUub24oKSxcblx0XHRcdChib3R0b21IZWFkZXJFbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuYm90dG9tSGVhZGVyRW5hYmxlZCA9IGJvdHRvbUhlYWRlckVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVXYXJlaG91c2Uub24odGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoc3RydWN0dXJlOiBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290KSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlID0gc3RydWN0dXJlO1xuXHRcdFx0XHR0aGlzLml0ZW1zID0gc3RydWN0dXJlLmdldEVudGl0aWVzKCk7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5wYWdpbmdXYXJlaG91c2Uub25QYWdpbmcodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQocGFnaW5nOiBQYWdpbmdNb2RlbCkgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2luZ1JlYWRNb2RlbCA9IHBhZ2luZztcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnBhZ2luZ1dhcmVob3VzZS5vblBhZ2luZyh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChwYWdpbmc6IFBhZ2luZ01vZGVsKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnaW5nUmVhZE1vZGVsID0gcGFnaW5nO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc2VhcmNoV2FyZWhvdXNlLm9uU2VhcmNoRW5hYmxlZCh0aGlzLnN0cnVjdHVyZUlkKSxcblx0XHRcdChlbmFibGVkOiBib29sZWFuKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5maWx0ZXJXYXJlaG91c2Uub25RdWlja0ZpbHRlcnNFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy5xdWlja0ZpbHRlcnNFbmFibGVkID0gZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN1bW1hcmllc1dhcmVob3VzZS5vbkJvdHRvbUVuYWJsZWQodGhpcy5zdHJ1Y3R1cmVJZCksXG5cdFx0XHQoZW5hYmxlZDogYm9vbGVhbikgPT4ge1xuXHRcdFx0XHR0aGlzLmJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZCA9IGVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblxuXHRcdHRoaXMuc3Vic2NyaWJlKFxuXHRcdFx0dGhpcy5zdW1tYXJpZXNXYXJlaG91c2Uub25Ub3BFbmFibGVkKHRoaXMuc3RydWN0dXJlSWQpLFxuXHRcdFx0KGVuYWJsZWQ6IGJvb2xlYW4pID0+IHtcblx0XHRcdFx0dGhpcy50b3BTdW1tYXJpZXNQYW5lbEVuYWJsZWQgPSBlbmFibGVkO1xuXHRcdFx0fVxuXHRcdCk7XG5cblx0XHR0aGlzLnN1YnNjcmliZShcblx0XHRcdHRoaXMuc3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGluZm9QYW5lbDogU3RydWN0dXJlSW5mb1BhbmVsQ29uZmlnKSA9PiB7XG5cdFx0XHRcdHRoaXMuaW5mb1BhbmVsRW5hYmxlZCA9IGluZm9QYW5lbC5pc0VuYWJsZWQoKTtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZVRpdGxlUGFuZWxDb25maWdBcmNoaXZlLm9uKCksXG5cdFx0XHQodGl0bGVQYW5lbDogU3RydWN0dXJlQmFubmVyUGFuZWxDb25maWcpID0+IHtcblx0XHRcdFx0dGhpcy50aXRsZVBhbmVsRW5hYmxlZCA9IHRpdGxlUGFuZWwuZW5hYmxlZDtcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0dGhpcy5zdWJzY3JpYmUoXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUZvb3RlclBhbmVsQ29uZmlnQXJjaGl2ZS5vbigpLFxuXHRcdFx0KGZvb3RlclBhbmVsOiBTdHJ1Y3R1cmVCYW5uZXJQYW5lbENvbmZpZykgPT4ge1xuXHRcdFx0XHR0aGlzLmZvb3RlclBhbmVsRW5hYmxlZCA9IGZvb3RlclBhbmVsLmVuYWJsZWQ7XG5cdFx0XHR9XG5cdFx0KTtcblx0fVxuXG5cdG5nT25EZXN0cm95KCkge1xuXHRcdHRoaXMubG9jYWxTdHJlYW1DbG9zZXIudW5zdWJzY3JpYmUoKTtcblx0XHRzdXBlci5uZ09uRGVzdHJveSgpO1xuXHR9XG5cblx0Z2V0SGVhZGVyVG9wQ2xhc3NlcygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmhlYWRlckNzc0NsYXNzICsgJyBndWktaGVhZGVyLXRvcCc7XG5cdH1cblxuXHRnZXRIZWFkZXJCb3R0b21DbGFzc2VzKCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuaGVhZGVyQ3NzQ2xhc3MgKyAnIGd1aS1oZWFkZXItYm90dG9tJztcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyVG9wRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIHRoaXMudG9wSGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzQ29sdW1uSGVhZGVyQm90dG9tRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmlzSGVhZGVyRW5hYmxlZCgpICYmIHRoaXMuYm90dG9tSGVhZGVyRW5hYmxlZDtcblx0fVxuXG5cdGlzUGFnaW5nVG9wRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmdldFRvcFBhZ2luZygpLmlzRW5hYmxlZCgpICYmIHRoaXMucGFnaW5nUmVhZE1vZGVsICYmIHRoaXMucGFnaW5nUmVhZE1vZGVsLmlzUGFnZXJUb3AoKTtcblx0fVxuXG5cdGlzUGFnaW5nQm90dG9tRW5hYmxlZCgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVEZWZpbml0aW9uLmdldEJvdHRvbVBhZ2luZygpLmlzRW5hYmxlZCgpICYmIHRoaXMucGFnaW5nUmVhZE1vZGVsICYmIHRoaXMucGFnaW5nUmVhZE1vZGVsLmlzUGFnZXJCb3R0b20oKTtcblx0fVxuXG5cdGlzU291cmNlRW1wdHkoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlICYmIHRoaXMuc3RydWN0dXJlLmdldEVudGl0aWVzKCkubGVuZ3RoID09PSAwO1xuXHR9XG5cblx0cHJvdGVjdGVkIGdldFNlbGVjdG9yTmFtZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiAnZ3VpLXN0cnVjdHVyZS1ibHVlcHJpbnQnO1xuXHR9XG5cbn1cbiIsIjwhLS0tLS0tLS0tLSBUT1AgLS0tLS0tLS0tLT5cbjxkaXYgKm5nSWY9XCJ0aXRsZVBhbmVsRW5hYmxlZFwiIGd1aS1zdHJ1Y3R1cmUtdGl0bGUtcGFuZWw+PC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJzZWFyY2hFbmFibGVkXCIgZ3VpLXN0cnVjdHVyZS10b3AtcGFuZWw+PC9kaXY+XG5cbjwhLS08ZGl2IGd1aS1zdHJ1Y3R1cmUtcXVpY2stZmlsdGVycyAqbmdJZj1cInF1aWNrRmlsdGVyc0VuYWJsZWRcIj4tLT5cbjwhLS08L2Rpdj4tLT5cblxuPGRpdiAqbmdJZj1cImlzUGFnaW5nVG9wRW5hYmxlZCgpXCIgW3Bvc2l0aW9uXT1cIjBcIlxuXHQgZ3VpLXBhZ2luZz5cbjwvZGl2PlxuXG48ZGl2IFtlbmFibGVkXT1cInRvcFN1bW1hcmllc1BhbmVsRW5hYmxlZFwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWwtdG9wXCJcblx0IGd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJpc0NvbHVtbkhlYWRlclRvcEVuYWJsZWQoKVwiIFtuZ0NsYXNzXT1cImdldEhlYWRlclRvcENsYXNzZXMoKVwiXG5cdCBndWktc3RydWN0dXJlLWhlYWRlcj5cbjwvZGl2PlxuXG5cbjwhLS0tLS0tLS0tLSBNQUlOIC0tLS0tLS0tLS0+XG48ZGl2IFtuZ0NsYXNzXT1cImNvbnRlbnRDc3NDbGFzc1wiIGd1aS1zdHJ1Y3R1cmUtY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgW2l0ZW1zXT1cIml0ZW1zXCIgZ3VpLWVtcHR5LXNvdXJjZT5cbjwvZGl2PlxuXG5cbjwhLS0tLS0tLS0tLSBCT1RUT00gLS0tLS0tLS0tLT5cbjxkaXYgKm5nSWY9XCJpc0NvbHVtbkhlYWRlckJvdHRvbUVuYWJsZWQoKVwiIFtuZ0NsYXNzXT1cImdldEhlYWRlckJvdHRvbUNsYXNzZXMoKVwiXG5cdCBndWktc3RydWN0dXJlLWhlYWRlcj5cbjwvZGl2PlxuXG48ZGl2IFtlbmFibGVkXT1cImJvdHRvbVN1bW1hcmllc1BhbmVsRW5hYmxlZFwiIGNsYXNzPVwiZ3VpLXN0cnVjdHVyZS1zdW1tYXJpZXMtcGFuZWwtYm90dG9tXCJcblx0IGd1aS1zdHJ1Y3R1cmUtc3VtbWFyaWVzLXBhbmVsPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJmb290ZXJQYW5lbEVuYWJsZWRcIiBndWktc3RydWN0dXJlLWZvb3Rlci1wYW5lbD48L2Rpdj5cblxuPGRpdiAqbmdJZj1cImlzUGFnaW5nQm90dG9tRW5hYmxlZCgpXCIgW3Bvc2l0aW9uXT1cIjFcIlxuXHQgZ3VpLXBhZ2luZz5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiaW5mb1BhbmVsRW5hYmxlZFwiIGd1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbD48L2Rpdj5cbiJdfQ==