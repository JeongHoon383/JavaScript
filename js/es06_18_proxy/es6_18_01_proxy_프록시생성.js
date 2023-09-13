/** 프록시 생성 */
//원본 객체
const dog = {breed:"German Shephard", age:5};

//프록시 객체
const dogProxy = new Proxy(dog, {
     get(target, breed){
          return target[breed].toUpperCase();
     },
     set(target, breed, value){
          console.log("changing breed to ...");
          target[breed] = value;
     },
});

console.log(dogProxy.breed);
console.log(dogProxy.breed="Labrador");
console.log(dogProxy.breed);
