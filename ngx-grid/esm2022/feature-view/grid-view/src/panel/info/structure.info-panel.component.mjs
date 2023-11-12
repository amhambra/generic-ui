import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { SmartComponent } from '../../../../../feature/common/component/src/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../../core/structure/source/src/api/source.warehouse';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { hermesMap } from '@generic-ui/hermes';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
import * as i1 from "@generic-ui/fabric";
import * as i2 from "../../../../../core/composition/src/api/global/composition.id";
import * as i3 from "../../../../../core/schema/src/api/global/schema.read-model-root-id";
import * as i4 from "../../column-manager/dialog/structure.dialog-column-manager.service";
import * as i5 from "../../../../../core/l10n/src/api/translation.facade";
import * as i6 from "../../../../../feature/schema/src/manager/dialog/structure.dialog-schema-manager.service";
import * as i7 from "../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive";
import * as i8 from "@angular/common";
import * as i9 from "../../column-manager/icon/structure.column-manager-icon.component";
import * as i10 from "../../../../../feature/schema/src/manager/manager-icon/structure.schema-manager-icon.component";
import * as i11 from "../../../../../feature/structure/source/src/counter/filter/active-filter-menu-trigger.directive";
import * as i12 from "../../../../../feature/gui-angular/template/let/gui.let.directive";
import * as i13 from "./icon/structure.info-icon.component";
import * as i14 from "../../../../../feature/common/cdk/src/number-formatter/number-formatter.pipe";
import * as i15 from "../../../../../feature/l10n/src/translation.pipe";
export class StructureInfoPanelComponent extends SmartComponent {
    injector;
    dialog;
    compositionId;
    schemaReadModelRootId;
    menuColumnManagerService;
    translationService;
    schemaManagerService;
    structureInfoPanelArchive;
    state = inject((GuiState));
    sourceWarehouse = inject(SourceWarehouse);
    structureId = inject(StructureId);
    state$ = this.state.select();
    totalItemsSize$ = this.sourceWarehouse.onOriginSize(this.structureId);
    infoModal = StructureInfoModalComponent;
    constructor(changeDetectorRef, elementRef, injector, dialog, compositionId, schemaReadModelRootId, menuColumnManagerService, translationService, schemaManagerService, structureInfoPanelArchive) {
        super(changeDetectorRef, elementRef);
        this.injector = injector;
        this.dialog = dialog;
        this.compositionId = compositionId;
        this.schemaReadModelRootId = schemaReadModelRootId;
        this.menuColumnManagerService = menuColumnManagerService;
        this.translationService = translationService;
        this.schemaManagerService = schemaManagerService;
        this.structureInfoPanelArchive = structureInfoPanelArchive;
        this.state.connect('infoPanelConfig', this.structureInfoPanelArchive.on());
        this.state.connect('preparedItemsSize', this.sourceWarehouse
            .onPreparedItems(this.structureId)
            .pipe(hermesMap(items => items.length)));
        this.state.connect('translations', this.translationService.onTranslation());
    }
    openInfo() {
        this.dialog.open({ component: this.infoModal });
    }
    openColumnManager() {
        this.menuColumnManagerService.open(this.compositionId, this.schemaReadModelRootId, this.injector);
    }
    openSchemaManager() {
        this.schemaManagerService.open(this.schemaReadModelRootId, this.injector);
    }
    getSelectorName() {
        return 'gui-structure-info-panel';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureInfoPanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Injector }, { token: i1.FabricDialogService }, { token: i2.CompositionId }, { token: i3.SchemaReadModelRootId }, { token: i4.StructureDialogColumnManagerService }, { token: i5.TranslationFacade }, { token: i6.StructureDialogSchemaManagerService }, { token: i7.StructureInfoPanelArchive }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.2", type: StructureInfoPanelComponent, selector: "div[gui-structure-info-panel]", providers: [
            GuiState
        ], usesInheritance: true, ngImport: i0, template: "<ng-container *guiLet=\"state$; let localState\">\n\n\t<div *guiLet=\"totalItemsSize$; let totalItemsSize\">\n\t\t<div *ngIf=\"localState.infoPanelConfig.isSourceSizeEnabled()\">\n\t\t\t<ng-container *ngIf=\"localState.preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t\t<ng-container *ngIf=\"localState.preparedItemsSize === totalItemsSize\">\n\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t\t</ng-container>\n\n\t\t\t\t<span *ngIf=\"localState.preparedItemsSize !== totalItemsSize\"\n\t\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t\t<b>{{localState.preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<div class=\"gui-right-section\">\n\n\t\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelThemeMangerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t\t</div>\n\n\t\t\t<div (click)=\"openColumnManager()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelColumnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t\t</div>\n\n\t\t\t<div (click)=\"openInfo()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelInfoTooltipText\" gui-structure-info-icon></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n", dependencies: [{ kind: "directive", type: i8.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.FabricTooltipDirective, selector: "[gui-tooltip]", inputs: ["gui-tooltip"], exportAs: ["guiTooltip"] }, { kind: "component", type: i9.StructureColumnManagerIconComponent, selector: "div[gui-structure-column-manager-icon]" }, { kind: "component", type: i10.StructureSchemaManagerIconComponent, selector: "div[gui-structure-schema-manager-icon]" }, { kind: "directive", type: i11.ActiveFilterMenuTriggerDirective, selector: "[gui-active-filter-menu-trigger]" }, { kind: "directive", type: i12.GuiLetDirective, selector: "[guiLet]", inputs: ["guiLet"] }, { kind: "component", type: i13.StructureInfoIconComponent, selector: "div[gui-structure-info-icon]" }, { kind: "pipe", type: i14.NumberFormatterPipe, name: "numberFormatter" }, { kind: "pipe", type: i15.TranslationPipe, name: "guiTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.2", ngImport: i0, type: StructureInfoPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'div[gui-structure-info-panel]', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        GuiState
                    ], template: "<ng-container *guiLet=\"state$; let localState\">\n\n\t<div *guiLet=\"totalItemsSize$; let totalItemsSize\">\n\t\t<div *ngIf=\"localState.infoPanelConfig.isSourceSizeEnabled()\">\n\t\t\t<ng-container *ngIf=\"localState.preparedItemsSize !== undefined && totalItemsSize !== undefined\">\n\n\t\t\t\t<ng-container *ngIf=\"localState.preparedItemsSize === totalItemsSize\">\n\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t\t</ng-container>\n\n\t\t\t\t<span *ngIf=\"localState.preparedItemsSize !== totalItemsSize\"\n\t\t\t\t\t  gui-active-filter-menu-trigger>\n\t\t\t\t\t\t{{'infoPanelShowing' | guiTranslate}}\n\t\t\t\t\t<b>{{localState.preparedItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelOutOf' | guiTranslate}}\n\t\t\t\t\t<b>{{totalItemsSize | numberFormatter}}</b>\n\t\t\t\t\t{{'infoPanelItems' | guiTranslate}}\n\t\t\t</span>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n\t<div>\n\t\t<div class=\"gui-right-section\">\n\n\t\t\t<div (click)=\"openSchemaManager()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isSchemaManagerEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelThemeMangerTooltipText\" gui-structure-schema-manager-icon></div>\n\t\t\t</div>\n\n\t\t\t<div (click)=\"openColumnManager()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isColumnsManagerEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelColumnManagerTooltipText\" gui-structure-column-manager-icon></div>\n\t\t\t</div>\n\n\t\t\t<div (click)=\"openInfo()\"\n\t\t\t\t *ngIf=\"localState.infoPanelConfig.isInfoDialogEnabled()\">\n\t\t\t\t<div [gui-tooltip]=\"localState.translations.infoPanelInfoTooltipText\" gui-structure-info-icon></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n</ng-container>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Injector }, { type: i1.FabricDialogService }, { type: i2.CompositionId }, { type: i3.SchemaReadModelRootId }, { type: i4.StructureDialogColumnManagerService }, { type: i5.TranslationFacade }, { type: i6.StructureDialogSchemaManagerService }, { type: i7.StructureInfoPanelArchive }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9mZWF0dXJlLXZpZXcvZ3JpZC12aWV3L3NyYy9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvZmVhdHVyZS12aWV3L2dyaWQtdmlldy9zcmMvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQXFCLFNBQVMsRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXZJLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUU3RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUxRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0RBQStELENBQUM7QUFHaEcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBFQUEwRSxDQUFDO0FBT3ZHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0RBQW9ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUI5RSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsY0FBYztJQWdCMUM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQXJCSCxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUEsUUFBMEMsQ0FBQSxDQUFDLENBQUM7SUFFM0QsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUxQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBRW5ELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRTdCLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFFdEUsU0FBUyxHQUFHLDJCQUEyQixDQUFDO0lBRXhDLFlBQVksaUJBQW9DLEVBQzdDLFVBQXNCLEVBQ0wsUUFBa0IsRUFDbEIsTUFBMkIsRUFDM0IsYUFBNEIsRUFDNUIscUJBQTRDLEVBQzVDLHdCQUE2RCxFQUM3RCxrQkFBcUMsRUFDckMsb0JBQXlELEVBQ3pELHlCQUFvRDtRQUN2RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFSbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFxQjtRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBcUM7UUFDN0QsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFDO1FBQ3pELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFHdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDaEQsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakMsSUFBSSxDQUNKLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FDaEMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRVMsZUFBZTtRQUN4QixPQUFPLDBCQUEwQixDQUFDO0lBQ25DLENBQUM7dUdBakRXLDJCQUEyQjsyRkFBM0IsMkJBQTJCLHdEQUo1QjtZQUNWLFFBQVE7U0FDUixpREN0Q0YsNnpEQStDQTs7MkZEUGEsMkJBQTJCO2tCQVR2QyxTQUFTOytCQUNDLCtCQUErQixtQkFFeEIsdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsSUFBSSxhQUMxQjt3QkFDVixRQUFRO3FCQUNSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEluamVjdG9yLCBWaWV3RW5jYXBzdWxhdGlvbiwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZhYnJpY0RpYWxvZ1NlcnZpY2UgfSBmcm9tICdAZ2VuZXJpYy11aS9mYWJyaWMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUvY29tbW9uL2NvbXBvbmVudC9zcmMvc21hcnQtY29tcG9uZW50JztcblxuaW1wb3J0IHsgU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9pbmZvLW1vZGFsL3N0cnVjdHVyZS1pbmZvLW1vZGFsLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IFNvdXJjZVdhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3NvdXJjZS9zcmMvYXBpL3NvdXJjZS53YXJlaG91c2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nQ29sdW1uTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb2x1bW4tbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1jb2x1bW4tbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2NvbXBvc2l0aW9uL3NyYy9hcGkvZ2xvYmFsL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3RydWN0dXJlLWNvcmUvc3JjL2FwaS9nbG9iYWwvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc2NoZW1hL3NyYy9hcGkvZ2xvYmFsL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvc3RydWN0dXJlL3N0cnVjdHVyZS1jb3JlL3NyYy9hcGkvcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC5jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlRGlhbG9nU2NoZW1hTWFuYWdlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9mZWF0dXJlL3NjaGVtYS9zcmMvbWFuYWdlci9kaWFsb2cvc3RydWN0dXJlLmRpYWxvZy1zY2hlbWEtbWFuYWdlci5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24uZmFjYWRlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9sMTBuL3NyYy9hcGkvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHsgaGVybWVzTWFwIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IEd1aVN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS9ndWktYW5ndWxhci9zdGF0ZS9ndWkuc3RhdGUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RydWN0dXJlSW5mb1BhbmVsQ29tcG9uZW50U3RhdGUge1xuXG5cdHRyYW5zbGF0aW9uczogVHJhbnNsYXRpb247XG5cblx0aW5mb1BhbmVsQ29uZmlnOiBTdHJ1Y3R1cmVJbmZvUGFuZWxDb25maWc7XG5cblx0cHJlcGFyZWRJdGVtc1NpemU6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiAnZGl2W2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbF0nLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmluZm8tcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxuXHRjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcblx0ZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcblx0cHJvdmlkZXJzOiBbXG5cdFx0R3VpU3RhdGVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnQgZXh0ZW5kcyBTbWFydENvbXBvbmVudCB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdGF0ZSA9IGluamVjdChHdWlTdGF0ZTxTdHJ1Y3R1cmVJbmZvUGFuZWxDb21wb25lbnRTdGF0ZT4pO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlV2FyZWhvdXNlID0gaW5qZWN0KFNvdXJjZVdhcmVob3VzZSk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZCA9IGluamVjdChTdHJ1Y3R1cmVJZCk7XG5cblx0c3RhdGUkID0gdGhpcy5zdGF0ZS5zZWxlY3QoKTtcblxuXHR0b3RhbEl0ZW1zU2l6ZSQgPSB0aGlzLnNvdXJjZVdhcmVob3VzZS5vbk9yaWdpblNpemUodGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0aW5mb01vZGFsID0gU3RydWN0dXJlSW5mb01vZGFsQ29tcG9uZW50O1xuXG5cdGNvbnN0cnVjdG9yKGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcblx0XHRcdFx0ZWxlbWVudFJlZjogRWxlbWVudFJlZixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBpbmplY3RvcjogSW5qZWN0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nOiBGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbWVudUNvbHVtbk1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dDb2x1bW5NYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uRmFjYWRlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYU1hbmFnZXJTZXJ2aWNlOiBTdHJ1Y3R1cmVEaWFsb2dTY2hlbWFNYW5hZ2VyU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY2hhbmdlRGV0ZWN0b3JSZWYsIGVsZW1lbnRSZWYpO1xuXG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdpbmZvUGFuZWxDb25maWcnLCB0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEFyY2hpdmUub24oKSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCdwcmVwYXJlZEl0ZW1zU2l6ZScsIHRoaXMuc291cmNlV2FyZWhvdXNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC5vblByZXBhcmVkSXRlbXModGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVybWVzTWFwKGl0ZW1zID0+IGl0ZW1zLmxlbmd0aClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSk7XG5cdFx0dGhpcy5zdGF0ZS5jb25uZWN0KCd0cmFuc2xhdGlvbnMnLCB0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5vblRyYW5zbGF0aW9uKCkpO1xuXHR9XG5cblx0b3BlbkluZm8oKTogdm9pZCB7XG5cdFx0dGhpcy5kaWFsb2cub3Blbih7IGNvbXBvbmVudDogdGhpcy5pbmZvTW9kYWwgfSk7XG5cdH1cblxuXHRvcGVuQ29sdW1uTWFuYWdlcigpOiB2b2lkIHtcblx0XHR0aGlzLm1lbnVDb2x1bW5NYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zY2hlbWFSZWFkTW9kZWxSb290SWQsIHRoaXMuaW5qZWN0b3IpO1xuXHR9XG5cblx0b3BlblNjaGVtYU1hbmFnZXIoKTogdm9pZCB7XG5cdFx0dGhpcy5zY2hlbWFNYW5hZ2VyU2VydmljZS5vcGVuKHRoaXMuc2NoZW1hUmVhZE1vZGVsUm9vdElkLCB0aGlzLmluamVjdG9yKTtcblx0fVxuXG5cdHByb3RlY3RlZCBnZXRTZWxlY3Rvck5hbWUoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gJ2d1aS1zdHJ1Y3R1cmUtaW5mby1wYW5lbCc7XG5cdH1cblxufVxuIiwiPG5nLWNvbnRhaW5lciAqZ3VpTGV0PVwic3RhdGUkOyBsZXQgbG9jYWxTdGF0ZVwiPlxuXG5cdDxkaXYgKmd1aUxldD1cInRvdGFsSXRlbXNTaXplJDsgbGV0IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0PGRpdiAqbmdJZj1cImxvY2FsU3RhdGUuaW5mb1BhbmVsQ29uZmlnLmlzU291cmNlU2l6ZUVuYWJsZWQoKVwiPlxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImxvY2FsU3RhdGUucHJlcGFyZWRJdGVtc1NpemUgIT09IHVuZGVmaW5lZCAmJiB0b3RhbEl0ZW1zU2l6ZSAhPT0gdW5kZWZpbmVkXCI+XG5cblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImxvY2FsU3RhdGUucHJlcGFyZWRJdGVtc1NpemUgPT09IHRvdGFsSXRlbXNTaXplXCI+XG5cdFx0XHRcdFx0e3snaW5mb1BhbmVsU2hvd2luZycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHRcdDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj5cblx0XHRcdFx0XHR7eydpbmZvUGFuZWxJdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cImxvY2FsU3RhdGUucHJlcGFyZWRJdGVtc1NpemUgIT09IHRvdGFsSXRlbXNTaXplXCJcblx0XHRcdFx0XHQgIGd1aS1hY3RpdmUtZmlsdGVyLW1lbnUtdHJpZ2dlcj5cblx0XHRcdFx0XHRcdHt7J2luZm9QYW5lbFNob3dpbmcnIHwgZ3VpVHJhbnNsYXRlfX1cblx0XHRcdFx0XHQ8Yj57e2xvY2FsU3RhdGUucHJlcGFyZWRJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj5cblx0XHRcdFx0XHR7eydpbmZvUGFuZWxPdXRPZicgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0XHRcdDxiPnt7dG90YWxJdGVtc1NpemUgfCBudW1iZXJGb3JtYXR0ZXJ9fTwvYj5cblx0XHRcdFx0XHR7eydpbmZvUGFuZWxJdGVtcycgfCBndWlUcmFuc2xhdGV9fVxuXHRcdFx0PC9zcGFuPlxuXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cblxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8ZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJndWktcmlnaHQtc2VjdGlvblwiPlxuXG5cdFx0XHQ8ZGl2IChjbGljayk9XCJvcGVuU2NoZW1hTWFuYWdlcigpXCJcblx0XHRcdFx0ICpuZ0lmPVwibG9jYWxTdGF0ZS5pbmZvUGFuZWxDb25maWcuaXNTY2hlbWFNYW5hZ2VyRW5hYmxlZCgpXCI+XG5cdFx0XHRcdDxkaXYgW2d1aS10b29sdGlwXT1cImxvY2FsU3RhdGUudHJhbnNsYXRpb25zLmluZm9QYW5lbFRoZW1lTWFuZ2VyVG9vbHRpcFRleHRcIiBndWktc3RydWN0dXJlLXNjaGVtYS1tYW5hZ2VyLWljb24+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiAoY2xpY2spPVwib3BlbkNvbHVtbk1hbmFnZXIoKVwiXG5cdFx0XHRcdCAqbmdJZj1cImxvY2FsU3RhdGUuaW5mb1BhbmVsQ29uZmlnLmlzQ29sdW1uc01hbmFnZXJFbmFibGVkKClcIj5cblx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwibG9jYWxTdGF0ZS50cmFuc2xhdGlvbnMuaW5mb1BhbmVsQ29sdW1uTWFuYWdlclRvb2x0aXBUZXh0XCIgZ3VpLXN0cnVjdHVyZS1jb2x1bW4tbWFuYWdlci1pY29uPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgKGNsaWNrKT1cIm9wZW5JbmZvKClcIlxuXHRcdFx0XHQgKm5nSWY9XCJsb2NhbFN0YXRlLmluZm9QYW5lbENvbmZpZy5pc0luZm9EaWFsb2dFbmFibGVkKClcIj5cblx0XHRcdFx0PGRpdiBbZ3VpLXRvb2x0aXBdPVwibG9jYWxTdGF0ZS50cmFuc2xhdGlvbnMuaW5mb1BhbmVsSW5mb1Rvb2x0aXBUZXh0XCIgZ3VpLXN0cnVjdHVyZS1pbmZvLWljb24+PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG5cbjwvbmctY29udGFpbmVyPlxuIl19