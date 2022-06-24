import { StructureId } from '../../../core/api/global/structure.id';
import { CompositionId } from '../../../../composition/api/global/composition.id';
import { FieldId } from '../../../field/domain/field/field.id';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class ToggleSortCommand extends StructureCommand {
    private readonly compositionId;
    private readonly fieldId;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
}
