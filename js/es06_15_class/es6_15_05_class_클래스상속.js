/** 클래스 상속 */
class Person{

    //생성자
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old`);
    }
}//class Person

//Adult 클래스 : Person 자식 클래스
class Adult extends Person{
    constructor(name, age, work){
        super(name, age);  //Person의 생성자 호출
        this.work = work;
    }
}

const alberto = new Adult("Alberto", 30, "developer");
console.log(alberto.age);  //30
console.log(alberto.work);  //developer
alberto.greet();
