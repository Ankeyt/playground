import { Observable } from 'rxjs';

const pr = new Promise((resolve, reject) => {
  console.log('Promise started');

  setTimeout(() => {
    resolve('Promise resolved');
  }, 2000);
});

const obs = new Observable((observer) => {
  console.log('Observable started');

  setTimeout(() => { 
    console.log('Observable next');
    observer.next('Observable next');
  }, 2000);
});
setTimeout(() => {
  pr.then((value) => {
    console.log(value);
  });
}, 5000);
setTimeout(() => {
  obs.subscribe({
    next: (value) => console.log(value),
    error: (err) => console.error(err),
    complete: () => console.log('Observable complete'),
  });
}, 5000);
