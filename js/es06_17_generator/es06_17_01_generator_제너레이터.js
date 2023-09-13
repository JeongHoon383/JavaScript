/** 제너레이터 */
function* fruitList(){
  yield 'Banana';  //반환할 컨텐츠 앞에 yield 정의
  yield 'Apple';
  yield 'Orange';
}

const fruits = fruitList();

//제너레이터
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

//iteratato protocol, iterable protocol 포함하여 생성된 내장객체는
//순환참조가 가능하다. spread 연산자, for..of, 사용할 수 있다. 

const strArray = 'hello, javascript!!'
for(str of strArray){
  console.log(str);
}