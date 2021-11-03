import { Injectable } from '@angular/core';
import { Logger } from '../../../../common/cdk/logger/logger';
import { VerticalFormation } from './vertical-formation';
export class VerticalFormationFactory {
    constructor(logger) {
        this.logger = logger;
    }
    create(structureId, enabled = false, viewportHeight = -1, sourceSize = 0, scrollPosition = 0, rowHeight, hiddenItemsTop, hiddenItemsBottom) {
        const vf = new VerticalFormation(structureId, enabled, viewportHeight, sourceSize, scrollPosition, rowHeight, hiddenItemsTop, hiddenItemsBottom);
        vf.setLogger(this.logger);
        return vf;
    }
}
VerticalFormationFactory.decorators = [
    { type: Injectable }
];
VerticalFormationFactory.ctorParameters = () => [
    { type: Logger }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL3N0cnVjdHVyZS92ZXJ0aWNhbC1mb3JtYXRpb24vY29yZS9kb21haW4vdmVydGljYWwtZm9ybWF0aW9uLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFLekQsTUFBTSxPQUFPLHdCQUF3QjtJQUVwQyxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNsQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFdBQXdCLEVBQzNCLFVBQW1CLEtBQUssRUFDeEIsaUJBQXlCLENBQUMsQ0FBQyxFQUMzQixhQUFxQixDQUFDLEVBQ3RCLGlCQUF5QixDQUFDLEVBQzFCLFNBQWtCLEVBQ2xCLGNBQXVCLEVBQ3ZCLGlCQUEwQjtRQUU3QixNQUFNLEVBQUUsR0FBRyxJQUFJLGlCQUFpQixDQUMvQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxVQUFVLEVBQ1YsY0FBYyxFQUNkLFNBQVMsRUFDVCxjQUFjLEVBQ2QsaUJBQWlCLENBQ2pCLENBQUM7UUFFRixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUxQixPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7OztZQTdCRCxVQUFVOzs7WUFORixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21tb24vY2RrL2xvZ2dlci9sb2dnZXInO1xuXG5pbXBvcnQgeyBWZXJ0aWNhbEZvcm1hdGlvbiB9IGZyb20gJy4vdmVydGljYWwtZm9ybWF0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmVydGljYWxGb3JtYXRpb25GYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogTG9nZ2VyKSB7XG5cdH1cblxuXHRjcmVhdGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdCAgIGVuYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZSxcblx0XHQgICB2aWV3cG9ydEhlaWdodDogbnVtYmVyID0gLTEsXG5cdFx0ICAgc291cmNlU2l6ZTogbnVtYmVyID0gMCxcblx0XHQgICBzY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMCxcblx0XHQgICByb3dIZWlnaHQ/OiBudW1iZXIsXG5cdFx0ICAgaGlkZGVuSXRlbXNUb3A/OiBudW1iZXIsXG5cdFx0ICAgaGlkZGVuSXRlbXNCb3R0b20/OiBudW1iZXIpOiBWZXJ0aWNhbEZvcm1hdGlvbiB7XG5cblx0XHRjb25zdCB2ZiA9IG5ldyBWZXJ0aWNhbEZvcm1hdGlvbihcblx0XHRcdHN0cnVjdHVyZUlkLFxuXHRcdFx0ZW5hYmxlZCxcblx0XHRcdHZpZXdwb3J0SGVpZ2h0LFxuXHRcdFx0c291cmNlU2l6ZSxcblx0XHRcdHNjcm9sbFBvc2l0aW9uLFxuXHRcdFx0cm93SGVpZ2h0LFxuXHRcdFx0aGlkZGVuSXRlbXNUb3AsXG5cdFx0XHRoaWRkZW5JdGVtc0JvdHRvbVxuXHRcdCk7XG5cblx0XHR2Zi5zZXRMb2dnZXIodGhpcy5sb2dnZXIpO1xuXG5cdFx0cmV0dXJuIHZmO1xuXHR9XG5cbn1cbiJdfQ==