import { StructureId } from '../../../core/api/global/structure.id';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class SourceSetLoadingCommand extends StructureCommand {
    private readonly enabled;
    constructor(structureId: StructureId, enabled: boolean);
    isEnabled(): boolean;
}
