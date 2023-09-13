/** 제너레이터를 사용하여 배열 반복하기 */
const fruitList = ["바나나", "사과", "오렌지", "멜론", "복숭아"];

function* loop(arr) {
  for (const item of arr) {
    yield `I like to eat ${item}`;
  }
}

const fruitGenerator = loop(fruitList);
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next());
console.log(fruitGenerator.next().value);
