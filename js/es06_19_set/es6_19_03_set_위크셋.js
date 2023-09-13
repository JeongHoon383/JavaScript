/** 위크셋(weakSet) */
let dad = {name : "Daddy", age : 50};
let mom = {name : "Mummy", age : 45};

const family = new WeakSet([dad, mom]);
console.log(family.has(dad));
for(const person of family){
    console.log(person);  //에러발생
}

