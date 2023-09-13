/** 배열에서 중복 제거하기 */
const myArray = ['복숭아','사과','바나나','오렌지','복숭아'];
//1. Array를 Set으로 변환
const set = new Set(myArray);
console.log(set); //Set(4) { '복숭아', '사과', '바나나', '오렌지' }

//2. Set을 Array로 변환
const myArray2 = Array.from(set);
console.log(myArray2); //[ '복숭아', '사과', '바나나', '오렌지' ]

//1, 2 단계를 한 줄 코드로 작성 
const myArray3 = Array.from(new Set(myArray));
console.log(myArray3); //[ '복숭아', '사과', '바나나', '오렌지' ]