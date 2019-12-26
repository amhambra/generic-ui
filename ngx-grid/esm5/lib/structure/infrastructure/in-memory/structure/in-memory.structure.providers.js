/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InMemoryStructureAggregateStore } from './commad/in-memory.structure.aggregate-store';
import { InMemoryStructureAggregateRepository } from './commad/in-memory.structure-aggregate.repository';
import { StructureAggregateRepository } from '../../../domain/structure/command/structure-aggregate.repository';
import { InMemoryStructureReadStore } from './read/in-memory-structure.read-store';
import { StructureRepository } from '../../../domain/structure/read/structure.repository';
import { InMemoryStructureRepository } from './read/in-memory.structure.repository';
import { InMemoryStructureStore } from './in-memory.structure.store';
/** @type {?} */
export var inMemoryStructureCommandProviders = [
    InMemoryStructureAggregateStore,
    {
        provide: StructureAggregateRepository,
        useClass: InMemoryStructureAggregateRepository
    },
];
/** @type {?} */
export var inMemoryStructureReadProviders = [
    InMemoryStructureReadStore,
    {
        provide: StructureRepository,
        useClass: InMemoryStructureRepository
    }
];
/** @type {?} */
export var inMemoryStructureProviders = [
    InMemoryStructureStore
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3N0cnVjdHVyZS9pbi1tZW1vcnkuc3RydWN0dXJlLnByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFL0YsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDekcsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sa0VBQWtFLENBQUM7QUFDaEgsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBRXJFLE1BQU0sS0FBTyxpQ0FBaUMsR0FBRztJQUNoRCwrQkFBK0I7SUFDL0I7UUFDQyxPQUFPLEVBQUUsNEJBQTRCO1FBQ3JDLFFBQVEsRUFBRSxvQ0FBb0M7S0FDOUM7Q0FDRDs7QUFFRCxNQUFNLEtBQU8sOEJBQThCLEdBQUc7SUFDN0MsMEJBQTBCO0lBQzFCO1FBQ0MsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUsMkJBQTJCO0tBQ3JDO0NBQ0Q7O0FBRUQsTUFBTSxLQUFPLDBCQUEwQixHQUFHO0lBQ3pDLHNCQUFzQjtDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgfSBmcm9tICcuL2NvbW1hZC9pbi1tZW1vcnkuc3RydWN0dXJlLmFnZ3JlZ2F0ZS1zdG9yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4vY29tbWFkL2luLW1lbW9yeS5zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvY29tbWFuZC9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgfSBmcm9tICcuL3JlYWQvaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc3RydWN0dXJlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVSZXBvc2l0b3J5IH0gZnJvbSAnLi9yZWFkL2luLW1lbW9yeS5zdHJ1Y3R1cmUucmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc3RydWN0dXJlLnN0b3JlJztcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5U3RydWN0dXJlQ29tbWFuZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlTdHJ1Y3R1cmVBZ2dyZWdhdGVTdG9yZSxcblx0e1xuXHRcdHByb3ZpZGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0dXNlQ2xhc3M6IEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlUmVwb3NpdG9yeVxuXHR9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5U3RydWN0dXJlUmVhZFByb3ZpZGVycyA9IFtcblx0SW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUsXG5cdHtcblx0XHRwcm92aWRlOiBTdHJ1Y3R1cmVSZXBvc2l0b3J5LFxuXHRcdHVzZUNsYXNzOiBJbk1lbW9yeVN0cnVjdHVyZVJlcG9zaXRvcnlcblx0fVxuXTtcblxuZXhwb3J0IGNvbnN0IGluTWVtb3J5U3RydWN0dXJlUHJvdmlkZXJzID0gW1xuXHRJbk1lbW9yeVN0cnVjdHVyZVN0b3JlXG5dO1xuIl19