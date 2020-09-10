/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiListComponent } from '../feature/gui.list.component';
import { ListViewFeatureModule } from '../../../structure/list/feature/list-view.feature-module';
import { StructureModule } from '../../../structure/core/domain-api/structure.module';
import { GuiListItemComponent } from '../feature/item/gui.list-item.component';
import { GuiListCardComponent } from '../feature/card/gui.list-card.component';
/** @type {?} */
var imports = [
    CommonModule,
    ListViewFeatureModule,
    StructureModule.withConfig({
        cssClassName: 'list',
        hermesModuleConfig: {
            loggers: true
        }
    })
];
/** @type {?} */
var declarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
/** @type {?} */
var providers = (/** @type {?} */ ([]));
/** @type {?} */
var exportDeclarations = [
    GuiListComponent,
    GuiListItemComponent,
    GuiListCardComponent
];
/** @type {?} */
var entryComponents = (/** @type {?} */ ([]));
/** @type {?} */
var elementComponents = [
    GuiListComponent
];
var GuiListWithGridModule = /** @class */ (function () {
    function GuiListWithGridModule() {
    }
    GuiListWithGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        ListViewFeatureModule,
                        StructureModule.withConfig({
                            cssClassName: 'list',
                            hermesModuleConfig: {
                                loggers: true
                            }
                        })
                    ]
                    // declarations,
                    // exports: exportDeclarations,
                    // entryComponents
                },] }
    ];
    return GuiListWithGridModule;
}());
export { GuiListWithGridModule };
var GuiListModule = /** @class */ (function () {
    function GuiListModule() {
    }
    /**
     * @return {?}
     */
    GuiListModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GuiListModule,
            providers: providers
        };
    };
    /**
     * @return {?}
     */
    GuiListModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GuiListModule,
            providers: []
        };
    };
    GuiListModule.decorators = [
        { type: NgModule, args: [{
                    imports: imports,
                    declarations: declarations,
                    exports: exportDeclarations,
                    entryComponents: entryComponents
                },] }
    ];
    return GuiListModule;
}());
export { GuiListModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJndWkvbGlzdC9kb21haW4tYXBpL2d1aS5saXN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN0RixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7SUFFekUsT0FBTyxHQUFHO0lBQ2YsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzFCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLGtCQUFrQixFQUFFO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2I7S0FDRCxDQUFDO0NBQ0Y7O0lBRUssWUFBWSxHQUFHO0lBQ3BCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsb0JBQW9CO0NBQ3BCOztJQUVLLFNBQVMsR0FBRyxtQkFBQSxFQUFFLEVBQW1COztJQUVqQyxrQkFBa0IsR0FBRztJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtDQUNwQjs7SUFFSyxlQUFlLEdBQUcsbUJBQUEsRUFBRSxFQUFjOztJQUVsQyxpQkFBaUIsR0FBRztJQUN6QixnQkFBZ0I7Q0FDaEI7QUFFRDtJQUFBO0lBZ0JBLENBQUM7O2dCQWhCQSxRQUFRLFNBQUM7b0JBQ1QsT0FBTyxFQUFFO3dCQUNSLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixlQUFlLENBQUMsVUFBVSxDQUFDOzRCQUMxQixZQUFZLEVBQUUsTUFBTTs0QkFDcEIsa0JBQWtCLEVBQUU7Z0NBQ25CLE9BQU8sRUFBRSxJQUFJOzZCQUNiO3lCQUNELENBQUM7cUJBQ0Y7b0JBQ0QsZ0JBQWdCO29CQUNoQiwrQkFBK0I7b0JBQy9CLGtCQUFrQjtpQkFDbEI7O0lBRUQsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQURZLHFCQUFxQjtBQUdsQztJQUFBO0lBcUJBLENBQUM7Ozs7SUFiTyxxQkFBTzs7O0lBQWQ7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLFNBQVM7U0FDcEIsQ0FBQztJQUNILENBQUM7Ozs7SUFFTSxzQkFBUTs7O0lBQWY7UUFDQyxPQUFPO1lBQ04sUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUyxFQUFFLEVBQUU7U0FDYixDQUFDO0lBQ0gsQ0FBQzs7Z0JBcEJELFFBQVEsU0FBQztvQkFDVCxPQUFPLFNBQUE7b0JBQ1AsWUFBWSxjQUFBO29CQUNaLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLGVBQWUsaUJBQUE7aUJBQ2Y7O0lBZ0JELG9CQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FmWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHdWlMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmVhdHVyZS9ndWkubGlzdC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0ZlYXR1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvbGlzdC9mZWF0dXJlL2xpc3Qtdmlldy5mZWF0dXJlLW1vZHVsZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4tYXBpL3N0cnVjdHVyZS5tb2R1bGUnO1xuaW1wb3J0IHsgR3VpTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2l0ZW0vZ3VpLmxpc3QtaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgR3VpTGlzdENhcmRDb21wb25lbnQgfSBmcm9tICcuLi9mZWF0dXJlL2NhcmQvZ3VpLmxpc3QtY2FyZC5jb21wb25lbnQnO1xuXG5jb25zdCBpbXBvcnRzID0gW1xuXHRDb21tb25Nb2R1bGUsXG5cdExpc3RWaWV3RmVhdHVyZU1vZHVsZSxcblx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdGNzc0NsYXNzTmFtZTogJ2xpc3QnLFxuXHRcdGhlcm1lc01vZHVsZUNvbmZpZzoge1xuXHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdH1cblx0fSlcbl07XG5cbmNvbnN0IGRlY2xhcmF0aW9ucyA9IFtcblx0R3VpTGlzdENvbXBvbmVudCxcblx0R3VpTGlzdEl0ZW1Db21wb25lbnQsXG5cdEd1aUxpc3RDYXJkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBwcm92aWRlcnMgPSBbXSBhcyBBcnJheTxQcm92aWRlcj47XG5cbmNvbnN0IGV4cG9ydERlY2xhcmF0aW9ucyA9IFtcblx0R3VpTGlzdENvbXBvbmVudCxcblx0R3VpTGlzdEl0ZW1Db21wb25lbnQsXG5cdEd1aUxpc3RDYXJkQ29tcG9uZW50XG5dO1xuXG5jb25zdCBlbnRyeUNvbXBvbmVudHMgPSBbXSBhcyBBcnJheTxhbnk+O1xuXG5jb25zdCBlbGVtZW50Q29tcG9uZW50cyA9IFtcblx0R3VpTGlzdENvbXBvbmVudFxuXTtcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZSxcblx0XHRMaXN0Vmlld0ZlYXR1cmVNb2R1bGUsXG5cdFx0U3RydWN0dXJlTW9kdWxlLndpdGhDb25maWcoe1xuXHRcdFx0Y3NzQ2xhc3NOYW1lOiAnbGlzdCcsXG5cdFx0XHRoZXJtZXNNb2R1bGVDb25maWc6IHtcblx0XHRcdFx0bG9nZ2VyczogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0pXG5cdF1cblx0Ly8gZGVjbGFyYXRpb25zLFxuXHQvLyBleHBvcnRzOiBleHBvcnREZWNsYXJhdGlvbnMsXG5cdC8vIGVudHJ5Q29tcG9uZW50c1xufSlcbmV4cG9ydCBjbGFzcyBHdWlMaXN0V2l0aEdyaWRNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzLFxuXHRkZWNsYXJhdGlvbnMsXG5cdGV4cG9ydHM6IGV4cG9ydERlY2xhcmF0aW9ucyxcblx0ZW50cnlDb21wb25lbnRzXG59KVxuZXhwb3J0IGNsYXNzIEd1aUxpc3RNb2R1bGUge1xuXG5cdHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuXHRcdHJldHVybiB7XG5cdFx0XHRuZ01vZHVsZTogR3VpTGlzdE1vZHVsZSxcblx0XHRcdHByb3ZpZGVyczogcHJvdmlkZXJzXG5cdFx0fTtcblx0fVxuXG5cdHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0bmdNb2R1bGU6IEd1aUxpc3RNb2R1bGUsXG5cdFx0XHRwcm92aWRlcnM6IFtdXG5cdFx0fTtcblx0fVxufVxuIl19