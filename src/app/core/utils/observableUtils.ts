import {takeWhile} from 'rxjs/operators';
import {Observable, Subscription, timer} from 'rxjs';

export function getObservable(dueTime: number, period: number, predicate: boolean): Observable<number> {
  return timer(dueTime, period)
    .pipe(takeWhile(() => predicate));
}

export function unsubscribeObservable(subscription: Subscription): void {
  subscription.unsubscribe();
}
