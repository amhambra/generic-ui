import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { IconComponent } from '../../../../../common/cdk/component/icon-component';
export declare class FilterIconComponent extends IconComponent {
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef);
    protected getSelectorName(): string;
}