/** 프록시 활용 : 데이터 검증 */
const validateAge = {
     set :  function(object, property, value){
          if(property === 'age'){
               if(value <18){
                    throw new Error('you are too young!!');
               }else{  //기본 동작
                    console.log(`you are age is ${value}`);
                    object[property] = value;
                    return true;
               }
          }
     }
};

const user = new Proxy({}, validateAge);
//user.age = 17;
user.age = 21;
