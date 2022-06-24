export function checkInput(prop) {
    return {
        isChanged: () => {
            return hasChanged(prop);
        },
        ifChanged: (callback) => {
            if (hasChanged(prop)) {
                callback();
            }
        }
    };
}
export function ifChanged(prop, callback) {
    if (hasChanged(prop)) {
        callback(prop.currentValue);
    }
}
export function hasChanged(prop) {
    return prop !== undefined && prop.currentValue !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL2ZlYXR1cmUvY29tbW9uL2Nkay9jb21wb25lbnQvY2hlY2suaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsTUFBTSxVQUFVLFVBQVUsQ0FBSSxJQUFnQjtJQUU3QyxPQUFPO1FBQ04sU0FBUyxFQUFFLEdBQUcsRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFvQixFQUFFLEVBQUU7WUFDbkMsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLFFBQVEsRUFBRSxDQUFDO2FBQ1g7UUFDRixDQUFDO0tBQ2UsQ0FBQztBQUVuQixDQUFDO0FBRUQsTUFBTSxVQUFVLFNBQVMsQ0FBSSxJQUFnQixFQUFFLFFBQThCO0lBQzVFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDNUI7QUFDRixDQUFDO0FBRUQsTUFBTSxVQUFVLFVBQVUsQ0FBSSxJQUFnQjtJQUM3QyxPQUFPLElBQUksS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxTQUFTLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZXMgfSBmcm9tICcuL25nLWNoYW5nZXMnO1xuXG5pbnRlcmZhY2UgSW5wdXRDaGFuZ2VzIHtcblxuXHRpc0NoYW5nZWQoKTogYm9vbGVhbjtcblxuXHRpZkNoYW5nZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja0lucHV0PFQ+KHByb3A6IENoYW5nZXM8VD4pOiBJbnB1dENoYW5nZXMge1xuXG5cdHJldHVybiB7XG5cdFx0aXNDaGFuZ2VkOiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gaGFzQ2hhbmdlZChwcm9wKTtcblx0XHR9LFxuXHRcdGlmQ2hhbmdlZDogKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG5cdFx0XHRpZiAoaGFzQ2hhbmdlZChwcm9wKSkge1xuXHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBhcyBJbnB1dENoYW5nZXM7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlmQ2hhbmdlZDxUPihwcm9wOiBDaGFuZ2VzPFQ+LCBjYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcblx0aWYgKGhhc0NoYW5nZWQocHJvcCkpIHtcblx0XHRjYWxsYmFjayhwcm9wLmN1cnJlbnRWYWx1ZSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NoYW5nZWQ8VD4ocHJvcDogQ2hhbmdlczxUPikge1xuXHRyZXR1cm4gcHJvcCAhPT0gdW5kZWZpbmVkICYmIHByb3AuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG4iXX0=