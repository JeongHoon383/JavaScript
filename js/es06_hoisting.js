
print();
console.log(b); //
console.log(a);
//a, b의 에러내용이 다름, b는 선언조차 안돼서 찾을 수 없음. a는 선언은 되어 있으나 자바스크립트 특징상 인터프리터 방식으로 인해 log 함수 먼저 실행이 되어 a의 값이 출력되지는 않음, 그러나 선언된 변수 a는 메모리에 저장이됨

function print(){
  console.log('hello js~!');
} //호이스팅 작업으로 인해 에러가 발생하지 않음.

let a = 10;