/** 맵(Map) */
const family = new Map();
family.set("Dad", 40);
family.set("Mom", 50);
family.set("Son", 20);

console.log(family);
console.log(family.size);
console.log('----------->> for of');
for(const [key,value] of family){
    console.log(key, value);
}
console.log('----------->> forEach');
family.forEach(element => {
    console.log(element);
});


