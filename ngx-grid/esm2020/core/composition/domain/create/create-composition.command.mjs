import { CompositionCommand } from '../composition.command';
export class CreateCompositionCommand extends CompositionCommand {
    constructor(compositionId) {
        super(compositionId, 'CreateCompositionCommand');
        this.compositionId = compositionId;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNvbXBvc2l0aW9uLmNvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2NvcmUvY29tcG9zaXRpb24vZG9tYWluL2NyZWF0ZS9jcmVhdGUtY29tcG9zaXRpb24uY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsa0JBQWtCO0lBRS9ELFlBQTZCLGFBQTRCO1FBQ3hELEtBQUssQ0FBQyxhQUFhLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQURyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUV6RCxDQUFDO0NBRUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vYXBpL2dsb2JhbC9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ3JlYXRlQ29tcG9zaXRpb25Db21tYW5kJyk7XG5cdH1cblxufVxuIl19