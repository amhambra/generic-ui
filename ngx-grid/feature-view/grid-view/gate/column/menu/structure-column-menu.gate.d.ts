import { OnChanges } from '@angular/core';
import { ColumnMenuConfig } from '../../../../../core/structure/core/api/config/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../../../header/menu/config/structure.column-menu-config.archive';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureColumnMenuGate extends Gate implements OnChanges {
    private readonly structureColumnMenuConfigArchive;
    columnMenu: ColumnMenuConfig;
    constructor(structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive);
    ngOnChanges(changes: NgChanges<StructureColumnMenuGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnMenuGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureColumnMenuGate, "gui-structure[columnMenu]", never, { "columnMenu": "columnMenu"; }, {}, never>;
}
