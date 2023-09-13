/** Promise.all()과 Promise.race() */
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first value');
});

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 1000, 'second value');
});

Promise
    .race([promise1, promise2])
    .then(function(value){
         console.log(value);
    });

/*
Promise
    .all([promise1, promise2])
    .then(data => {
         const[promise1data, promise2data] = data;
         console.log(promise1data, promise2data);
    })
    .catch(err => {
         console.log(err);
    }); 
*/

/*
promise1.then(data => {
    console.log(data);
}); //0.5초 후 first value 출력

promise2.then(data => {
    console.log(data);
}); //1초 후 second value 출력
*/
