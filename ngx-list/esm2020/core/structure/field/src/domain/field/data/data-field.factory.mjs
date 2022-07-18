import { DataType } from './data-type';
import { UnknownDataField } from './type/unknown-data-field';
import { NumberDataField } from './type/number-data-field';
import { StringDataField } from './type/string-data-field';
import { BooleanDataField } from './type/boolean-data-field';
import { DateDataField } from './type/date-data-field';
import { FieldMatchers } from '../../matcher/field.matchers';
export class DataFieldFactory {
    create(fieldConfig) {
        const fieldMatchers = this.createMatchers(fieldConfig);
        let columnType = fieldConfig.type;
        if (columnType === undefined) {
            columnType = DataType.STRING;
        }
        if (columnType === DataType.UNKNOWN) {
            return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.NUMBER) {
            return new NumberDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
        }
        if (columnType === DataType.STRING) {
            return new StringDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.BOOLEAN) {
            return new BooleanDataField(fieldConfig.field, fieldMatchers);
        }
        if (columnType === DataType.DATE) {
            return new DateDataField(fieldConfig.field, fieldMatchers);
        }
        return new UnknownDataField(fieldConfig.field, fieldMatchers, fieldConfig.summaries);
    }
    createMatchers(fieldConfig) {
        const matcher = fieldConfig.matcher;
        let sortMatcher;
        if (fieldConfig.sorting) {
            sortMatcher = fieldConfig.sorting.matcher;
        }
        return new FieldMatchers(matcher, sortMatcher);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1maWVsZC5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1saXN0L3NyYy9jb3JlL3N0cnVjdHVyZS9maWVsZC9zcmMvZG9tYWluL2ZpZWxkL2RhdGEvZGF0YS1maWVsZC5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSzdELE1BQU0sT0FBTyxnQkFBZ0I7SUFFNUIsTUFBTSxDQUFDLFdBQXdCO1FBRTlCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFdkQsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztRQUVsQyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDN0IsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDN0I7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBZSxFQUFFLGFBQWEsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0Y7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlGO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLElBQUksZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDdkU7UUFFRCxJQUFJLFVBQVUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSSxVQUFVLEtBQUssUUFBUSxDQUFDLElBQUksRUFBRTtZQUNqQyxPQUFPLElBQUksYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDckU7UUFFRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQWUsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTyxjQUFjLENBQUMsV0FBd0I7UUFFOUMsTUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQztRQUNwQyxJQUFJLFdBQVcsQ0FBQztRQUVoQixJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsV0FBVyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzFDO1FBRUQsT0FBTyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBVbmtub3duRGF0YUZpZWxkIH0gZnJvbSAnLi90eXBlL3Vua25vd24tZGF0YS1maWVsZCc7XG5pbXBvcnQgeyBOdW1iZXJEYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvbnVtYmVyLWRhdGEtZmllbGQnO1xuaW1wb3J0IHsgU3RyaW5nRGF0YUZpZWxkIH0gZnJvbSAnLi90eXBlL3N0cmluZy1kYXRhLWZpZWxkJztcbmltcG9ydCB7IEJvb2xlYW5EYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvYm9vbGVhbi1kYXRhLWZpZWxkJztcbmltcG9ydCB7IERhdGVEYXRhRmllbGQgfSBmcm9tICcuL3R5cGUvZGF0ZS1kYXRhLWZpZWxkJztcbmltcG9ydCB7IEZpZWxkTWF0Y2hlcnMgfSBmcm9tICcuLi8uLi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzJztcbmltcG9ydCB7IERhdGFGaWVsZFR5cGVzIH0gZnJvbSAnLi9kYXRhLWZpZWxkLXR5cGVzJztcbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbmZpZy9maWVsZC5jb25maWcnO1xuXG5cbmV4cG9ydCBjbGFzcyBEYXRhRmllbGRGYWN0b3J5IHtcblxuXHRjcmVhdGUoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnKTogRGF0YUZpZWxkVHlwZXMge1xuXG5cdFx0Y29uc3QgZmllbGRNYXRjaGVycyA9IHRoaXMuY3JlYXRlTWF0Y2hlcnMoZmllbGRDb25maWcpO1xuXG5cdFx0bGV0IGNvbHVtblR5cGUgPSBmaWVsZENvbmZpZy50eXBlO1xuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y29sdW1uVHlwZSA9IERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuVU5LTk9XTikge1xuXHRcdFx0cmV0dXJuIG5ldyBVbmtub3duRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycywgZmllbGRDb25maWcuc3VtbWFyaWVzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuTlVNQkVSKSB7XG5cdFx0XHRyZXR1cm4gbmV3IE51bWJlckRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0cmV0dXJuIG5ldyBTdHJpbmdEYXRhRmllbGQoZmllbGRDb25maWcuZmllbGQgYXMgc3RyaW5nLCBmaWVsZE1hdGNoZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoY29sdW1uVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0cmV0dXJuIG5ldyBCb29sZWFuRGF0YUZpZWxkKGZpZWxkQ29uZmlnLmZpZWxkIGFzIHN0cmluZywgZmllbGRNYXRjaGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbHVtblR5cGUgPT09IERhdGFUeXBlLkRBVEUpIHtcblx0XHRcdHJldHVybiBuZXcgRGF0ZURhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMpO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgVW5rbm93bkRhdGFGaWVsZChmaWVsZENvbmZpZy5maWVsZCBhcyBzdHJpbmcsIGZpZWxkTWF0Y2hlcnMsIGZpZWxkQ29uZmlnLnN1bW1hcmllcyk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZU1hdGNoZXJzKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZyk6IEZpZWxkTWF0Y2hlcnMge1xuXG5cdFx0Y29uc3QgbWF0Y2hlciA9IGZpZWxkQ29uZmlnLm1hdGNoZXI7XG5cdFx0bGV0IHNvcnRNYXRjaGVyO1xuXG5cdFx0aWYgKGZpZWxkQ29uZmlnLnNvcnRpbmcpIHtcblx0XHRcdHNvcnRNYXRjaGVyID0gZmllbGRDb25maWcuc29ydGluZy5tYXRjaGVyO1xuXHRcdH1cblxuXHRcdHJldHVybiBuZXcgRmllbGRNYXRjaGVycyhtYXRjaGVyLCBzb3J0TWF0Y2hlcik7XG5cdH1cblxufVxuIl19