import { from, of, interval, Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

// 1. from: Creates an observable from an array, promise, or iterable.
const source1 = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 2. filter: Filters items emitted by the source observable.
const evenNumbers = source1.pipe(filter(num => num % 2 === 0));

// 3. map: Applies a given project function to each value emitted by the source observable.
const squaredNumbers = evenNumbers.pipe(map(num => num * num));

// 4. take: Emits only the first count values emitted by the source observable.
const firstThree = squaredNumbers.pipe(take(3));

firstThree.subscribe(console.log);


// 5. of: Emits a variable number of values in a sequence and then emits a complete notification.
const source2 = of('Hello', 'World');
source2.subscribe(console.log);


// 6. interval: Creates an observable that emits sequential numbers every specified interval of time.
const source3 = interval(1000).pipe(take(5)); // emit numbers every second, take the first 5
source3.subscribe(console.log);


// 7. Observable: A custom observable
const source4 = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});
source4.subscribe(console.log);
