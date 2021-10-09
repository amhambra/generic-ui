import { HermesOperatorFunction } from '../observable/hermes.observable';
export declare function hermesFilter<T>(operation: (value: any) => boolean): HermesOperatorFunction<T, T>;
