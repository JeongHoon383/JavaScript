/** TDZ(Temporal Dead Zone) */

var i = "I am a var";
console.log(i);


let j = "I am a let"; //ReferenceError: Cannot access 'j' before initialization
console.log(j);