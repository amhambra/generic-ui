import { StructureCommand } from '../../../core/domain/structure.command';
export class InitFieldsCommand extends StructureCommand {
    constructor(structureId, fieldConfigs) {
        super(structureId, 'InitFieldsCommand');
        this.fieldConfigs = fieldConfigs;
    }
    getFieldConfigs() {
        return this.fieldConfigs;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9zdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUcxRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsZ0JBQWdCO0lBRXRELFlBQVksV0FBd0IsRUFDaEIsWUFBZ0M7UUFDbkQsS0FBSyxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtJQUVwRCxDQUFDO0lBRUQsZUFBZTtRQUNkLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2dsb2JhbC9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvY29uZmlnL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBJbml0RmllbGRzQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnSW5pdEZpZWxkc0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldEZpZWxkQ29uZmlncygpOiBBcnJheTxGaWVsZENvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkQ29uZmlncztcblx0fVxuXG59XG4iXX0=