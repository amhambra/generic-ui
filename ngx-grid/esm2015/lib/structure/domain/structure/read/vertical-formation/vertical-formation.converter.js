/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { VerticalFormationReadModel } from './vertical-formation.read-model';
export class VerticalFormationConverter {
    /**
     * @param {?} verticalFormation
     * @return {?}
     */
    convert(verticalFormation) {
        /** @type {?} */
        const enabled = verticalFormation.isEnabled();
        /** @type {?} */
        const topMargin = verticalFormation.getTopMargin();
        /** @type {?} */
        const containerHeight = verticalFormation.calcFullHeight();
        /** @type {?} */
        const viewportHeight = verticalFormation.getViewPortHeight();
        return new VerticalFormationReadModel(enabled, topMargin, containerHeight, viewportHeight);
    }
}
VerticalFormationConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3JlYWQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbi5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJN0UsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFdEMsT0FBTyxDQUFDLGlCQUFvQzs7Y0FFckMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsRUFBRTs7Y0FDNUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFlBQVksRUFBRTs7Y0FDNUMsZUFBZSxHQUFHLGlCQUFpQixDQUFDLGNBQWMsRUFBRTs7Y0FDcEQsY0FBYyxHQUFHLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO1FBRXZELE9BQU8sSUFBSSwwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM1RixDQUFDOzs7WUFYRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2NvbW1hbmQvdmVydGljYWwtZm9ybWF0aW9uL3ZlcnRpY2FsLWZvcm1hdGlvbic7XG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbEZvcm1hdGlvbkNvbnZlcnRlciB7XG5cblx0Y29udmVydCh2ZXJ0aWNhbEZvcm1hdGlvbjogVmVydGljYWxGb3JtYXRpb24pOiBWZXJ0aWNhbEZvcm1hdGlvblJlYWRNb2RlbCB7XG5cblx0XHRjb25zdCBlbmFibGVkID0gdmVydGljYWxGb3JtYXRpb24uaXNFbmFibGVkKCksXG5cdFx0XHR0b3BNYXJnaW4gPSB2ZXJ0aWNhbEZvcm1hdGlvbi5nZXRUb3BNYXJnaW4oKSxcblx0XHRcdGNvbnRhaW5lckhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmNhbGNGdWxsSGVpZ2h0KCksXG5cdFx0XHR2aWV3cG9ydEhlaWdodCA9IHZlcnRpY2FsRm9ybWF0aW9uLmdldFZpZXdQb3J0SGVpZ2h0KCk7XG5cblx0XHRyZXR1cm4gbmV3IFZlcnRpY2FsRm9ybWF0aW9uUmVhZE1vZGVsKGVuYWJsZWQsIHRvcE1hcmdpbiwgY29udGFpbmVySGVpZ2h0LCB2aWV3cG9ydEhlaWdodCk7XG5cdH1cblxufVxuIl19