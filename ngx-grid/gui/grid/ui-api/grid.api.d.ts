export declare type FieldAccessor = (element?: any) => any;
export declare type ViewTemplateMethod = (cellValue: any) => string;
export interface GuiColumn {
    field?: string | FieldAccessor;
    type?: string | GuiDataType;
    view?: string | GuiCellView | ViewTemplateMethod;
    header?: string;
    customTemplate?: string;
    width?: string | number;
    enabled?: boolean;
    align?: string | GuiColumnAlign;
    aggregation?: GuiColumnAggregation;
    sorting?: GuiColumnSorting;
    cellEditing?: GuiColumnCellEditing;
    matcher?: (item: any) => any;
}
export declare enum GuiDataType {
    UNKNOWN = 0,
    NUMBER = 1,
    STRING = 2,
    BOOLEAN = 3,
    DATE = 4,
    CUSTOM = 5
}
export declare enum GuiCellView {
    TEXT = 0,
    CHIP = 1,
    LINK = 2,
    IMAGE = 3,
    BOLD = 4,
    ITALIC = 5,
    CHECKBOX = 6,
    CUSTOM = 7,
    BAR = 8,
    PERCENTAGE_BAR = 9,
    PERCENTAGE = 10
}
export declare enum GuiNumberCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiStringCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export declare enum GuiBooleanCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3,
    CHECKBOX = 4
}
export declare enum GuiDateCellView {
    TEXT = 0,
    BOLD = 1,
    ITALIC = 2,
    CHIP = 3
}
export interface GuiPagingConfig {
    enabled?: boolean;
    page?: number;
    pageSize?: number;
    pageSizes?: Array<number>;
    pagerTop?: boolean;
    pagerBottom?: boolean;
    display?: string | GuiPagingDisplay;
}
export declare enum GuiTheme {
    FABRIC = 0,
    MATERIAL = 1,
    LIGHT = 2,
    DARK = 3
}
export declare enum GuiRowColoring {
    NONE = 0,
    EVEN = 1,
    ODD = 2
}
export declare enum GuiSortingOrder {
    NONE = 0,
    ASC = 1,
    DESC = 2
}
export interface GuiSorting {
    enabled?: boolean;
    /**
     * @experimental
     */
    multiSorting?: boolean;
}
export interface GuiFiltering {
    enabled?: boolean;
}
export interface GuiQuickFilters {
    enabled?: boolean;
}
export interface GuiSearching {
    enabled?: boolean;
    highlighting?: boolean;
    placeholder?: string;
    phrase?: string;
}
export interface GuiAggregation {
    enabled?: boolean;
    top?: boolean;
    bottom?: boolean;
}
export interface GuiColumnAggregation {
    enabled?: boolean;
    aggregationTypes?: Array<any>;
}
export interface GuiColumnSorting {
    enabled?: boolean;
    matcher?: (item: any) => any;
    order?: GuiSortingOrder;
}
export interface GuiColumnCellEditing {
    enabled?: boolean;
}
export interface GuiColumnMenu {
    enabled?: boolean;
    sort?: boolean;
    filter?: boolean;
    columnsManager?: boolean;
}
export declare enum GuiPagingDisplay {
    BASIC = 0,
    ADVANCED = 1
}
export declare enum GuiColumnAlign {
    RIGHT = 0,
    CENTER = 1,
    LEFT = 2
}
