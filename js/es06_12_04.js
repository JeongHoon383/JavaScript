/** 객체 리터럴과 스프레드 */
let person = {
    name : 'Alberto',
    surname : 'Montalesi',
    age : 30,
};

let clone = {...person};
console.log(clone);

//person 속성 추가
person.addr = 'gangnam'; //person 객체에 addr property 추가 property = key value 

console.log(person);
console.log(clone);