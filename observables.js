
class Observable {
    constructor(blueprint) {
        this.observable = blueprint
    }

    subscribe(observer){
        return this.observable(observer)
    }
}

const obs = new Observable(function observable(observer) {
    // producer 
    let counter = 1;
    const producer = setInterval(()=>{
            observer.next(counter++)
        }, 1000)
    
        // unsubscription
        return ()=>{
            clearInterval(producer)
        }
    })

    const unsub = obs.subscribe({
        next:(data) => console.log('obs1', data),
        error:(err) => console.log('error', err),
        complete:() => console.log('done'),
    })



// function observable(observer) {
// // producer 
// let counter = 1;
// const producer = setInterval(()=>{
//         observer.next(counter++)
//     }, 1000)

//     // unsubscription
//     return ()=>{
//         clearInterval(producer)
//     }
// }


// const closeFn = observable({
//     next:(data) => console.log(data),
//     error:(err) => console.log('error', err),
//     complete:() => console.log('done'),
// })

setTimeout(()=>{
    unsub()
}, 5000)
