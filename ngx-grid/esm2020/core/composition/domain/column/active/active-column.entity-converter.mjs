import { ActiveColumnEntity } from './active-column.entity';
export class ActiveColumnEntityConverter {
    convertMany(entities) {
        return entities.map(e => this.convert(e));
    }
    convert(entity) {
        return ActiveColumnEntity.fromEntity(entity);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWNvbHVtbi5lbnRpdHktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9jb3JlL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vYWN0aXZlL2FjdGl2ZS1jb2x1bW4uZW50aXR5LWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUc1RCxNQUFNLE9BQU8sMkJBQTJCO0lBRXZDLFdBQVcsQ0FBQyxRQUE2QjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxNQUFvQjtRQUUzQixPQUFPLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmVDb2x1bW5FbnRpdHkgfSBmcm9tICcuL2FjdGl2ZS1jb2x1bW4uZW50aXR5JztcbmltcG9ydCB7IENvbHVtbkVudGl0eSB9IGZyb20gJy4uL2NvbHVtbi5lbnRpdHknO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZlQ29sdW1uRW50aXR5Q29udmVydGVyIHtcblxuXHRjb252ZXJ0TWFueShlbnRpdGllczogQXJyYXk8Q29sdW1uRW50aXR5Pik6IEFycmF5PEFjdGl2ZUNvbHVtbkVudGl0eT4ge1xuXHRcdHJldHVybiBlbnRpdGllcy5tYXAoZSA9PiB0aGlzLmNvbnZlcnQoZSkpO1xuXHR9XG5cblx0Y29udmVydChlbnRpdHk6IENvbHVtbkVudGl0eSk6IEFjdGl2ZUNvbHVtbkVudGl0eSB7XG5cblx0XHRyZXR1cm4gQWN0aXZlQ29sdW1uRW50aXR5LmZyb21FbnRpdHkoZW50aXR5KTtcblx0fVxuXG5cbn1cbiJdfQ==