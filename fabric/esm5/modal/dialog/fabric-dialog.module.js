/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabricDialogComponent } from './fabric-dialog.component';
import { FabricDialogService } from './fabric-dialog.service';
import { FabricDialogThemeService } from './fabric-dialog-theme.service';
import { FabricCloseIconModule } from '../../common/icons/close-icon/fabric-close-icon.module';
var FabricDialogModule = /** @class */ (function () {
    function FabricDialogModule() {
    }
    FabricDialogModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FabricCloseIconModule
                    ],
                    declarations: [
                        FabricDialogComponent
                    ],
                    providers: [
                        FabricDialogService,
                        FabricDialogThemeService
                    ],
                    entryComponents: [
                        FabricDialogComponent
                    ]
                },] }
    ];
    return FabricDialogModule;
}());
export { FabricDialogModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRpYWxvZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9mYWJyaWMvIiwic291cmNlcyI6WyJtb2RhbC9kaWFsb2cvZmFicmljLWRpYWxvZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBRy9GO0lBQUE7SUFpQkEsQ0FBQzs7Z0JBakJBLFFBQVEsU0FBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsWUFBWTt3QkFDWixxQkFBcUI7cUJBQ3JCO29CQUNELFlBQVksRUFBRTt3QkFDYixxQkFBcUI7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVixtQkFBbUI7d0JBQ25CLHdCQUF3QjtxQkFDeEI7b0JBQ0QsZUFBZSxFQUFFO3dCQUNoQixxQkFBcUI7cUJBQ3JCO2lCQUNEOztJQUVELHlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgRmFicmljRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWJyaWNEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLnNlcnZpY2UnO1xuaW1wb3J0IHsgRmFicmljRGlhbG9nVGhlbWVTZXJ2aWNlIH0gZnJvbSAnLi9mYWJyaWMtZGlhbG9nLXRoZW1lLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBGYWJyaWNDbG9zZUljb25Nb2R1bGUgfSBmcm9tICcuLi8uLi9jb21tb24vaWNvbnMvY2xvc2UtaWNvbi9mYWJyaWMtY2xvc2UtaWNvbi5tb2R1bGUnO1xuXG5cbkBOZ01vZHVsZSh7XG5cdGltcG9ydHM6IFtcblx0XHRDb21tb25Nb2R1bGUsXG5cdFx0RmFicmljQ2xvc2VJY29uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdEZhYnJpY0RpYWxvZ0NvbXBvbmVudFxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRGYWJyaWNEaWFsb2dTZXJ2aWNlLFxuXHRcdEZhYnJpY0RpYWxvZ1RoZW1lU2VydmljZVxuXHRdLFxuXHRlbnRyeUNvbXBvbmVudHM6IFtcblx0XHRGYWJyaWNEaWFsb2dDb21wb25lbnRcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBGYWJyaWNEaWFsb2dNb2R1bGUge1xufVxuIl19