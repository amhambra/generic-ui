import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/src/cdk/component/lib/src/smart-component';
import { FieldWarehouse } from '../../../../../core/structure/field/src/api/field.warehouse';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { FieldModel } from '../../../../../core/structure/field/src/api/model/field.model';
import { FilterWarehouse } from '../../../../../core/structure/filter/src/api/filter.warehouse';
import { FilterTypeCollectionModel } from '../../../../../core/structure/filter/src/api/type/filter-type-collection.model';
import { FilterTypeModel } from '../../../../../core/structure/filter/src/api/type/filter-type.model';
import { FilterTypeId } from '../../../../../core/structure/filter/src/domain/type/filter-type.id';
import { FilterPublisher } from '../../../../../core/structure/filter/src/api/filter.publisher';
import { ActiveFilterModel } from '../../../../../core/structure/filter/src/api/active/active-filter.model';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { FilterId } from '../../../../../core/structure/filter/src/api/id/filter.id';
import { CompositionTemplateModel } from '../../../../composition/src/column/composition.template.model';
import { CompositionTemplateWarehouse } from '../../../../composition/src/column/composition.template-warehouse';
import * as i0 from "@angular/core";
export declare class FilterMenuComponent extends SmartComponent implements OnInit {
    private readonly structureId;
    private readonly compositionId;
    private readonly fieldWarehouse;
    private readonly filterWarehouse;
    private readonly filterCommandInvoker;
    private readonly compositionTemplateWarehouse;
    selectedColumn: CompositionTemplateModel;
    columns: Array<CompositionTemplateModel>;
    selectedField: FieldModel;
    fields: Array<FieldModel>;
    filterTypeMap: FilterTypeCollectionModel;
    filterTypes: Array<FilterTypeModel>;
    selectedFilterTypeId: FilterTypeId;
    selectedValue: string;
    activeFilters: Array<ActiveFilterModel>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, compositionId: CompositionId, fieldWarehouse: FieldWarehouse, filterWarehouse: FilterWarehouse, filterCommandInvoker: FilterPublisher, compositionTemplateWarehouse: CompositionTemplateWarehouse);
    ngOnInit(): void;
    onFieldSelect(field: FieldModel): void;
    onFilterTypeSelect(filterTypeId: FilterTypeId): void;
    removeAllFilters(): void;
    onValueChanged(value: string): void;
    addFilter(): void;
    onRemovedFilter(filterId: FilterId): void;
    removeFilter(): void;
    clearAddFilterForm(): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterMenuComponent, "div[gui-filter-menu]", never, {}, {}, never, never, false>;
}
