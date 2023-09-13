/** 세트(Set) */
const family = new Set();     //세트 생성
family.add("Dad");            //세트에 값 추가
console.log(family);     //Set(1) { 'Dad' }

family.add("Mom");
console.log(family);     //Set(2) { 'Dad', 'Mom' }

family.add("Son");
console.log(family);     //Set(3) { 'Dad', 'Mom', 'Son' }

family.add("Dad");       //세트는 고유한 값만 가질 수 있기 때문에 추가안됨,에러는안남
console.log(family);     //Set(3) { 'Dad', 'Mom', 'Son' }


//Set에 대한 루프
console.log('-----------------> Set에 대한 루프');
const iterator = family.values();
console.log(iterator.next());
console.log(iterator.next());

for(const person of family){
     console.log(person);
}


//Set 메소드
console.log('-----------------> Set method');
console.log(family.size);  //3
console.log(family.keys()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
console.log(family.entries()); //[Set Entries] { [ 'Dad', 'Dad' ], [ 'Mom', 'Mom' ], [ 'Son', 'Son' ] }
console.log(family.values()); //[Set Iterator] { 'Dad', 'Mom', 'Son' }
console.log(family); //Set(3) { 'Dad', 'Mom', 'Son' }
family.clear(); 
console.log(family); //Set(0) {}

