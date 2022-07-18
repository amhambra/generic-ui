import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../common/src/cdk/component/lib/src/smart-component';
import { PagingModel } from '../../../../core/structure/paging/src/api/model/paging.model';
import { PagingWarehouse } from '../../../../core/structure/paging/src/api/paging.warehouse';
import { PagingPublisher } from '../../../../core/structure/paging/src/api/paging.publisher';
import { SourceWarehouse } from '../../../../core/structure/source/src/api/source.warehouse';
import { PagingDisplayModeArchive } from './mode/paging-display-mode.archive';
import { PagingPosition } from './paging-position';
import { CssClassModifier } from '../../common/src/css-class/css-class.modifier';
import { NgChanges } from '../../../common/src/cdk/component/lib/src/ng-changes';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class PagingComponent extends SmartComponent implements OnInit {
    private readonly elRef;
    private readonly cssClassModifier;
    private readonly structureId;
    private readonly pagingWarehouse;
    private readonly pagingCommandInvoker;
    private readonly sourceWarehouse;
    private readonly pagingDisplayModeArchive;
    position: PagingPosition;
    minimal?: boolean;
    sourceSize: number;
    paging: PagingModel;
    alternativeDisplay: boolean;
    isPagingVisible: boolean;
    private readonly localStreamCloser;
    constructor(elRef: ElementRef, changeDetectorRef: ChangeDetectorRef, cssClassModifier: CssClassModifier, structureId: StructureId, pagingWarehouse: PagingWarehouse, pagingCommandInvoker: PagingPublisher, sourceWarehouse: SourceWarehouse, pagingDisplayModeArchive: PagingDisplayModeArchive);
    ngOnChanges(changes: NgChanges<PagingComponent>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    changePageSize(pageSize: number): void;
    nextPage(): void;
    prevPage(): void;
    protected getSelectorName(): string;
    private calculatePagingVisibility;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PagingComponent, "div[gui-paging][position]", never, { "position": "position"; "minimal": "minimal"; }, {}, never, never, false>;
}
