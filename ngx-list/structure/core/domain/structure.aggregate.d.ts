import { AggregateEvent, AggregateEventType, AggregateRoot } from '@generic-ui/hermes';
import { PagingManager } from '../../paging/core/domain/paging.manager';
import { SourceManager } from '../../source/core/domain/core/source.manager';
import { VerticalFormation } from '../../vertical-formation/core/domain/vertical-formation';
import { SummariesManager } from '../../summaries/core/domain/summaries.manager';
import { SorterCollection } from '../../sorting/core/domain/sorter.collection';
import { FilterManager } from '../../filter/core/domain/filter.manager';
import { FieldCollection } from '../../field/core/domain/field-collection';
import { FormationManager } from '../../source/core/domain/formation/core/formation-manager';
import { StructureId } from '../api/structure.id';
import { StructureEditSourceItemParams } from '../../source/core/domain/origin/edit/structure.edit-source-item.params';
import { PagingConfig } from '../../paging/core/api/paging-config';
import { OriginItemEntity } from '../../source/core/domain/origin/origin-item-entity';
import { SortingConfig } from '../../sorting/core/api/sorting-config';
import { FieldId } from '../../field/core/domain/field/field.id';
import { StructureSorter } from '../../sorting/core/domain/structure.sorter';
import { FilterConfig } from '../../filter/core/api/filter-config';
import { QuickFiltersConfig } from '../../filter/core/api/quick-filters.config';
import { SearchConfig } from '../../search/core/api/search-config';
import { SearchManager } from '../../search/core/domain/search.manager';
import { SortOrder } from '../../../composition/core/domain/column/sort/sort-order';
import { SchemaTheme } from '../../../schema/core/api/theme/schema-theme';
import { FieldConfig } from '../../field/core/api/field.config';
import { FilterTypeId } from '../../filter/core/domain/type/filter-type.id';
import { FilterId } from '../../filter/core/api/filter.id';
import { UniqueFilterManager } from '../../filter/core/domain/unique/unique-filter-manager';
import { UniqueValueId } from '../../filter/core/domain/unique/unique-value-id';
import { RowSelectToggleType } from '../../source/core/domain/formation/core/row-select-toggle-type';
import { RowSelectionMode } from '../../source/core/api/row-selection';
import { OriginId } from '../../source/core/domain/origin/origin-id';
export declare class StructureAggregate extends AggregateRoot<StructureId> {
    private pagingManager;
    private readonly sourceManager;
    private sorterCollection;
    private filterManager;
    private searchManager;
    private readonly verticalFormation;
    private fieldCollection;
    private summariesManager;
    private readonly uniqueFilterManager;
    constructor(structureId: StructureId, pagingAggregate: PagingManager, sourceManager: SourceManager, verticalFormation: VerticalFormation, summariesManager: SummariesManager, sorterCollection: SorterCollection, filterManager: FilterManager, uniqueFilterManager: UniqueFilterManager, searchManager: SearchManager, fieldCollection: FieldCollection);
    createEvent(): AggregateEventType<AggregateEvent<StructureId>>;
    clearEvents(): void;
    init(): void;
    setVerticalFormationEnabled(enabled: boolean): void;
    getVerticalFormation(): VerticalFormation;
    setSummariesEnabled(enabled: boolean): ReadonlyArray<AggregateEvent<StructureId>>;
    setOrigin(items: Array<any>): ReadonlyArray<AggregateEvent<StructureId>>;
    deleteAllSelected(): void;
    deleteItem(payload: number | OriginId | Array<number> | Array<OriginId>): void;
    editItem(editParams: StructureEditSourceItemParams): ReadonlyArray<AggregateEvent<StructureId>>;
    setHeight(height: number): void;
    setTheme(theme: SchemaTheme): void;
    setScrollPosition(position: number): void;
    scrollToIndex(index: number): void;
    setSelection(enabled: boolean): void;
    setSelectionMode(mode: RowSelectionMode): void;
    toggleRow(selectedRow: string, type: RowSelectToggleType): void;
    selectAll(): void;
    unselectAll(): void;
    getFormation(): FormationManager;
    getPaging(): PagingManager;
    changePaging(config: PagingConfig): void;
    setPaging(paging: PagingManager): void;
    nextPage(): void;
    prevPage(): void;
    changePageSize(pageSize: number): ReadonlyArray<AggregateEvent<StructureId>>;
    getEntities(): Array<OriginItemEntity>;
    getSource(): SourceManager;
    createFields(fieldConfigs: Array<FieldConfig>): ReadonlyArray<AggregateEvent<StructureId>>;
    setSortingConfig(config: SortingConfig): void;
    toggleSort(fieldId: FieldId): Array<StructureSorter>;
    setSortOrder(fieldId: FieldId, sortOrder: SortOrder): Array<StructureSorter>;
    setFilterConfig(config: FilterConfig): void;
    setQuickFiltersConfig(config: QuickFiltersConfig): void;
    toggleFilter(fieldId: FieldId, externalFilterId: string, filterValue: string): Array<AggregateEvent<StructureId>>;
    addFilter(fieldId: FieldId, filterTypeId: FilterTypeId, value: any): void;
    removeAllFilters(): void;
    removeFilter(filterId: FilterId): void;
    setSearchingConfig(config: SearchConfig): void;
    addSearchPhrase(phrase: string): Array<AggregateEvent<StructureId>>;
    removeSearchPhrase(): Array<AggregateEvent<StructureId>>;
    selectAllUniqueFilter(fieldId: FieldId): void;
    selectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    unselectAllUniqueFilter(fieldId: FieldId): void;
    unselectUniqueFilter(fieldId: FieldId, uniqueValueId: UniqueValueId): void;
    private calculateSource;
    private calculateSourceBasedOnVirtualScroll;
    private initTheme;
    private calculateUniqueValues;
    private generateCalculateUniqueValuesAggregateEvent;
    private generateSelectedRowChangedEvent;
}
