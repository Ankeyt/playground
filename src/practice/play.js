import { from, of, map } from 'rxjs';
// const sum = new Sum(10, 5).add();
// console.log('===', sum);


// craete an observable from an array , generators,  promise or observable
// const example2$ = from(Promise.resolve(1)); // create an observable from a Promise

// example$.subscribe(
//   (val) => {console.log(val);},
//   (error)=>{
//     console.log('error', error);
//   },
//   () => {
//     console.log('completed');
//   }
// ); DEPRECATED
//example2$.subscribe(val => console.log(val));

/* from vs of

use FROM when whatevenr you are working with is an iterable or asynchronous or kind of like an observable
Array, Promise, Objects with a subscribe method


use OF when you are working with a static value or a list of static values as a single emission.
Primitives: string, number, boolean, null, undefined
Objects

*/

const example$ = from([1, 2, 3, 4, 5]); 
example$.subscribe({
  next: (val) => {
    console.log(val);
  },
  error: (error)=>{
    console.log('error', error);
  },
  complete: () => {
    console.log('FROM completed');
  }
}); // use the new way to subscribe


const of$ = of([1, 2, 3, 4, 5]); // create an observable from a list of static values
of$.subscribe({
  next: (val) => {
    console.log(val);
  },
  error: (error)=>{
    console.log('error', error);
  },
  complete: () => {
    console.log('OF completed');
  }
}); // use the new way to subscribe


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