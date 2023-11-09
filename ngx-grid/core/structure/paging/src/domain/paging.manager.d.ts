import { AggregateEvent } from '@generic-ui/hermes';
import { Logger } from '../../../../../feature/common/cdk/src/logger/logger';
import { PagingConfigWithId } from './paging-config-with-id';
import { PagingConfig } from '../api/config/paging-config';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
export declare class PagingManager {
    private enabled;
    private page;
    private pageSize;
    private pageSizes;
    private pagerTop;
    private pagerBottom;
    private sourceSize;
    private readonly events;
    private readonly logger;
    private constructor();
    static default(logger: Logger): PagingManager;
    static fromConfig(paging: PagingConfigWithId, logger: Logger): PagingManager;
    isEnabled(): boolean;
    isDisabled(): boolean;
    getPage(): number;
    getPageSize(): number;
    getPageSizes(): Array<number>;
    isPagerTop(): boolean;
    isPagerBottom(): boolean;
    getSourceSize(): number;
    change(pagingConfig: PagingConfig): void;
    setSourceSize(size: number): void;
    nextPage(): void;
    prevPage(): void;
    changePageSize(pageSize: number): ReadonlyArray<AggregateEvent<StructureId>>;
    isNextPageDisabled(): boolean;
    isPrevPageDisabled(): boolean;
    calculateStart(): number;
    calculateEnd(): number;
    sample(source: Array<any>): Array<any>;
    clearEvents(): void;
    private setPage;
    private setPageSize;
}