import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureFilterCommandDispatcher } from './filter/structure-filter.command-dispatcher';
import { SourceDispatcher } from '../domain/source/source.dispatcher';
import { StructureId } from '../domain/structure.id';
import { SortingConfig } from './sorting-config';
import { FieldId } from '../domain/structure/field/data-type/field.id';
import { CompositionId } from '../../composition/domain/composition.id';
import { FilterConfig } from './filter/filter-config';
import { QuickFiltersConfig } from './filter/quick-filters.config';
import { SearchConfig } from './search/search-config';
import { ColumnConfig } from '../../composition/domain/column/column.config';
import { SortOrder } from '../../composition/domain/column/sort/sort-order';
import { StructureSearchDispatcher } from '../domain/structure/search/structure.search.dispatcher';
import { SchemaTheme } from '../../../schema/domain/theme/schema-theme';
export declare class StructureCommandDispatcher {
    private readonly commandDispatcher;
    private readonly structureFilterCommandService;
    private readonly sourceDispatcher;
    private readonly structureSearchDispatcher;
    constructor(commandDispatcher: CommandDispatcher, structureFilterCommandService: StructureFilterCommandDispatcher, sourceDispatcher: SourceDispatcher, structureSearchDispatcher: StructureSearchDispatcher);
    createStructure(structureId?: StructureId): void;
    enableVerticalScroll(structureId?: StructureId): void;
    disableVerticalScroll(structureId?: StructureId): void;
    setScrollPosition(position: number, structureId?: StructureId): void;
    setOrigin(items: Array<any>, structureId?: StructureId): void;
    setSortingConfig(config: SortingConfig, structureId?: StructureId): void;
    toggleSort(fieldId: FieldId, compositionId?: CompositionId, structureId?: StructureId): void;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder, compositionId?: CompositionId, structureId?: StructureId): void;
    setFilterConfig(config: FilterConfig, structureId?: StructureId): void;
    setQuickFiltersConfig(config: QuickFiltersConfig, structureId?: StructureId): void;
    initFields(columns: Array<ColumnConfig>, compositionId: CompositionId, structureId?: StructureId): void;
    setSearchingConfig(config: SearchConfig, structureId?: StructureId): void;
    search(phrase: string, structureId?: StructureId): void;
    setRowHeight(rowHeight: number, structureId?: StructureId): void;
    setContainerHeight(height: number, structureId?: StructureId): void;
    setRowHeightBasedOnTheme(theme: SchemaTheme, structureId?: StructureId): void;
}
