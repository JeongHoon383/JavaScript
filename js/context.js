function funcTest() {
  // 변수 x는 funcTest 함수 어디서든 사용 가능합니다.
  var x = 0; 
  
  if(x === 0) {
    // 변수 y는 블록( { } )으로 감싸져있지만, funcTest 함수 어디서든 사용 가능합니다.
    var y = 10; 
    
    // 변수 z는 for문안에 있지만, funcTest 함수 어디서든 사용 가능합니다.
    for (var z = 0; z < y; z++) {
      console.log(z);
    }
  }
  
  // 블록으로 감싸져있는 변수 y와 z를 출력합니다.
  console.log('y : ' + y); 
  console.log('z : ' + z);
}