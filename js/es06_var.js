person = '홍길동' // 자동으로 var 스코프 할당됨
var person = '홍길순'
console.log(person);

var fruit = 'apple' //전역
{
  var fruit = 'orange'; // 로컬 변수 적용 안됨
  console.log(fruit);
}
console.log(fruit);

var test = 'test';
function varTest(){
  var test = 'test2';
  console.log(test); // 함수는 로컬 적용됨 
}
console.log(test); // test