import { ChangeDetectorRef } from '@angular/core';
import { StructureId } from '../../../../domain/structure.id';
import { FormationCommandInvoker } from '../../../../../source/domain-api/formation/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { FormationWarehouse } from '../../../../../source/domain-api/formation/formation.warehouse';
import { RowSelectionModeRepository } from '../../../../../source/domain-api/formation/mode/row-selection-mode.repository';
export declare class SelectAllComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly rowSelectionModeRepository;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    modeMulti: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, rowSelectionModeRepository: RowSelectionModeRepository, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    toggleSelectAll(): void;
}
