/** 프로미스 체이닝 */
const myPromise = new Promise((resolve, reject)=>{
    resolve();
});

myPromise
   .then(data => {
        throw new Error("ooops");
        console.log("first value");
   })
   .catch(() => {
        console.log("catched an error");
   })
   .then(data => {
        console.log("second value");
   });

