import { StructureCommand } from '../../../core/domain/structure.command';
export class SetSelectionModeCommand extends StructureCommand {
    constructor(structureId, mode) {
        super(structureId, 'SetSelectionModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWxpc3Qvc3JjL2NvcmUvc3RydWN0dXJlL2Zvcm1hdGlvbi9kb21haW4vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUUxRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBRTVELFlBQVksV0FBd0IsRUFDaEIsSUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRDNCLFNBQUksR0FBSixJQUFJLENBQWtCO0lBRTFDLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3Rpb25Nb2RlIH0gZnJvbSAnLi4vLi4vYXBpL3Jvdy1zZWxlY3RlZC9yb3ctc2VsZWN0aW9uJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBtb2RlOiBSb3dTZWxlY3Rpb25Nb2RlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRTZWxlY3Rpb25Nb2RlQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0TW9kZSgpOiBSb3dTZWxlY3Rpb25Nb2RlIHtcblx0XHRyZXR1cm4gdGhpcy5tb2RlO1xuXHR9XG5cbn1cbiJdfQ==