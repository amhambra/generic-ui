import { HermesSubscriber } from './hermes.subscriber';
export declare class HermesSingleSubscriber<T> extends HermesSubscriber<T> {
    next(value: T): void;
}
