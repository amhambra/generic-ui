import { ChangeDetectorRef, ElementRef, Injector, OnInit } from '@angular/core';
import { FabricDialogService } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { StructureInfoModalComponent } from './info-modal/structure-info-modal.component';
import { SourceWarehouse } from '../../../../../core/structure/source/src/api/source.warehouse';
import { StructureDialogColumnManagerService } from '../../column-manager/dialog/structure.dialog-column-manager.service';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureInfoPanelArchive } from '../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.archive';
import { StructureInfoPanelConfig } from '../../../../../core/structure/structure-core/src/api/panel/info/structure.info-panel.config';
import { StructureDialogSchemaManagerService } from '../../../../../feature/schema/manager/dialog/structure.dialog-schema-manager.service';
import { TranslationFacade } from '../../../../../core/l10n/src/api/translation.facade';
import * as i0 from "@angular/core";
export declare class StructureInfoPanelComponent extends SmartComponent implements OnInit {
    private readonly injector;
    private readonly sourceWarehouse;
    private readonly dialog;
    private readonly compositionId;
    private readonly structureId;
    private readonly schemaReadModelRootId;
    private readonly menuColumnManagerService;
    private readonly translationService;
    private readonly schemaManagerService;
    private readonly structureInfoPanelArchive;
    totalItemsSize: number;
    preparedItemsSize: number;
    rowHeight: number;
    infoModal: typeof StructureInfoModalComponent;
    infoPanelConfig: StructureInfoPanelConfig;
    themeManagerTooltipText: string;
    columnManagerTooltipText: string;
    infoTooltipText: string;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, injector: Injector, sourceWarehouse: SourceWarehouse, dialog: FabricDialogService, compositionId: CompositionId, structureId: StructureId, schemaReadModelRootId: SchemaReadModelRootId, menuColumnManagerService: StructureDialogColumnManagerService, translationService: TranslationFacade, schemaManagerService: StructureDialogSchemaManagerService, structureInfoPanelArchive: StructureInfoPanelArchive);
    ngOnInit(): void;
    openInfo(): void;
    openColumnManager(): void;
    openSchemaManager(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInfoPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureInfoPanelComponent, "div[gui-structure-info-panel]", never, {}, {}, never, never, false>;
}
