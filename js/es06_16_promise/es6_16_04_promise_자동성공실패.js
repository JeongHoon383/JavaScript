/** Promise.resolve(), Promise.reject() */
Promise.resolve('Success').then(function(value) {
    console.log('Success~');  //Success
}, function(value){
    console.log('failed');
});

Promise.reject(new Error('failed!!')).then(function(){
    //not called
}, function(error){
    console.log(error);
    //Error : fail
});
