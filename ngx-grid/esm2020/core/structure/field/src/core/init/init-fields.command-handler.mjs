import { InitFieldsCommand } from './init-fields.command';
export class InitFieldsCommandHandler {
    forCommand() {
        return InitFieldsCommand;
    }
    handle(structure, command) {
        const fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvY29yZS9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUsxRCxNQUFNLE9BQU8sd0JBQXdCO0lBRXBDLFVBQVU7UUFDVCxPQUFPLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFFRCxNQUFNLENBQUMsU0FBNkIsRUFBRSxPQUEwQjtRQUUvRCxNQUFNLFlBQVksR0FBdUIsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRW5FLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5pdEZpZWxkc0NvbW1hbmQgfSBmcm9tICcuL2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWNvcmUvc3JjL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBJbml0RmllbGRzQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIEluaXRGaWVsZHNDb21tYW5kPiB7XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxJbml0RmllbGRzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBJbml0RmllbGRzQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogSW5pdEZpZWxkc0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+ID0gY29tbWFuZC5nZXRGaWVsZENvbmZpZ3MoKTtcblxuXHRcdHN0cnVjdHVyZS5jcmVhdGVGaWVsZHMoZmllbGRDb25maWdzKTtcblx0fVxuXG59XG4iXX0=