/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { timer } from 'rxjs';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../domain/structure-id';
import { CompositionId } from '../domain/composition/composition-id';
import { localProviders } from './local/local-providers';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureSummaryEnabledArchive } from './panel/summary/structure.summary-enabled.archive';
import { StructureAggregationArchive } from './panel/aggregation/structure.aggregation.archive';
import { StructureAggregationConfigService } from './panel/aggregation/structure.aggregation-config.service';
import { structureComponentToken } from './structure-component-token';
import { StructureGateway } from './gateway/structure.gateway';
import { PagingCommandService } from '../ui-api/paging/paging-command.service';
import { PagingEventService } from '../ui-api/paging/paging-event.service';
import { SourceCommandService } from '../ui-api/source/source-command.service';
import { SourceEventService } from '../ui-api/source/event/source-event.service';
import { SchemaCommandService } from '../ui-api/schema/schema-command.service';
import { CompositionCommandService } from '../ui-api/composition/composition.command-service';
import { CompositionEventService } from '../ui-api/composition/composition.event-service';
import { FormationEventService } from '../ui-api/formation/formation-event.service';
import { StructureCommandService } from '../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../ui-api/structure/structure-read-model.service';
import { CompositionReadModelService } from '../ui-api/composition/composition-read-model.service';
import { SchemaReadModelService } from '../ui-api/schema/schema-read-model.service';
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function structureIdFactory(generator) {
    return new StructureId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @param {?} generator
 * @return {?}
 */
export function compositionIdFactory(generator) {
    return new CompositionId('gui-' + generator.generateId());
}
/**
 * \@internal
 * @type {?}
 */
export var structureComponentSelfProviders = tslib_1.__spread([
    {
        provide: StructureId,
        useFactory: structureIdFactory,
        deps: [
            StructureIdGenerator
        ]
    },
    {
        provide: CompositionId,
        useFactory: compositionIdFactory,
        deps: [
            StructureIdGenerator
        ]
    }
], localProviders, [
    SchemaCssClassManager,
    StructureCellEditArchive,
    StructureCellEditStore,
    StructureEditModeArchive,
    StructureSummaryEnabledArchive,
    StructureAggregationArchive,
    StructureAggregationConfigService
]);
/**
 * \@internal
 */
var StructureComponent = /** @class */ (function (_super) {
    tslib_1.__extends(StructureComponent, _super);
    function StructureComponent(structureId, compositionId, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureCommandService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore, elementRef, changeDetectorRef, renderer, structureDefinition, structureQueryService, compositionQueryService, schemaReadModelService, schemaStylesManager) {
        var _this = _super.call(this, structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureSummaryEnabledArchive, structureAggregationConfigService, structureCellEditStore) || this;
        _this.elementRef = elementRef;
        _this.changeDetectorRef = changeDetectorRef;
        _this.renderer = renderer;
        _this.structureDefinition = structureDefinition;
        _this.structureQueryService = structureQueryService;
        _this.compositionQueryService = compositionQueryService;
        _this.schemaReadModelService = schemaReadModelService;
        _this.schemaStylesManager = schemaStylesManager;
        _this.loaderEnabled = false;
        _this.circleLoaderEnabled = true;
        _this.initialLoaderAnimation = false;
        _this.structureCommandService.init();
        compositionCommandService.init();
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    StructureComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this.schemaReadModelService
            .onHeight()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} height
         * @return {?}
         */
        function (height) {
            _this.structureHeight = height;
        }));
        this.schemaReadModelService
            .onColumnHeader()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} columnHeader
         * @return {?}
         */
        function (columnHeader) {
            _this.columnHeader = columnHeader;
        }));
        this.structureQueryService
            .onStructure()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} structure
         * @return {?}
         */
        function (structure) {
            _this.structure = structure;
            _this.loaderEnabled = structure.getSource().isLoading();
            _this.circleLoaderEnabled = structure.isLoaderVisible();
            if (_this.loaderEnabled && !_this.initialLoaderAnimation) {
                _this.initialLoaderAnimation = true;
            }
        }));
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var width = this.elementRef.nativeElement.offsetWidth;
        if (width > 0) {
            this.compositionCommandService.setContainerWidth(width);
        }
        else {
            /**
             * When gui-grid is in dynamic container which is created later then grid.
             */
            timer(0)
                .pipe(this.takeUntil())
                .subscribe((/**
             * @return {?}
             */
            function () {
                width = _this.elementRef.nativeElement.offsetWidth;
                if (width > 0) {
                    _this.compositionCommandService.setContainerWidth(width);
                }
            }));
        }
        this.schemaStylesManager
            .init(this.elementRef, this.structureId);
        this.compositionQueryService
            .onWidth()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} width
         * @return {?}
         */
        function (width) {
            _this.renderer.setStyle(_this.elementRef.nativeElement, 'width', width + 'px');
        }));
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.isBorderEnabled = /**
     * @return {?}
     */
    function () {
        return this.structureDefinition.isBorderEnabled() && this.structure.isReadyToDisplay();
    };
    /**
     * @return {?}
     */
    StructureComponent.prototype.getStructureId = /**
     * @return {?}
     */
    function () {
        return this.structureId;
    };
    StructureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gui-structure',
                    template: "<gui-structure-blueprint></gui-structure-blueprint>\n\n<!---------- LOADING ---------->\n<div [ngClass]=\"{'gui-loader-visible': loaderEnabled, 'gui-loader-hidden': !loaderEnabled && initialLoaderAnimation}\"\n\t class=\"gui-loading\">\n\t<gui-spinner *ngIf=\"circleLoaderEnabled\"\n\t\t\t\t [primary]=\"true\"\n\t\t\t\t [diameter]=\"120\">\n\t</gui-spinner>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '[class]': "\"gui-structure\"",
                        '[style.min-height.px]': 'structureHeight',
                        '[class.gui-structure-border]': 'isBorderEnabled()',
                        '[id]': 'structureId.toString()'
                    },
                    providers: tslib_1.__spread(structureComponentSelfProviders, [
                        {
                            provide: structureComponentToken,
                            useExisting: StructureComponent
                        }
                    ]),
                    styles: [".gui-bold{font-weight:700}.gui-italic{font-style:italic}", ".gui-header{background:#f2f3f4;border-bottom:1px solid #d6d6d6;height:32px}.gui-header .gui-header-cell{border-right:1px solid transparent;box-sizing:border-box;cursor:pointer;line-height:1em;overflow:hidden;padding:0 16px 0 8px;position:relative;white-space:nowrap;text-overflow:ellipsis;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gui-header .gui-header-cell:last-of-type{border-right:0}.gui-header .gui-header-cell .gui-header-menu{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell .gui-header-menu .gui-header-menu-icon{display:none;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABj0lEQVQ4ja2T261UMQxFV2znxdwvyqASOpgzf0jUQC1UQSkUgUQFCHHPnCQOPzeH+R8sRZHysLaXt8O2bT9ijC8hBFFVQgiUUmitcblcXFUZYwCQc8bMfIxBjJHW2m8D3o8xXswMgDknvXfM7PwoIsw5AWitEWNcd8mAz6pqIQTcnRgjMUYA3J0QwrkASimIyErQeTbC7Xb7JCICYGaICCklzIw5JyKCqhJjRFXJOTPnJKVECMHN3b+KSBERROSU6u6oKiklFshHLsdxMOfczcx+ikgBGGOQUmLOSQgBVT3BvolkjIGI0HtHRPanGTwdYdu272ZWgBNUjBEzo9bKvu/knFHVs81rb63tBnwAirufta94fX0lpQT849B7J+dM7x13383dv4wxLMZ4gltGWQ5cHZlzYmYcx0FKCXf/D0a6Xq8fxxip1irLsrXW1UJXVWqt9N65XC7s++5Lbe+925zzWynlHcCaxiXdzFBVWmuICPf7nfXurcRfpqp/eu/ySPdxCtf5mtaU0gKIiBx/ARsJ0yTj9LIKAAAAAElFTkSuQmCC);height:16px;width:16px;margin-right:8px}.gui-header .gui-header-cell .gui-header-menu .gui-sort{display:none;height:16px;width:16px}.gui-header .gui-header-cell .gui-header-menu .gui-sort-asc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFnElEQVR4Xu2dO6slRRSFvxF8gIiZiI9ERgMFB00MTNRf4DMTTUxEMBcRFRFzUTMDxUwZnD8wGoggqIyCBiomPjFTUHyAypY+eBjuub27q6qratfq7HJ3n+5a6+u9uoruc06gbWgFTgw9eg0eATA4BAJAAAyuwODDVwcQAIMrMPjw1QEEwOAKDD58dQABMKwCVwG3wn9rIR8CP4yoxIgd4ErgFeDuyXzz/R/gDPAo8ONIIIwGwEngLHDtAZO/Ae4CvhoFgpEAMPPfBa6eMfdb4M5RIBgFAK/5OzaGgWAEAJaaPxQE0QFYa/4wEEQGINX8ISCICkAu88NDEBGA3OaHhiAaAKXMDwtBJACuB95xzPNT13i+A+6Isk4QBYCtzN/BEwaCCABsbX4oCHoHoJb5YSDoGYDa5oeAoFcAWjG/ewh6BKA187uGoDcAUsy3hz68411Suz+t7G524BUkde6cY/8U878HXgaed57Ik8BjgD02tnTrCoJeAEg13x7wuBl40+nmA8Cn08JSaAh6AMDMtyd51hhhV76Z/wVw/0IA3gJuSITAjv2lE7oqZa0DkMt8E3cNALZfaAhaBiCn+SkAhIagVQBym58KQFgIWgSghPk5AAgJQWsAlDI/FwDhIGgJgJLm5wQgFAStAFDa/NwAhIGgBQC2ML8EACEgqA1Ayhx7f5HHs4iydh1g7rNTx2CPl1VbLKoJQKpwuxW+OYN2/y8FQGonMJCrQVALgK3NLxUB+/CljqkKBDUASBVq6ZW/RQfYHSN1bJtDsDUAqQKtNX+LDtAlBFsCUNP8LQHo6p5gKwBqm781AN1AsAUALZhfA4AuICgNQCvm1wKgeQhKAtCS+TUByAFBys3vseskpQC4GPgIuMm7SrNXt3SFz3uIkgtBnnNIuSA+m77T8E/PgZbUlALgGeDpJScy1ZYyv3YHyDFFNE2fXaFplQ5wDji18GRLmt8KAClxYJreslDT2fISHeAC4Hfgwtmj/19Q2vyWAFgLwV/AJcDfC3SdLS0BgB3UXo7wPsa9hfmtAbAGAtP0mllHFxaUAuA0cI/jXLYyv0UAlkJgmt7n0HRRSSkA7O7fZgE2Gzi0bWl+qwB4IfhjmgV8vshdR3EpAOzQjwAvHYDApjX3Tm/sOE4zS0ntaeBxg7Apol3hR02bzXx7T/HVLCqc9yElAbBD3Qg8B9wGXAGY8W8DLwDZ57QzArUMgJ36RcAT09fYGwg/AR8ATwHZr/ydVqUB2PfEZgdZ72AXXhGtA1BFqy0BWOhX9vKeAMg++EMfKACOVsZeD7e3g8NvAkAAhId8N0BFwBFWqwOoA6gDHKGA7gECYqEIUAQs+pIozQKCdQF1AHUAdYDzGdAsQLOAYI3+8HAUAYoARYAiwNfwtA7g06mrKkWAIkARoAjwNS1FgE+nrqoUAYoARYAiwNe0FAE+nbqqUgQoAhQBigBf01IE+HTqqkoRoAhQBCgCfE1LEeDTqasqRYAiQBGgCPA1LUWAT6euqhQBigBFgCLA17QUAT6duqpSBCgCFAGKAF/TUgT4dOqqShGgCFAEKAJ8TUsR4NOpqypFgCJAEaAI8DUtRYBPp66qFAGKAEWAIsDXtBQBPp26qlIEKAIUAYoAX9NSBPh06qpKEaAIUAQoAnxNSxHg06mrKkWAIkARMHIE3A685+xZVvu+s7brspG+KvZS4BfAfr3suM1+2ewy4LeunXWe/EgAmCSvAQ/NaPM68LBTv+7LRgPgcuBj4LoDzn09/UTrz9076xzAaACYLAbBi8CDe3Fgbf8N4HFgGPNNjBEB2F0bdk9wavrjE+BX50UTqmxkAEIZuXYwAmCtckH2EwBBjFw7DAGwVrkg+wmAIEauHYYAWKtckP0EQBAj1w5DAKxVLsh+AiCIkWuHIQDWKhdkv38BCBOikK5+TTcAAAAASUVORK5CYII=) center/contain no-repeat;display:block}.gui-header .gui-header-cell .gui-header-menu .gui-sort-desc{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAFcElEQVR4Xu2dPatcVRSGnwhRQUIqwc8mqIVC/ECwsFH/gEk0nWhjpZJeFFREf4AoNjaKnSL+Ak0hgo2EgBZGbJKIYJWA4gcksmAGhuvcO+t87H322us97aw7s9f7PrPec/acO3MIHakVOJS6ezWPAEgOgQAQAMkVSN6+JoAASK5A8vY1AQRAcgWSt68JIADSKnAL8NCq+3PAHxmVyDgBjgLvAc8BN6xMvwZ8CpwBrmQCIRsAZv73wLF9TP4FeCQTBNkA+Bh4fsc7/BPghSxTIBMAlvlXN8b+fh5bHBwB/swAQSYAHge+cZpqtd86a0OXZQLgWeAzp1ungc+dtaHLBMB2+wRAaKy3L14TYIsumgCaAB2+1zUB3KZqAmgCuGGJXqhzAJ0D6DJwLwOKAEVA9MnuXr8iQBGgCFAE+AaGdgJ9OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVigBFgCJAEeAbWooAn06hqhQBigBFgCLAN7QUAT6dQlUpAhQBigBFgG9oKQJ8OoWqUgQoAhQBigDf0FIE+HQKVaUIUAQoAhQBvqGlCPDpFKpKEaAIUAQoAnxDSxHg0ylUlSJAEaAIUAT4hpYiwKdTqCpFgCJAEaAI8A0tRYBPp1BVioCFI8B+pNF+kWupIxIA1bQq/WXRDwBvA48BtwI/Al8C7wL/VCahdQBuAl4FTgD3A78D3wGvr3QrIldJAF4E3gessb3HD8Ap4KciXW1/0pYBuA/4ArA3zN7jb+AV4KMSWpUCwBqxn2i98YBF/wo8WRGCVgEw878G7jhAK4PAftLWJuisRykAjOaTjpXWhKBFADzmr2U0TZ9xaDqopBQAl3cQvbnIWhC0BsAQ800v0/SuQe46iksAYGewfwGHHa+/LqkBQUsADDXfdPoXuHnuK6kSANhizwEPDgDASktD0AoAY8xfa/rwQE13lpcC4E3gjZ2v/v+CkhC0AMBY800p0/StEZoe+CelALCzf7sK2HZZs6uHUhAsDcAU8+2y2a4CZt87KQWAmTyl4RIQLAnAVC2eAC7seueMebwkAK1BsBQAzZpvBpUGoCUIlgCgafNrAdAKBLUBaN78mgC0AEFNAEKYXxuApSGoBUAY85cAYEkIagAQyvylAFgKgtIAhDN/SQCWgKAkACHNXxqA2hCUAmCK+fYJn90TUWSTx7MxVGMfYNc67gXODvj4ePP5huwYlgAgtPktTIC1mTUgmBuA8Oa3BICtpTQEcwLQhfmtAVAagrkA6Mb8FgEoCcEcAHRlfqsAlIJgKgDdmd8yACUgmAJAl+a3DsDcEIwFoFvzIwCwhsD+ceLOXRsKWx7f3CcYA8BU8+1Onp9HrLvan7SwEeRp1i4Rp0JwHAZ9P8B5x3/s7Ld22+Fr3vwoE2Bzs2gKBB8A73hoA14DXh65OxnG/GgATI2D6wNugRtSu8lUKPMjAjAVAucAGFUWzvyoALQIQUjzIwPQEgRhzY8OQAsQhDa/BwCWhCC8+b0AsAQEXZjfEwDWyz2rO4vG7BgOOe2/tLqNq+kdPm9DUXYCvf2UhqAr83ubAGtISkHQnfm9AlAiDro0v2cA5oSgW/N7B2AOCLo2PwMAUyDo3vwsAIyBIIX5mQAYAkEa87MBsIbgK+DufTYWLgJPtX4bl3dTxFPX20aQp+fbgA+BpzduELEbQOxr7F8CfvM8SS81GQFYe3c78Chg5tt3GtoNpOmOzACkM3tbwwIgOQYCQAAkVyB5+5oAAiC5Asnb1wQQAMkVSN6+JoAASK5A8vb/A4djo5Dd1KQLAAAAAElFTkSuQmCC) center/contain no-repeat;display:block}.gui-header .gui-header-cell:hover{background:#e6e7e8}.gui-header .gui-header-cell:hover .gui-header-menu .gui-header-menu-icon{display:block}.gui-header-bottom .gui-header{border-bottom:0;border-top:1px solid #d6d6d6}gui-structure{background:#fff;box-sizing:border-box;color:#333;display:block;font-family:Arial;font-size:14px;position:relative}gui-structure *{box-sizing:border-box}gui-structure gui-structure-search-bar form{display:-webkit-box;display:-ms-flexbox;display:flex;background:#fff;height:30px;border-bottom:1px solid #d6d6d6}gui-structure gui-structure-search-bar form .gui-search-icon{position:absolute;top:5px;left:10px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACSSURBVDhPtZKLEUAwEAWD4lSgLYXQhxI0oAMNcM/cmUQuHwk78+bkczsizB8MlIVycCaey2akbBS7Cc+Yw1oS2RziKVdJvTbWcMwoOH+K4J6WaxUd156yU9Zr5CNHnbmqfPJhQeyK5b/JAk24KWnCjWBOxqqo4ZqDLXD63kiAKnorAZ6oRAIcUakE3KIaCSCRMSdEbCXGTdhJLAAAAABJRU5ErkJggg==);width:17px;height:17px}gui-structure gui-structure-search-bar form input{border:none;padding:6px 6px 6px 38px;height:100%;width:100%}gui-structure gui-structure-header{display:block;height:100%;width:100%}gui-structure gui-structure-header gui-structure-header-filters.gui-header{height:32px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell{padding:4px}gui-structure gui-structure-header gui-structure-header-filters.gui-header .gui-header-cell input{position:relative;box-sizing:border-box;font-size:13px;padding:2px;height:100%;width:100%;border:1px solid #d6d6d6}gui-structure-container{display:block;height:100%;overflow:auto;overflow-x:hidden;position:relative;width:100%}gui-structure-container .gui-structure-container{box-sizing:border-box;height:100%;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content{height:100%;position:relative}gui-structure-container .gui-structure-container .gui-content .gui-row{height:30px;position:absolute;width:100%}gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f6f7f8}gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#d0e8fb}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell{border-right:1px solid transparent;box-sizing:border-box;line-height:1em;overflow:hidden;padding:0;white-space:nowrap}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-button{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-cell-boolean{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-checkbox{position:absolute;top:4px;padding-left:22px;line-height:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-chip{margin:0;padding:2px 8px}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-badge{padding:0}gui-structure-container .gui-structure-container .gui-content .gui-row .gui-cell .gui-input{background:0 0;font-size:14px;border-style:none;border-radius:0;padding:0}gui-structure-container gui-structure-cell{display:inline-block}gui-structure-container gui-structure-cell>span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;height:100%;width:100%}gui-structure-container gui-structure-cell .gui-cell-edit-mode{border:2px solid #2185d0;height:100%;padding:6px}gui-structure-container gui-structure-cell .gui-cell-edit-mode gui-boolean-edit{margin-left:calc(50% - 11px)}gui-structure-container gui-structure-cell .gui-cell-edit-mode input:focus{outline:0;box-shadow:none}.gui-vertical-grid .gui-structure-aggregation-cell,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell{border-right:1px solid #d6d6d6}.gui-vertical-grid .gui-structure-aggregation-cell:last-of-type,.gui-vertical-grid gui-structure-container .gui-content .gui-row .gui-cell:last-of-type,.gui-vertical-grid gui-structure-header .gui-header .gui-header-cell:last-of-type{border-right:0}.gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom:1px solid #d6d6d6}.gui-horizontal-grid gui-structure-container .gui-row:last-of-type .gui-cell{border-bottom:0}.gui-rows-even .gui-row:nth-child(even),.gui-rows-odd .gui-row:nth-child(odd){background:#f7f8f9}gui-structure-summary{box-sizing:border-box;background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 6px;width:100%;line-height:30px;border-top:1px solid #d6d6d6}gui-structure-summary p{margin:0}gui-structure-summary p b{font-weight:700}gui-structure-summary div{color:#333;cursor:pointer}gui-structure-summary div button{background:#999;border-radius:50%;color:#fff;cursor:pointer;font-weight:700;font-family:\"Comic Sans MS\",cursive,sans-serif;width:16px;height:16px;line-height:14px;padding:0;border:1px solid transparent}gui-structure-summary div button:focus{outline:0;box-shadow:0 0 4px #999}.gui-structure-info-panel{box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:160px;padding:16px;font-family:Roboto,sans-serif}.gui-structure-info-panel ul{list-style:none;margin:0;padding-left:10px}.gui-structure-info-panel p{font-weight:700;margin:0;color:#333}.gui-structure-info-panel p:nth-child(2){margin:0 0 12px}.gui-structure-info-panel p:nth-child(5){margin:8px 0 0}.gui-structure-info-panel a{text-decoration:none;color:#2185d0;margin:0 0 8px}.gui-structure-info-panel a:hover{color:#59a9e5}.gui-structure-border{border:1px solid #d6d6d6}gui-structure-aggregation-panel{background:#f2f3f4;display:-webkit-box;display:-ms-flexbox;display:flex}gui-structure-aggregation-panel.gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top:1px solid #d6d6d6}gui-structure-aggregation-panel.gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom:1px solid #d6d6d6}gui-structure-aggregation-panel .gui-structure-aggregation-cell{font-size:14px}gui-structure-aggregation-panel .gui-structure-aggregation-value{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1em;height:30px;padding:8px 6px;overflow:hidden}gui-structure-aggregation-panel .gui-structure-aggregation-value div .gui-math-symbol{position:relative;top:-1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean,gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-mean span:nth-child(1){position:absolute;top:-15px;left:1px}gui-structure-aggregation-panel .gui-structure-aggregation-value .gui-median span:nth-child(1){position:absolute;top:-8px;left:1px}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.gui-loading{-webkit-animation-duration:.2s;animation-duration:.2s;-ms-flex-line-pack:center;align-content:center;background:rgba(255,255,255,.8);border:1px solid transparent;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;opacity:0;position:absolute;top:0;width:100%;visibility:hidden}.gui-loading gui-spinner{-ms-flex-item-align:center;-ms-grid-row-align:center;align-self:center}.gui-loading.gui-loader-hidden{-webkit-animation-name:fadeOut;animation-name:fadeOut;opacity:0;visibility:visible;z-index:-1}.gui-loading.gui-loader-visible{-webkit-animation-name:fadeIn;animation-name:fadeIn;opacity:1;visibility:visible;z-index:1}", "gui-structure-paging{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:4px}gui-structure-paging>*{padding-left:16px}gui-structure-paging gui-structure-paging-select span{display:inline-block;margin:0 6px 0 0}gui-structure-paging gui-structure-paging-navigator button{margin-right:6px}gui-structure-paging gui-structure-paging-navigator button:last-of-type{margin-right:0}gui-structure-paging gui-structure-paging-stats span{display:inline-block;margin:0 2px 0 0}gui-structure-paging gui-structure-alternative-paging-navigator{display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 8px;line-height:34px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-page{display:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-visible-page .gui-paging-page{display:block;cursor:pointer;padding:0 8px}gui-structure-paging gui-structure-alternative-paging-navigator gui-structure-alternative-paging-pages .gui-paging-active-page{font-weight:700;color:#000;box-shadow:0 1px 0 0 #000}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button{margin:0 4px;background:0 0;padding:0}gui-structure-paging gui-structure-alternative-paging-navigator .gui-button:hover{background:0 0}gui-structure-paging.gui-structure-paging-bottom{border-top:1px solid #d6d6d6}gui-structure-paging.gui-structure-paging-top{border-bottom:1px solid #d6d6d6}", "@media (max-width:500px){gui-structure-paging gui-structure-paging-stats,gui-structure-paging>*{padding-left:4px}}", ".gui-header{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-header .gui-header-cell{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.gui-content .gui-row{display:-webkit-box;display:-ms-flexbox;display:flex}.gui-content .gui-row .gui-cell{display:inline-block}", ".gui-cell .gui-checkbox{display:block}.gui-cell .gui-chip{margin:0;padding:2px 8px}.gui-cell .gui-input{font-size:11px;display:block;padding:2px 4px;width:86%}.gui-cell .gui-button{padding:2px 8px}.gui-cell .gui-cell-number{display:block;text-align:right;width:100%}.gui-cell .gui-cell-boolean{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:100%;text-align:center;width:100%}", ".gui-material .gui-header,.gui-material.gui-structure{font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-material .gui-structure-header .gui-header{font-weight:700;color:grey}.gui-material .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-material .gui-cell .gui-badge,.gui-material .gui-cell .gui-button{padding:0}.gui-material.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}", ".gui-dark .gui-header,.gui-dark.gui-structure{background:#383838;color:#ccc}.gui-dark .gui-structure-border{border:none;box-shadow:5px 5px 10px 2px #1f1f1f}.gui-dark .gui-structure-header .gui-header{color:#bdbdbd;border-bottom-color:#666}.gui-dark .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-dark .gui-structure-header .gui-header .gui-header-cell:hover,.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#525252}.gui-dark gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-dark.gui-rows-even .gui-row:nth-child(even),.gui-dark.gui-rows-odd .gui-row:nth-child(odd){background:#2c2c2c}.gui-dark .gui-horizontal-grid gui-structure-container .gui-row .gui-cell{border-bottom-color:#666}.gui-dark.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}.gui-dark gui-structure-paging.gui-structure-paging-bottom{border-top-color:#666}.gui-dark gui-structure-paging.gui-structure-paging-top{border-bottom-color:#666}.gui-dark ::-webkit-scrollbar{width:15px}.gui-dark ::-webkit-scrollbar-track{background:#616161}.gui-dark ::-webkit-scrollbar-thumb{background:#424242}.gui-dark ::-webkit-scrollbar-thumb:hover{background:#212121}.gui-dark .gui-structure-aggregation-cell{background:#383838;color:#ccc}.gui-dark .gui-structure-aggregation-panel-bottom .gui-structure-aggregation-cell{border-top-color:#666}.gui-dark .gui-structure-aggregation-panel-top .gui-structure-aggregation-cell{border-bottom-color:#666}.gui-dark gui-structure-summary{background:#383838;border-top-color:#666}.gui-dark gui-structure-summary div{color:#ccc}.gui-dark gui-structure-summary div button{background:#616161}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-asc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-header .gui-header-cell .gui-header-menu .gui-sort-desc{background:url(data:image/png;base64,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) center/contain no-repeat}.gui-dark .gui-structure-info-panel p{color:#ccc}", ".gui-light .gui-header,.gui-light.gui-structure{background:#fff;color:#333;font-family:Roboto,\"Helvetica Neue\",sans-serif}.gui-light.gui-structure-border{border-color:#ccc transparent}.gui-light .gui-structure-header .gui-header{color:#333;font-weight:700}.gui-light .gui-structure-header .gui-header .gui-header-cell{border-right:1px solid transparent}.gui-light .gui-structure-header .gui-header .gui-header-cell:hover,.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row:hover{background:#f0f0f0}.gui-light gui-structure-container .gui-structure-container .gui-content .gui-row.selected{background:#7cb9f652}.gui-light.gui-rows-even .gui-row:nth-child(even),.gui-light.gui-rows-odd .gui-row:nth-child(odd){background:#f7f7f7}.gui-light.gui-vertical-grid gui-structure-container .gui-row .gui-cell{border-right:none}"]
                }] }
    ];
    /** @nocollapse */
    StructureComponent.ctorParameters = function () { return [
        { type: StructureId },
        { type: CompositionId },
        { type: PagingCommandService },
        { type: PagingEventService },
        { type: SourceCommandService },
        { type: SourceEventService },
        { type: SchemaCommandService },
        { type: CompositionCommandService },
        { type: CompositionEventService },
        { type: FormationEventService },
        { type: StructureCommandService },
        { type: StructureEditModeArchive },
        { type: StructureCellEditArchive },
        { type: StructureSummaryEnabledArchive },
        { type: StructureAggregationConfigService },
        { type: StructureCellEditStore },
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: StructureDefinition },
        { type: StructureReadModelService },
        { type: CompositionReadModelService },
        { type: SchemaReadModelService },
        { type: SchemaCssClassManager }
    ]; };
    return StructureComponent;
}(StructureGateway));
export { StructureComponent };
if (false) {
    /** @type {?} */
    StructureComponent.prototype.loaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.circleLoaderEnabled;
    /** @type {?} */
    StructureComponent.prototype.initialLoaderAnimation;
    /** @type {?} */
    StructureComponent.prototype.structureHeight;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.columnHeader;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structure;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureDefinition;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.structureQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.compositionQueryService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaReadModelService;
    /**
     * @type {?}
     * @private
     */
    StructureComponent.prototype.schemaStylesManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS9zdHJ1Y3R1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVOLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFJVixTQUFTLEVBRVQsaUJBQWlCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHN0IsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDOUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbkcsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDaEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDN0csT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxF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QWlCO2dCQU1qQixTQUFTO2dCQU9ELG1CQUFtQjtnQkF5Qm5CLHlCQUF5QjtnQkFDekIsMkJBQTJCO2dCQUMzQixzQkFBc0I7Z0JBdEJ0QixxQkFBcUI7O0lBNk85Qix5QkFBQztDQUFBLEFBOUtELENBOEJ3QyxnQkFBZ0IsR0FnSnZEO1NBaEpZLGtCQUFrQjs7O0lBRTlCLDJDQUErQjs7SUFFL0IsaURBQW9DOztJQUVwQyxvREFBd0M7O0lBRXhDLDZDQUF3Qjs7Ozs7SUFFeEIsMENBQXlDOzs7OztJQUV6Qyx1Q0FBNkI7Ozs7O0lBa0IxQix3Q0FBOEI7Ozs7O0lBQzlCLCtDQUE0Qzs7Ozs7SUFDNUMsc0NBQTJCOzs7OztJQUMzQixpREFBZ0Q7Ozs7O0lBQ2hELG1EQUF3RDs7Ozs7SUFDeEQscURBQTREOzs7OztJQUM1RCxvREFBc0Q7Ozs7O0lBQ3RELGlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdEFmdGVyVmlld0luaXQsXG5cdENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuXHRDaGFuZ2VEZXRlY3RvclJlZixcblx0Q29tcG9uZW50LFxuXHRFbGVtZW50UmVmLFxuXHRPbkNoYW5nZXMsXG5cdE9uRGVzdHJveSxcblx0T25Jbml0LFxuXHRSZW5kZXJlcjIsXG5cdFNpbXBsZUNoYW5nZXMsXG5cdFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcblxuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVEZWZpbml0aW9uIH0gZnJvbSAnLi9zdHJ1Y3R1cmUtZGVmaW5pdGlvbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZEdlbmVyYXRvciB9IGZyb20gJy4vc3RydWN0dXJlLWlkLmdlbmVyYXRvcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5pbXBvcnQgeyBsb2NhbFByb3ZpZGVycyB9IGZyb20gJy4vbG9jYWwvbG9jYWwtcHJvdmlkZXJzJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzTWFuYWdlciB9IGZyb20gJy4vc2NoZW1hL3NjaGVtYS1jc3MtY2xhc3MubWFuYWdlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUgfSBmcm9tICcuL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUgfSBmcm9tICcuL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4vcGFuZWwvc3VtbWFyeS9zdHJ1Y3R1cmUuc3VtbWFyeS1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25BcmNoaXZlIH0gZnJvbSAnLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24uYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3BhbmVsL2FnZ3JlZ2F0aW9uL3N0cnVjdHVyZS5hZ2dyZWdhdGlvbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVDb21wb25lbnRUb2tlbiB9IGZyb20gJy4vc3RydWN0dXJlLWNvbXBvbmVudC10b2tlbic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVHYXRld2F5IH0gZnJvbSAnLi9nYXRld2F5L3N0cnVjdHVyZS5nYXRld2F5JztcbmltcG9ydCB7IFNjaGVtYUNvbHVtbkhlYWRlciB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEvcmVhZC9zY2hlbWEtY29sdW1uLWhlYWRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmUgfSBmcm9tICcuLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50U2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi91aS1hcGkvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vdWktYXBpL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kU2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9zY2hlbWEvc2NoZW1hLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vdWktYXBpL2NvbXBvc2l0aW9uL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5ldmVudC1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlUmVhZE1vZGVsU2VydmljZSB9IGZyb20gJy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc3RydWN0dXJlLXJlYWQtbW9kZWwuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi91aS1hcGkvY29tcG9zaXRpb24vY29tcG9zaXRpb24tcmVhZC1tb2RlbC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFNlcnZpY2UgfSBmcm9tICcuLi91aS1hcGkvc2NoZW1hL3NjaGVtYS1yZWFkLW1vZGVsLnNlcnZpY2UnO1xuXG4vKiogQGludGVybmFsICovXG5leHBvcnQgZnVuY3Rpb24gc3RydWN0dXJlSWRGYWN0b3J5KGdlbmVyYXRvcjogU3RydWN0dXJlSWRHZW5lcmF0b3IpOiBTdHJ1Y3R1cmVJZCB7XG5cdHJldHVybiBuZXcgU3RydWN0dXJlSWQoJ2d1aS0nICsgZ2VuZXJhdG9yLmdlbmVyYXRlSWQoKSk7XG59XG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NpdGlvbklkRmFjdG9yeShnZW5lcmF0b3I6IFN0cnVjdHVyZUlkR2VuZXJhdG9yKTogQ29tcG9zaXRpb25JZCB7XG5cdHJldHVybiBuZXcgQ29tcG9zaXRpb25JZCgnZ3VpLScgKyBnZW5lcmF0b3IuZ2VuZXJhdGVJZCgpKTtcbn1cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHN0cnVjdHVyZUNvbXBvbmVudFNlbGZQcm92aWRlcnMgPSBbXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVJZCxcblx0XHR1c2VGYWN0b3J5OiBzdHJ1Y3R1cmVJZEZhY3RvcnksXG5cdFx0ZGVwczogW1xuXHRcdFx0U3RydWN0dXJlSWRHZW5lcmF0b3Jcblx0XHRdXG5cdH0sXG5cdHtcblx0XHRwcm92aWRlOiBDb21wb3NpdGlvbklkLFxuXHRcdHVzZUZhY3Rvcnk6IGNvbXBvc2l0aW9uSWRGYWN0b3J5LFxuXHRcdGRlcHM6IFtcblx0XHRcdFN0cnVjdHVyZUlkR2VuZXJhdG9yXG5cdFx0XVxuXHR9LFxuXHQuLi5sb2NhbFByb3ZpZGVycyxcblxuXHRTY2hlbWFDc3NDbGFzc01hbmFnZXIsXG5cdFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0U3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0U3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUsXG5cdFN0cnVjdHVyZUFnZ3JlZ2F0aW9uQXJjaGl2ZSxcblx0U3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlXG5cbl07XG5cbi8qKiBAaW50ZXJuYWwgKi9cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ2d1aS1zdHJ1Y3R1cmUnLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RydWN0dXJlLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbXG5cdFx0Jy4vc3R5bGUvc3R5bGVzLm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS9zdHJ1Y3R1cmUubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3N0cnVjdHVyZS1wYWdpbmcubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3N0cnVjdHVyZS1yZXNwb25zaXZlLm5neC5zY3NzJyxcblx0XHQnLi9zdHlsZS9zdHJ1Y3R1cmUtZmxleC5uZ3guc2NzcycsXG5cdFx0Jy4vY29tcG9zaXRpb24vY29tcG9zaXRpb24ubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lcy9tYXRlcmlhbC5zdHJ1Y3R1cmUubmd4LnNjc3MnLFxuXHRcdCcuL3N0eWxlL3RoZW1lcy9kYXJrLnN0cnVjdHVyZS5uZ3guc2NzcycsXG5cdFx0Jy4vc3R5bGUvdGhlbWVzL2xpZ2h0LnN0cnVjdHVyZS5uZ3guc2Nzcydcblx0XSxcblx0Y2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG5cdGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG5cdGhvc3Q6IHtcblx0XHQnW2NsYXNzXSc6IGBcImd1aS1zdHJ1Y3R1cmVcImAsXG5cdFx0J1tzdHlsZS5taW4taGVpZ2h0LnB4XSc6ICdzdHJ1Y3R1cmVIZWlnaHQnLFxuXHRcdCdbY2xhc3MuZ3VpLXN0cnVjdHVyZS1ib3JkZXJdJzogJ2lzQm9yZGVyRW5hYmxlZCgpJyxcblx0XHQnW2lkXSc6ICdzdHJ1Y3R1cmVJZC50b1N0cmluZygpJ1xuXHR9LFxuXHRwcm92aWRlcnM6IFtcblx0XHQuLi5zdHJ1Y3R1cmVDb21wb25lbnRTZWxmUHJvdmlkZXJzLFxuXHRcdHtcblx0XHRcdHByb3ZpZGU6IHN0cnVjdHVyZUNvbXBvbmVudFRva2VuLFxuXHRcdFx0dXNlRXhpc3Rpbmc6IFN0cnVjdHVyZUNvbXBvbmVudFxuXHRcdH1cblx0XVxufSlcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVDb21wb25lbnQgZXh0ZW5kcyBTdHJ1Y3R1cmVHYXRld2F5IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuXG5cdGxvYWRlckVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRjaXJjbGVMb2FkZXJFbmFibGVkOiBib29sZWFuID0gdHJ1ZTtcblxuXHRpbml0aWFsTG9hZGVyQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XG5cblx0c3RydWN0dXJlSGVpZ2h0OiBudW1iZXI7XG5cblx0cHJpdmF0ZSBjb2x1bW5IZWFkZXI6IFNjaGVtYUNvbHVtbkhlYWRlcjtcblxuXHRwcml2YXRlIHN0cnVjdHVyZTogU3RydWN0dXJlO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRwYWdpbmdFdmVudFNlcnZpY2U6IFBhZ2luZ0V2ZW50U2VydmljZSxcblx0XHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRcdFx0c2NoZW1hQ29tbWFuZFNlcnZpY2U6IFNjaGVtYUNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0XHRjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFNlcnZpY2UsXG5cdFx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRcdHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZTogU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmU6IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlU3VtbWFyeUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJ5RW5hYmxlZEFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG5cdFx0XHRcdHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuXHRcdFx0XHRwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG5cdFx0XHRcdHByaXZhdGUgc3RydWN0dXJlRGVmaW5pdGlvbjogU3RydWN0dXJlRGVmaW5pdGlvbixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVRdWVyeVNlcnZpY2U6IFN0cnVjdHVyZVJlYWRNb2RlbFNlcnZpY2UsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25RdWVyeVNlcnZpY2U6IENvbXBvc2l0aW9uUmVhZE1vZGVsU2VydmljZSxcblx0XHRcdFx0cHJpdmF0ZSBzY2hlbWFSZWFkTW9kZWxTZXJ2aWNlOiBTY2hlbWFSZWFkTW9kZWxTZXJ2aWNlLFxuXHRcdFx0XHRwcml2YXRlIHNjaGVtYVN0eWxlc01hbmFnZXI6IFNjaGVtYUNzc0NsYXNzTWFuYWdlcikge1xuXG5cdFx0c3VwZXIoXG5cdFx0XHRzdHJ1Y3R1cmVJZCxcblx0XHRcdGNvbXBvc2l0aW9uSWQsXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRcdHBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdFx0cGFnaW5nRXZlbnRTZXJ2aWNlLFxuXHRcdFx0c291cmNlQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRzb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0XHRzY2hlbWFDb21tYW5kU2VydmljZSxcblx0XHRcdGNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2UsXG5cdFx0XHRjb21wb3NpdGlvbkV2ZW50U2VydmljZSxcblx0XHRcdGZvcm1hdGlvbkV2ZW50U2VydmljZSxcblx0XHRcdHN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRcdHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSxcblx0XHRcdHN0cnVjdHVyZVN1bW1hcnlFbmFibGVkQXJjaGl2ZSxcblx0XHRcdHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZSxcblx0XHRcdHN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHQpO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5pbml0KCk7XG5cdFx0Y29tcG9zaXRpb25Db21tYW5kU2VydmljZS5pbml0KCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0c3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHRzdXBlci5uZ09uSW5pdCgpO1xuXG5cdFx0dGhpcy5zY2hlbWFSZWFkTW9kZWxTZXJ2aWNlXG5cdFx0XHQub25IZWlnaHQoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGhlaWdodDogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlSGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnNjaGVtYVJlYWRNb2RlbFNlcnZpY2Vcblx0XHRcdC5vbkNvbHVtbkhlYWRlcigpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgoY29sdW1uSGVhZGVyOiBTY2hlbWFDb2x1bW5IZWFkZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5IZWFkZXIgPSBjb2x1bW5IZWFkZXI7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25TdHJ1Y3R1cmUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0cnVjdHVyZTogU3RydWN0dXJlKSA9PiB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlID0gc3RydWN0dXJlO1xuXG5cdFx0XHRcdHRoaXMubG9hZGVyRW5hYmxlZCA9IHN0cnVjdHVyZS5nZXRTb3VyY2UoKS5pc0xvYWRpbmcoKTtcblxuXHRcdFx0XHR0aGlzLmNpcmNsZUxvYWRlckVuYWJsZWQgPSBzdHJ1Y3R1cmUuaXNMb2FkZXJWaXNpYmxlKCk7XG5cblx0XHRcdFx0aWYgKHRoaXMubG9hZGVyRW5hYmxlZCAmJiAhdGhpcy5pbml0aWFsTG9hZGVyQW5pbWF0aW9uKSB7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsTG9hZGVyQW5pbWF0aW9uID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKSB7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cblx0XHRpZiAod2lkdGggPiAwKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVyV2lkdGgod2lkdGgpO1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogV2hlbiBndWktZ3JpZCBpcyBpbiBkeW5hbWljIGNvbnRhaW5lciB3aGljaCBpcyBjcmVhdGVkIGxhdGVyIHRoZW4gZ3JpZC5cblx0XHRcdCAqL1xuXHRcdFx0dGltZXIoMClcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXG5cdFx0XHRcdFx0d2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcblxuXHRcdFx0XHRcdGlmICh3aWR0aCA+IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb250YWluZXJXaWR0aCh3aWR0aCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHR0aGlzLnNjaGVtYVN0eWxlc01hbmFnZXJcblx0XHRcdC5pbml0KHRoaXMuZWxlbWVudFJlZiwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uUXVlcnlTZXJ2aWNlXG5cdFx0XHQub25XaWR0aCgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgod2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCB3aWR0aCArICdweCcpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRpc0JvcmRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlRGVmaW5pdGlvbi5pc0JvcmRlckVuYWJsZWQoKSAmJiB0aGlzLnN0cnVjdHVyZS5pc1JlYWR5VG9EaXNwbGF5KCk7XG5cdH1cblxuXHRnZXRTdHJ1Y3R1cmVJZCgpOiBTdHJ1Y3R1cmVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlSWQ7XG5cdH1cblxufVxuIl19