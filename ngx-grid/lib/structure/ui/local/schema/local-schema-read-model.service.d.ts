import { Observable } from 'rxjs';
import { SchemaReadModelService } from '../../../ui-api/schema/schema-read-model.service';
import { StructureId } from '../../../domain/structure-id';
import { SchemaRepository } from '../../../domain/schema/read/schema-repository';
import { Schema } from '../../../domain/schema/read/schema';
import { SchemaCssClass } from '../../../domain/schema/read/schema-css-class';
import { SchemaColumnHeader } from '../../../domain/schema/read/schema-column-header';
export declare class LocalSchemaReadModelService extends SchemaReadModelService {
    private structureId;
    constructor(structureId: StructureId, schemaRepository: SchemaRepository);
    onSchema(): Observable<Schema>;
    onHeight(): Observable<number>;
    onContainerHeight(): Observable<number>;
    onSingleSchema(): Observable<Schema>;
    onCssClasses(): Observable<SchemaCssClass>;
    onColumnHeader(structureId?: StructureId): Observable<SchemaColumnHeader>;
}
