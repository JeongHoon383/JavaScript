/** 클래스 생성 */
class Person{
  //생성자
  constructor(name, age){
      this.name = name;
      this.age = age;
  }

  //greet 함수
  greet(){
      console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
  }

  //farewell 함수
  farewell(){
      console.log("goodbye friend");
  }
}

const alberto = new Person("Alberto", 30);
alberto.greet();
alberto.farewell();

