/** Getter & Setter : 프록시 사용 안함 */
const dog = {
     _name : "pup",
     _age : 7,

     get name(){
          console.log(this._name);
     },
     get age(){
          console.log(this._age);
     },
     set name(newName){
          this._name = newName;
          console.log(this._name);
     },
     set age(newAge){
          this._age = newAge;
          console.log(this._age);
     },
};

dog.name;      //pup
dog.age;       //7
dog.breed;     //출력안됨 : undefined
dog.name = "Max";  //Max
dog.age = 8;       //8