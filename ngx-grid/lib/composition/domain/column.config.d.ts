import { DataType } from '../../structure/domain/structure/command/field/data-type/data-type';
import { CellView } from './cell-view';
import { ColumnAggregationConfig } from './column-aggregation.config';
import { ColumnSortingConfig } from './column-sorting.config';
import { ColumnCellEditingConfig } from './column-cell-editing.config';
import { ColumnAlign } from './column-align';
export declare type ElementData = (element?: any, index?: number) => any;
export declare type CellTemplate = (element?: any, index?: number) => string;
export declare type HeaderTemplate = (index?: number) => string;
export interface ColumnConfig {
    type?: DataType;
    /**
     * Relates to column Header
     */
    header?: string | HeaderTemplate;
    /**
     * Template accessor
     */
    field?: string | ElementData;
    customTemplate?: string | CellTemplate;
    view?: CellView | any;
    width?: string | number;
    enabled?: boolean;
    align?: ColumnAlign;
    aggregation?: ColumnAggregationConfig;
    sorting?: ColumnSortingConfig;
    cellEditing?: ColumnCellEditingConfig;
    matcher?: (item: any) => any;
}
