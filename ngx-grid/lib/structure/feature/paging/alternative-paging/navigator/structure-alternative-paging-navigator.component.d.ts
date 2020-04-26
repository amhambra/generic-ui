import { EventEmitter, OnChanges } from '@angular/core';
import { Paging } from '../../../../feature-api/paging/read/paging';
import { StructurePagingCommandDispatcher } from '../../../../feature-api/paging/structure-paging.command-dispatcher';
export declare class StructureAlternativePagingNavigatorComponent implements OnChanges {
    private pagingCommandService;
    paging: Paging;
    sourceSize: number;
    nextPageChanged: EventEmitter<any>;
    prevPageChanged: EventEmitter<any>;
    prevDisabled: boolean;
    nextDisabled: boolean;
    constructor(pagingCommandService: StructurePagingCommandDispatcher);
    ngOnChanges(): void;
    prevPage(): void;
    nextPage(): void;
    firstPage(): void;
    lastPage(): void;
    private calculatePrev;
    private calculateNext;
}