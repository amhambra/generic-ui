import { ChangeDetectorRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { FieldWarehouse } from '../../../field/domain-api/field.warehouse';
import { StructureId } from '../../../core/domain/structure.id';
import { FieldReadModel } from '../../../field/domain-api/read/field.read-model';
import { FilterWarehouse } from '../../domain-api/filter.warehouse';
import { FilterTypeMap } from '../../domain-api/type/filter-type-map';
import { FilterTypeReadModel } from '../../domain-api/type/filter-type.read-model';
import { FilterTypeId } from '../../domain/type/filter-type.id';
import { FilterCommandInvoker } from '../../domain-api/filter.command-invoker';
import { ActiveFilterReadModel } from '../../domain-api/active/active-filter.read-model';
export declare class FilterMenuComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly fieldWarehouse;
    private readonly filterWarehouse;
    private readonly filterCommandDispatcher;
    private readonly compositionWarehouse;
    selectedColumn: CellTemplateWithContext;
    columns: Array<CellTemplateWithContext>;
    selectedField: FieldReadModel;
    fields: Array<FieldReadModel>;
    filterTypeMap: FilterTypeMap;
    filterTypes: Array<FilterTypeReadModel>;
    selectedFilterTypeId: FilterTypeId;
    selectedValue: string;
    activeFilters: Array<ActiveFilterReadModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, fieldWarehouse: FieldWarehouse, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandInvoker, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    onColumnSelect(selectedColumn: CellTemplateWithContext): void;
    onFieldSelect(field: FieldReadModel): void;
    onFilterTypeSelect(filterTypeId: FilterTypeId): void;
    removeAllFilters(): void;
    addFilter(): void;
    onValueChanged(value: string): void;
    clearAddFilterForm(): void;
}
