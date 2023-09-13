/** Getter & Setter : 프록시 사용 */
const dog = {
     name : "pup",
     age : 7,
};

const handler = {
     get : (target, property) => {
          property in target ? 
           console.log(target[property]):console.log('property not found!!');
     },
     set : (target, property, value) => {
          target[property] = value;
          console.log(target[property]); 
     },
};
    
const dogProxy = new Proxy(dog, handler);
dogProxy.name;      //pup
dogProxy.age;       //7
dogProxy.breed;     //property not found!!
dogProxy.name = "Max";  //Max
dogProxy.age = 8;       //8