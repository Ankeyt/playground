import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';

/*
  Take Operator

  The `take` operator emits only the first `count` values emitted by the source Observable.
  After emitting `count` values, it completes, and unsubscribes from the source Observable.
  This is useful for limiting the number of emissions from an Observable.
*/

// Example 1: Taking a specific number of values from a finite observable
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log('--- Example 1: Taking 3 values from a finite observable ---');
numbers$.pipe(
  take(3) // Emits only the first 3 values (1, 2, 3)
).subscribe({
  next: (val) => {
    console.log(`Taken value: ${val}`);
  },
  error: (error) => {
    console.log('Take error:', error);
  },
  complete: () => {
    console.log('Take example 1 completed.');
  }
});

// Example 2: Taking a specific number of values from an infinite observable
// `interval` emits sequential numbers every specified time interval (in milliseconds).
const infiniteNumbers$ = interval(500); // Emits 0, 1, 2, ... every 500ms

console.log('\n--- Example 2: Taking 5 values from an infinite observable ---');
infiniteNumbers$.pipe(
  take(5) // Emits the first 5 values (0, 1, 2, 3, 4) and then completes
).subscribe({
  next: (val) => {
    console.log(`Taken interval value: ${val}`);
  },
  error: (error) => {
    console.log('Take interval error:', error);
  },
  complete: () => {
    console.log('Take example 2 completed.');
  }
});