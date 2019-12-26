import { ColumnHeaderEntity } from './column-header/column-header.entity';
import { SchemaTheme } from '../schema-theme';
import { SchemaRowColoring } from '../schema-row-coloring';
export declare class SchemaAggregate {
    private width?;
    private height?;
    private headerHeight;
    private pagerHeight;
    private containerHeight;
    private active;
    private horizontalGrid;
    private verticalGrid;
    private columnHeader;
    private theme;
    private rowColoring;
    constructor(width?: number, height?: number);
    getRowColoring(): SchemaRowColoring;
    setHeight(height: number): void;
    setTheme(theme: SchemaTheme): void;
    setRowColoring(coloring: SchemaRowColoring): void;
    getTheme(): SchemaTheme;
    getWidth(): number;
    getHeight(): number;
    getContainerHeight(): number;
    getColumnHeader(): ColumnHeaderEntity;
    setHeaderTop(enabled: boolean): void;
    setHeaderBottom(enabled: boolean): void;
    setVerticalGrid(enabled: boolean): void;
    setHorizontalGrid(enabled: boolean): void;
    isVerticalGridEnabled(): boolean;
    isHorizontalGridEnabled(): boolean;
    private getHeaderHeight;
    private getPagerHeight;
    private calculateContainerHeight;
}
