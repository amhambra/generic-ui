import { CompositionCommand } from '../../composition.command';
export class SetCompositionWidthCommand extends CompositionCommand {
    constructor(structureId, width) {
        super(structureId, 'SetCompositionWidthCommand');
        this.structureId = structureId;
        this.width = width;
    }
    getWidth() {
        return this.width;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbXBvc2l0aW9uLXdpZHRoLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vZG9tYWluL3dpZHRoL3NldC13aWR0aC9zZXQtY29tcG9zaXRpb24td2lkdGguY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcvRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsa0JBQWtCO0lBRWpFLFlBQTZCLFdBQXdCLEVBQ2pDLEtBQWE7UUFDaEMsS0FBSyxDQUFDLFdBQVcsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO1FBRnJCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2pDLFVBQUssR0FBTCxLQUFLLENBQVE7SUFFakMsQ0FBQztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvZ2xvYmFsL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29tcG9zaXRpb25XaWR0aENvbW1hbmQgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldENvbXBvc2l0aW9uV2lkdGhDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRXaWR0aCgpOiBudW1iZXIge1xuXHRcdHJldHVybiB0aGlzLndpZHRoO1xuXHR9XG5cbn1cbiJdfQ==