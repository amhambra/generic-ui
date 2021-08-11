import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { FieldWarehouse } from '../../../field/core/api/field.warehouse';
import { StructureId } from '../../../core/api/structure.id';
import { FieldReadModel } from '../../../field/core/api/read/field.read-model';
import { FilterWarehouse } from '../../core/api/filter.warehouse';
import { FilterTypeMap } from '../../core/api/type/filter-type-map';
import { FilterTypeReadModel } from '../../core/api/type/filter-type.read-model';
import { FilterTypeId } from '../../core/domain/type/filter-type.id';
import { FilterCommandInvoker } from '../../core/api/filter.command-invoker';
import { ActiveFilterReadModel } from '../../core/api/active/active-filter.read-model';
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
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, fieldWarehouse: FieldWarehouse, filterWarehouse: FilterWarehouse, filterCommandDispatcher: FilterCommandInvoker, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    onColumnSelect(selectedColumn: CellTemplateWithContext): void;
    onFieldSelect(field: FieldReadModel): void;
    onFilterTypeSelect(filterTypeId: FilterTypeId): void;
    removeAllFilters(): void;
    addFilter(): void;
    onValueChanged(value: string): void;
    clearAddFilterForm(): void;
    protected getSelectorName(): string;
}