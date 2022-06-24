import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricTabComponent } from './tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { FabricArrowIconModule } from '../../common/icons/arrow-icon/fabric-arrow-icon.module';
import { FabricSvgTemplateModule } from '../../common/svg-template/fabric-svg-template.module';
import * as i0 from "@angular/core";
export class FabricTabModule {
}
FabricTabModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FabricTabModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, declarations: [FabricTabComponent,
        TabItemComponent], imports: [CommonModule,
        FabricArrowIconModule,
        FabricSvgTemplateModule], exports: [FabricTabComponent,
        TabItemComponent] });
FabricTabModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, imports: [[
            CommonModule,
            FabricArrowIconModule,
            FabricSvgTemplateModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.11", ngImport: i0, type: FabricTabModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FabricArrowIconModule,
                        FabricSvgTemplateModule
                    ],
                    declarations: [
                        FabricTabComponent,
                        TabItemComponent
                    ],
                    exports: [
                        FabricTabComponent,
                        TabItemComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLXRhYi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvZ3VpLWZhYnJpYy9zcmMvbGF5b3V0L3RhYi9mYWJyaWMtdGFiLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUMvRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQzs7QUFrQi9GLE1BQU0sT0FBTyxlQUFlOzs2R0FBZixlQUFlOzhHQUFmLGVBQWUsaUJBUjFCLGtCQUFrQjtRQUNsQixnQkFBZ0IsYUFOaEIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUIsYUFPdkIsa0JBQWtCO1FBQ2xCLGdCQUFnQjs4R0FHTCxlQUFlLFlBZGxCO1lBQ1IsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQix1QkFBdUI7U0FDdkI7NEZBVVcsZUFBZTtrQkFmM0IsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLHVCQUF1QjtxQkFDdkI7b0JBQ0QsWUFBWSxFQUFFO3dCQUNiLGtCQUFrQjt3QkFDbEIsZ0JBQWdCO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Isa0JBQWtCO3dCQUNsQixnQkFBZ0I7cUJBQ2hCO2lCQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IEZhYnJpY1RhYkNvbXBvbmVudCB9IGZyb20gJy4vdGFiLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYWJJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi90YWItaXRlbS90YWItaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFicmljQXJyb3dJY29uTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ljb25zL2Fycm93LWljb24vZmFicmljLWFycm93LWljb24ubW9kdWxlJztcbmltcG9ydCB7IEZhYnJpY1N2Z1RlbXBsYXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29tbW9uL3N2Zy10ZW1wbGF0ZS9mYWJyaWMtc3ZnLXRlbXBsYXRlLm1vZHVsZSc7XG5cblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRGYWJyaWNBcnJvd0ljb25Nb2R1bGUsXG5cdFx0RmFicmljU3ZnVGVtcGxhdGVNb2R1bGVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0RmFicmljVGFiQ29tcG9uZW50LFxuXHRcdFRhYkl0ZW1Db21wb25lbnRcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdEZhYnJpY1RhYkNvbXBvbmVudCxcblx0XHRUYWJJdGVtQ29tcG9uZW50XG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgRmFicmljVGFiTW9kdWxlIHtcbn1cbiJdfQ==