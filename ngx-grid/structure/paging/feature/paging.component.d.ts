import { ChangeDetectorRef, ElementRef, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { SmartComponent } from '../../../common/cdk/smart-component';
import { Paging } from '../domain-api/read/paging';
import { PagingWarehouse } from '../domain-api/paging.warehouse';
import { PagingCommandInvoker } from '../domain-api/paging.command-invoker';
import { SourceWarehouse } from '../../source/domain-api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingPosition } from './paging-position';
export declare class PagingComponent extends SmartComponent implements OnInit {
    private readonly renderer2;
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly structurePagingWarehouse;
    private readonly pagingCommandService;
    private readonly structureSourceWarehouse;
    private readonly structurePagingDisplayModeArchive;
    position: PagingPosition;
    minimal: boolean;
    sourceSize: number;
    paging: Paging;
    alternativeDisplay: boolean;
    constructor(renderer2: Renderer2, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, structurePagingWarehouse: PagingWarehouse, pagingCommandService: PagingCommandInvoker, structureSourceWarehouse: SourceWarehouse, structurePagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    isPagingVisible(): boolean;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
}
