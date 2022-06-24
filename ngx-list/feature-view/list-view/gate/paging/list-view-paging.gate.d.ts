import { PagingPublisher } from '../../../../core/structure/paging/api/paging.publisher';
import { PagingEventRepository } from '../../../../core/structure/paging/api/paging.event-repository';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { PagingGate } from '../../../../feature/structure/paging/gate/paging.gate';
import { CompositionId } from '../../../../core/composition/api/global/composition.id';
import * as i0 from "@angular/core";
export declare class ListViewPagingGate extends PagingGate {
    constructor(structureId: StructureId, compositionId: CompositionId, structurePagingCommandDispatcher: PagingPublisher, pagingEventRepository: PagingEventRepository);
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewPagingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewPagingGate, "gui-list-view[paging]", never, {}, {}, never>;
}
