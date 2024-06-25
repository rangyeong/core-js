/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let total = 0;
// rest parameter (나머지 파라미터)
let calcAllMoney = (...args) => {
  // console.log(args)
  /*   
  * for문
  for(let i = 0; i<args.length; i++){
        
       total += args[i]; 
    }
       return total; 


       */
  /* 
      * for of
      for(value of args){
        // console.log(value)

       total += value; 
      }
       return total;  */
  /* 
    //    * forEach
       args.forEach(function(value){
        total += value; 
       })
       // args.forEach(value => total += value)
       return total;
        */
  /* 
    * reduce
    return args.reduce((acc,cur)=>{
            return acc + cur 
        },0) 
        // return args.reduce((acc, cur) => acc + cur , 0)
    */
};

const result = calcAllMoney(1000, 5000, 4500, 13000);

console.log(result);

// 화살표 함수와 this

function create(nickName, number) {
  return { name: nickName, age: number };
}
console.log(create('tiger', 40));

// 자바스크립트의 함수는 양면의 얼굴  => 일반 함수(normal function) / 생성자 함수(constructor function) 

// 생성자(틀)로만 사용하세요
/* 
function Button(text) {
  return text;
}
*/

// * 생성자 함수를 생성하는 class 명령어
class Button3 {}

new Button3();

// const a = Button('more')
// const b = new Button('more')




// const str = new String('aaa');


// new Number()
// new Object()
// new Array()


// 일반함수
// constructor 내장 (concise method는 예외)
// this : 나를 호출한 대상을 this
// 객체의 메서드로 사용이 많이 됨. => this를 찾기 위해.(그 중에서도 concise method를 쓰면 좋음)

// 화살표 함수
// constructor 비내장
// this : 바인딩 하지 않음. -> 상위 컨텍스트에서 찾음.
/* 
const user = {
    name: '이름'
    sayHi: function(){
        console.log(this); // user가 나옴
    },
    sayHi2:()=>{
        console.log(this) // window가 나옴(this를 찾지 못함.)
    }
    sayHi3(){
        console.log(this) // user가 나옴. construcor를 내장x this를 찾을 수 있지만 가벼움.
    }
}
 */

const user = {
  name: '박새롬',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    // const sayHi = function () {
    //   console.log(this);
    // };

    // sayHi();
    // * forEach함수를 써서 this를 뽑으려면 콜백함수를 화살표함수로 쓰면 된다.
    let wtf;
    [30, 60, 80].forEach((i) => {
       wtf = this
    });
    return wtf
  },
};

// this.grades.forEach = () => {
//   console.log(this);
// };

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// 반복문을 써서 화살표 함수를 써서 함수에 매개변수를 넣고 호출했을 때 거듭제곱 계산이 잘 되게 만들기
/* 
let pow = (number, powerCount) => {
//   return number ** powerCount;
    let result = 1;
    for(let i = 0; i < powerCount; i++ ){
        // return result *= number
         result *= number;
    }
    return result
};
console.log(pow(2,3))
 */
/* 
// 표현식
const pow = (numeric, powerCount) => {
    return Array(powerCount).fill(null).reduce((acc,cur)=> {
        return acc *= numeric
    },1)
}
 */
// * 화살표함수로 간결하게 만들기
const pow = (num, power) =>  Array(power).fill(null).reduce(acc => acc *= num, 1)

console.log(pow(2, 3));
/* 
const pow = (numeric, powerCount) => {
    return Array(powerCount)
      .fill(numeric)
      .reduce((acc, cur) => {
        return (acc *= cur);
      }, 1);
}
 */

// repeat(text: string, repeatCount: number): string;
/* 
let repeat = (text, repeatCount) => {
    let result ='';
    for(let i = 0; i < repeatCount; i++ ){
        result += text
    }
    return result;
};
 */
const repeat = (text, repeatCount) => {
    return Array(repeatCount).fill(null).reduce((acc)=> acc + text,'')
}




repeat('안녕',3)


