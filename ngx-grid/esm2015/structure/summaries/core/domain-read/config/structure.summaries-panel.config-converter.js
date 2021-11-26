import { Injectable } from '@angular/core';
import { StructureSummariesPanelConfig } from '../../domain/config/structure.summaries-panel.config';
export class StructureSummariesPanelConfigConverter {
    convert(config) {
        const panelConfig = new StructureSummariesPanelConfig();
        if (config.top !== undefined && config.top !== null) {
            panelConfig.setTop(config.top);
        }
        if (config.bottom !== undefined && config.bottom !== null) {
            panelConfig.setBottom(config.bottom);
        }
        return panelConfig;
    }
}
StructureSummariesPanelConfigConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWctY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYnVpbGQtY2xpL3Byb2plY3RzL25neC1ncmlkL3NyYy9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvZG9tYWluLXJlYWQvY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBTXJHLE1BQU0sT0FBTyxzQ0FBc0M7SUFFbEQsT0FBTyxDQUFDLE1BQXVCO1FBRTlCLE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQTZCLEVBQUUsQ0FBQztRQUV4RCxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ3BELFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtZQUMxRCxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sV0FBVyxDQUFDO0lBQ3BCLENBQUM7OztZQWhCRCxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1wYW5lbC5jb25maWcnO1xuXG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnKTogU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcge1xuXG5cdFx0Y29uc3QgcGFuZWxDb25maWcgPSBuZXcgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWcoKTtcblxuXHRcdGlmIChjb25maWcudG9wICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnRvcCAhPT0gbnVsbCkge1xuXHRcdFx0cGFuZWxDb25maWcuc2V0VG9wKGNvbmZpZy50b3ApO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcuYm90dG9tICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLmJvdHRvbSAhPT0gbnVsbCkge1xuXHRcdFx0cGFuZWxDb25maWcuc2V0Qm90dG9tKGNvbmZpZy5ib3R0b20pO1xuXHRcdH1cblxuXHRcdHJldHVybiBwYW5lbENvbmZpZztcblx0fVxufVxuIl19