/** Array.some & Array.every() */
const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 1];
let arraySome = array.some((e) => e > 2);
console.log(arraySome); //true

let arrayEvery = array.every((e) => e > 2);
console.log(arrayEvery); //false
