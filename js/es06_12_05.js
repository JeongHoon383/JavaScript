/** 레스트 매개변수 */
const runners = ['Tom','Paul','Mark','Luke'];
const [first, second, ...losers] = runners; //first, second, losers 새로운 변수명 만들어줌

console.log(...losers);