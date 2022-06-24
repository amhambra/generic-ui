import { TranslationFacade } from '../api/translation.facade';
import { enTranslation } from './lang/en';
import { Dictionary } from './dictionary';
import { HermesReplaySubject } from '@generic-ui/hermes';
export class TranslationDomainFacade extends TranslationFacade {
    constructor() {
        super();
        this.defaultTranslation = enTranslation;
        this.dictionary = new Dictionary();
        this.dictionary$ = new HermesReplaySubject(1);
    }
    getTranslation() {
        return this.dictionary.getTranslation();
    }
    onTranslation() {
        return this.dictionary$.toObservable();
    }
    setDefaultTranslation() {
        this.changeTranslationAndPropagate(this.defaultTranslation);
    }
    changeTranslation(change) {
        this.changeTranslationAndPropagate(change);
    }
    setResolver(resolver) {
        this.setResolverAndPropagate(resolver);
    }
    changeTranslationAndPropagate(change) {
        this.dictionary.changeTranslation(change);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
    setResolverAndPropagate(resolver) {
        this.dictionary.setResolver(resolver);
        this.dictionary$.next(this.dictionary.getTranslation());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uZG9tYWluLWZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvY29yZS9sMTBuL2RvbWFpbi90cmFuc2xhdGlvbi5kb21haW4tZmFjYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDMUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUMxQyxPQUFPLEVBQW9CLG1CQUFtQixFQUFpQixNQUFNLG9CQUFvQixDQUFDO0FBRzFGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxpQkFBaUI7SUFRN0Q7UUFDQyxLQUFLLEVBQUUsQ0FBQztRQVBRLHVCQUFrQixHQUFnQixhQUFhLENBQUM7UUFFaEQsZUFBVSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7UUFFMUMsZ0JBQVcsR0FBK0IsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUl0RixDQUFDO0lBRUQsY0FBYztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQscUJBQXFCO1FBQ3BCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsTUFBeUI7UUFDMUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBZ0Q7UUFDM0QsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTyw2QkFBNkIsQ0FBQyxNQUF1QztRQUU1RSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU8sdUJBQXVCLENBQUMsUUFBZ0Q7UUFFL0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0aW9uRmFjYWRlIH0gZnJvbSAnLi4vYXBpL3RyYW5zbGF0aW9uLmZhY2FkZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbiB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNoYW5nZSB9IGZyb20gJy4uL2FwaS90cmFuc2xhdGlvbi1jaGFuZ2UnO1xuaW1wb3J0IHsgZW5UcmFuc2xhdGlvbiB9IGZyb20gJy4vbGFuZy9lbic7XG5pbXBvcnQgeyBEaWN0aW9uYXJ5IH0gZnJvbSAnLi9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIEhlcm1lc1JlcGxheVN1YmplY3QsIEhlcm1lc1N1YmplY3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGlvbkRvbWFpbkZhY2FkZSBleHRlbmRzIFRyYW5zbGF0aW9uRmFjYWRlIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRUcmFuc2xhdGlvbjogVHJhbnNsYXRpb24gPSBlblRyYW5zbGF0aW9uO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZGljdGlvbmFyeTogRGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5KCk7XG5cblx0cHJpdmF0ZSByZWFkb25seSBkaWN0aW9uYXJ5JDogSGVybWVzU3ViamVjdDxUcmFuc2xhdGlvbj4gPSBuZXcgSGVybWVzUmVwbGF5U3ViamVjdCgxKTtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRpb24oKTogVHJhbnNsYXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkuZ2V0VHJhbnNsYXRpb24oKTtcblx0fVxuXG5cdG9uVHJhbnNsYXRpb24oKTogSGVybWVzT2JzZXJ2YWJsZTxUcmFuc2xhdGlvbj4ge1xuXHRcdHJldHVybiB0aGlzLmRpY3Rpb25hcnkkLnRvT2JzZXJ2YWJsZSgpO1xuXHR9XG5cblx0c2V0RGVmYXVsdFRyYW5zbGF0aW9uKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUodGhpcy5kZWZhdWx0VHJhbnNsYXRpb24pO1xuXHR9XG5cblx0Y2hhbmdlVHJhbnNsYXRpb24oY2hhbmdlOiBUcmFuc2xhdGlvbkNoYW5nZSk6IHZvaWQge1xuXHRcdHRoaXMuY2hhbmdlVHJhbnNsYXRpb25BbmRQcm9wYWdhdGUoY2hhbmdlKTtcblx0fVxuXG5cdHNldFJlc29sdmVyKHJlc29sdmVyOiAoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHN0cmluZyk6IHZvaWQge1xuXHRcdHRoaXMuc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXIpO1xuXHR9XG5cblx0cHJpdmF0ZSBjaGFuZ2VUcmFuc2xhdGlvbkFuZFByb3BhZ2F0ZShjaGFuZ2U6IFRyYW5zbGF0aW9uQ2hhbmdlIHwgVHJhbnNsYXRpb24pOiB2b2lkIHtcblxuXHRcdHRoaXMuZGljdGlvbmFyeS5jaGFuZ2VUcmFuc2xhdGlvbihjaGFuZ2UpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxuXG5cdHByaXZhdGUgc2V0UmVzb2x2ZXJBbmRQcm9wYWdhdGUocmVzb2x2ZXI6IChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gc3RyaW5nKTogdm9pZCB7XG5cblx0XHR0aGlzLmRpY3Rpb25hcnkuc2V0UmVzb2x2ZXIocmVzb2x2ZXIpO1xuXG5cdFx0dGhpcy5kaWN0aW9uYXJ5JC5uZXh0KHRoaXMuZGljdGlvbmFyeS5nZXRUcmFuc2xhdGlvbigpKTtcblx0fVxufVxuIl19