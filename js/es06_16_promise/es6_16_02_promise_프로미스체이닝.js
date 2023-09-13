/** 프로미스 체이닝 */
const myPromise = new Promise((resolve, reject)=>{
    resolve();
});

myPromise
    .then(data => {
        return "working...";  //새로운 값 반환
    })
    .then(data => {
        console.log(data); //이전 프로미스에서 받은 값 출력
        throw 'failed!!';
    })
    .catch(err => {
        console.error(err); //프로미스 수행 중 발생한 오류받아서 출력
        //failed!
    });

