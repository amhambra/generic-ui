import { ColumnId } from './column.id';
import { ColumnField } from './field/column-field';
import { ColumnConfig, HeaderTemplate } from '../../column.config';
import { ColumnAlign } from '../../column-align';
import { ViewEntity } from './view.entity';
import { DataType } from '../../../../structure/domain/structure/command/field/data-type/data-type';
import { CellView } from '../../cell-view';
export declare abstract class AbstractColumnEntity {
    private readonly columnId;
    private columnField;
    private header?;
    private width?;
    private align;
    private columnConfig;
    private view;
    protected constructor(columnId: ColumnId, columnField: ColumnField, columnConfig: ColumnConfig, header?: string | HeaderTemplate, align?: ColumnAlign, view?: ViewEntity, width?: number);
    getColumnConfig(): ColumnConfig;
    getColumnId(): ColumnId;
    getField(): ColumnField;
    getHeader(): string | HeaderTemplate;
    getDataType(): DataType;
    getCellView(): CellView;
    getTemplateFunction(): any;
    setView(view: ViewEntity): void;
    setHeader(header: string | HeaderTemplate): void;
    getView(): ViewEntity;
    getAlign(): ColumnAlign;
    setWidth(width: number): void;
    getWidth(): number;
    getSortingEnabled(): boolean;
    isCellEditingEnabled(): boolean;
    private setInitialAlign;
}
