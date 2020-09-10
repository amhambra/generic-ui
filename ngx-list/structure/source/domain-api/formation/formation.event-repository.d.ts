import { Observable } from 'rxjs';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { SourceWarehouse } from '../source.warehouse';
import { SelectedRow } from './selected-row';
import { StructureReadModelRootId } from '../../../core/domain-api/read/structure.read-model-root-id';
export declare class FormationEventRepository extends EventRepository<StructureReadModelRootId, StructureId> {
    private readonly sourceWarehouse;
    private readonly map;
    private readonly s$;
    constructor(domainEventBus: DomainEventBus, sourceWarehouse: SourceWarehouse);
    onItemSelected(structureId: StructureId): Observable<Array<SelectedRow>>;
}
