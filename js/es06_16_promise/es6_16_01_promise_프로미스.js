/** 프로미스 : resolve & reject 함수 호출 */
const myPromise = new Promise((resolve, reject)=>{ 
  // setTimeout(()=>{
  //     resolve("The value we get from the promise");
  // }, 2000);

  setTimeout(()=>{
      reject(new Error("This is our error!!"));
  }, 2000);
  
});

myPromise
  .then(data => {
          console.log(data);
  })
  .catch(err => {
          console.log(err);
  });

