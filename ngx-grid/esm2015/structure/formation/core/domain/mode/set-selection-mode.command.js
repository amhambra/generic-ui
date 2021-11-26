import { StructureCommand } from '../../../../core/domain/structure.command';
export class SetSelectionModeCommand extends StructureCommand {
    constructor(structureId, mode) {
        super(structureId, 'SetSelectionModeCommand');
        this.mode = mode;
    }
    getMode() {
        return this.mode;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNlbGVjdGlvbi1tb2RlLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9mb3JtYXRpb24vY29yZS9kb21haW4vbW9kZS9zZXQtc2VsZWN0aW9uLW1vZGUuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUU3RSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZ0JBQWdCO0lBRTVELFlBQVksV0FBd0IsRUFDaEIsSUFBc0I7UUFDekMsS0FBSyxDQUFDLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRDNCLFNBQUksR0FBSixJQUFJLENBQWtCO0lBRTFDLENBQUM7SUFFRCxPQUFPO1FBQ04sT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7Q0FFRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFJvd1NlbGVjdGlvbk1vZGUgfSBmcm9tICcuLi8uLi9hcGkvcm93LXNlbGVjdGVkL3Jvdy1zZWxlY3Rpb24nO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIFNldFNlbGVjdGlvbk1vZGVDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IG1vZGU6IFJvd1NlbGVjdGlvbk1vZGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFNlbGVjdGlvbk1vZGVDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRNb2RlKCk6IFJvd1NlbGVjdGlvbk1vZGUge1xuXHRcdHJldHVybiB0aGlzLm1vZGU7XG5cdH1cblxufVxuIl19