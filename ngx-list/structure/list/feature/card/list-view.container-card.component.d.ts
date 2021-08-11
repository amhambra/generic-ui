import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { StructureId } from '../../../core/api/structure.id';
import { ListViewCardTemplate } from './template/list-view.card-template';
import { ListViewCardTemplateArchive } from './template/list-view.card-template.archive';
export declare class ListViewContainerCardComponent extends SmartComponent implements OnInit, OnDestroy {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSourceWarehouse;
    private readonly listCardTemplateArchive;
    items: Array<any>;
    cardTemplate: ListViewCardTemplate;
    private readonly localStreamCloser;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureSourceWarehouse: SourceWarehouse, listCardTemplateArchive: ListViewCardTemplateArchive);
    ngOnInit(): void;
    ngOnDestroy(): void;
    protected getSelectorName(): string;
}