import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from '../../domain/selected-row-changed.event';
import { RowSelectedArchive } from './row-selected.archive';
import { StructureId } from '../../../core/api/global/structure.id';
export declare class SelectedRowChangedEventHandler implements DomainEventHandler<StructureId, SelectedRowChangedEvent> {
    private readonly rowSelectedArchive;
    constructor(rowSelectedArchive: RowSelectedArchive);
    static readonly services: readonly [typeof RowSelectedArchive];
    forEvent(): DomainEventType<SelectedRowChangedEvent>;
    handle(rowChangedEvent: SelectedRowChangedEvent): void;
}
