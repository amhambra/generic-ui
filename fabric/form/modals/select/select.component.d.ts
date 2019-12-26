import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
export declare class FabricSelectComponent implements OnChanges {
    private platformId;
    private elementRef;
    private renderer;
    private changeDetectorRef;
    optionListRef: ElementRef;
    containerRef: ElementRef;
    onResize(): void;
    options: Array<string>;
    placeholder: string;
    selected: string;
    width: number;
    disabled: boolean;
    optionChanged: EventEmitter<string>;
    selectedOption: string;
    initAnimationDisabled: boolean;
    windowSize: number;
    private canOpenDownward;
    private canOpenUpward;
    private open;
    private readonly SELECTED_OPTION_CLASS_NAME;
    constructor(platformId: any, elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef);
    ngOnChanges(changes: SimpleChanges): void;
    calculateDirection(): void;
    tryToOpen(event: any): void;
    clickOutside(event: any): void;
    toggleOptions(opened: boolean): void;
    isOptionSelected(option: string): boolean;
    onSelect(option: string, optionIndex: number): void;
    tryToSelect(option: string): void;
    private emitSelectedOption;
    private openOptions;
    private openDownward;
    private openUpward;
    private closeOptions;
    private isContainerClicked;
    private isContainerDisabled;
    private setSelectedOption;
    private removeSelectedOption;
    private addClass;
    private removeClass;
}
