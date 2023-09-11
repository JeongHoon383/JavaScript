/** 객체 속성에 대한 식별자 */
const office = {
  "Tom" : "CEO",
  "Mark" : "CTO",
  "Mark" : "CIO",
};
for(person in office){
  console.log(person);
}

const office2 = {
  [Symbol("Tom")] : "CEO",
  [Symbol("Mark")] : "CTO",
  [Symbol("Mark")] : "CIO",
};
for(person in office2){
  console.log(person);
}