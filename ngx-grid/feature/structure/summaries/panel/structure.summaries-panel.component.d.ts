import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../core/composition/domain-read/definition/cell-template-with-context';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { SummariesEventRepository } from '../../../../core/structure/summaries/api/summaries.event-repository';
import { CompositionWarehouse } from '../../../../core/composition/api/composition.warehouse';
import { SmartComponent } from '../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../../core/structure/source/api/source.warehouse';
import { TranslationFacade } from '../../../../core/l10n/api/translation.facade';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionTypeArchive } from '../../../../core/structure/formation/api/type/row-selection-type.archive';
import { CompositionId } from '../../../../core/composition/api/global/composition.id';
import * as i0 from "@angular/core";
export declare class StructureSummariesPanelComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly compositionId;
    private readonly structureSummariesEventRepository;
    private readonly translationService;
    private readonly sourceWarehouse;
    private readonly rowSelectionTypeArchive;
    private readonly compositionWarehouse;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    summaries: Map<string, any>;
    summariesTranslations: SummariesTranslations;
    checkboxSelection: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, compositionId: CompositionId, structureSummariesEventRepository: SummariesEventRepository, translationService: TranslationFacade, sourceWarehouse: SourceWarehouse, rowSelectionTypeArchive: RowSelectionTypeArchive, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    isSummariesTypePresent(summaries: number): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureSummariesPanelComponent, "div[gui-structure-summaries-panel][enabled]", never, { "enabled": "enabled"; }, {}, never, never>;
}
