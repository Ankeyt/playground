import { from, map } from 'rxjs';

/*
  Pipeable Operators: map

  Operators are functions that take an Observable as input and return another Observable.
  They are used with the `.pipe()` method of an Observable.
  The `map` operator transforms each value emitted by the source Observable.
  It's similar to the `map` method on arrays.
*/
const mappedExample$ = from([1, 2, 3, 4, 5]).pipe(
  // The map operator takes a projection function as an argument.
  // This function is applied to each value emitted by the source observable.
  // In this case, we're multiplying each number by 10.
  map(val => val * 10)
);

mappedExample$.subscribe({
  next: (val) => {
    console.log(`Mapped value: ${val}`);
  },
  error: (error)=>{
    console.log('Mapped error', error);
  },
  complete: () => {
    console.log('Mapped example completed');
  }
});