import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureReadModelRoot } from '../../core/api/read/structure.read-model-root';
import { StructureDefinition } from '../structure-definition';
import { StructureId } from '../../../core/api/structure.id';
import { StructureWarehouse } from '../../core/api/structure.warehouse';
import { PagingWarehouse } from '../../../paging/core/api/paging.warehouse';
import { StructureInfoPanelArchive } from '../../core/api/panel/info/structure.info-panel.archive';
import { FilterWarehouse } from '../../../filter/core/api/filter.warehouse';
import { SearchWarehouse } from '../../../search/core/api/search.warehouse';
import { StructureHeaderTopEnabledArchive } from '../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { StructureTitlePanelConfigArchive } from '../panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from '../panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { SummariesWarehouse } from '../../../summaries/core/api/summaries.warehouse';
export declare class StructureBlueprintComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureDefinition;
    private readonly structureId;
    private readonly structureWarehouse;
    private readonly structureInfoPanelArchive;
    private readonly pagingWarehouse;
    private readonly summariesWarehouse;
    private readonly filterWarehouse;
    private readonly searchWarehouse;
    private readonly structureHeaderTopEnabledArchive;
    private readonly structureHeaderBottomEnabledArchive;
    private readonly structureTitlePanelConfigArchive;
    private readonly structureFooterPanelConfigArchive;
    private className;
    structure: StructureReadModelRoot;
    searchEnabled: boolean;
    topSummariesPanelEnabled: boolean;
    bottomSummariesPanelEnabled: boolean;
    quickFiltersEnabled: boolean;
    infoPanelEnabled: boolean;
    readonly contentCssClass: string;
    readonly headerCssClass: string;
    topHeaderEnabled: boolean;
    bottomHeaderEnabled: boolean;
    titlePanelEnabled: boolean;
    footerPanelEnabled: boolean;
    items: Array<any>;
    private pagingReadModel;
    private readonly localStreamCloser;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureDefinition: StructureDefinition, structureId: StructureId, structureWarehouse: StructureWarehouse, structureInfoPanelArchive: StructureInfoPanelArchive, pagingWarehouse: PagingWarehouse, summariesWarehouse: SummariesWarehouse, filterWarehouse: FilterWarehouse, searchWarehouse: SearchWarehouse, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, className: string);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getHeaderTopClasses(): string;
    getHeaderBottomClasses(): string;
    isColumnHeaderTopEnabled(): boolean;
    isColumnHeaderBottomEnabled(): boolean;
    isPagingTopEnabled(): boolean;
    isPagingBottomEnabled(): boolean;
    isSourceEmpty(): boolean;
    protected getSelectorName(): string;
}
