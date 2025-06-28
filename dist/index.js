"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const pr = new Promise((resolve, reject) => {
    console.log("Promise started");
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});
const obs = new rxjs_1.Observable((observer) => {
    console.log("Observable started");
    setTimeout(() => {
        console.log("Observable next");
        observer.next("Observable next");
    }, 2000);
});
setTimeout(() => {
    pr.then((value) => {
        console.log(value);
    });
}, 5000);
setTimeout(() => {
    obs.subscribe();
}, 5000);
