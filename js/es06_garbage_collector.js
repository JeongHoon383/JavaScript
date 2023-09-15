let apple = {
  name : 'apple'
}

let orange = apple;
apple = null;
orange = null;

console.log(orange);

//gc의 대상은? --> 객체 name : 'apple'