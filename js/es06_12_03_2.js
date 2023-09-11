/** 함수와 스프레드 연산자 */
const name = ['Alberto','Montalesi'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name);  //Hello~ Alberto Montalesi

//지정된 인수보다 더 많은 값을 제공하면 어떻게 될까?
const name2 = ['Jon','Paul','Jones'];
function greet(first, last){
    console.log(`Hello~ ${first} ${last}`);
}

greet(...name2);  //Hello~ Jon Paul