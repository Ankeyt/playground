import { from } from 'rxjs';
import { filter } from 'rxjs/operators';

/*
  Filter Operator

  The `filter` operator emits only those values from the source Observable that satisfy a specified predicate.
  It's analogous to the `filter` method on arrays.
*/

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Example 1: Filter for even numbers
const evenNumbers$ = numbers$.pipe(
  filter(num => num % 2 === 0) // The predicate function: returns true for even numbers
);

evenNumbers$.subscribe({
  next: (val) => {
    console.log(`Even number: ${val}`);
  },
  error: (error) => {
    console.log('Filter error:', error);
  },
  complete: () => {
    console.log('Even numbers stream completed.');
  }
});

// Example 2: Filter for numbers greater than 5
const greaterThanFive$ = numbers$.pipe(
  filter(num => num > 5) // The predicate function: returns true for numbers greater than 5
);

greaterThanFive$.subscribe({
  next: (val) => {
    console.log(`Number greater than 5: ${val}`);
  },
  error: (error) => {
    console.log('Filter error:', error);
  },
  complete: () => {
    console.log('Numbers greater than 5 stream completed.');
  }
});
